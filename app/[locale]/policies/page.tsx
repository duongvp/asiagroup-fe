'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { Download, ChevronDown } from 'lucide-react';
import { usePolicies } from '@/services/policy.service';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

// Helper để render icon động từ string name
const DynamicIcon = ({ name, size = 20, className = "" }: { name: string, size?: number, className?: string }) => {
    const IconComponent = (LucideIcons as any)[name];
    if (!IconComponent) return <LucideIcons.FileText size={size} className={className} />;
    return <IconComponent size={size} className={className} />;
};

export default function PoliciesLegal({ locale = 'en' }: { locale?: string }) {
    const { policies, isLoading } = usePolicies(locale);
    const [activeSection, setActiveSection] = useState('warranty');

    if (isLoading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-[#111811] dark:text-white">
            {/* Hero Section - Giữ nguyên UI, có thể map thêm title/subtitle từ Strapi nếu muốn */}
            <div className="w-full bg-white dark:bg-[#111811]">
                <div className="px-4 md:px-10 lg:px-40 py-5">
                    <div className="layout-content-container flex flex-col max-w-[1200px] mx-auto flex-1">
                        <div className="py-4">
                            <div
                                className="flex min-h-[320px] md:min-h-[400px] flex-col gap-6 md:gap-8 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-4 pb-10 md:px-10 shadow-lg relative overflow-hidden"
                                style={{
                                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3i4sPisJjGFN3n7NlpL3QKqjTsoVG97hTu5w0SiiQ4YD5AqUq9ASMMi6yXTjg4e_gV-wfz42aLLC0_cunq7yhVAB840vP8yG945qPqqbAd_iS-3Ef1GIlpmkcwTs3LevxxX3JqTHSiOjpobrzz4y2FKe_VyqOtNd56bPyEMIixKFeCm2EFI9wvSdU4Q4i9Rm_dOtPsq32xQECuIkon0a5g5UBMdKruEumLFZLQvyTT4SO8wp6MtS7hgf6a2p6geKAFEn003jhznQ")`
                                }}
                            >
                                <div className="flex flex-col gap-2 text-left max-w-2xl relative z-10">
                                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">Policies & Legal Center</h1>
                                    <h2 className="text-white text-sm font-medium leading-normal md:text-lg md:leading-relaxed text-opacity-90">
                                        We believe in complete transparency...
                                    </h2>
                                </div>
                                <div className="flex gap-3 relative z-10">
                                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 md:h-12 md:px-5 bg-primary text-[#111811] text-sm font-bold hover:bg-white transition-all">
                                        <Download className="mr-2" size={18} />
                                        <span>Download Full PDF</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="px-4 md:px-10 lg:px-40 py-10 flex flex-1 justify-center bg-background-light dark:bg-background-dark">
                <div className="layout-content-container flex flex-col lg:flex-row gap-12 max-w-[1200px] flex-1">

                    {/* Sidebar Navigation */}
                    <aside className="hidden lg:block w-full lg:w-1/4 min-w-[260px]">
                        <div className="sticky top-24 flex flex-col justify-between bg-white dark:bg-[#1a261a] p-6 rounded-xl shadow-sm border border-[#f0f4f0] dark:border-[#2a382a]">
                            <div className="flex flex-col gap-6">
                                <h3 className="text-[#111811] dark:text-white text-lg font-bold">Navigation</h3>
                                <div className="flex flex-col gap-2 relative">
                                    {policies.map((item) => (
                                        <a
                                            key={item.id}
                                            href={`#${item.slug}`}
                                            onClick={() => setActiveSection(item.slug)}
                                            className={`group relative flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${activeSection === item.slug ? 'bg-[#f0f4f0] dark:bg-[#223022]' : 'hover:bg-[#f0f4f0]/50'
                                                }`}
                                        >
                                            {activeSection === item.slug && (
                                                <motion.div
                                                    layoutId="active-border"
                                                    className="absolute inset-0 border-l-4 border-primary rounded-lg pointer-events-none"
                                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                                />
                                            )}
                                            <div className={activeSection === item.slug ? 'text-primary' : 'text-[#618961]'}>
                                                <DynamicIcon name={item.iconname} />
                                            </div>
                                            <p className={`text-sm font-medium ${activeSection === item.slug ? 'text-[#111811] dark:text-white' : 'text-[#618961]'}`}>
                                                {item.title}
                                            </p>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Content Area */}
                    <main className="flex-1 w-full min-w-0 flex flex-col gap-12">
                        {policies.map((policy) => (
                            <section key={policy.id} id={policy.slug} className="scroll-mt-32 bg-white dark:bg-[#1a261a] p-8 md:p-10 rounded-xl shadow-sm border border-[#f0f4f0] dark:border-[#2a382a]">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-primary/20 p-2 rounded-lg text-primary">
                                        <DynamicIcon name={policy.iconname} />
                                    </div>
                                    <h2 className="text-primary text-sm font-bold uppercase tracking-wider">{policy.subtitle}</h2>
                                </div>
                                <h1 className="text-[#111811] dark:text-white text-3xl font-bold leading-tight mb-2">{policy.title}</h1>
                                <p className="text-[#618961] text-sm mb-8">Last updated: {policy.lastupdated}</p>

                                <div className="prose prose-slate dark:prose-invert max-w-none text-[#111811] dark:text-gray-300">
                                    {/* Render nội dung từ Strapi Editor */}
                                    <BlocksRenderer content={policy.content} />

                                    {/* Render Highlights động nếu có */}
                                    {policy.highlights && (
                                        <div className="grid md:grid-cols-2 gap-4 my-8">
                                            {policy.highlights.map((h: any) => (
                                                <div key={h.id} className="bg-background-light dark:bg-[#223022] p-5 rounded-lg border border-[#f0f4f0] dark:border-[#2a382a]">
                                                    <h4 className="font-bold text-[#111811] dark:text-white mb-2 flex items-center gap-2">
                                                        <LucideIcons.BadgeCheck size={18} className='text-primary' />
                                                        {h.title}
                                                    </h4>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">{h.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </section>
                        ))}
                    </main>
                </div>
            </div>
        </div>
    );
}