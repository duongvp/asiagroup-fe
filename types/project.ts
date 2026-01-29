import { RootNode } from "./strapi";

export interface IProject {
    id: number;
    documentId: string; // Strapi v5 dùng documentId
    title: string;
    slug: string;
    location: string;
    project_type: 'residential' | 'commercial' | 'industrial';
    description: RootNode[]; // Kiểu Blocks JSON
    system_size: string;
    estimated_savings: string;
    // Nếu có ảnh
    images?: {
        url: string;
        alternativeText: string;
    },
    gallery?: {
        id: number;
        url: string;
        alternativeText: string;
    }[],
    testimonial: {
        author_name: string;
        author_role: string;
        quote: string;
    };
    // Các trường bổ sung khác của bạn...
}