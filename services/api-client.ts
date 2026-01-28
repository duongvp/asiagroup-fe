// src/services/api-client.ts
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

export const fetcher = async (url: string) => {
    const res = await fetch(`${API_URL}${url}`);
    if (!res.ok) throw new Error('An error occurred while fetching the data.');
    return res.json();
};