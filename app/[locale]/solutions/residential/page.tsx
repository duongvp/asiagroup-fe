'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import {
    SolarPanel, Wallet, Leaf, Zap, Home,
    ShieldCheck, ArrowRight, BarChart3, Star,
    CheckCircle2, Sun, Battery,
    TrendingUp
} from 'lucide-react';
import Link from 'next/link';

export default function ResidentialPage() {
    const t = useTranslations('Residential');
    const [activeTab, setActiveTab] = useState<'owners' | 'newbuild'>('owners');

    const solutionItems = [
        { icon: <SolarPanel />, key: 'roof' },
        { icon: <Battery />, key: 'storage' },
        { icon: <Zap />, key: 'ev' }
    ];

    return (
        <div className="relative flex w-full flex-col bg-[#f6f8f6] dark:bg-[#102210] text-slate-900 dark:text-white font-sans antialiased">
            {/* Hero Section */}
            <section className="w-full px-4 py-6 md:px-10 md:py-8 max-w-7xl mx-auto">
                <div
                    className="relative overflow-hidden rounded-3xl min-h-[550px] flex flex-col items-center justify-center text-center p-6 md:p-12 gap-6 bg-cover bg-center group"
                    style={{
                        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.7)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCKxihW-GM0TB7JTX-9YPA1gPmYjbEaorjAk8hnPLNICZoiEqnSBBvuKoWCDx35fitZCawIBhLJHcahB-gfsQ9VkHhHIpqdLpnOiZ51MLd2Zd4NcMUVdZR2WnKmpK8qNT7qXhL-BAtSLVhgHlp07gJ37yhz5FQl9hE3-4Nwm4T_mT8PqY040lIZ11_39kdm6XhWbwyYSW0pDvURsYHxAPaqXU80z-3T450oSu8t25joy_FtY9dJ8OQu7SFsO5_mR5M1hHtXU-9ZCBU')`
                    }}
                >
                    <div className="relative z-10 flex flex-col gap-4 max-w-3xl">
                        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-[#13ec13]/20 border border-[#13ec13]/30 px-4 py-1.5 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#13ec13] mb-4">
                            {t('Hero.badge')}
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black text-white leading-tight tracking-tight">
                            {t('Hero.title')} <span className="text-[#13ec13]">{t('Hero.highlight')}</span>
                        </h1>
                        <p className="text-slate-100 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto opacity-90">
                            {t('Hero.subtitle')}
                        </p>
                    </div>

                    <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full justify-center pt-4">
                        <button className="h-14 px-10 rounded-full bg-[#13ec13] text-[#102210] font-black text-base hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(19,236,19,0.4)]">
                            {t('Hero.btnQuote')}
                        </button>
                        <Link href="/installation-process" className="h-14 px-10 flex flex-col items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold text-base hover:bg-white/20 transition-all">
                            {t('Hero.btnWork')}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Residential Focus Switcher */}
            <section className="w-full px-4 py-8 max-w-4xl mx-auto">
                <div className="flex justify-center">
                    <div className="relative inline-flex h-14 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 p-1.5 w-full overflow-hidden">

                        {/* Nút Owners */}
                        <button
                            onClick={() => setActiveTab('owners')}
                            className={`relative flex-1 flex items-center justify-center gap-2 h-full rounded-full z-10 transition-colors duration-300 font-bold text-sm ${activeTab === 'owners' ? 'text-[#13ec13]' : 'text-slate-500'
                                }`}
                        >
                            <Home size={18} /> {t('Switcher.homeowners')}

                            {/* Phần nền trắng trượt */}
                            {activeTab === 'owners' && (
                                <motion.div
                                    layoutId="activeTabBackground"
                                    className="absolute inset-0 bg-white dark:bg-slate-700 rounded-full shadow-md -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </button>

                        {/* Nút New Build */}
                        <button
                            onClick={() => setActiveTab('newbuild')}
                            className={`relative flex-1 flex items-center justify-center gap-2 h-full rounded-full z-10 transition-colors duration-300 font-bold text-sm ${activeTab === 'newbuild' ? 'text-[#13ec13]' : 'text-slate-500'
                                }`}
                        >
                            <Battery size={18} /> {t('Switcher.newbuild')}

                            {/* Phần nền trắng trượt */}
                            {activeTab === 'newbuild' && (
                                <motion.div
                                    layoutId="activeTabBackground"
                                    className="absolute inset-0 bg-white dark:bg-slate-700 rounded-full shadow-md -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </button>
                    </div>
                </div>
            </section>

            {/* Home Benefits Grid */}
            {/* <section className="w-full px-4 py-16 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">{t('Solutions.title')}</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        {t('Solutions.desc')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: <SolarPanel />, key: 'roof' },
                        { icon: <Battery />, key: 'storage' },
                        { icon: <Zap />, key: 'ev' }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-900 p-10 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-xl hover:border-[#13ec13]/30 transition-all group">
                            <div className="w-14 h-14 rounded-2xl bg-[#13ec13]/10 flex items-center justify-center mb-8 text-[#13ec13] group-hover:bg-[#13ec13] group-hover:text-white transition-all">
                                {React.cloneElement(item.icon, { size: 32 })}
                            </div>
                            <h3 className="text-2xl font-black mb-4">{t(`Solutions.${item.key}.title`)}</h3>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                                {t(`Solutions.${item.key}.desc`)}
                            </p>
                            <ul className="space-y-3">
                                {[1, 2, 3].map(i => (
                                    <li key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300">
                                        <CheckCircle2 size={16} className="text-[#13ec13]" />
                                        {t(`Solutions.${item.key}.feature${i}`)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section> */}

            {/* Solutions Grid */}
            <section className="w-full px-4 py-16 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">{t('Solutions.title')}</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        {t('Solutions.desc')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {solutionItems.map((item, idx) => {
                        const baseKey = `Solutions.${activeTab}.${item.key}`;
                        return (
                            <div key={idx} className="bg-white dark:bg-slate-900 p-10 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-xl hover:border-[#13ec13]/30 transition-all group animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="w-14 h-14 rounded-2xl bg-[#13ec13]/10 flex items-center justify-center mb-8 text-[#13ec13] group-hover:bg-[#13ec13] group-hover:text-white transition-all">
                                    {React.cloneElement(item.icon, { size: 32 })}
                                </div>
                                <h3 className="text-2xl font-black mb-4">{t(`${baseKey}.title`)}</h3>
                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6 min-h-[60px]">
                                    {t(`${baseKey}.desc`)}
                                </p>
                                <ul className="space-y-3">
                                    {[1, 2, 3].map(i => (
                                        <li key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300">
                                            <CheckCircle2 size={16} className="text-[#13ec13]" />
                                            {t(`${baseKey}.feature${i}`)}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Savings Visualizer */}
            <section className="w-full px-4 py-20 bg-white dark:bg-[#0c1a0c] border-y border-slate-100 dark:border-slate-800">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex-1">
                        <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                            {t('Savings.title')}
                        </h2>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="size-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                                    <Wallet size={28} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">{t('Savings.card1.title')}</h4>
                                    <p className="text-slate-500">{t('Savings.card1.desc')}</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="size-14 rounded-full bg-[#13ec13]/10 flex items-center justify-center text-[#13ec13] shrink-0">
                                    <TrendingUp size={28} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">{t('Savings.card2.title')}</h4>
                                    <p className="text-slate-500">{t('Savings.card2.desc')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-md bg-[#f6f8f6] dark:bg-[#102210] p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl">
                        {/* Chart Mockup tương tự bản thiết kế gốc */}
                        <div className="h-64 flex items-end justify-between gap-4 border-b border-slate-300 dark:border-slate-700 pb-4">
                            <div className="w-full bg-slate-300 dark:bg-slate-700 rounded-t-xl h-[95%] relative">
                                <span className="absolute -top-8 left-0 text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('Savings.labelOld')}</span>
                            </div>
                            <div className="w-full bg-[#13ec13] rounded-t-xl h-[40%] shadow-[0_0_30px_rgba(19,236,19,0.3)] relative">
                                <span className="absolute -top-8 left-0 text-[10px] font-black text-[#13ec13] uppercase tracking-widest">{t('Savings.labelNew')}</span>
                            </div>
                        </div>
                        <p className="mt-8 text-center text-sm font-bold text-slate-500">{t('Savings.note')}</p>
                    </div>
                </div>
            </section>

            {/* Residential CTA */}
            <section className="w-full px-4 py-24 bg-[#102210] relative overflow-hidden">
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
                        {t('CTA.title')} <span className="text-[#13ec13]">{t('CTA.highlight')}</span>
                    </h2>
                    <p className="text-slate-300 text-xl mb-12 max-w-2xl mx-auto">{t('CTA.desc')}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="h-16 px-12 rounded-full bg-[#13ec13] text-[#102210] font-black text-lg hover:scale-105 transition-all">
                            {t('CTA.btnMain')}
                        </button>
                        <button className="h-16 px-12 rounded-full border-2 border-white/20 text-white font-black text-lg hover:bg-white/10 transition-all">
                            {t('CTA.btnAlt')}
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}