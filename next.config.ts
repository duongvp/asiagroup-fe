import createNextIntlPlugin from 'next-intl/plugin';

// Trỏ trực tiếp đến file request vừa đổi tên
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'googleusercontent.com', 'lh3.googleusercontent.com'],
  },
};

export default withNextIntl(nextConfig);