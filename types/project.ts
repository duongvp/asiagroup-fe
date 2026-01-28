import { RootNode } from "./strapi";

export interface IProject {
    id: number;
    documentId: string; // Strapi v5 dùng documentId
    title: string;
    slug: string;
    location: string;
    project_type: 'residential' | 'commercial' | 'industrial';
    description: RootNode[]; // Kiểu Blocks JSON
    systemSize: string;
    savings: string;
    // Nếu có ảnh
    image?: {
        url: string;
        alternativeText: string;
    };
    // Các trường bổ sung khác của bạn...
}