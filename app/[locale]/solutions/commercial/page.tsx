'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import {
    Zap, Leaf, ShieldCheck, Wallet, TrendingDown,
    Sprout, BarChart3, Ruler, Car, Cpu, Settings,
    ArrowUpRight, BarChart
} from 'lucide-react';

export default function CommercialPage() {
    const t = useTranslations('Commercial');

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#f8fafc] dark:bg-[#020617] text-[#0f172a] dark:text-[#f8fafc] antialiased">

            {/* Hero Section */}
            <section className="relative w-full min-h-[70vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#0f172a]/75 z-10"></div>
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAKSzRlScrOFemTNqqVvDxREx_UUUjORxkFw_nt8IjAS9U1i0UWNwj03pH2NVTCHHgMi6_F4YhPR7BnLxq8cu8uiHzKxDTZUazo-yP49F-4AmGWEiHLk2O9VDap7oU0L6M-fwCMqLrsOKbDxHi72Chfy5Up9-3gKRYWyq4Oj_nYngpwC6VKI13PO2AaXpj4_w-UR3zBbj6qBsXxJfMGr4xmqfP68ljBwigi9SR6M6INoEHgxONgsjYZtmFXHPDEiCDLLBxWWfJRu5c')" }}
                    ></div>
                </div>
                <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#13ec13]/20 border border-[#13ec13]/30 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[#13ec13] mb-8">
                            <span className="size-2 rounded-full bg-[#13ec13] animate-pulse"></span>
                            {t('Hero.badge')}
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
                            {t('Hero.title')} <span className="text-[#13ec13]">{t('Hero.highlight')}</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                            {t('Hero.subtitle')}
                        </p>
                        <div className="flex flex-wrap gap-5">
                            <button className="bg-[#13ec13] text-[#0f172a] font-black px-10 py-4 rounded-lg uppercase tracking-widest hover:translate-y-[-2px] transition-all shadow-xl shadow-[#13ec13]/20">
                                {t('Hero.btnROI')}
                            </button>
                            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 font-black px-10 py-4 rounded-lg uppercase tracking-widest hover:bg-white/20 transition-all">
                                {t('Hero.btnPortfolio')}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ESG Section */}
            <section className="py-24 bg-[#f8fafc] dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.2em] mb-4">{t('ESG.tag')}</h2>
                            <h3 className="text-4xl font-black text-[#0f172a] dark:text-white mb-8 leading-tight">{t('ESG.title')}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">{t('ESG.desc')}</p>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4 p-6 rounded-xl bg-white dark:bg-[#0f172a] shadow-sm border border-gray-100 dark:border-gray-800">
                                    <Sprout className="text-[#13ec13] shrink-0" size={32} />
                                    <div>
                                        <h4 className="font-bold text-[#0f172a] dark:text-white text-lg">{t('ESG.item1.title')}</h4>
                                        <p className="text-gray-500 text-sm">{t('ESG.item1.desc')}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-6 rounded-xl bg-white dark:bg-[#0f172a] shadow-sm border border-gray-100 dark:border-gray-800">
                                    <BarChart3 className="text-[#13ec13] shrink-0" size={32} />
                                    <div>
                                        <h4 className="font-bold text-[#0f172a] dark:text-white text-lg">{t('ESG.item2.title')}</h4>
                                        <p className="text-gray-500 text-sm">{t('ESG.item2.desc')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="aspect-square bg-[#0f172a] rounded-3xl p-8 flex flex-col justify-end text-white relative overflow-hidden border border-white/10">
                                <Leaf className="absolute top-8 right-8 text-[#13ec13]" size={48} />
                                <div className="text-4xl font-black mb-2">98%</div>
                                <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">{t('ESG.stats1')}</p>
                            </div>
                            <div className="aspect-square bg-[#13ec13] rounded-3xl p-8 flex flex-col justify-end text-[#0f172a] overflow-hidden relative">
                                <ShieldCheck className="absolute top-8 right-8 text-[#0f172a]" size={48} />
                                <div className="text-4xl font-black mb-2">A+</div>
                                <p className="text-sm text-[#0f172a]/70 font-bold uppercase tracking-wider">{t('ESG.stats2')}</p>
                            </div>
                            <div className="col-span-2 aspect-[2/1] bg-gray-200 dark:bg-[#0f172a] rounded-3xl overflow-hidden">
                                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB7o_HVDe0IDDY1ZSJgguVo7A1kdUxVfcMufqV8_NKxSTTMwsp-E6OjWDovf6DCwvM88YfZ2fIunLBfmvQzp8MVqJDJBdFlXY7V_TCZiPjhQ-o9uiLy6f29bgRR896IpU4HXYaEh4RSp2JtQ7UUJCBkd1US4x7ONR8n8bPvEazUufEKo7PJN2oPItQFMug8c_7GfGSF-5AERWkzoAqWVRj9Wza-F1HbTKlYzl9hlGhGZ4Vt_24LKOj7zjuCZ27vqP3EvpZOCLu74F8')" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Engineering Excellence Section - BỔ SUNG */}
            <section className="py-24 bg-white dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="w-full lg:w-1/2 order-2 lg:order-1">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="rounded-2xl overflow-hidden h-64 border-4 border-white dark:border-gray-800 shadow-xl">
                                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAKSzRlScrOFemTNqqVvDxREx_UUUjORxkFw_nt8IjAS9U1i0UWNwj03pH2NVTCHHgMi6_F4YhPR7BnLxq8cu8uiHzKxDTZUazo-yP49F-4AmGWEiHLk2O9VDap7oU0L6M-fwCMqLrsOKbDxHi72Chfy5Up9-3gKRYWyq4Oj_nYngpwC6VKI13PO2AaXpj4_w-UR3zBbj6qBsXxJfMGr4xmqfP68ljBwigi9SR6M6INoEHgxONgsjYZtmFXHPDEiCDLLBxWWfJRu5c')" }}></div>
                                </div>
                                <div className="rounded-2xl overflow-hidden h-64 mt-8 border-4 border-white dark:border-gray-800 shadow-xl">
                                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB7o_HVDe0IDDY1ZSJgguVo7A1kdUxVfcMufqV8_NKxSTTMwsp-E6OjWDovf6DCwvM88YfZ2fIunLBfmvQzp8MVqJDJBdFlXY7V_TCZiPjhQ-o9uiLy6f29bgRR896IpU4HXYaEh4RSp2JtQ7UUJCBkd1US4x7ONR8n8bPvEazUufEKo7PJN2oPItQFMug8c_7GfGSF-5AERWkzoAqWVRj9Wza-F1HbTKlYzl9hlGhGZ4Vt_24LKOj7zjuCZ27vqP3EvpZOCLu74F8')" }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2">
                            <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.2em] mb-4">{t('Engineering.tag')}</h2>
                            <h3 className="text-4xl font-black text-[#0f172a] dark:text-white mb-8">{t('Engineering.title')}</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-5">
                                    <div className="flex-shrink-0 size-10 rounded-full bg-[#13ec13]/10 flex items-center justify-center text-[#13ec13]">
                                        <Ruler size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0f172a] dark:text-white mb-1">{t('Engineering.item1.title')}</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">{t('Engineering.item1.desc')}</p>
                                    </div>
                                </li>
                                <li className="flex gap-5">
                                    <div className="flex-shrink-0 size-10 rounded-full bg-[#13ec13]/10 flex items-center justify-center text-[#13ec13]">
                                        <Car size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0f172a] dark:text-white mb-1">{t('Engineering.item2.title')}</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">{t('Engineering.item2.desc')}</p>
                                    </div>
                                </li>
                                <li className="flex gap-5">
                                    <div className="flex-shrink-0 size-10 rounded-full bg-[#13ec13]/10 flex items-center justify-center text-[#13ec13]">
                                        <Cpu size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0f172a] dark:text-white mb-1">{t('Engineering.item3.title')}</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">{t('Engineering.item3.desc')}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intelligence Dashboard Section */}
            <section className="py-24 bg-[#f8fafc] dark:bg-[#0f172a] overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-black text-[#13ec13] uppercase tracking-[0.2em] mb-4">{t('Intelligence.tag')}</h2>
                        <h3 className="text-4xl font-black text-[#0f172a] dark:text-white mb-6">{t('Intelligence.title')}</h3>
                        <p className="text-gray-500 max-w-2xl mx-auto">{t('Intelligence.desc')}</p>
                    </div>
                    <div className="relative max-w-5xl mx-auto">
                        <div className="rounded-2xl bg-[#1e293b] border border-white/10 shadow-2xl overflow-hidden">
                            <div className="bg-gray-800 px-6 py-3 flex items-center justify-between border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="size-3 rounded-full bg-red-400"></div>
                                    <div className="size-3 rounded-full bg-yellow-400"></div>
                                    <div className="size-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="text-[10px] text-gray-400 uppercase font-black tracking-widest italic">SolarTech Enterprise Dashboard v4.2</div>
                                <Settings size={14} className="text-gray-400" />
                            </div>
                            <div className="p-6 lg:p-10 grid grid-cols-12 gap-6">
                                <div className="col-span-12 lg:col-span-3 space-y-4">
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                        <p className="text-gray-400 text-[10px] uppercase font-bold mb-1">{t('Intelligence.output')}</p>
                                        <div className="text-2xl font-black text-[#13ec13]">1.24 MW</div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                        <p className="text-gray-400 text-[10px] uppercase font-bold mb-1">{t('Intelligence.savings')}</p>
                                        <div className="text-2xl font-black text-white">$4,821.50</div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-[#13ec13]/10 border border-[#13ec13]/20">
                                        <p className="text-[#13ec13] text-[10px] uppercase font-bold mb-1">{t('Intelligence.status')}</p>
                                        <div className="flex items-center gap-2 text-white font-bold">
                                            <span className="size-2 rounded-full bg-[#13ec13]"></span>
                                            {t('Intelligence.operational')}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 lg:col-span-9 bg-white/5 rounded-xl border border-white/5 p-6 min-h-[300px] flex flex-col justify-between">
                                    <div className="flex items-center justify-between mb-8">
                                        <h5 className="text-white font-bold flex items-center gap-2"><BarChart size={18} /> Energy Production Curve</h5>
                                        <div className="flex gap-4">
                                            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Last 24 Hours</span>
                                            <span className="text-[10px] text-[#13ec13] uppercase font-bold tracking-widest animate-pulse">Live Data</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex items-end gap-1.5 overflow-hidden">
                                        {[30, 45, 35, 60, 80, 95, 100, 92, 85, 65, 40, 25].map((h, i) => (
                                            <div key={i} className="w-full bg-[#13ec13]/30 hover:bg-[#13ec13] transition-all rounded-t-sm" style={{ height: `${h}%` }}></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[110%] h-20 bg-[#13ec13]/20 blur-[100px] -z-10"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}