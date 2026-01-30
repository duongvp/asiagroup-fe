// src/services/career.service.ts

import { StrapiResponse } from "@/types/strapi";
import { fetcher } from "./api-client";
import useSWR from "swr";
import { ICareer } from "@/types/career";

export const useCareers = (locale: string = 'vi') => {
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