// src/services/team.service.ts
import useSWR from 'swr';
import { fetcher } from './api-client';
import { ITeamMember } from '@/types/team';
import { StrapiResponse } from '@/types/strapi';

export const useTeamMembers = (locale: string = 'vi', extraParams: string = '') => {
    // Sắp xếp theo Order tăng dần: sort[0]=Order:asc
    const { data, error, isLoading } = useSWR<StrapiResponse<ITeamMember[]>>(
        `/api/team-members?locale=${locale}&sort[0]=order:asc&populate=*${extraParams}`,
        fetcher
    );

    return {
        members: data?.data || [],
        meta: data?.meta,
        isLoading,
        isError: error
    };
};