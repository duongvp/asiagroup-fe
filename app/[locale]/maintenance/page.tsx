'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import toast, { Toaster } from 'react-hot-toast';
import {
    Wrench, TrendingUp, Gauge, History, ShieldCheck, Zap,
    CheckCircle2, Droplets, Thermometer, Activity,
    PhoneCall, Clock, ChevronDown, Send, AlertCircle, Loader2
} from 'lucide-react';
import { useTranslations } from 'use-intl';

export default function MaintenancePage() {
    const t = useTranslations('Maintenance');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Schema Validation sử dụng dữ liệu từ file dịch
    const formSchema = z.object({
        firstName: z.string().min(1, { message: t('form.errors.firstName') }),
        lastName: z.string().min(1, { message: t('form.errors.lastName') }),
        email: z.string().email({ message: t('form.errors.email') }),
        serviceType: z.string().min(1, { message: t('form.errors.serviceType') }),
        preferredDate: z.string().min(1, { message: t('form.errors.preferredDate') }),
    });

    type FormData = z.infer<typeof formSchema>;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);

        // Giả lập gọi API
        await new Promise((resolve) => setTimeout(resolve, 2000));

        console.log("Form Data:", data);

        // Hiển thị Success Toast
        toast.success(t('form.successMessage') || 'Request submitted successfully!', {
            duration: 4000,
            position: 'top-right',
            style: {
                background: '#102210',
                color: '#fff',
                border: '1px solid #13ec13',
                padding: '16px',
                borderRadius: '12px',
            },
            iconTheme: {
                primary: '#13ec13',
                secondary: '#fff',
            },
        });

        setIsSubmitting(false);
        reset(); // Xóa sạch form sau khi gửi
    };

    return (
        <main className="flex flex-col w-full items-center bg-background-light dark:bg-background-dark text-[#111811] dark:text-white transition-colors duration-200">
            {/* Component quản lý Toast */}

            {/* 1. Hero Section */}
            <section className="w-full relative px-6 py-12 md:py-20 lg:py-24 max-w-[1280px]">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-6">
                        <div className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold uppercase tracking-wider">
                            <Wrench size={14} /> {t('hero.badge')}
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                            {t('hero.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-600">{t('hero.title2')}</span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
                            {t('hero.description')}
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link href="#request-service" className="flex items-center justify-center rounded-lg h-12 px-8 bg-[#0e2a47] hover:bg-slate-800 text-white text-base font-bold shadow-lg transition-all">
                                {t('hero.ctaPrimary')}
                            </Link>
                            <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-white dark:bg-white/10 border-2 border-slate-200 dark:border-white/10 text-base font-bold hover:bg-gray-50 dark:hover:bg-white/20 transition-colors">
                                {t('hero.ctaSecondary')}
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-white/10">
                            <Image
                                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2070&auto=format&fit=crop"
                                alt="Solar Maintenance" fill className="object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 z-20 bg-white dark:bg-[#1e3a1e] p-6 rounded-xl shadow-xl border border-gray-100 dark:border-white/10">
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/20 p-3 rounded-full text-green-700 dark:text-primary">
                                    <TrendingUp size={24} />
                                </div>
                                <div>
                                    <p className="text-2xl font-black text-[#0e2a47] dark:text-white">+25%</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{t('hero.statLabel')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Why Maintenance Section */}
            <section className="w-full bg-[#0e2a47] py-20 px-6">
                <div className="max-w-[1280px] mx-auto text-center">
                    <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">{t('why.subtitle')}</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">{t('why.title')}</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard icon={<Gauge size={32} />} title={t('why.card1.title')} desc={t('why.card1.desc')} />
                        <FeatureCard icon={<History size={32} />} title={t('why.card2.title')} desc={t('why.card2.desc')} />
                        <FeatureCard icon={<ShieldCheck size={32} />} title={t('why.card3.title')} desc={t('why.card3.desc')} />
                        <FeatureCard icon={<Zap size={32} />} title={t('why.card4.title')} desc={t('why.card4.desc')} />
                    </div>
                </div>
            </section>

            {/* 3. Service Checklist */}
            <section className="w-full py-20 px-6 max-w-[1280px]">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="lg:w-1/3 lg:sticky lg:top-32">
                        <h3 className="text-3xl font-bold mb-6">{t('checklist.title')}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">{t('checklist.desc')}</p>
                        <div className="flex flex-col gap-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="flex items-center gap-3 text-sm font-semibold">
                                    <CheckCircle2 className="text-primary" size={18} /> {t(`checklist.point${i}`)}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
                        <ChecklistCard icon={<Droplets className="text-blue-500" />} title={t('checklist.item1.title')} desc={t('checklist.item1.desc')} bg="bg-blue-50 dark:bg-blue-900/20" />
                        <ChecklistCard icon={<Zap className="text-green-600" />} title={t('checklist.item2.title')} desc={t('checklist.item2.desc')} bg="bg-green-50 dark:bg-green-900/20" />
                        <ChecklistCard icon={<Thermometer className="text-orange-600" />} title={t('checklist.item3.title')} desc={t('checklist.item3.desc')} bg="bg-orange-50 dark:bg-orange-900/20" />
                        <ChecklistCard icon={<Activity className="text-teal-600" />} title={t('checklist.item4.title')} desc={t('checklist.item4.desc')} bg="bg-teal-50 dark:bg-teal-900/20" />
                    </div>
                </div>
            </section>

            {/* 4. Request Service Form */}
            <section className="w-full py-20 px-6 max-w-[1280px]" id="request-service">
                <div className="bg-white dark:bg-[#152a15] rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-white/5 flex flex-col md:flex-row">
                    <div className="md:w-1/2 bg-[#0e2a47] p-12 text-white flex flex-col justify-center">
                        <h2 className="text-3xl font-bold mb-6">{t('form.title')}</h2>
                        <p className="text-blue-100 mb-8 leading-relaxed">{t('form.desc')}</p>
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <div className="size-10 rounded-full bg-white/10 flex items-center justify-center text-primary"><PhoneCall size={20} /></div>
                                <div><p className="text-xs text-blue-300 font-bold uppercase">{t('form.phoneLabel')}</p><p className="text-lg font-bold">(555) 123-4567</p></div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="size-10 rounded-full bg-white/10 flex items-center justify-center text-primary"><Clock size={20} /></div>
                                <div><p className="text-xs text-blue-300 font-bold uppercase">{t('form.hoursLabel')}</p><p className="text-lg font-bold">Mon - Sat: 8am - 6pm</p></div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 p-8 lg:p-12">
                        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-black text-slate-700 dark:text-gray-300 uppercase tracking-wider">{t('form.firstName')}</label>
                                <input
                                    {...register("firstName")}
                                    className={`h-12 rounded-xl border-2 px-4 outline-none transition-all ${errors.firstName ? 'border-red-500 bg-red-50/50' : 'border-slate-200 dark:border-white/10 focus:border-primary'} dark:bg-white/5`}
                                    placeholder="John"
                                />
                                {errors.firstName && <span className="text-red-500 text-[10px] font-bold flex items-center gap-1"><AlertCircle size={10} /> {errors.firstName.message}</span>}
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-black text-slate-700 dark:text-gray-300 uppercase tracking-wider">{t('form.lastName')}</label>
                                <input
                                    {...register("lastName")}
                                    className={`h-12 rounded-xl border-2 px-4 outline-none transition-all ${errors.lastName ? 'border-red-500 bg-red-50/50' : 'border-slate-200 dark:border-white/10 focus:border-primary'} dark:bg-white/5`}
                                    placeholder="Doe"
                                />
                                {errors.lastName && <span className="text-red-500 text-[10px] font-bold flex items-center gap-1"><AlertCircle size={10} /> {errors.lastName.message}</span>}
                            </div>

                            <div className="flex flex-col gap-1.5 sm:col-span-2">
                                <label className="text-xs font-black text-slate-700 dark:text-gray-300 uppercase tracking-wider">{t('form.email')}</label>
                                <input
                                    {...register("email")}
                                    className={`h-12 rounded-xl border-2 px-4 outline-none transition-all ${errors.email ? 'border-red-500 bg-red-50/50' : 'border-slate-200 dark:border-white/10 focus:border-primary'} dark:bg-white/5`}
                                    placeholder="john@example.com"
                                />
                                {errors.email && <span className="text-red-500 text-[10px] font-bold flex items-center gap-1"><AlertCircle size={10} /> {errors.email.message}</span>}
                            </div>

                            <div className="flex flex-col gap-1.5 sm:col-span-2">
                                <label className="text-xs font-black text-slate-700 dark:text-gray-300 uppercase tracking-wider">{t('form.serviceType')}</label>
                                <div className="relative">
                                    <select
                                        {...register("serviceType")}
                                        className={`h-12 w-full rounded-xl border-2 px-4 outline-none transition-all appearance-none cursor-pointer ${errors.serviceType ? 'border-red-500 bg-red-50/50' : 'border-slate-200 dark:border-white/10 focus:border-primary'} dark:bg-white/5`}
                                    >
                                        <option value="">{t('form.servicePlaceholder') || 'Select...'}</option>
                                        <option value="annual">Annual Care Plan</option>
                                        <option value="cleaning">One-Off Cleaning</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                                </div>
                                {errors.serviceType && <span className="text-red-500 text-[10px] font-bold flex items-center gap-1"><AlertCircle size={10} /> {errors.serviceType.message}</span>}
                            </div>

                            <div className="flex flex-col gap-1.5 sm:col-span-2">
                                <label className="text-xs font-black text-slate-700 dark:text-gray-300 uppercase tracking-wider">{t('form.preferredDate')}</label>
                                <input
                                    {...register("preferredDate")}
                                    type="date"
                                    className={`h-12 rounded-xl border-2 px-4 outline-none transition-all ${errors.preferredDate ? 'border-red-500 bg-red-50/50' : 'border-slate-200 dark:border-white/10 focus:border-primary'} dark:bg-white/5`}
                                />
                                {errors.preferredDate && <span className="text-red-500 text-[10px] font-bold flex items-center gap-1"><AlertCircle size={10} /> {errors.preferredDate.message}</span>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="sm:col-span-2 bg-primary hover:bg-green-400 disabled:bg-slate-300 text-[#0e2a47] font-black py-4 rounded-xl mt-4 transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 group overflow-hidden relative"
                            >
                                {isSubmitting ? (
                                    <Loader2 className="animate-spin" size={20} />
                                ) : (
                                    <>
                                        {t('form.submit')}
                                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
            <div className="text-primary mb-4 group-hover:scale-110 transition-transform">{icon}</div>
            <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
            <p className="text-blue-100 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}

function ChecklistCard({ icon, title, desc, bg }: { icon: React.ReactNode, title: string, desc: string, bg: string }) {
    return (
        <div className="p-8 bg-white dark:bg-[#152a15] rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
            <div className={`size-12 ${bg} rounded-lg flex items-center justify-center mb-6`}>{icon}</div>
            <h4 className="text-xl font-bold mb-3">{title}</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}