// src/services/project.service.ts
import useSWR from 'swr';
import { fetcher } from './api-client';
import { IProject } from '@/types/project'; // Import interface bạn đã tạo
import { StrapiResponse } from '@/types/strapi';

export const useProjects = (params: string = '?populate=*') => {
    // Truyền Interface vào useSWR để nó biết data trả về có cấu trúc gì
    const { data, error, isLoading } = useSWR<StrapiResponse<IProject[]>>(
        `/api/projects${params}`,
        fetcher
    );

    return {
        // Bây giờ 'projects' sẽ tự động hiểu là IProject[]
        projects: data?.data || [],
        meta: data?.meta,
        isLoading,
        isError: error
    };
};

export const useProjectDetail = (documentId: string) => {
    // Strapi v5 khuyến khích dùng documentId thay vì id hoặc slug nếu lấy 1 item cụ thể
    return useSWR<StrapiResponse<IProject>>(
        `/api/projects/${documentId}?populate=*`,
        fetcher
    );
};