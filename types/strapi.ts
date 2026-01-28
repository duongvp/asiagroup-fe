// src/types/strapi.ts

// Cấu trúc chung của 1 phản hồi từ Strapi
export interface StrapiResponse<T> {
    data: T;
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

// Định nghĩa chung cho các Block nội dung (Rich Text)
export interface RootNode {
    type: string;
    children: any[];
    [key: string]: any;
}