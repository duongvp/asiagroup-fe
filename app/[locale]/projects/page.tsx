'use client';
import { useState } from 'react';
import Head from 'next/head';
import { ArrowRight, Banknote, Calendar, ChevronDown, ChevronRight, CircleCheck, Cloud, MapPin, Smile, Sun, Verified, Zap } from 'lucide-react';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { useProjects } from '@/services/project.service';
import Image from 'next/image';
import { getStrapiImageUrl } from '@/helper/strapi-convert-url';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';


export default function SolarTechPortfolio() {
    const t = useTranslations('Projects');
    const [activeFilter, setActiveFilter] = useState('all');
    const locale = useLocale();

    const { projects: projectsDB, isLoading, isError } = useProjects(locale);


    // if (isLoading) return <div>Loading...</div>;
    // if (isError) return <div>Error</div>;

    const stats = [
        {
            icon: <CircleCheck size={24} />,
            label: t('Stats.completed'),
            value: "500+"
        },
        {
            icon: <Zap size={24} />,
            label: t('Stats.energy'),
            value: "12GWh"
        },
        {
            icon: <Smile size={24} />,
            label: t('Stats.clients'),
            value: "98%"
        },
        {
            icon: <Cloud size={24} />,
            label: t('Stats.offset'),
            value: "5k Tons"
        }
    ];

    const filters = [
        { id: 'all', label: t('Filters.all') },
        { id: 'residential', label: t('Filters.residential') },
        { id: 'commercial', label: t('Filters.commercial') },
        { id: 'industrial', label: t('Filters.industrial') }
    ];

    return (
        <>
            <Head>
                <title>SolarTech - {t('Grid.title')}</title>
                <meta name="description" content={t('Hero.subtitle')} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <div className="bg-background-light dark:bg-background-dark text-accent-blue dark:text-white font-display overflow-x-hidden">

                {/* HeroSection - FIXED LAYOUT */}
                <section className="w-full relative">
                    <div className="relative w-full min-h-[480px] bg-cover bg-center flex items-center justify-center p-8" style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDT6dCURsipIAk2yUjlZgzyCupYvJ0IuMsFEiZ3_BG-c_TqN-5LO_rO5SL7qKINvU85jwNNeuBTIIKhVMF-hq56zreY1RMTNsM3craI8w61tWBHPFmDjPO3EN4B_Y4dXmNw5xchk6ijcxCcKew8b3hN04WP_icKr5gqe1cv6oS0tYY0yFTltOtrrr_lAHAc8GnoG80Yvn1JpKGvw2kzrmj4dSQNGJd128Y5yKla2tioO6te3DlLg5nkISwUgMUeHLA7gfAQLLxAe-k')`
                    }}>
                        <div className="relative z-10 max-w-[800px] text-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6">
                                <Verified className="text-primary" size={20} />
                                <span className="text-xs font-bold uppercase tracking-wide">{t('Hero.trusted')}</span>
                            </div>

                            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight mb-6 whitespace-pre-line">
                                {t('Hero.title')}
                            </h1>

                            <p className="text-gray-200 text-lg mb-10 max-w-[600px] mx-auto">
                                {t('Hero.subtitle')}
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center">
                                <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary text-[#111811] text-base font-bold hover:bg-green-400 hover:scale-105 transition-all shadow-lg shadow-green-900/20 duration-300">
                                    {t('Hero.btnResidential')}
                                </button>
                                <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-white/90 backdrop-blur-sm text-[#111811] text-base font-bold hover:bg-white hover:scale-105 transition-all duration-300">
                                    {t('Hero.btnCommercial')}
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section - FIXED LAYOUT */}
                <section className="w-full bg-white dark:bg-[#162e16] border-b border-[#f0f4f0] dark:border-[#2a3c2a]">
                    <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex flex-col gap-2 p-6 rounded-xl bg-background-light dark:bg-[#1f3a1f] border border-[#dbe6db] dark:border-[#2a4e2a] hover:border-primary/50 transition-colors group">
                                    <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2 group-hover:scale-110 transition-transform">
                                        {stat.icon}
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">{stat.label}</p>
                                    <p className="text-[#111811] dark:text-white text-3xl font-bold leading-tight">{stat.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Main Projects Grid - FIXED LAYOUT */}
                <section className="w-full py-12">
                    <div className="max-w-[1200px] mx-auto px-4 md:px-10">
                        {/* Section Header & Filters */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                            <div>
                                <h2 className="text-[#111811] dark:text-white text-3xl font-bold leading-tight">{t('Grid.title')}</h2>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">{t('Grid.subtitle')}</p>
                            </div>

                            <div className="flex gap-2 flex-wrap">
                                {filters.map((filter) => (
                                    <button
                                        key={filter.id}
                                        onClick={() => setActiveFilter(filter.id)}
                                        className={`flex h-10 items-center justify-center rounded-lg px-5 transition-colors ${activeFilter === filter.id
                                            ? 'bg-[#111811] text-white'
                                            : 'bg-[#f0f4f0] dark:bg-[#2a3c2a] hover:bg-gray-200 dark:hover:bg-[#354a35] text-[#111811] dark:text-gray-200'
                                            }`}
                                    >
                                        <span className="text-sm font-medium">{filter.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projectsDB.map((project) => (
                                <div key={project.id} className="flex flex-col rounded-xl bg-white dark:bg-[#1a2e1a] border border-[#f0f4f0] dark:border-[#2a3c2a] overflow-hidden group hover:shadow-xl transition-all hover:-translate-y-1">
                                    <Link href={`/projects/${project.slug}`} aria-label={project.title}>
                                        <div className="relative h-60 w-full overflow-hidden">
                                            <div
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                            // style={{ backgroundImage: `url('${project.images.url}')` }}
                                            >
                                                {project.images && (
                                                    <Image
                                                        unoptimized
                                                        src={getStrapiImageUrl(project.images.url)}
                                                        alt={project.title}
                                                        fill
                                                        sizes="100vw"
                                                        className="object-cover"
                                                    />
                                                )}

                                            </div>
                                            <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#111811] dark:text-white flex items-center gap-1">
                                                {/* <span className={`material-symbols-outlined text-sm ${project.typeColor}`}>{project.typeIcon}</span>     */}
                                                {/* {project.type.charAt(0).toUpperCase() + project.type.slice(1)} */}
                                            </div>
                                        </div>

                                        <div className="p-6 flex flex-col flex-1  min-h-[234.5px]">
                                            <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm mb-2">
                                                <MapPin size={16} />
                                                <span>{project.location}</span>
                                            </div>

                                            <h3 className="text-xl font-bold text-[#111811] dark:text-white mb-2 group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h3>

                                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 line-clamp-2">
                                                {
                                                    project.description ? (
                                                        <BlocksRenderer
                                                            content={project.description as any}
                                                        />
                                                    ) : (
                                                        // Có thể để trống hoặc một khoảng trắng không nhìn thấy
                                                        <div className="invisible">No description available</div>
                                                    )
                                                }

                                            </p>

                                            <div className="mt-auto pt-4 border-t border-gray-100 dark:border-[#2a3c2a] flex justify-between items-center">
                                                <div className="flex gap-4">
                                                    <div className="flex flex-col">
                                                        <span className="text-xs text-gray-500 font-medium uppercase">{t('Grid.system')}</span>
                                                        <span className="text-sm font-bold text-[#111811] dark:text-white">{project.system_size}</span>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-xs text-gray-500 font-medium uppercase">{t('Grid.savings')}</span>
                                                        <span className="text-sm font-bold text-primary">{project.estimated_savings}</span>
                                                    </div>
                                                </div>

                                                <button className="size-8 rounded-full bg-[#f0f4f0] dark:bg-[#2a3c2a] flex items-center justify-center text-[#111811] dark:text-white group-hover:bg-primary transition-colors">
                                                    <ArrowRight size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {/* Pagination/More */}
                        <div className="flex justify-center mt-12">
                            <button className="flex items-center gap-2 text-sm font-bold text-[#111811] dark:text-white border border-[#dbe6db] dark:border-[#2a4e2a] rounded-lg px-6 py-3 hover:bg-[#f0f4f0] dark:hover:bg-[#2a3c2a] transition-colors">
                                {t('Grid.loadMore')} <ChevronDown size={18} />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Case Study Section - FIXED LAYOUT */}
                <section className="w-full py-16 bg-[#111811] text-white overflow-hidden relative">
                    {/* Decorative gradient orb */}
                    <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px]"></div>

                    <div className="max-w-[1200px] mx-auto px-4 md:px-10 relative z-10">
                        <div className="flex flex-col lg:flex-row gap-12 items-center">
                            <div className="w-full lg:w-1/2">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                    <div
                                        className="w-full h-80 lg:h-96 bg-cover bg-center"
                                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="flex gap-4 text-sm font-medium text-white/90">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={16} />
                                                {t('CaseStudy.timeline')}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Banknote size={16} />
                                                {t('CaseStudy.roi')}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                                <div>
                                    <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">{t('CaseStudy.badge')}</span>
                                    <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{t('CaseStudy.title')}</h2>
                                    <p className="text-gray-400 leading-relaxed mb-6">
                                        {t('CaseStudy.description')}
                                    </p>
                                </div>

                                <div className="pl-6 border-l-4 border-primary">
                                    <p className="text-lg italic font-medium text-white mb-4">
                                        {t('CaseStudy.quote')}
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-full bg-gray-600 overflow-hidden">
                                            <div
                                                className="w-full h-full bg-cover bg-center"
                                                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')` }}
                                            />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">{t('CaseStudy.author')}</p>
                                            <p className="text-xs text-gray-400">{t('CaseStudy.role')}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <button className="flex items-center gap-2 text-primary font-bold hover:underline">
                                        {t('CaseStudy.readMore')} <ChevronRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section - FIXED LAYOUT */}
                <section className="w-full py-20 bg-[#f0f4f0] dark:bg-[#162e16]">
                    <div className="max-w-[800px] mx-auto px-4 md:px-10 flex flex-col items-center text-center">
                        <Sun className='text-primary mb-4' size={32} />
                        <h2 className="text-[#111811] dark:text-white text-3xl md:text-4xl font-bold leading-tight mb-4">
                            {t('CTA.title')}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                            {t('CTA.subtitle')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary text-[#111811] text-base font-bold leading-normal hover:bg-green-400 shadow-lg shadow-green-400/20 transition-all">
                                {t('CTA.btnQuote')}
                            </button>
                            <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-white dark:bg-[#2a3c2a] text-[#111811] dark:text-white border border-[#dbe6db] dark:border-[#2a4e2a] text-base font-bold leading-normal hover:bg-gray-50 dark:hover:bg-[#354a35] transition-all">
                                {t('CTA.btnCall')}
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
