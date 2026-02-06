'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, Sun, Moon, ChevronRight, Languages } from "lucide-react";
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
    const t = useTranslations('Header');
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
    const [isLangOpen, setIsLangOpen] = useState(false);

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'ja', name: '日本語' },
        { code: 'vi', name: 'Tiếng Việt' }
    ];

    const currentLang = languages.find(l => l.code === locale) || languages[0];

    const handleLangChange = (newLocale: string) => {
        const segments = pathname.split('/');
        segments[1] = newLocale;
        const newPath = segments.join('/');
        router.push(newPath);
        setIsLangOpen(false);
        setIsMobileMenuOpen(false);
    };

    // --- PHẦN THAY ĐỔI CHÍNH Ở ĐÂY ---
    const menuItems = [
        { name: t('home'), href: `/${locale}` },
        {
            name: t('solutions'),
            href: `/${locale}/solutions`,
            subMenu: [
                { name: t('residential'), href: `/${locale}/solutions/residential` },
                { name: t('commercial'), href: `/${locale}/solutions/commercial` },
                { name: t('installation_process'), href: `/${locale}/installation-process` },
                { name: t('maintenance'), href: `/${locale}/maintenance` },
            ]
        },
        { name: t('projects'), href: `/${locale}/projects` },
        {
            name: t('about'),
            href: `/${locale}/about-us`,
            subMenu: [
                { name: t('our_company'), href: `/${locale}/about-us` },
                { name: t('benefits'), href: `/${locale}/benefits` },
                { name: t('policies'), href: `/${locale}/policies` },
                { name: t('careers'), href: `/${locale}/careers` },
                { name: t('customers'), href: `/${locale}/customers` },
                { name: t('faq'), href: `/${locale}/faqs` },
            ]
        },
        { name: t('contact'), href: `/${locale}/contact` },
    ];
    // --------------------------------

    useEffect(() => {
        const isDark = document.documentElement.classList.contains('dark');
        setIsDarkMode(isDark);
    }, []);

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    return (
        <header className="sticky top-0 z-[100] w-full bg-white dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
            <div className="flex items-center justify-between px-6 py-4 max-w-[1280px] mx-auto">
                {/* LOGO */}
                <Link href={`/${locale}`} className="flex items-center shrink-0">
                    <Image
                        src="/asiagroup_solar.png"
                        alt="Asia Group Solar Logo"
                        width={200}
                        height={44}
                        className="h-auto w-auto"
                        priority
                    />
                </Link>

                {/* DESKTOP NAVIGATION */}
                <div className="hidden lg:flex items-center gap-6">
                    <nav className="flex items-center gap-1">
                        {menuItems.map((item) => (
                            <div key={item.name} className="relative group px-3 py-2">
                                <Link
                                    href={item.href}
                                    className="flex items-center gap-1 text-foreground text-sm font-medium hover:text-[#13ec13] transition-colors"
                                >
                                    {item.name}
                                    {item.subMenu && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
                                </Link>

                                {item.subMenu && (
                                    <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-2xl bg-white dark:bg-[#1a2e1a] rounded-xl p-2 border border-gray-100 dark:border-white/10 transform translate-y-2 group-hover:translate-y-0">
                                        {item.subMenu.map((sub) => (
                                            <Link
                                                key={sub.name}
                                                href={sub.href}
                                                className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-[#13ec13]/10 hover:text-[#13ec13] rounded-lg transition-colors"
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-white/10">
                        {/* Language Selector */}
                        <div className="relative">
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="flex items-center gap-1.5 p-2 text-sm font-bold text-foreground hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors"
                            >
                                <Languages size={18} className="text-[#13ec13]" />
                                <span className="uppercase">{currentLang.code}</span>
                            </button>
                            {isLangOpen && (
                                <div className="absolute top-full right-0 mt-2 w-36 bg-white dark:bg-[#1a2e1a] border border-gray-100 dark:border-white/10 rounded-xl shadow-2xl p-1.5 z-[110]">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => handleLangChange(lang.code)}
                                            className={`w-full text-left px-3 py-2 text-xs font-bold rounded-lg mb-0.5 last:mb-0 transition-colors ${currentLang.code === lang.code ? 'bg-[#13ec13] text-black' : 'hover:bg-gray-50 dark:hover:bg-white/5 text-foreground'}`}
                                        >
                                            {lang.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <button onClick={toggleDarkMode} className="p-2 text-foreground hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors">
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-green-400 transition-colors text-primary-foreground text-sm font-bold shadow-sm hover:shadow-md">
                            <span className="truncate"> {t('get_quote')}</span>
                        </button>
                    </div>
                </div>

                {/* MOBILE MENU BUTTON */}
                <div className="flex items-center gap-2 lg:hidden">
                    <button onClick={toggleDarkMode} className="p-2 text-foreground">
                        {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-foreground relative z-[110]"
                    >
                        {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU OVERLAY */}
            <div className={`
                lg:hidden fixed inset-0 bg-white dark:bg-[#0a0a0a] z-[105] transition-transform duration-500 ease-in-out
                ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>
                <div className="flex flex-col h-full p-8 pt-24">
                    <div className="flex gap-2 p-1.5 bg-gray-100 dark:bg-white/5 rounded-2xl mb-8">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleLangChange(lang.code)}
                                className={`flex-1 py-3 rounded-xl text-xs font-black transition-all ${currentLang.code === lang.code ? 'bg-[#13ec13] text-black shadow-md' : 'text-gray-500'}`}
                            >
                                {lang.name}
                            </button>
                        ))}
                    </div>

                    <nav className="flex-1 space-y-2 overflow-y-auto">
                        {menuItems.map((item) => (
                            <div key={item.name} className="border-b border-gray-100 dark:border-white/5 last:border-0">
                                <div className="flex items-center justify-between py-5">
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-3xl font-black text-foreground tracking-tighter"
                                    >
                                        {item.name}
                                    </Link>
                                    {item.subMenu && (
                                        <button
                                            onClick={() => setActiveSubMenu(activeSubMenu === item.name ? null : item.name)}
                                            className="p-3 bg-gray-50 dark:bg-white/5 rounded-2xl"
                                        >
                                            <ChevronDown size={24} className={`transition-transform duration-300 ${activeSubMenu === item.name ? 'rotate-180' : ''}`} />
                                        </button>
                                    )}
                                </div>
                                {item.subMenu && activeSubMenu === item.name && (
                                    <div className="flex flex-col gap-1 pb-6 pl-4 animate-in slide-in-from-top-2">
                                        {item.subMenu.map((sub) => (
                                            <Link
                                                key={sub.name}
                                                href={sub.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="flex items-center justify-between py-4 text-gray-600 dark:text-gray-400 font-bold"
                                            >
                                                {sub.name}
                                                <ChevronRight size={18} className="text-[#13ec13]" />
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="mt-10 mb-6">
                        <Link
                            href={`/${locale}/solar-quotes`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full h-16 bg-[#13ec13] text-[#102210] rounded-2xl flex items-center justify-center font-black text-xl shadow-2xl shadow-green-500/20 active:scale-95 transition-transform"
                        >
                            {t('get_quote').toUpperCase()}
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}