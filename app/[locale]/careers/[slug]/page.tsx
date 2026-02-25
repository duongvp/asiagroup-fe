'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
    ArrowLeft,
    MapPin,
    Banknote,
    Clock,
    CheckCircle2,
    UploadCloud,
    Send,
    Loader2,
} from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { useCareerDetail, useSubmitApplication } from '@/services/career.service';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CareerFormData, careerSchema } from '@/schemas/career.schema';
import { Input, FileUpload } from '@/components/ui';
import toast from 'react-hot-toast';

export default function JobDetail() {
    const t = useTranslations();
    const locale = useLocale();
    const params = useParams();
    const slug = params.slug as string;

    // 1. Lấy dữ liệu từ API dựa trên slug và locale
    const { career, isLoading, isError } = useCareerDetail(slug, locale);
    const { submit, isSubmitting } = useSubmitApplication();

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors }
    } = useForm<CareerFormData>({
        resolver: zodResolver(careerSchema),
    });

    const resumeFile = watch('resume');

    const onSubmit = async (values: CareerFormData) => {
        try {
            await submit(values);
            toast.success(t('Careers.Form.success'));
            reset();
        } catch (error: any) {
            toast.error(t('Careers.Form.error'));
        }
    };

    // 2. Trạng thái Loading (Giữ style tối giản)
    if (isLoading) return (
        <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
            <div className="animate-pulse text-primary font-bold">Loading...</div>
        </div>
    );

    // 3. Trạng thái Lỗi hoặc Không tìm thấy job
    if (isError || !career) return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background-light dark:bg-background-dark gap-4">
            <p className="text-red-500 font-bold">Position not found.</p>
            <Link href="/careers" className="text-primary hover:underline flex items-center gap-2">
                <ArrowLeft size={18} /> {t('JobDetail.backToCareers')}
            </Link>
        </div>
    );

    return (
        <>
            <Head>
                <title>{career.title} - SolarTech Careers</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white transition-colors duration-200">
                <main className="flex-grow">

                    {/* Breadcrumb Navigation */}
                    <nav className="px-4 md:px-10 lg:px-40 py-8">
                        <div className="max-w-[1100px] mx-auto">
                            <Link
                                href="/careers"
                                className="inline-flex items-center gap-2 text-[#618961] dark:text-gray-400 hover:text-primary transition-colors font-medium"
                            >
                                <ArrowLeft size={18} />
                                {t('JobDetail.backToCareers')}
                            </Link>
                        </div>
                    </nav>

                    {/* Job Header Section */}
                    <section className="px-4 md:px-10 lg:px-40 pb-12">
                        <div className="max-w-[1100px] mx-auto border-b border-[#dbe6db] dark:border-[#1a2e1a] pb-10">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                            {career.department?.name || "Engineering"}
                                        </span>
                                        <span className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                            {career.type}
                                        </span>
                                    </div>
                                    <h1 className="text-3xl md:text-5xl font-black text-[#111811] dark:text-white">
                                        {career.title}
                                    </h1>
                                    <div className="flex flex-wrap gap-6 text-[#618961] dark:text-gray-400">
                                        <span className="flex items-center gap-1.5"><MapPin size={18} /> {career.location}</span>
                                        <span className="flex items-center gap-1.5"><Banknote size={18} /> {"$120k - $160k"}</span>
                                        <span className="flex items-center gap-1.5">
                                            <Clock size={18} /> {t('JobDetail.posted')} {new Date(career.createdAt).toLocaleDateString(locale)}
                                        </span>
                                    </div>
                                </div>
                                <a
                                    href="#apply"
                                    className="bg-primary hover:bg-green-400 text-[#111811] font-bold py-4 px-10 rounded-xl transition-all shadow-lg hover:shadow-primary/20 text-center"
                                >
                                    {t('JobDetail.applyNow')}
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* Content Section */}
                    <section className="px-4 md:px-10 lg:px-40 py-12 bg-white dark:bg-[#152615]">
                        <div className="max-w-[1100px] mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                                {/* Left Column: Description & Responsibilities */}
                                <div className="lg:col-span-2 space-y-12">
                                    <div>
                                        <h2 className="text-2xl font-bold text-[#111811] dark:text-white mb-6">{t('JobDetail.overview')}</h2>
                                        <div className="prose dark:prose-invert max-w-none text-[#618961] dark:text-gray-400 leading-relaxed">
                                            <BlocksRenderer content={career.description} />
                                        </div>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl font-bold text-[#111811] dark:text-white mb-6">{t('JobDetail.responsibilities')}</h2>
                                        {/* Sử dụng class custom để giữ style CheckCircle của bạn khi render từ Strapi */}
                                        <div className="prose dark:prose-invert max-w-none prose-li:list-none prose-li:relative prose-li:pl-8 text-[#618961] dark:text-gray-400">
                                            <style>{`
                                                .prose-custom-list ul { list-style: none; padding-left: 0; }
                                                .prose-custom-list li { position: relative; padding-left: 2rem; margin-bottom: 1rem; }
                                                .prose-custom-list li::before { 
                                                    content: '✓'; 
                                                    position: absolute; 
                                                    left: 0; 
                                                    color: #4ade80; 
                                                    font-weight: bold;
                                                    border: 2px solid #4ade80;
                                                    border-radius: 50%;
                                                    width: 20px;
                                                    height: 20px;
                                                    display: flex;
                                                    align-items: center;
                                                    justify-content: center;
                                                    font-size: 12px;
                                                }
                                            `}</style>
                                            <div className="prose-custom-list">
                                                <BlocksRenderer content={career.responsibilities} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Requirements & Benefits */}
                                <div className="space-y-8">
                                    <div className="bg-background-light dark:bg-[#102210] p-8 rounded-2xl border border-[#dbe6db] dark:border-[#1a2e1a]">
                                        <h2 className="text-xl font-bold text-[#111811] dark:text-white mb-6">{t('JobDetail.requirements')}</h2>
                                        <div className="prose prose-sm dark:prose-invert marker:text-primary text-[#618961] dark:text-gray-400">
                                            <BlocksRenderer content={career.requirements} />
                                        </div>
                                    </div>

                                    <div className="bg-background-light dark:bg-[#102210] p-8 rounded-2xl border border-[#dbe6db] dark:border-[#1a2e1a]">
                                        <h2 className="text-xl font-bold text-[#111811] dark:text-white mb-6">{t('JobDetail.sideBenefits')}</h2>
                                        <ul className="space-y-4 text-sm text-[#618961] dark:text-gray-400">
                                            <li className="flex items-center gap-3"><CheckCircle2 className="text-primary" size={18} /> Full medical insurance</li>
                                            <li className="flex items-center gap-3"><CheckCircle2 className="text-primary" size={18} /> 401(k) matching</li>
                                            <li className="flex items-center gap-3"><CheckCircle2 className="text-primary" size={18} /> Flexible PTO</li>
                                            <li className="flex items-center gap-3"><CheckCircle2 className="text-primary" size={18} /> Travel allowance</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Form Section - GIỮ NGUYÊN BẢN GIAO DIỆN CỦA BẠN */}
                    <section className="py-20 px-4 md:px-10 lg:px-40 bg-background-light dark:bg-background-dark scroll-mt-20" id="apply">
                        <div className="max-w-[800px] mx-auto">
                            <div className="bg-white dark:bg-[#152615] rounded-3xl p-8 md:p-12 shadow-sm border border-[#dbe6db] dark:border-[#1a2e1a]">
                                <div className="text-center mb-10">
                                    <h2 className="text-3xl font-black text-[#111811] dark:text-white mb-3">{t('JobDetail.formTitle')}</h2>
                                    <p className="text-[#618961] dark:text-gray-400">{t('JobDetail.formSubtitle')}</p>
                                </div>
                                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <Input
                                            {...register('first_name')}
                                            label={t('Careers.Form.firstName')}
                                            error={errors.first_name?.message}
                                            type="text"
                                            id="first-name"
                                            className="h-12 w-full rounded-xl border border-[#dbe6db] dark:border-[#2a3e2a] bg-white dark:bg-[#1a2e1a] px-4 text-[#111811] dark:text-white outline-none focus:border-primary transition-all"
                                        />
                                        <Input
                                            {...register('last_name')}
                                            label={t('Careers.Form.lastName')}
                                            error={errors.last_name?.message}
                                            type="text"
                                            id="last-name"
                                            className="h-12 w-full rounded-xl border border-[#dbe6db] dark:border-[#2a3e2a] bg-white dark:bg-[#1a2e1a] px-4 text-[#111811] dark:text-white outline-none focus:border-primary transition-all"
                                        />
                                    </div>
                                    <Input
                                        {...register('email')}
                                        label={t('Careers.Form.email')}
                                        error={errors.email?.message}
                                        type="email"
                                        id="email"
                                        className="h-12 w-full rounded-xl border border-[#dbe6db] dark:border-[#2a3e2a] bg-white dark:bg-[#1a2e1a] px-4 text-[#111811] dark:text-white outline-none focus:border-primary transition-all"
                                    />
                                    <FileUpload
                                        {...register('resume')}
                                        label={t('Careers.Form.resume')}
                                        error={errors.resume?.message as string}
                                        hint={t('Careers.Form.resumeHint')}
                                        selectedFile={resumeFile}
                                        acceptedFormats="PDF, DOC, DOCX up to 10MB"
                                    />
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-[#111811] dark:text-white">{t('JobDetail.coverLetter')}</label>
                                        <textarea
                                            {...register('cover_letter')}
                                            className="min-h-[160px] w-full rounded-xl border border-[#dbe6db] dark:border-[#2a3e2a] bg-white dark:bg-[#1a2e1a] p-4 text-[#111811] dark:text-white outline-none focus:border-primary transition-all resize-none"
                                        />
                                        {errors.cover_letter && <p className="text-xs text-red-500 mt-1">{errors.cover_letter.message}</p>}
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-primary hover:bg-green-400 text-[#111811] text-lg font-bold h-14 w-full rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="h-6 w-6 animate-spin" />
                                                {t('Careers.Form.submitting') || 'Sending...'}
                                            </>
                                        ) : (
                                            <>
                                                {t('JobDetail.submitBtn')} <Send size={18} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}