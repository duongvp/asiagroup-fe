import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Khai báo danh sách các ngôn ngữ hỗ trợ
const locales = ['vi', 'en', 'jp'];

export default getRequestConfig(async ({ requestLocale }) => {
    // 1. Đợi requestLocale (vì trong Next 15 nó là một Promise)
    const locale = await requestLocale;

    // 2. Kiểm tra nếu locale không có hoặc không nằm trong danh sách hỗ trợ
    if (!locale || !locales.includes(locale as any)) {
        notFound();
    }

    return {
        // 3. Ép kiểu locale về string để thỏa mãn TypeScript
        locale: locale as string,
        messages: (await import(`../messages/${locale}.json`)).default
    };
});