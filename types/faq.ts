export interface IFaqCategory {
    id: number;
    documentId: string;
    title: string;
    slug: string;
    order: number;
}

export interface IFaqItem {
    id: number;
    documentId: string;
    question: string;
    answer: any; // Thường là Blocks (JSON) hoặc String tùy bạn cấu hình
    order: number;
    faq_category?: IFaqCategory;
}