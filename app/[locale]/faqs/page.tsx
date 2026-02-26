'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Search, ChevronDown, Headset, Zap } from 'lucide-react';
import { useFaqCategories, useFaqItems } from '@/services/faq.service';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export default function FAQPage() {
    const t = useTranslations('FAQ');
    const { locale } = useParams();

    // State để quản lý Filter và Search
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [tempSearch, setTempSearch] = useState(''); // Cho input search

    // Gọi Service lấy Categories (cho thanh Tabs)
    const { categories, isLoading: isCatLoading } = useFaqCategories(locale as string);

    // Gọi Service lấy FAQ Items (dựa trên category và search)
    const { faqs, isLoading: isFaqLoading } = useFaqItems(
        locale as string,
        activeCategory,
        searchTerm
    );

    // Hàm xử lý khi bấm nút Search
    const handleSearch = () => {
        setSearchTerm(tempSearch);
    };

    return (
        <main className="flex-grow flex flex-col items-center w-full bg-background-light dark:bg-background-dark">
            {/* Hero Section */}
            <section className="w-full px-4 py-10 md:px-10">
                <div
                    className="relative flex min-h-[400px] flex-col gap-6 overflow-hidden rounded-3xl bg-slate-900 px-6 py-16 text-center items-center justify-center shadow-2xl border border-white/10"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(16, 34, 16, 0.75), rgba(16, 34, 16, 0.85)), url("https://images.unsplash.com/photo-1509391366360-fe5bb65830bb?auto=format&fit=crop&w=1200&q=80")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="flex flex-col gap-4 max-w-3xl z-10">
                        <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight">
                            {t('Hero.title')}
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            {t('Hero.subtitle')}
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="w-full max-w-[550px] z-10 mt-8">
                        <form
                            onSubmit={(e) => { e.preventDefault(); handleSearch(); }}
                            className="flex w-full items-center rounded-2xl h-14 bg-white dark:bg-slate-800 shadow-2xl p-1 focus-within:ring-2 focus-within:ring-primary transition-all"
                        >
                            <div className="pl-4 pr-2 text-gray-400">
                                <Search size={20} />
                            </div>
                            <input
                                className="flex-1 bg-transparent border-none outline-0 focus:ring-0 text-slate-900 dark:text-white placeholder:text-gray-400 text-base"
                                placeholder={t('Hero.search')}
                                value={tempSearch}
                                onChange={(e) => setTempSearch(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="px-6 h-full bg-primary hover:bg-primary-dark text-black font-bold rounded-xl transition-colors"
                            >
                                {t('Hero.searchBtn')}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="w-full max-w-[1000px] px-4 py-10 flex flex-col gap-10">

                {/* Filters (Chips) - Dữ liệu từ Strapi */}
                <div className="flex gap-3 flex-wrap justify-center">
                    <button
                        onClick={() => setActiveCategory('all')}
                        className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${activeCategory === 'all'
                            ? 'bg-primary border-primary text-black'
                            : 'bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 hover:border-primary'
                            }`}
                    >
                        {t('Filters.all')}
                    </button>
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.slug)}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${activeCategory === cat.slug
                                ? 'bg-primary border-primary text-black'
                                : 'bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 hover:border-primary'
                                }`}
                        >
                            {cat.title}
                        </button>
                    ))}
                </div>

                {/* Accordion List - Dữ liệu động từ API */}
                <div className="flex flex-col gap-4">
                    {isFaqLoading ? (
                        <div className="text-center py-10 text-gray-400">Loading questions...</div>
                    ) : faqs.length > 0 ? (
                        faqs.map((faq, index) => (
                            <details
                                key={faq.id}
                                className="group rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 overflow-hidden transition-all duration-300 open:ring-1 open:ring-primary/30"
                                open={index === 0} // Mở câu đầu tiên
                            >
                                <summary className="flex cursor-pointer items-center justify-between gap-6 px-6 py-6 select-none hover:bg-gray-50 dark:hover:bg-white/5 transition-colors list-none">
                                    <h3 className="text-lg font-bold flex items-center gap-3 leading-tight">
                                        <span className="text-primary"><Zap size={18} fill="currentColor" /></span>
                                        {faq.question}
                                    </h3>
                                    <ChevronDown className="text-gray-400 group-open:rotate-180 group-open:text-primary transition-transform duration-300" size={24} />
                                </summary>
                                <div className="px-6 pb-6 pt-0 ml-7">
                                    <div className="h-px w-full bg-gray-100 dark:bg-white/10 mb-5" />
                                    <div className="text-gray-600 dark:text-gray-400 leading-relaxed prose dark:prose-invert max-w-none">
                                        <BlocksRenderer content={faq.answer} />
                                    </div>
                                </div>
                            </details>
                        ))
                    ) : (
                        <div className="text-center py-10 text-gray-500">
                            No questions found for "{searchTerm}"
                        </div>
                    )}
                </div>

                {/* CTA Block */}
                <div className="mt-10 mb-20">
                    <div className="rounded-[2.5rem] bg-gradient-to-br from-white to-gray-50 dark:from-white/10 dark:to-transparent border border-gray-100 dark:border-white/10 p-10 md:p-16 text-center relative overflow-hidden shadow-sm">
                        <div className="absolute top-0 right-0 size-40 bg-primary/10 rounded-full blur-[80px]" />

                        <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto relative z-10">
                            <div className="size-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary rotate-3">
                                <Headset size={36} />
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-black mb-4">{t('CTA.title')}</h2>
                                <p className="text-gray-500 dark:text-gray-400 text-lg">
                                    {t('CTA.subtitle')}
                                </p>
                            </div>
                            <button className="px-10 py-4 bg-primary hover:bg-primary-dark text-black text-lg font-black rounded-2xl shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95 duration-200">
                                {t('CTA.button')}
                            </button>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    );
}