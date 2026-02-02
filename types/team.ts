// src/types/team.ts
export interface ITeamMember {
    id: number;
    documentId: string; // Strapi v5 dùng documentId
    name: string;
    role: string;
    description?: string;
    order: number;
    avartar: {
        url: string;
        formats?: any;
    };
    social_links: Array<{
        id: number;
        platform: string;
        url: string;
        active: boolean;
    }>;
}