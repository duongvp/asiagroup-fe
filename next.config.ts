// import createNextIntlPlugin from 'next-intl/plugin';

// // Trỏ trực tiếp đến file request vừa đổi tên
// const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['images.unsplash.com', 'googleusercontent.com', 'lh3.googleusercontent.com', 'localhost:1337'],

//   },
// };

// export default withNextIntl(nextConfig);


import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';
import type { RemotePattern } from 'next/dist/shared/lib/image-config';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      } satisfies RemotePattern,
    ],
    domains: ['images.unsplash.com', 'googleusercontent.com', 'lh3.googleusercontent.com']
  },
};

export default withNextIntl(nextConfig);
