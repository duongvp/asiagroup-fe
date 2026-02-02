import useSWR from 'swr';
import { fetcher } from './api-client';
import { StrapiResponse } from '@/types/strapi';
import { IPolicy } from '@/types/policy';

/**
 * Hook lấy danh sách tất cả chính sách theo ngôn ngữ
 * @param locale 'en' | 'vi'
 * @param extraParams Các tham số lọc hoặc sort bổ sung
 */
export const usePolicies = (locale: string = 'en', extraParams: string = '') => {
    // Strapi v5 sử dụng ?locale= để lấy bản dịch
    // populate=highlights để lấy dữ liệu từ component repeatable
    const { data, error, isLoading } = useSWR<StrapiResponse<IPolicy[]>>(
        `/api/policies?locale=${locale}&populate=highlights&sort=id:asc${extraParams}`,
        fetcher
    );

    return {
        policies: data?.data || [],
        meta: data?.meta,
        isLoading,
        isError: error
    };
};

