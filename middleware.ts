import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['en', 'vi', 'jp'],
    defaultLocale: 'vi',
    localePrefix: 'always' // Ép URL luôn phải có /vi hoặc /en
});

export const config = {
    // Phải đảm bảo matcher này bắt được /vi
    matcher: ['/', '/(vi|en|jp)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};