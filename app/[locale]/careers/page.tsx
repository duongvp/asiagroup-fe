'use client';
import { useState } from 'react';
import Head from 'next/head';
import { Banknote, ChevronDown, HeartPulse, House, Leaf, Lightbulb, MapPin, TrendingUp, UserCog, Users, ArrowRight, Loader2 } from 'lucide-react';
import { useLocale, useTranslations } from 'use-intl';
import { useCareers, useSubmitApplication } from '@/services/career.service';
import { ICareer } from '@/types/career';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { CareerFormData, careerSchema } from '@/schemas/career.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input, FileUpload } from '@/components/ui';
import toast from 'react-hot-toast';

// Dữ liệu Job giữ nguyên không đưa vào JSON theo yêu cầu
const jobs = [
    {
        title: "Senior Electrical Engineer",
        department: "Engineering",
        location: "San Francisco, CA",
        type: "Full Time",
        description:
            "We are looking for a Senior Electrical Engineer to lead our solar PV design projects. You will be responsible for system design, permitting support, and technical oversight.",
        responsibilities: [
            "Design commercial and utility-scale solar PV systems.",
            "Perform electrical calculations and equipment sizing.",
            "Mentor junior engineers and technical staff.",
        ],
        requirements: [
            "Bachelor's degree in Electrical Engineering.",
            "5+ years of experience in solar industry.",
            "Proficiency in AutoCAD and PVSyst.",
        ],
    },
    {
        title: "Residential Sales Representative",
        department: "Sales",
        location: "Austin, TX",
        type: "Commission Based",
        description:
            "Join our high-performing sales team and help homeowners switch to clean energy. This role offers high earning potential and flexible hours.",
        responsibilities: [
            "Conduct in-home solar consultations.",
            "Generate leads and manage pipeline.",
            "Educate customers on solar benefits and savings.",
        ],
        requirements: [
            "Strong communication and interpersonal skills.",
            "Previous sales experience preferred.",
            "Self-motivated and goal-oriented.",
        ],
    },
    {
        title: "Project Manager",
        department: "Operations",
        location: "Denver, CO",
        type: "Full Time",
        description:
            "Oversee residential and commercial solar installations from contract to completion. Ensure projects are delivered on time and within budget.",
    },
    {
        title: "Solar Technician",
        department: "Technical",
        location: "Phoenix, AZ",
        type: "Full Time",
        description:
            "Hands-on role installing, maintaining, and repairing solar systems. Requires field work and travel.",
    },
];

export default function Careers() {
    const t = useTranslations();
    const locale = useLocale();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // 1. Lấy dữ liệu từ Strapi API thông qua Service
    const { careers, isLoading, isError } = useCareers(locale);
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

    // Theo dõi trường 'resume'
    const resumeFile = watch('resume');

    const onSubmit = async (values: CareerFormData) => {
        try {
            console.log(values);
            await submit(values);
            toast.success(t('Careers.Form.success'));
            reset();
        } catch (error: any) {
            toast.error(t('Careers.Form.error'));
        }
    };

    const toggleJobCard = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Head>
                <title>{t('Careers.Hero.title')} - SolarTech</title>
                <meta name="description" content={t('Careers.Hero.description')} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap" rel="stylesheet" />
                <style>{`
                    html { scroll-behavior: smooth; }
                    details > summary { list-style: none; }
                    details > summary::-webkit-details-marker { display: none; }
                    @keyframes sweep {
                        0% {opacity: 0; transform: translateY(-10px)}
                        100% {opacity: 1; transform: translateY(0)}
                    }
                    .animate-sweep { animation: sweep .3s ease-in-out; }
                `}</style>
            </Head>

            <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white transition-colors duration-200">

                <main className="flex-grow">
                    {/* Hero Section */}
                    <section className="relative">
                        <div className="relative flex min-h-[500px] md:min-h-[600px] flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-4"
                            style={{ backgroundImage: 'linear-gradient(rgba(16, 34, 16, 0.6) 0%, rgba(16, 34, 16, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD8aGHNp3xDZt9vHUI7YkQmvmpb5gxMUmpVm6Kr217GJ1XxWEKeOtYSgrpECVsiHMw_uDzeAj52p4BNtco3CIgR9r2KqTkIRo_Zsjo9IeAj0oiqPxAWwS0muvxwljtnhSwfYNesb-xGspeJqrfHTUsGT9qGgpCA5wTMsYz8u9FuQo_yJ2yAwiV_nB48tSXrhN0qrHXdU6QFPmxLTZT-cTh8u7Ha3uM66J5f8mv54kpHUuh2LsgAoVDsWwn4ZDBmPdElaLkwJcwg60o")' }}>
                            <div className="flex flex-col gap-6 text-center max-w-4xl">
                                <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
                                    {t('Careers.Hero.title')}
                                </h1>
                                <h2 className="text-gray-200 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                                    {t('Careers.Hero.description')}
                                </h2>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                                    <a className="flex items-center justify-center bg-primary hover:bg-green-400 text-[#111811] text-base font-bold h-12 px-8 rounded-lg transition-colors" href="#open-roles">
                                        {t('Careers.Hero.ctaPrimary')}
                                    </a>
                                    <a className="flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 text-base font-bold h-12 px-8 rounded-lg transition-colors" href="#culture">
                                        {t('Careers.Hero.ctaSecondary')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Values Section */}
                    <section className="py-16 px-4 md:px-10 lg:px-40 bg-background-light dark:bg-background-dark" id="culture">
                        <div className="max-w-[960px] mx-auto flex flex-col gap-10">
                            <div className="flex flex-col gap-4 text-center md:text-left">
                                <h2 className="text-[#111811] dark:text-white text-3xl md:text-4xl font-bold leading-tight">
                                    {t('Careers.Values.title')}
                                </h2>
                                <p className="text-[#618961] dark:text-gray-400 text-lg max-w-[720px]">
                                    {t('Careers.Values.description')}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[Leaf, Lightbulb, Users].map((Icon, idx) => (
                                    <div key={idx} className="flex flex-col gap-4 rounded-xl border border-[#dbe6db] dark:border-[#1a2e1a] bg-white dark:bg-[#152615] p-6 hover:shadow-lg transition-shadow">
                                        <div className="text-primary"><Icon size={24} /></div>
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-[#111811] dark:text-white text-xl font-bold">{t(`Careers.Values.items.${idx}.title`)}</h3>
                                            <p className="text-[#618961] dark:text-gray-400 text-sm leading-relaxed">
                                                {t(`Careers.Values.items.${idx}.desc`)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Benefits Section */}
                    <section className="py-16 px-4 md:px-10 lg:px-40 bg-white dark:bg-[#152615]">
                        <div className="max-w-[960px] mx-auto flex flex-col gap-10">
                            <div className="text-center mb-4">
                                <h2 className="text-[#111811] dark:text-white text-3xl md:text-4xl font-bold">{t('Careers.Benefits.title')}</h2>
                                <p className="text-[#618961] dark:text-gray-400 mt-2">{t('Careers.Benefits.subtitle')}</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {[Banknote, HeartPulse, House, TrendingUp].map((Icon, idx) => (
                                    <div key={idx} className="flex flex-col gap-3 rounded-xl border border-[#f0f4f0] dark:border-[#2a3e2a] bg-background-light dark:bg-[#102210] p-5">
                                        <div className="text-primary"><Icon size={24} /></div>
                                        <div>
                                            <h3 className="text-[#111811] dark:text-white text-base font-bold">{t(`Careers.Benefits.items.${idx}.title`)}</h3>
                                            <p className="text-[#618961] dark:text-gray-400 text-sm mt-1">{t(`Careers.Benefits.items.${idx}.desc`)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Open Roles Section */}
                    <section className="py-20 px-4 md:px-10 lg:px-40 bg-background-light dark:bg-background-dark" id="open-roles">
                        <div className="max-w-[960px] mx-auto flex flex-col gap-8">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <div>
                                    <h2 className="text-[#111811] dark:text-white text-3xl md:text-4xl font-bold">{t('Careers.Roles.title')}</h2>
                                    <p className="text-[#618961] dark:text-gray-400 mt-1">{t('Careers.Roles.subtitle')}</p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['All', 'Engineering', 'Sales', 'Operations'].map((filter) => (
                                        <span key={filter} className={`px-4 py-2 rounded-full text-sm font-bold cursor-pointer transition-colors ${filter === 'All' ? 'bg-primary text-[#111811]' : 'bg-white dark:bg-[#152615] border border-gray-200 dark:border-gray-700 text-[#618961] dark:text-gray-300 hover:text-primary'}`}>
                                            {filter}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                {careers.length > 0 ? (
                                    careers.map((job: ICareer, index: number) => {
                                        const isExpanded = openIndex === index;
                                        return (
                                            <div key={job.documentId} className={`group bg-white dark:bg-[#152615] rounded-xl border border-[#dbe6db] dark:border-[#1a2e1a] overflow-hidden transition-all duration-300 ${isExpanded ? "ring-2 ring-primary/50 shadow-xl" : "hover:border-primary/50"}`}>
                                                {/* Card Header */}
                                                <div className="flex items-center justify-between p-6 cursor-pointer" onClick={() => toggleJobCard(index)}>
                                                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 w-full">
                                                        <div className="flex-1">
                                                            <h3 className="text-lg font-bold text-[#111811] dark:text-white group-hover:text-primary transition-colors">{job.title}</h3>
                                                            <div className="flex gap-4 mt-1 text-sm text-[#618961] dark:text-gray-400">
                                                                <span className="flex items-center gap-1"><UserCog size={16} /> {job.department?.name || "General"}</span>
                                                                <span className="flex items-center gap-1"><MapPin size={16} /> {job.location}</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-4">
                                                            <span className="hidden md:block text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">{job.type}</span>
                                                            <ChevronDown size={20} className={`text-[#618961] transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Card Content - Rendered from Strapi Blocks */}
                                                {isExpanded && (
                                                    <div className="px-6 pb-8 border-t border-[#f0f4f0] dark:border-[#2a3e2a] animate-sweep">
                                                        <div className="mt-6 space-y-8">
                                                            <div className="prose dark:prose-invert max-w-none text-[#618961] dark:text-gray-300">
                                                                <BlocksRenderer content={job.description} />
                                                            </div>

                                                            <div className="grid md:grid-cols-2 gap-12">
                                                                <div className="flex flex-col gap-3">
                                                                    <h4 className="font-bold text-[#111811] dark:text-white mb-2">
                                                                        {t('Careers.Roles.details.responsibilities')}
                                                                    </h4>
                                                                    <div className="prose prose-sm dark:prose-invert marker:text-primary">
                                                                        <BlocksRenderer content={job.responsibilities} />
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-col gap-3">
                                                                    <h4 className="font-bold text-[#111811] dark:text-white mb-2">
                                                                        {t('Careers.Roles.details.requirements')}
                                                                    </h4>
                                                                    <div className="prose prose-sm dark:prose-invert marker:text-primary">
                                                                        <BlocksRenderer content={job.requirements} />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100 dark:border-gray-800">
                                                                <p className="text-xs text-gray-400 italic font-medium">Ref: {job.documentId.substring(0, 8).toUpperCase()}</p>

                                                                <Link href={`/careers/${job.slug}`} className="w-full sm:w-auto bg-primary hover:bg-green-400 text-[#111811] font-bold py-3 px-8 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:-translate-y-1">
                                                                    {t('Careers.Roles.details.applyBtn')} <ArrowRight size={18} />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })
                                ) : (
                                    <p className="text-center py-10 text-gray-500 italic">No open positions at the moment. Please check back later!</p>
                                )}
                            </div>
                        </div>
                    </section>

                    {/* General Application Form */}
                    <section className="py-16 px-4 md:px-10 lg:px-40 bg-white dark:bg-[#152615] border-t border-[#f0f4f0] dark:border-[#2a3e2a]">
                        <div className="max-w-[800px] mx-auto">
                            <div className="bg-background-light dark:bg-[#102210] rounded-2xl p-8 md:p-12 shadow-sm border border-[#dbe6db] dark:border-[#1a2e1a]">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#111811] dark:text-white mb-3">{t('Careers.Form.title')}</h2>
                                    <p className="text-[#618961] dark:text-gray-400">{t('Careers.Form.subtitle')}</p>
                                </div>

                                <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <Input
                                            {...register('first_name')}
                                            label={t('Careers.Form.firstName')}
                                            error={errors.first_name?.message}
                                            type="text"
                                            id="first-name"
                                        />
                                        <Input
                                            {...register('last_name')}
                                            label={t('Careers.Form.lastName')}
                                            error={errors.last_name?.message}
                                            type="text"
                                            id="last-name"
                                        />
                                    </div>
                                    <Input
                                        {...register('email')}
                                        label={t('Careers.Form.email')}
                                        error={errors.email?.message}
                                        type="email"
                                        id="email"
                                    />
                                    <FileUpload
                                        {...register('resume')}
                                        label={t('Careers.Form.resume')}
                                        error={errors.resume?.message as string}
                                        hint={t('Careers.Form.resumeHint')}
                                        selectedFile={resumeFile}
                                        acceptedFormats="PDF, DOC, DOCX up to 10MB"
                                    />
                                    <button
                                        type='submit'
                                        disabled={isSubmitting}
                                        className="bg-primary hover:bg-green-400 cursor-pointer text-[#111811] text-base font-bold h-12 w-full rounded-lg transition-colors mt-2 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="h-5 w-5 animate-spin" />
                                                {t('Careers.Form.submitting') || 'Sending...'}
                                            </>
                                        ) : (
                                            t('Careers.Form.submitBtn')
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