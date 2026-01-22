'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin, Share2, Globe, ThumbsUp, Send } from 'lucide-react';

export default function ContactPage() {
    const t = useTranslations('Contact');

    return (
        <main className="flex-grow flex flex-col items-center w-full bg-background-light dark:bg-background-dark">
            {/* Header Section */}
            <section className="w-full px-4 py-12 md:py-20 bg-white dark:bg-white/5 border-b border-gray-100 dark:border-white/5">
                <div className="max-w-[1280px] mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">
                        {t('Hero.title')} <span className="text-primary">{t('Hero.highlight')}</span>
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        {t('Hero.subtitle')}
                    </p>
                </div>
            </section>

            <section className="w-full px-4 py-16 md:px-10 max-w-[1280px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-8">
                            <div className="flex items-start gap-4">
                                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">{t('Info.address.title')}</h3>
                                    <p className="text-gray-500 dark:text-gray-400 whitespace-pre-line">{t('Info.address.detail')}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">{t('Info.phone.title')}</h3>
                                    <p className="text-gray-500 dark:text-gray-400 whitespace-pre-line">{t('Info.phone.detail')}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">{t('Info.email.title')}</h3>
                                    <p className="text-gray-500 dark:text-gray-400 whitespace-pre-line">{t('Info.email.detail')}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">{t('Info.connect')}</h4>
                            <div className="flex gap-4">
                                {[Share2, Globe, ThumbsUp].map((Icon, idx) => (
                                    <a key={idx} className="size-10 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-colors" href="#">
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="w-full h-72 rounded-3xl bg-gray-200 dark:bg-white/5 relative overflow-hidden group">
                            <div
                                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80')" }}
                            />
                            <div className="absolute inset-0 bg-primary/10"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-white dark:bg-slate-900 px-6 py-3 rounded-full shadow-xl border border-primary/20 flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
                                    <MapPin className="text-primary" size={18} />
                                    <span className="font-bold text-sm">{t('Info.map')}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white dark:bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 dark:border-white/10 shadow-2xl relative">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-2">{t('Form.title')}</h2>
                            <p className="text-gray-500">{t('Form.subtitle')}</p>
                        </div>
                        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold ml-1">{t('Form.labels.name')}</label>
                                    <input className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent focus:ring-2 focus:ring-primary outline-none" type="text" placeholder="John Doe" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold ml-1">{t('Form.labels.email')}</label>
                                    <input className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent focus:ring-2 focus:ring-primary outline-none" type="email" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold ml-1">{t('Form.labels.phone')}</label>
                                    <input className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent focus:ring-2 focus:ring-primary outline-none" type="tel" placeholder="(555) 000-0000" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold ml-1">{t('Form.labels.type')}</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-background-dark focus:ring-2 focus:ring-primary outline-none">
                                        <option value="home">{t('Form.types.home')}</option>
                                        <option value="business">{t('Form.types.business')}</option>
                                        <option value="industrial">{t('Form.types.industrial')}</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold ml-1">{t('Form.labels.message')}</label>
                                <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-transparent focus:ring-2 focus:ring-primary outline-none resize-none" rows={4} placeholder={t('Form.placeholder')}></textarea>
                            </div>

                            <button className="w-full py-4 bg-primary hover:bg-primary-dark text-black font-bold rounded-xl transition-all shadow-lg shadow-primary/20 text-lg flex items-center justify-center gap-2">
                                <Send size={20} />
                                {t('Form.button')}
                            </button>
                            <p className="text-center text-xs text-gray-400">
                                {t('Form.privacy')}
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}