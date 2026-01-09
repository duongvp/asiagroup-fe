'use client';

import { useState } from 'react';
import Head from 'next/head';

export default function PoliciesLegal() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

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

            <div className={`${isDarkMode ? 'dark' : ''}`}>
                <div className="bg-background-light dark:bg-background-dark font-display text-[#111811] dark:text-white">
                    {/* Top Navigation */}
                    <header className="sticky top-0 z-50 bg-white dark:bg-[#111811] border-b border-solid border-[#f0f4f0] dark:border-[#2a382a] px-4 md:px-10 py-3">
                        <div className="flex items-center justify-between whitespace-nowrap">
                            <div className="flex items-center gap-8">
                                <div className="flex items-center gap-4 text-[#111811] dark:text-white">
                                    <div className="size-8 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined text-3xl">solar_power</span>
                                    </div>
                                    <h2 className="text-[#111811] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">SolarTech</h2>
                                </div>
                                <div className="hidden lg:flex items-center gap-9">
                                    <a className="text-[#111811] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Home</a>
                                    <a className="text-[#111811] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Products</a>
                                    <a className="text-[#111811] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Services</a>
                                    <a className="text-[#111811] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">About Us</a>
                                    <a className="text-[#111811] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Contact</a>
                                </div>
                            </div>
                            <div className="flex flex-1 justify-end gap-4 md:gap-8">
                                <form onSubmit={handleSearch} className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
                                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                                        <div className="text-[#618961] flex border-none bg-[#f0f4f0] dark:bg-[#223022] items-center justify-center pl-4 rounded-l-lg border-r-0">
                                            <span className="material-symbols-outlined text-[24px]">search</span>
                                        </div>
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111811] dark:text-white focus:outline-0 focus:ring-0 border-none bg-[#f0f4f0] dark:bg-[#223022] focus:border-none h-full placeholder:text-[#618961] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                                            placeholder="Search policies..."
                                        />
                                    </div>
                                </form>
                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-[#111811] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#11d111] transition-colors">
                                    <span className="truncate">Get a Quote</span>
                                </button>
                                {/* Mobile Menu Button */}
                                <button className="lg:hidden flex items-center justify-center text-[#111811] dark:text-white">
                                    <span className="material-symbols-outlined">menu</span>
                                </button>
                            </div>
                        </div>
                    </header>

                    {/* Hero Section */}
                    <div className="w-full bg-white dark:bg-[#111811]">
                        <div className="px-4 md:px-10 lg:px-40 py-5">
                            <div className="layout-content-container flex flex-col max-w-[1200px] mx-auto flex-1">
                                <div className="py-4">
                                    <div
                                        className="flex min-h-[320px] md:min-h-[400px] flex-col gap-6 md:gap-8 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-4 pb-10 md:px-10 shadow-lg relative overflow-hidden"
                                        style={{
                                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url('https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')`
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
                                                <span className="material-symbols-outlined mr-2 text-[20px]">download</span>
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
                                                <span className="material-symbols-outlined text-[#111811] dark:text-white">verified_user</span>
                                                <p className="text-[#111811] dark:text-white text-sm font-medium leading-normal">Warranty Policy</p>
                                            </a>
                                            <a className="group flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#f0f4f0] dark:hover:bg-[#223022] transition-colors border-l-4 border-transparent" href="#privacy">
                                                <span className="material-symbols-outlined text-[#618961] group-hover:text-[#111811] dark:group-hover:text-white">lock</span>
                                                <p className="text-[#618961] dark:text-gray-400 group-hover:text-[#111811] dark:group-hover:text-white text-sm font-medium leading-normal">Privacy Policy</p>
                                            </a>
                                            <a className="group flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#f0f4f0] dark:hover:bg-[#223022] transition-colors border-l-4 border-transparent" href="#terms">
                                                <span className="material-symbols-outlined text-[#618961] group-hover:text-[#111811] dark:group-hover:text-white">description</span>
                                                <p className="text-[#618961] dark:text-gray-400 group-hover:text-[#111811] dark:group-hover:text-white text-sm font-medium leading-normal">Terms & Conditions</p>
                                            </a>
                                            <a className="group flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#f0f4f0] dark:hover:bg-[#223022] transition-colors border-l-4 border-transparent" href="#cookies">
                                                <span className="material-symbols-outlined text-[#618961] group-hover:text-[#111811] dark:group-hover:text-white">cookie</span>
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
                                            <span className="material-symbols-outlined text-[#111811] dark:text-white">verified_user</span>
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
                                                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                                    Product Coverage
                                                </h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">Covers defects in materials and workmanship for 25 years from the date of installation.</p>
                                            </div>
                                            <div className="bg-background-light dark:bg-[#223022] p-5 rounded-lg border border-[#f0f4f0] dark:border-[#2a382a]">
                                                <h4 className="font-bold text-[#111811] dark:text-white mb-2 flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                                    Power Production
                                                </h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">Guaranteed to output at least 92% of original power at year 25.</p>
                                            </div>
                                        </div>
                                        <details className="group bg-background-light dark:bg-[#223022] rounded-lg p-4 cursor-pointer mb-2">
                                            <summary className="font-bold text-[#111811] dark:text-white flex justify-between items-center list-none">
                                                <span>Exclusions & Limitations</span>
                                                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
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
                                            <span className="material-symbols-outlined text-[#111811] dark:text-white">lock</span>
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
                                            <span className="material-symbols-outlined text-[#111811] dark:text-white">description</span>
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

                    {/* Footer */}
                    <footer className="bg-white dark:bg-[#111811] border-t border-[#f0f4f0] dark:border-[#2a382a] py-12 px-4 md:px-10 lg:px-40">
                        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">solar_power</span>
                                <span className="font-bold text-[#111811] dark:text-white">SolarTech</span>
                            </div>
                            <div className="flex gap-8 text-sm text-[#618961]">
                                <a className="hover:text-primary" href="#">Privacy</a>
                                <a className="hover:text-primary" href="#">Terms</a>
                                <a className="hover:text-primary" href="#">Sitemap</a>
                            </div>
                            <p className="text-sm text-[#618961]">© 2024 SolarTech Inc. All rights reserved.</p>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}