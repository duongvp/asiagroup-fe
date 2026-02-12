'use client';
import { useState } from 'react';
import Head from 'next/head';
import { ArrowRight, BadgeCheck, BrushCleaning, Calendar, ChevronDown, CirclePlay, ClipboardList, FileText, Gavel, Hammer, PencilRuler, PiggyBank, Power, ShieldCheck, Workflow, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

export default function SolarInstallationProcess() {
    const [email, setEmail] = useState('');
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [activeStep, setActiveStep] = useState(0);
    const t = useTranslations('Installation');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Thank you! We'll send your proposal to ${email}`);
        setEmail('');
    };

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const steps = [
        {
            number: 1,
            day: "Day 1",
            title: "Free Consultation & Energy Audit",
            description: "We start with a conversation. One of our energy consultants will visit your home or meet virtually to analyze your current electricity usage, inspect your roof's condition, and discuss your energy goals.",
            features: [
                "Roof sun exposure analysis",
                "Review of utility bills",
                "Preliminary savings estimate"
            ],
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            icon: ClipboardList,
            iconLabel: "Personalized Assessment"
        },
        {
            number: 2,
            day: "Day 3-7",
            title: "System Design & Proposal",
            description: "Our engineering team creates a custom solar design tailored to your roof's dimensions and local weather patterns. We'll present a detailed proposal outlining the system size, panel placement, and projected financial returns.",
            roilabel: "ROI Calculation Included",
            roitext: "We show you exactly when your system pays for itself.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            icon: PencilRuler,
            iconLabel: "Custom Engineering"
        },
        {
            number: 3,
            day: "Week 2-4",
            title: "Permitting & Paperwork",
            description: "Sit back and relax. We handle all the bureaucratic heavy lifting. Our team submits all necessary permits to your local municipality and utility company to ensure your system meets all codes and regulations.",
            features: [
                "HOA Approvals",
                "Building Permits",
                "Utility Interconnection Agreement"
            ],
            featureIcons: [Gavel, FileText, Zap],
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            icon: ShieldCheck,
            iconLabel: "Full Compliance Handled"
        },
        {
            number: 4,
            day: "Day 30 (Approx)",
            title: "Installation Day",
            description: "The big day! Our certified installation crew arrives to install your panels, racking, and inverter system. Most residential installations are completed in just 1-2 days with minimal disruption to your daily routine.",
            badges: [
                { icon: <BadgeCheck size={16} />, label: "Certified Crew" },
                { icon: <BrushCleaning size={16} />, label: "Site Cleanup" }
            ],
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDStzqPV0L7V_KITjBbT9RPOJDCf2zCWYOLzNUUN92ho2gOktBb3dTbM5KnWaYoWwDms1mCTl0Ppg96HMfnok-agYFVW95eseWfAZDBYpDmBjb3iKz7DtaoMM837J88_J_OwmLX4HywOiWCoQZ6DjRCHOUVKF_DlZ7yOeunxIoSlgBpn0WSrPNGYlHsbnfGJR1ckznDGuz9CJWmOG8S3lE7F4bdOSlxh1uEpGP_K5Q9PZoXbPPMjrn5MdrcixLWFo9ZPV2uqjMbxxE",
            icon: Hammer,
            iconLabel: "Professional Installation"
        },
        {
            number: 5,
            day: "Day 45",
            title: "Inspection & Activation",
            description: "After a final city inspection and utility meter swap, you get the 'Permission to Operate.' We'll help you flip the switch, set up your monitoring app, and start generating your own clean power.",
            cta: "View Monitoring App Demo",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            icon: Power,
            iconLabel: "System Live"
        }
    ];

    const faqs = [
        {
            question: "How long does the entire process take?",
            answer: "Typically, the entire process from consultation to activation takes about 45-60 days. The majority of this time is waiting for city permits and utility approval. The actual installation on your roof usually only takes 1-2 days."
        },
        {
            question: "Do I need to be home for the installation?",
            answer: "Yes, we usually need access to the inside of your home for a brief period to complete electrical connections and set up monitoring equipment. However, most of the work happens outside on your roof."
        },
        {
            question: "What happens if it rains on installation day?",
            answer: "Safety is our priority. If there is heavy rain, lightning, or high winds, we will reschedule your installation for the next available safe day. Light rain usually doesn't stop us!"
        }
    ];

    return (
        <>
            <Head>
                <title>Solar Installation Process - SolarTech</title>
                <meta name="description" content="From Sunshine to Savings in 5 Simple Steps" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <div className="bg-background-light dark:bg-background-dark text-foreground">

                {/* Hero Section - Giữ nguyên */}
                <div className="relative overflow-hidden bg-secondary-blue py-16 sm:py-24 lg:py-32">
                    <div className="absolute inset-0 overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDSbADYRiVzDKlS5neTDKxZDVjMa2YFJh6hvwGDEIAbwLrjmxY4st-Bph6MdoKccLnW_4nT7fS7aDgwSp8CUEL_GhMMj37KGJIcM4dm6ZXoTt9JaW7SHbL5vYKBzU1MN8NHmOnnasj-CxyWZA9R9XDdUK4x7t1NA0ul2rp9dI8B0R-Ub9rkbexoD39Xi6oOC2dtb693R2QtOV4S3rxcVFf8fzAtJiJRrtLQCb276VjvrZ0duz3cOS06btRzUAgwPGGykCeaCn7HPqE")`,
                            }}
                        />
                        {/* <div className="absolute inset-0 bg-secondary-blue/80 mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary-blue via-secondary-blue/40 to-transparent"></div> */}
                    </div>

                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
                            From Sunshine to Savings<br className="hidden sm:block" /> in <span className="text-primary">5 Simple Steps</span>
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-300 mb-10">
                            {t('Hero.subtitle')}
                        </p>

                        <div className="flex justify-center gap-4">
                            <button className="flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-foreground hover:bg-primary-dark transition-colors">
                                {t('Hero.ctaStart')}
                            </button>
                            <button className="flex h-12 items-center justify-center rounded-lg border border-white/30 bg-white/10 px-6 text-base font-bold text-white hover:bg-white/20 transition-colors backdrop-blur-sm">
                                {t('Hero.ctaVideo')}
                                <CirclePlay className="ml-2" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Process Overview Header - Giữ nguyên */}
                <div className="py-16 bg-white dark:bg-background-dark">
                    <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">{t('Workflow.badge')}</span>
                        <h2 className="text-3xl font-bold tracking-tight text-foreground dark:text-white sm:text-4xl mb-4">
                            {t('Workflow.title')}
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                            {t('Workflow.subtitle')}
                        </p>
                    </div>
                </div>

                {/* Vertical Timeline Process - ANIMATED */}
                <div className="relative bg-white dark:bg-background-dark pb-24">
                    {/* Vertical Line (Desktop) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 hidden lg:block -translate-x-1/2"></div>

                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col gap-16 lg:gap-24">
                            {steps.map((step, index) => {
                                const isEven = index % 2 === 0;
                                const isActive = activeStep === index;
                                const Icon = step.icon;

                                return (
                                    <InView
                                        key={index}
                                        as="div"
                                        threshold={0.5}
                                        onChange={(inView) => {
                                            if (inView) setActiveStep(index);
                                        }}
                                        className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16"
                                    >
                                        {/* Desktop Number Circle - ĐÚNG VỊ TRÍ */}
                                        <div className={`absolute left-1/2 top-0 -translate-x-1/2 -translate-y-4 hidden lg:flex h-12 w-12 items-center justify-center rounded-full border-4 border-white dark:border-background-dark font-bold z-10 shadow-lg transition-colors duration-500 ${isActive ? 'text-foreground' : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 text-foreground dark:text-white'}`}>
                                            {isActive && (
                                                <motion.div
                                                    layoutId="active-step-bg"
                                                    className="absolute inset-0 bg-primary rounded-full -z-10"
                                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                />
                                            )}
                                            <span className="relative z-10">{step.number}</span>
                                        </div>

                                        {/* Mobile Number Circle */}
                                        <div className="flex lg:hidden items-center gap-2 mb-4">
                                            <span className={`flex h-8 w-8 items-center justify-center rounded-full font-bold text-sm transition-colors duration-500 ${isActive ? 'bg-primary text-foreground' : 'bg-gray-200 dark:bg-gray-700 text-foreground dark:text-white'}`}>
                                                {step.number}
                                            </span>
                                            <span className={`font-bold text-sm tracking-wider uppercase transition-colors duration-500 ${isActive ? 'text-primary' : 'text-secondary-blue dark:text-primary'}`}>
                                                {step.day}
                                            </span>
                                        </div>

                                        {/* Content bên TRÁI cho steps chẵn (1, 3, 5) */}
                                        <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pr-8' : 'lg:pl-8 lg:order-2'}`}>
                                            {/* Desktop Day - chỉ hiện khi nội dung bên trái */}
                                            {isEven && (
                                                <div className="hidden lg:flex items-center gap-2 mb-2 justify-end">
                                                    <span className={`font-bold text-sm tracking-wider uppercase ${isActive ? 'text-primary' : 'text-secondary-blue dark:text-primary'} transition-colors duration-300`}>
                                                        {step.day}
                                                    </span>
                                                </div>
                                            )}

                                            {/* Desktop Day - chỉ hiện khi nội dung bên phải */}
                                            {!isEven && (
                                                <div className="hidden lg:flex items-center gap-2 mb-2">
                                                    <span className={`font-bold text-sm tracking-wider uppercase ${isActive ? 'text-primary' : 'text-secondary-blue dark:text-primary'} transition-colors duration-300`}>
                                                        {step.day}
                                                    </span>
                                                </div>
                                            )}

                                            {/* Nội dung text */}
                                            <div className={`${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                                                <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${isActive ? 'text-primary' : 'text-foreground dark:text-white'}`}>{step.title}</h3>
                                                <p className="text-gray-600 dark:text-gray-300 mb-6">{step.description}</p>

                                                {step.features && (
                                                    <ul className={`flex flex-col gap-2 text-gray-600 dark:text-gray-400 text-sm ${isEven ? 'lg:items-end' : ''}`}>
                                                        {step.features.map((feature, idx) => {
                                                            const FeatureIcon = step.featureIcons ? step.featureIcons[idx] : BadgeCheck;
                                                            return (
                                                                <li key={idx} className="flex items-center gap-2">
                                                                    <span className={`${step.featureIcons ? 'text-gray-400' : 'text-primary'}`}>
                                                                        <FeatureIcon size={20} />
                                                                    </span>
                                                                    {feature}
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                )}

                                                {step.roilabel && (
                                                    <div className={`bg-primary/10 dark:bg-primary/5 p-4 rounded-lg border border-primary/20 max-w-md ${isEven ? 'lg:ml-auto' : ''}`}>
                                                        <p className="text-sm font-semibold text-foreground dark:text-white mb-1 flex items-center gap-2">
                                                            <PiggyBank className="text-primary" size={20} />
                                                            {step.roilabel}
                                                        </p>
                                                        <p className="text-xs text-gray-600 dark:text-gray-400">{step.roitext}</p>
                                                    </div>
                                                )}

                                                {step.badges && (
                                                    <div className="grid grid-cols-2 gap-4 max-w-md">
                                                        {step.badges.map((badge, idx) => (
                                                            <div key={idx} className="flex items-center gap-3 bg-background-light dark:bg-white/5 p-3 rounded-lg">
                                                                <span className="text-primary">{badge.icon}</span>
                                                                <span className="text-sm font-medium">{badge.label}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                {step.cta && (
                                                    <button className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all mt-4">
                                                        {step.cta}
                                                        <ArrowRight size={20} />
                                                    </button>
                                                )}
                                            </div>
                                        </div>

                                        {/* Image - bên PHẢI cho steps chẵn (1, 3, 5) */}
                                        <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pl-8' : 'lg:pr-8 lg:order-1'}`}>
                                            <div className={`relative overflow-hidden rounded-2xl shadow-xl aspect-video lg:aspect-[4/3] max-w-lg mx-auto transition-all duration-500 ${isActive ? 'scale-105' : 'scale-100'}`}>
                                                <div
                                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                                                    style={{ backgroundImage: `url('${step.image}')` }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                                    <div className="flex items-center gap-2">
                                                        <Icon size={24} />
                                                        <span className="font-medium text-sm">{step.iconLabel}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </InView>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* FAQ Section - Giữ nguyên */}
                <div className="py-24 bg-background-light dark:bg-black/20">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground dark:text-white text-center mb-12">
                            Common Questions
                        </h2>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`rounded-lg bg-white dark:bg-gray-800 p-6 shadow-sm cursor-pointer ${openFaq === index ? 'ring-1 ring-primary/20' : ''}`}
                                    onClick={() => toggleFaq(index)}
                                >
                                    <div className="flex items-center justify-between gap-1.5 text-foreground dark:text-white font-medium">
                                        <span>{faq.question}</span>
                                        <ChevronDown size={20} className={`material-symbols-outlined transition ${openFaq === index ? '-rotate-180' : ''}`} />
                                    </div>
                                    {openFaq === index && (
                                        <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
                                            {faq.answer}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Section - Giữ nguyên */}
                <div className="relative isolate overflow-hidden bg-secondary-blue py-16 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                            <div className="max-w-xl lg:max-w-lg">
                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                    Ready to make the switch?
                                </h2>
                                <p className="mt-4 text-lg leading-8 text-gray-300">
                                    Get your free customized solar design and savings estimate today. No commitment required.
                                </p>

                                <form onSubmit={handleSubmit} className="mt-6 flex max-w-md gap-x-4">
                                    <input
                                        type="email"
                                        id="email-address"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 outline-0"
                                        placeholder="Enter your email"
                                    />
                                    <button
                                        type="submit"
                                        className="flex-none rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-foreground shadow-sm hover:bg-primary-dark"
                                    >
                                        Get Proposal
                                    </button>
                                </form>
                            </div>

                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                                <div className="flex flex-col items-start">
                                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                        <Calendar size={18} className='text-white' />
                                    </div>
                                    <dt className="mt-4 font-semibold text-white">Fast Scheduling</dt>
                                    <dd className="mt-2 leading-7 text-gray-400">We value your time. Book a consultation within 24 hours.</dd>
                                </div>
                                <div className="flex flex-col items-start">
                                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                        <Workflow size={18} className='text-white' />
                                    </div>
                                    <dt className="mt-4 font-semibold text-white">25-Year Warranty</dt>
                                    <dd className="mt-2 leading-7 text-gray-400">Peace of mind guaranteed on panels, labor, and performance.</dd>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
                        <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary to-secondary-blue opacity-30" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
                    </div>
                </div>
            </div>
        </>
    );
}