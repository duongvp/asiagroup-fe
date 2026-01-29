// src/services/project.service.ts
import useSWR from 'swr';
import { fetcher } from './api-client';
import { IProject } from '@/types/project'; // Import interface bạn đã tạo
import { StrapiResponse } from '@/types/strapi';

// src/services/project.service.ts

export const useProjects = (locale: string = 'en', extraParams: string = '') => {
    // Chúng ta sử dụng template string để nối locale vào query
    // Mặc định Strapi v5 dùng ?locale=vi thay vì filter nếu bạn muốn lấy theo ngôn ngữ
    const { data, error, isLoading } = useSWR<StrapiResponse<IProject[]>>(
        `/api/projects?locale=${locale}&populate=*${extraParams}`,
        fetcher
    );

    return {
        projects: data?.data || [],
        meta: data?.meta,
        isLoading,
        isError: error
    };
};

export const useProjectDetail = (slug: string, locale: string) => {
    const { data, error, isLoading } = useSWR<StrapiResponse<IProject[]>>(
        `/api/projects?filters[slug][$eq]=${slug}&locale=${locale}&populate=*`,
        fetcher
    );

    return {
        // Vì filter theo slug trả về mảng, ta lấy phần tử đầu tiên
        project: data?.data?.[0] || null,
        isLoading,
        isError: error
    };
};