'use client';

import { useState } from 'react';
import Head from 'next/head';

export default function Careers() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isOpen, setIsOpen] = useState([false, false, false, false]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const toggleJobCard = (index: number) => {
        const newIsOpen = [...isOpen];
        newIsOpen[index] = !newIsOpen[index];
        setIsOpen(newIsOpen);
    };

    return (
        <>
            <Head>
                <title>Careers - SolarTech</title>
                <meta name="description" content="Join the Green Energy Revolution. Build a sustainable future with us while advancing your professional journey in a high-growth industry." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
                <style>{`
                    .material-symbols-outlined {
                        vertical-align: middle;
                    }
                    
                    details > summary {
                        list-style: none;
                    }
                    
                    details > summary::-webkit-details-marker {
                        display: none;
                    }
                    
                    details[open] summary ~ * {
                        animation: sweep .3s ease-in-out;
                    }
                    
                    @keyframes sweep {
                        0%    {opacity: 0; transform: translateY(-10px)}
                        100%  {opacity: 1; transform: translateY(0)}
                    }
                `}</style>
            </Head>

            <div className={`${isDarkMode ? 'dark' : ''}`}>
                <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-text-main dark:text-white transition-colors duration-200">
                    {/* TopNavBar */}
                    <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#102210]/90 backdrop-blur-md border-b border-[#f0f4f0] dark:border-[#1a2e1a]">
                        <div className="px-4 md:px-10 py-3 flex items-center justify-between mx-auto max-w-[1280px]">
                            <div className="flex items-center gap-4 text-[#111811] dark:text-white">
                                <div className="size-8 text-primary">
                                    <span className="material-symbols-outlined text-3xl">solar_power</span>
                                </div>
                                <h2 className="text-xl font-bold tracking-tight">SolarTech</h2>
                            </div>

                            <div className="hidden md:flex items-center gap-8">
                                <nav className="flex gap-6">
                                    <a className="text-sm font-medium hover:text-primary transition-colors" href="#">
                                        Home
                                    </a>
                                    <a className="text-sm font-medium hover:text-primary transition-colors" href="#">
                                        About Us
                                    </a>
                                    <a className="text-sm font-bold text-primary" href="#">
                                        Careers
                                    </a>
                                    <a className="text-sm font-medium hover:text-primary transition-colors" href="#">
                                        Projects
                                    </a>
                                </nav>
                                <button className="bg-primary hover:bg-green-400 text-[#111811] text-sm font-bold py-2 px-5 rounded-lg transition-colors">
                                    Get a Quote
                                </button>
                            </div>

                            {/* Mobile Menu Icon */}
                            <div className="md:hidden flex items-center gap-4">
                                <button
                                    onClick={toggleDarkMode}
                                    className="text-primary"
                                >
                                    <span className="material-symbols-outlined">
                                        {isDarkMode ? 'light_mode' : 'dark_mode'}
                                    </span>
                                </button>
                                <div className="text-primary">
                                    <span className="material-symbols-outlined text-2xl">menu</span>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* HeroSection */}
                    <section className="relative">
                        <div className="relative flex min-h-[500px] md:min-h-[600px] flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-4" style={{ backgroundImage: 'linear-gradient(rgba(16, 34, 16, 0.6) 0%, rgba(16, 34, 16, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD8aGHNp3xDZt9vHUI7YkQmvmpb5gxMUmpVm6Kr217GJ1XxWEKeOtYSgrpECVsiHMw_uDzeAj52p4BNtco3CIgR9r2KqTkIRo_Zsjo9IeAj0oiqPxAWwS0muvxwljtnhSwfYNesb-xGspeJqrfHTUsGT9qGgpCA5wTMsYz8u9FuQo_yJ2yAwiV_nB48tSXrhN0qrHXdU6QFPmxLTZT-cTh8u7Ha3uM66J5f8mv54kpHUuh2LsgAoVDsWwn4ZDBmPdElaLkwJcwg60o")' }}>
                            <div className="flex flex-col gap-6 text-center max-w-3xl">
                                <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
                                    Power Your Career
                                </h1>
                                <h2 className="text-gray-200 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                                    Join the Green Energy Revolution. Build a sustainable future with us while advancing your professional journey in a high-growth industry.
                                </h2>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                                    <a className="flex items-center justify-center bg-primary hover:bg-green-400 text-[#111811] text-base font-bold h-12 px-8 rounded-lg transition-colors" href="#open-roles">
                                        View Open Roles
                                    </a>
                                    <a className="flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 text-base font-bold h-12 px-8 rounded-lg transition-colors" href="#culture">
                                        Our Culture
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
                                    Our Core Values
                                </h2>
                                <p className="text-[#618961] dark:text-gray-400 text-lg max-w-[720px]">
                                    We are driven by a passion for sustainability and a commitment to excellence.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Value 1 */}
                                <div className="flex flex-col gap-4 rounded-xl border border-[#dbe6db] dark:border-[#1a2e1a] bg-white dark:bg-[#152615] p-6 hover:shadow-lg transition-shadow">
                                    <div className="text-primary">
                                        <span className="material-symbols-outlined text-4xl">eco</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-[#111811] dark:text-white text-xl font-bold">Sustainability First</h3>
                                        <p className="text-[#618961] dark:text-gray-400 text-sm leading-relaxed">
                                            We are committed to a greener planet. Every decision we make prioritizes environmental impact and long-term sustainability.
                                        </p>
                                    </div>
                                </div>

                                {/* Value 2 */}
                                <div className="flex flex-col gap-4 rounded-xl border border-[#dbe6db] dark:border-[#1a2e1a] bg-white dark:bg-[#152615] p-6 hover:shadow-lg transition-shadow">
                                    <div className="text-primary">
                                        <span className="material-symbols-outlined text-4xl">lightbulb</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-[#111811] dark:text-white text-xl font-bold">Innovation Driven</h3>
                                        <p className="text-[#618961] dark:text-gray-400 text-sm leading-relaxed">
                                            We push boundaries with the latest solar technology, constantly seeking smarter ways to power the world.
                                        </p>
                                    </div>
                                </div>

                                {/* Value 3 */}
                                <div className="flex flex-col gap-4 rounded-xl border border-[#dbe6db] dark:border-[#1a2e1a] bg-white dark:bg-[#152615] p-6 hover:shadow-lg transition-shadow">
                                    <div className="text-primary">
                                        <span className="material-symbols-outlined text-4xl">groups</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-[#111811] dark:text-white text-xl font-bold">Collaborative Spirit</h3>
                                        <p className="text-[#618961] dark:text-gray-400 text-sm leading-relaxed">
                                            We believe in the power of teams. Working together across disciplines allows us to solve complex energy challenges.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Benefits Section */}
                    <section className="py-16 px-4 md:px-10 lg:px-40 bg-white dark:bg-[#152615]">
                        <div className="max-w-[960px] mx-auto flex flex-col gap-10">
                            <div className="text-center mb-4">
                                <h2 className="text-[#111811] dark:text-white text-3xl md:text-4xl font-bold">Why Work With Us</h2>
                                <p className="text-[#618961] dark:text-gray-400 mt-2">More than just a job, it's a movement.</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {/* Benefit 1 */}
                                <div className="flex flex-col gap-3 rounded-xl border border-[#f0f4f0] dark:border-[#2a3e2a] bg-background-light dark:bg-[#102210] p-5">
                                    <div className="text-primary">
                                        <span className="material-symbols-outlined text-3xl">payments</span>
                                    </div>
                                    <div>
                                        <h3 className="text-[#111811] dark:text-white text-base font-bold">Competitive Salary</h3>
                                        <p className="text-[#618961] dark:text-gray-400 text-sm mt-1">Market-leading compensation.</p>
                                    </div>
                                </div>

                                {/* Benefit 2 */}
                                <div className="flex flex-col gap-3 rounded-xl border border-[#f0f4f0] dark:border-[#2a3e2a] bg-background-light dark:bg-[#102210] p-5">
                                    <div className="text-primary">
                                        <span className="material-symbols-outlined text-3xl">cardiology</span>
                                    </div>
                                    <div>
                                        <h3 className="text-[#111811] dark:text-white text-base font-bold">Health & Wellness</h3>
                                        <p className="text-[#618961] dark:text-gray-400 text-sm mt-1">Medical, dental, and vision.</p>
                                    </div>
                                </div>

                                {/* Benefit 3 */}
                                <div className="flex flex-col gap-3 rounded-xl border border-[#f0f4f0] dark:border-[#2a3e2a] bg-background-light dark:bg-[#102210] p-5">
                                    <div className="text-primary">
                                        <span className="material-symbols-outlined text-3xl">home_work</span>
                                    </div>
                                    <div>
                                        <h3 className="text-[#111811] dark:text-white text-base font-bold">Remote Options</h3>
                                        <p className="text-[#618961] dark:text-gray-400 text-sm mt-1">Flexible work arrangements.</p>
                                    </div>
                                </div>

                                {/* Benefit 4 */}
                                <div className="flex flex-col gap-3 rounded-xl border border-[#f0f4f0] dark:border-[#2a3e2a] bg-background-light dark:bg-[#102210] p-5">
                                    <div className="text-primary">
                                        <span className="material-symbols-outlined text-3xl">trending_up</span>
                                    </div>
                                    <div>
                                        <h3 className="text-[#111811] dark:text-white text-base font-bold">Growth Path</h3>
                                        <p className="text-[#618961] dark:text-gray-400 text-sm mt-1">Mentorship & career plans.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Open Roles Section */}
                    <section className="py-20 px-4 md:px-10 lg:px-40 bg-background-light dark:bg-background-dark" id="open-roles">
                        <div className="max-w-[960px] mx-auto flex flex-col gap-8">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <div>
                                    <h2 className="text-[#111811] dark:text-white text-3xl md:text-4xl font-bold">Open Positions</h2>
                                    <p className="text-[#618961] dark:text-gray-400 mt-1">Find the role that fits you best.</p>
                                </div>

                                {/* Visual Filters */}
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-4 py-2 rounded-full bg-primary text-[#111811] text-sm font-bold cursor-pointer">All</span>
                                    <span className="px-4 py-2 rounded-full bg-white dark:bg-[#152615] border border-gray-200 dark:border-gray-700 text-[#618961] dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-bold cursor-pointer">Engineering</span>
                                    <span className="px-4 py-2 rounded-full bg-white dark:bg-[#152615] border border-gray-200 dark:border-gray-700 text-[#618961] dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-bold cursor-pointer">Sales</span>
                                    <span className="px-4 py-2 rounded-full bg-white dark:bg-[#152615] border border-gray-200 dark:border-gray-700 text-[#618961] dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-bold cursor-pointer">Operations</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                {/* Job Card 1 */}
                                <div className={`group bg-white dark:bg-[#152615] rounded-xl border border-[#dbe6db] dark:border-[#1a2e1a] overflow-hidden transition-all duration-300 ${isOpen[0] ? 'ring-2 ring-primary/50' : ''}`}>
                                    <div
                                        className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-gray-50 dark:hover:bg-[#1a2e1a] transition-colors"
                                        onClick={() => toggleJobCard(0)}
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 w-full">
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-[#111811] dark:text-white">Senior Electrical Engineer</h3>
                                                <div className="flex gap-4 mt-1 text-sm text-[#618961] dark:text-gray-400">
                                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">engineering</span> Engineering</span>
                                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">location_on</span> San Francisco, CA</span>
                                                </div>
                                            </div>
                                            <div className="hidden md:block">
                                                <span className="text-primary font-bold text-sm uppercase tracking-wide">Full Time</span>
                                            </div>
                                        </div>
                                        <span className={`material-symbols-outlined text-[#618961] ${isOpen[0] ? 'rotate-180' : ''} transition-transform duration-300`}>expand_more</span>
                                    </div>

                                    {isOpen[0] && (
                                        <div className="px-6 pb-6 border-t border-[#f0f4f0] dark:border-[#2a3e2a]">
                                            <div className="mt-4 space-y-4 text-sm text-[#618961] dark:text-gray-300">
                                                <p>We are looking for a Senior Electrical Engineer to lead our solar PV design projects. You will be responsible for system design, permitting support, and technical oversight.</p>
                                                <div className="grid md:grid-cols-2 gap-8">
                                                    <div>
                                                        <h4 className="font-bold text-[#111811] dark:text-white mb-2">Responsibilities</h4>
                                                        <ul className="list-disc pl-5 space-y-1">
                                                            <li>Design commercial and utility-scale solar PV systems.</li>
                                                            <li>Perform electrical calculations and equipment sizing.</li>
                                                            <li>Mentor junior engineers and technical staff.</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-[#111811] dark:text-white mb-2">Requirements</h4>
                                                        <ul className="list-disc pl-5 space-y-1">
                                                            <li>Bachelor's degree in Electrical Engineering.</li>
                                                            <li>5+ years of experience in solar industry.</li>
                                                            <li>Proficiency in AutoCAD and PVSyst.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="pt-4 flex justify-end">
                                                    <button className="bg-primary hover:bg-green-400 text-[#111811] font-bold py-2 px-6 rounded-lg transition-colors flex items-center gap-2">
                                                        Apply Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Job Card 2 */}
                                <div className={`group bg-white dark:bg-[#152615] rounded-xl border border-[#dbe6db] dark:border-[#1a2e1a] overflow-hidden transition-all duration-300 ${isOpen[1] ? 'ring-2 ring-primary/50' : ''}`}>
                                    <div
                                        className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-gray-50 dark:hover:bg-[#1a2e1a] transition-colors"
                                        onClick={() => toggleJobCard(1)}
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 w-full">
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-[#111811] dark:text-white">Residential Sales Representative</h3>
                                                <div className="flex gap-4 mt-1 text-sm text-[#618961] dark:text-gray-400">
                                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">sell</span> Sales</span>
                                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">location_on</span> Austin, TX</span>
                                                </div>
                                            </div>
                                            <div className="hidden md:block">
                                                <span className="text-primary font-bold text-sm uppercase tracking-wide">Commission Based</span>
                                            </div>
                                        </div>
                                        <span className={`material-symbols-outlined text-[#618961] ${isOpen[1] ? 'rotate-180' : ''} transition-transform duration-300`}>expand_more</span>
                                    </div>

                                    {isOpen[1] && (
                                        <div className="px-6 pb-6 border-t border-[#f0f4f0] dark:border-[#2a3e2a]">
                                            <div className="mt-4 space-y-4 text-sm text-[#618961] dark:text-gray-300">
                                                <p>Join our high-performing sales team and help homeowners switch to clean energy. This role offers high earning potential and flexible hours.</p>
                                                <div className="grid md:grid-cols-2 gap-8">
                                                    <div>
                                                        <h4 className="font-bold text-[#111811] dark:text-white mb-2">Responsibilities</h4>
                                                        <ul className="list-disc pl-5 space-y-1">
                                                            <li>Conduct in-home solar consultations.</li>
                                                            <li>Generate leads and manage pipeline.</li>
                                                            <li>Educate customers on solar benefits and savings.</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-[#111811] dark:text-white mb-2">Requirements</h4>
                                                        <ul className="list-disc pl-5 space-y-1">
                                                            <li>Strong communication and interpersonal skills.</li>
                                                            <li>Previous sales experience preferred.</li>
                                                            <li>Self-motivated and goal-oriented.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="pt-4 flex justify-end">
                                                    <button className="bg-primary hover:bg-green-400 text-[#111811] font-bold py-2 px-6 rounded-lg transition-colors flex items-center gap-2">
                                                        Apply Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Job Card 3 */}
                                <div className={`group bg-white dark:bg-[#152615] rounded-xl border border-[#dbe6db] dark:border-[#1a2e1a] overflow-hidden transition-all duration-300 ${isOpen[2] ? 'ring-2 ring-primary/50' : ''}`}>
                                    <div
                                        className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-gray-50 dark:hover:bg-[#1a2e1a] transition-colors"
                                        onClick={() => toggleJobCard(2)}
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 w-full">
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-[#111811] dark:text-white">Project Manager</h3>
                                                <div className="flex gap-4 mt-1 text-sm text-[#618961] dark:text-gray-400">
                                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">manage_accounts</span> Operations</span>
                                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">location_on</span> Denver, CO</span>
                                                </div>
                                            </div>
                                            <div className="hidden md:block">
                                                <span className="text-primary font-bold text-sm uppercase tracking-wide">Full Time</span>
                                            </div>
                                        </div>
                                        <span className={`material-symbols-outlined text-[#618961] ${isOpen[2] ? 'rotate-180' : ''} transition-transform duration-300`}>expand_more</span>
                                    </div>

                                    {isOpen[2] && (
                                        <div className="px-6 pb-6 border-t border-[#f0f4f0] dark:border-[#2a3e2a]">
                                            <div className="mt-4 space-y-4 text-sm text-[#618961] dark:text-gray-300">
                                                <p>Oversee residential and commercial solar installations from contract to completion. Ensure projects are delivered on time and within budget.</p>
                                                <div className="pt-4 flex justify-end">
                                                    <button className="bg-primary hover:bg-green-400 text-[#111811] font-bold py-2 px-6 rounded-lg transition-colors flex items-center gap-2">
                                                        Apply Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Job Card 4 */}
                                <div className={`group bg-white dark:bg-[#152615] rounded-xl border border-[#dbe6db] dark:border-[#1a2e1a] overflow-hidden transition-all duration-300 ${isOpen[3] ? 'ring-2 ring-primary/50' : ''}`}>
                                    <div
                                        className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-gray-50 dark:hover:bg-[#1a2e1a] transition-colors"
                                        onClick={() => toggleJobCard(3)}
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 w-full">
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-[#111811] dark:text-white">Solar Technician</h3>
                                                <div className="flex gap-4 mt-1 text-sm text-[#618961] dark:text-gray-400">
                                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">build</span> Technical</span>
                                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">location_on</span> Phoenix, AZ</span>
                                                </div>
                                            </div>
                                            <div className="hidden md:block">
                                                <span className="text-primary font-bold text-sm uppercase tracking-wide">Full Time</span>
                                            </div>
                                        </div>
                                        <span className={`material-symbols-outlined text-[#618961] ${isOpen[3] ? 'rotate-180' : ''} transition-transform duration-300`}>expand_more</span>
                                    </div>

                                    {isOpen[3] && (
                                        <div className="px-6 pb-6 border-t border-[#f0f4f0] dark:border-[#2a3e2a]">
                                            <div className="mt-4 space-y-4 text-sm text-[#618961] dark:text-gray-300">
                                                <p>Hands-on role installing, maintaining, and repairing solar systems. Requires field work and travel.</p>
                                                <div className="pt-4 flex justify-end">
                                                    <button className="bg-primary hover:bg-green-400 text-[#111811] font-bold py-2 px-6 rounded-lg transition-colors flex items-center gap-2">
                                                        Apply Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* General Application Form */}
                    <section className="py-16 px-4 md:px-10 lg:px-40 bg-white dark:bg-[#152615] border-t border-[#f0f4f0] dark:border-[#2a3e2a]">
                        <div className="max-w-[800px] mx-auto">
                            <div className="bg-background-light dark:bg-[#102210] rounded-2xl p-8 md:p-12 shadow-sm border border-[#dbe6db] dark:border-[#1a2e1a]">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#111811] dark:text-white mb-3">Don't see your role?</h2>
                                    <p className="text-[#618961] dark:text-gray-400">Send us your resume and we'll keep you in mind for future opportunities.</p>
                                </div>

                                <form className="flex flex-col gap-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-bold text-[#111811] dark:text-white" htmlFor="first-name">First Name</label>
                                            <input
                                                className="h-12 w-full rounded-lg border border-[#dbe6db] dark:border-[#2a3e2a] bg-white dark:bg-[#152615] px-4 text-[#111811] dark:text-white placeholder:text-[#618961] focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                                                id="first-name"
                                                placeholder="Jane"
                                                type="text"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-bold text-[#111811] dark:text-white" htmlFor="last-name">Last Name</label>
                                            <input
                                                className="h-12 w-full rounded-lg border border-[#dbe6db] dark:border-[#2a3e2a] bg-white dark:bg-[#152615] px-4 text-[#111811] dark:text-white placeholder:text-[#618961] focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                                                id="last-name"
                                                placeholder="Doe"
                                                type="text"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-[#111811] dark:text-white" htmlFor="email">Email Address</label>
                                        <input
                                            className="h-12 w-full rounded-lg border border-[#dbe6db] dark:border-[#2a3e2a] bg-white dark:bg-[#152615] px-4 text-[#111811] dark:text-white placeholder:text-[#618961] focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                                            id="email"
                                            placeholder="jane@example.com"
                                            type="email"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-[#111811] dark:text-white" htmlFor="department">Department of Interest</label>
                                        <select
                                            className="h-12 w-full rounded-lg border border-[#dbe6db] dark:border-[#2a3e2a] bg-white dark:bg-[#152615] px-4 text-[#111811] dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                                            id="department"
                                        >
                                            <option>Engineering</option>
                                            <option>Sales</option>
                                            <option>Operations</option>
                                            <option>Marketing</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-[#111811] dark:text-white" htmlFor="resume">Upload Resume</label>
                                        <div className="h-24 w-full rounded-lg border-2 border-dashed border-[#dbe6db] dark:border-[#2a3e2a] bg-white dark:bg-[#152615] flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-colors">
                                            <span className="material-symbols-outlined text-[#618961]">cloud_upload</span>
                                            <span className="text-xs text-[#618961] mt-1">Click to upload or drag and drop (PDF)</span>
                                        </div>
                                    </div>

                                    <button className="bg-primary hover:bg-green-400 text-[#111811] text-base font-bold h-12 w-full rounded-lg transition-colors mt-2">
                                        Submit Application
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="bg-white dark:bg-[#102210] border-t border-[#f0f4f0] dark:border-[#1a2e1a] pt-16 pb-8 px-4 md:px-10 lg:px-40">
                        <div className="max-w-[1280px] mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-2 text-[#111811] dark:text-white">
                                        <span className="material-symbols-outlined text-primary text-2xl">solar_power</span>
                                        <span className="font-bold text-lg">SolarTech</span>
                                    </div>
                                    <p className="text-sm text-[#618961] dark:text-gray-400">Powering a brighter, cleaner future for everyone.</p>
                                </div>

                                <div>
                                    <h4 className="font-bold text-[#111811] dark:text-white mb-4">Company</h4>
                                    <ul className="flex flex-col gap-2 text-sm text-[#618961] dark:text-gray-400">
                                        <li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
                                        <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
                                        <li><a className="hover:text-primary transition-colors" href="#">Press</a></li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold text-[#111811] dark:text-white mb-4">Services</h4>
                                    <ul className="flex flex-col gap-2 text-sm text-[#618961] dark:text-gray-400">
                                        <li><a className="hover:text-primary transition-colors" href="#">Residential Solar</a></li>
                                        <li><a className="hover:text-primary transition-colors" href="#">Commercial Solar</a></li>
                                        <li><a className="hover:text-primary transition-colors" href="#">Battery Storage</a></li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold text-[#111811] dark:text-white mb-4">Connect</h4>
                                    <ul className="flex flex-col gap-2 text-sm text-[#618961] dark:text-gray-400">
                                        <li><a className="hover:text-primary transition-colors" href="#">LinkedIn</a></li>
                                        <li><a className="hover:text-primary transition-colors" href="#">Twitter</a></li>
                                        <li><a className="hover:text-primary transition-colors" href="#">Instagram</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="border-t border-[#f0f4f0] dark:border-[#2a3e2a] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#618961] dark:text-gray-500">
                                <p>© 2024 SolarTech Inc. All rights reserved.</p>
                                <div className="flex gap-4">
                                    <a className="hover:text-[#111811] dark:hover:text-white" href="#">Privacy Policy</a>
                                    <a className="hover:text-[#111811] dark:hover:text-white" href="#">Terms of Service</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}