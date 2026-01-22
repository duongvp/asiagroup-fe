'use client';

import { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import { BadgeCheck, ChevronDown, Cookie, Download, FileText, Lock, ShieldCheck } from 'lucide-react';

export default function PoliciesLegal() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Searching for: ${searchQuery}`);
        setSearchQuery('');
    };

    return (
        <>
            <Head>
                <title>Policies & Legal - SolarTech</title>
                <meta name="description" content="We believe in complete transparency. Review our commitments to sustainability, your privacy, and product performance." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            </Head>

            <div className="bg-background-light dark:bg-background-dark font-display text-[#111811] dark:text-white">

                {/* Hero Section */}
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
                                        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">
                                            Policies & Legal Center
                                        </h1>
                                        <h2 className="text-white text-sm font-medium leading-normal md:text-lg md:leading-relaxed text-opacity-90">
                                            We believe in complete transparency. Review our commitments to sustainability, your privacy, and product performance below.
                                        </h2>
                                    </div>
                                    <div className="flex gap-3 relative z-10">
                                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 md:h-12 md:px-5 bg-primary text-[#111811] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-white hover:text-primary transition-all">
                                            <Download className="mr-2" size={18} />
                                            <span className="truncate">Download Full PDF</span>
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
                        {/* Sidebar Navigation (Sticky) */}
                        <aside className="hidden lg:block w-full lg:w-1/4 min-w-[260px]">
                            <div className="sticky top-24 flex flex-col justify-between bg-white dark:bg-[#1a261a] p-6 rounded-xl shadow-sm border border-[#f0f4f0] dark:border-[#2a382a]">
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col">
                                        <h3 className="text-[#111811] dark:text-white text-lg font-bold leading-normal">Navigation</h3>
                                        <p className="text-[#618961] text-sm font-normal leading-normal">Jump to section</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <a className="group flex items-center gap-3 px-3 py-3 rounded-lg bg-[#f0f4f0] dark:bg-[#223022] hover:bg-[#e0ebe0] dark:hover:bg-[#2c3d2c] transition-colors border-l-4 border-primary" href="#warranty">
                                            <ShieldCheck />
                                            <p className="text-[#111811] dark:text-white text-sm font-medium leading-normal">Warranty Policy</p>
                                        </a>
                                        <a className="group flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#f0f4f0] dark:hover:bg-[#223022] transition-colors border-l-4 border-transparent" href="#privacy">
                                            <Lock />
                                            <p className="text-[#618961] dark:text-gray-400 group-hover:text-[#111811] dark:group-hover:text-white text-sm font-medium leading-normal">Privacy Policy</p>
                                        </a>
                                        <a className="group flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#f0f4f0] dark:hover:bg-[#223022] transition-colors border-l-4 border-transparent" href="#terms">
                                            <FileText />
                                            <p className="text-[#618961] dark:text-gray-400 group-hover:text-[#111811] dark:group-hover:text-white text-sm font-medium leading-normal">Terms & Conditions</p>
                                        </a>
                                        <a className="group flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#f0f4f0] dark:hover:bg-[#223022] transition-colors border-l-4 border-transparent" href="#cookies">
                                            <Cookie />
                                            <p className="text-[#618961] dark:text-gray-400 group-hover:text-[#111811] dark:group-hover:text-white text-sm font-medium leading-normal">Cookie Policy</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-8 pt-6 border-t border-[#f0f4f0] dark:border-[#2a382a]">
                                    <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 hover:bg-primary/30 text-[#111811] dark:text-white text-sm font-bold leading-normal transition-colors">
                                        <span className="truncate">Contact Legal Team</span>
                                    </button>
                                </div>
                            </div>
                        </aside>

                        {/* Content Area */}
                        <main className="flex-1 w-full min-w-0 flex flex-col gap-12">
                            {/* Warranty Section */}
                            <section className="scroll-mt-32 bg-white dark:bg-[#1a261a] p-8 md:p-10 rounded-xl shadow-sm border border-[#f0f4f0] dark:border-[#2a382a]" id="warranty">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-primary/20 p-2 rounded-lg">
                                        <ShieldCheck />
                                    </div>
                                    <h2 className="text-primary text-sm font-bold uppercase tracking-wider">Performance Guarantee</h2>
                                </div>
                                <h1 className="text-[#111811] dark:text-white text-3xl font-bold leading-tight mb-2">25-Year Performance Warranty</h1>
                                <p className="text-[#618961] text-sm font-normal leading-normal mb-8">Last updated: October 24, 2023</p>
                                <div className="prose prose-slate dark:prose-invert max-w-none text-[#111811] dark:text-gray-300">
                                    <p className="mb-4 leading-relaxed">
                                        At SolarTech, we stand behind the quality and performance of our solar energy systems. Our 25-Year Performance Guarantee ensures that your system will produce energy at a specified capacity for a quarter of a century. This warranty covers both the solar panels and the microinverters.
                                    </p>
                                    <p className="mb-6 leading-relaxed">
                                        If your system underperforms due to a defect in materials or workmanship, we will repair or replace the defective components at no cost to you. This includes all parts, labor, and shipping costs associated with the repair.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4 my-8">
                                        <div className="bg-background-light dark:bg-[#223022] p-5 rounded-lg border border-[#f0f4f0] dark:border-[#2a382a]">
                                            <h4 className="font-bold text-[#111811] dark:text-white mb-2 flex items-center gap-2">
                                                <BadgeCheck size={18} className='text-primary' />
                                                Product Coverage
                                            </h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Covers defects in materials and workmanship for 25 years from the date of installation.</p>
                                        </div>
                                        <div className="bg-background-light dark:bg-[#223022] p-5 rounded-lg border border-[#f0f4f0] dark:border-[#2a382a]">
                                            <h4 className="font-bold text-[#111811] dark:text-white mb-2 flex items-center gap-2">
                                                <BadgeCheck size={18} className='text-primary' />
                                                Power Production
                                            </h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Guaranteed to output at least 92% of original power at year 25.</p>
                                        </div>
                                    </div>
                                    <details className="group bg-background-light dark:bg-[#223022] rounded-lg p-4 cursor-pointer mb-2">
                                        <summary className="font-bold text-[#111811] dark:text-white flex justify-between items-center list-none">
                                            <span>Exclusions & Limitations</span>
                                            <span className="material-symbols-outlined transition-transform group-open:rotate-180"><ChevronDown size={20} /></span>
                                        </summary>
                                        <div className="pt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                            The warranty does not cover damage caused by external factors such as severe weather events (hurricanes, tornadoes), vandalism, unauthorized modifications, or shading caused by new vegetation growth post-installation. Regular maintenance as outlined in the user manual is required to maintain warranty validity.
                                        </div>
                                    </details>
                                </div>
                            </section>

                            {/* Privacy Policy Section */}
                            <section className="scroll-mt-32 bg-white dark:bg-[#1a261a] p-8 md:p-10 rounded-xl shadow-sm border border-[#f0f4f0] dark:border-[#2a382a]" id="privacy">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-primary/20 p-2 rounded-lg">
                                        <Lock />
                                    </div>
                                    <h2 className="text-primary text-sm font-bold uppercase tracking-wider">Data Protection</h2>
                                </div>
                                <h1 className="text-[#111811] dark:text-white text-3xl font-bold leading-tight mb-2">Privacy Policy</h1>
                                <p className="text-[#618961] text-sm font-normal leading-normal mb-8">Last updated: September 15, 2023</p>
                                <div className="space-y-6 text-[#111811] dark:text-gray-300 leading-relaxed">
                                    <div>
                                        <h3 className="text-lg font-bold text-[#111811] dark:text-white mb-2">1. Information We Collect</h3>
                                        <p>We collect information you provide directly to us, such as when you request a quote, create an account, or communicate with us. This may include your name, email address, phone number, property address, and energy usage data from your utility bills.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#111811] dark:text-white mb-2">2. How We Use Your Information</h3>
                                        <p>We use the information we collect to provide, maintain, and improve our services, including calculating solar savings estimates, designing your system, and processing payments. We do NOT sell your personal data to third parties.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#111811] dark:text-white mb-2">3. Energy Monitoring Data</h3>
                                        <p>Once your system is installed, we collect data regarding its energy production and consumption to ensure optimal performance and to provide you with real-time analytics via our mobile app.</p>
                                    </div>
                                </div>
                            </section>

                            {/* Terms Section */}
                            <section className="scroll-mt-32 bg-white dark:bg-[#1a261a] p-8 md:p-10 rounded-xl shadow-sm border border-[#f0f4f0] dark:border-[#2a382a]" id="terms">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-primary/20 p-2 rounded-lg">
                                        <FileText />
                                    </div>
                                    <h2 className="text-primary text-sm font-bold uppercase tracking-wider">Service Agreement</h2>
                                </div>
                                <h1 className="text-[#111811] dark:text-white text-3xl font-bold leading-tight mb-2">Terms & Conditions</h1>
                                <p className="text-[#618961] text-sm font-normal leading-normal mb-8">Last updated: January 10, 2024</p>
                                <div className="space-y-6 text-[#111811] dark:text-gray-300 leading-relaxed">
                                    <p>
                                        By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.
                                    </p>
                                    <div className="bg-background-light dark:bg-[#223022] p-6 rounded-xl">
                                        <h3 className="text-lg font-bold text-[#111811] dark:text-white mb-3">Installation & Permitting</h3>
                                        <p className="text-sm mb-4">
                                            SolarTech handles all permitting and approvals required for installation. However, timelines for these approvals are subject to local government processing times and are outside of our direct control. We agree to keep you informed at every step of the process.
                                        </p>
                                        <h3 className="text-lg font-bold text-[#111811] dark:text-white mb-3">Payment Terms</h3>
                                        <p className="text-sm">
                                            Payment schedules are defined in your specific Purchase Agreement. Generally, a deposit is required upon signing, a progress payment upon material delivery, and final payment upon system commissioning. Late payments may incur interest charges as detailed in your invoice.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Footer CTA */}
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-[#102210] p-8 rounded-xl text-white">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold">Still have questions?</h3>
                                    <p className="text-gray-300 text-sm max-w-md">Our legal and compliance team is available to clarify any details regarding our warranties or policies.</p>
                                </div>
                                <div className="flex gap-4">
                                    <button className="bg-primary hover:bg-[#11d111] text-[#102210] font-bold py-2 px-6 rounded-lg transition-colors">
                                        Contact Support
                                    </button>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}