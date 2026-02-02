// src/services/career.service.ts

import { StrapiResponse } from "@/types/strapi";
import { fetcher } from "./api-client";
import useSWR from "swr";
import { ICareer } from "@/types/career";

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

export { useCareers, useCareerDetail };