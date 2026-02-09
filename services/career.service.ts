// src/services/career.service.ts

import { StrapiResponse } from "@/types/strapi";
import { fetcher, postFetcherFormData } from "./api-client";
import useSWR from "swr";
import { ICareer } from "@/types/career";
import useSWRMutation from "swr/mutation";

const useCareers = (locale: string = 'vi') => {
    // Chúng ta chỉ định rõ populate department để lấy được name và slug của phòng ban
    const query = `?locale=${locale}&populate=department`;

    const { data, error, isLoading } = useSWR<StrapiResponse<ICareer[]>>(
        `/api/careers${query}`,
        fetcher
    );

    return {
        careers: data?.data || [],
        isLoading,
        isError: error
    };
};


const useCareerDetail = (slug: string, locale: string = 'vi') => {
    // Xây dựng query giống hệt URL bạn cung cấp
    // Thêm các trường nội dung (responsibilities, requirements...) để hiển thị chi tiết
    const query = new URLSearchParams({
        'populate': 'department',
        // 'populate[0]': 'responsibilities', // Lấy thêm các trường nội dung
        // 'populate[1]': 'requirements',
        // 'populate[2]': 'description',
        'filters[locale][$eq]': locale,
        'filters[slug][$eq]': slug,
    });

    const { data, error, isLoading } = useSWR<StrapiResponse<ICareer[]>>(
        slug ? `/api/careers?${query.toString()}` : null,
        fetcher
    );

    return {
        // Vì filter luôn trả về mảng [], ta lấy phần tử đầu tiên [0]
        career: data?.data && data.data.length > 0 ? data.data[0] : null,
        isLoading,
        isError: error
    };
};

const useSubmitApplication = () => {
    // Chúng ta dùng useSWRMutation để kích hoạt việc gửi dữ liệu khi người dùng nhấn nút
    const { trigger, isMutating, error } = useSWRMutation(
        'api/career-applications',
        postFetcherFormData
    );

    const submit = async (values: any, positionName: string = '') => {
        const formData = new FormData();

        // Chuẩn hóa dữ liệu theo format Strapi
        const data = {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            cover_letter: values.cover_letter || "",
            position: positionName,
        };

        formData.append('data', JSON.stringify(data));

        if (values.resume?.[0]) {
            formData.append('files', values.resume[0]);
        }

        // Gọi trigger để thực hiện request
        return await trigger(formData);
    };

    return {
        submit,
        isSubmitting: isMutating,
        error
    };
};

export { useCareers, useCareerDetail, useSubmitApplication };