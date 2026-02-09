// src/services/api-client.ts
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

export const fetcher = async (url: string) => {
    const res = await fetch(`${API_URL}${url}`);
    if (!res.ok) throw new Error('An error occurred while fetching the data.');
    return res.json();
};

// Trong file api-client.ts của bạn
export const postFetcherFormData = async (url: string, { arg }: { arg: FormData }) => {
    const response = await fetch(`${API_URL}/${url}`, {
        method: 'POST',
        // Lưu ý: Không để headers Content-Type ở đây
        body: arg,
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Something went wrong');
    }

    return response.json();
};