export interface IHighlight {
    id: number;
    title: string;
    description: string;
}

export interface IPolicy {
    id: number;
    documentId: string; // Strapi v5 dùng documentId
    title: string;
    slug: string;
    subtitle: string;
    iconname: string;
    lastupdated: string;
    content: any; // Kiểu dữ liệu của Blocks Rich Text
    highlights: IHighlight[];
}