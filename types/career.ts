// src/types/career.ts

export interface IDepartment {
    id: number;
    documentId: string;
    name: string;
    slug: string;
}

export interface ICareer {
    id: number;
    documentId: string; // Strapi v5 dùng documentId để định danh
    title: string;
    slug: string;
    location: string;

    // Enum tương ứng với các giá trị bạn đã nhập trong Strapi
    type: 'Full Time' | 'Part Time' | 'Contract' | 'Commission Based';

    // Nội dung Rich Text (Blocks) - Kiểu dữ liệu từ @strapi/blocks-react-renderer
    description: any[];
    responsibilities: any[];
    requirements: any[];

    // Quan hệ với bảng Department (Relation)
    // Lưu ý: Strapi v5 khi populate thường trả về object trực tiếp 
    // thay vì bọc trong { data: { attributes: ... } } như v4
    department?: IDepartment;

    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}