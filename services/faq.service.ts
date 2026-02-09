import useSWR from 'swr';
import { fetcher } from './api-client';
import { StrapiResponse } from '@/types/strapi';
import { IFaqCategory, IFaqItem } from '@/types/faq';

/**
 * Lấy danh sách các danh mục FAQ để làm thanh Tab Filter
 */
export const useFaqCategories = (locale: string = 'en') => {
    const { data, error, isLoading } = useSWR<StrapiResponse<IFaqCategory[]>>(
        `/api/faq-categories?locale=${locale}&sort[0]=order:asc`,
        fetcher
    );

    return {
        categories: data?.data || [],
        isLoading,
        isError: error
    };
};

/**
 * Lấy danh sách các câu hỏi FAQ
 * @param locale Ngôn ngữ (en, vi, ja)
 * @param categorySlug Slug của danh mục để lọc (tùy chọn)
 * @param searchQuery Từ khóa tìm kiếm (tùy chọn)
 */
export const useFaqItems = (locale: string = 'en', categorySlug?: string, searchQuery?: string) => {
    // 1. Khởi tạo params cơ bản
    let params = `/api/faq-items?locale=${locale}&sort[0]=order:asc&populate=*`;

    // 2. Lọc theo Category nếu có
    if (categorySlug && categorySlug !== 'all') {
        params += `&filters[faq_category][slug][$eq]=${categorySlug}`;
    }

    // 3. Lọc theo tìm kiếm nếu có (Tìm trong trường question)
    if (searchQuery) {
        params += `&filters[question][$containsi]=${encodeURIComponent(searchQuery)}`;
    }

    const { data, error, isLoading } = useSWR<StrapiResponse<IFaqItem[]>>(
        params,
        fetcher
    );

    return {
        faqs: data?.data || [],
        meta: data?.meta,
        isLoading,
        isError: error
    };
};

