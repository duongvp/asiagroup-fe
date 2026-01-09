'use client';

import { useState } from 'react';
import Head from 'next/head';

export default function SolarTech() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [email, setEmail] = useState('');

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Thank you! We'll contact you at ${email}`);
        setEmail('');
    };

    return (
        <>
            <Head>
                <title>SolarTech - Modern Energy Solutions</title>
                <meta name="description" content="Power Your Future with Clean Energy" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <div className={`${isDarkMode ? 'dark' : ''}`}>
                <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                    {/* Top Navigation */}
                    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-[#2a3c2a] bg-white/95 dark:bg-surface-dark/95 backdrop-blur-sm">
                        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center gap-2">
                                <div className="flex items-center justify-center size-8 rounded bg-primary/20 text-primary">
                                    <span className="material-symbols-outlined text-2xl">solar_power</span>
                                </div>
                                <span className="text-xl font-bold tracking-tight text-text-main dark:text-white">SolarTech</span>
                            </div>

                            <nav className="hidden md:flex items-center gap-8">
                                <a className="text-sm font-medium text-text-main hover:text-primary dark:text-gray-200 dark:hover:text-primary transition-colors" href="#solutions">
                                    Solutions
                                </a>
                                <a className="text-sm font-medium text-text-main hover:text-primary dark:text-gray-200 dark:hover:text-primary transition-colors" href="#commercial">
                                    Commercial
                                </a>
                                <a className="text-sm font-medium text-text-main hover:text-primary dark:text-gray-200 dark:hover:text-primary transition-colors" href="#technology">
                                    Technology
                                </a>
                                <a className="text-sm font-medium text-text-main hover:text-primary dark:text-gray-200 dark:hover:text-primary transition-colors" href="#contact">
                                    Contact
                                </a>
                            </nav>

                            <div className="flex items-center gap-4">
                                <button className="hidden sm:flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-text-main hover:bg-opacity-90 transition-all">
                                    Get a Quote
                                </button>

                                {/* Dark Mode Toggle */}
                                <button
                                    onClick={toggleDarkMode}
                                    className="p-2 text-text-main dark:text-white"
                                >
                                    <span className="material-symbols-outlined">
                                        {isDarkMode ? 'light_mode' : 'dark_mode'}
                                    </span>
                                </button>

                                {/* Mobile Menu Button */}
                                <button className="md:hidden p-2 text-text-main dark:text-white">
                                    <span className="material-symbols-outlined">menu</span>
                                </button>
                            </div>
                        </div>
                    </header>

                    {/* Hero Section */}
                    <section className="relative w-full py-12 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Text Content */}
                            <div className="flex flex-col gap-6 order-2 lg:order-1">
                                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-green-700 dark:text-green-400 w-fit">
                                    <span className="size-2 rounded-full bg-primary"></span>
                                    Sustainable Future
                                </div>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-text-main dark:text-white">
                                    Power Your Future with{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-primary">
                                        Clean Energy
                                    </span>
                                </h1>
                                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
                                    Discover tailored solar solutions for your home or business. Reduce your carbon footprint and eliminate energy bills with our high-efficiency systems.
                                </p>
                                <div className="flex flex-wrap gap-4 pt-2">
                                    <a className="flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-bold text-text-main shadow-lg shadow-green-500/30 hover:shadow-xl hover:translate-y-[-2px] transition-all" href="#residential">
                                        Home Solutions
                                    </a>
                                    <a className="flex items-center justify-center rounded-lg bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 px-8 py-3 text-base font-bold text-text-main dark:text-white hover:bg-gray-50 dark:hover:bg-[#253825] transition-all" href="#commercial">
                                        Business Solutions
                                    </a>
                                </div>
                                <div className="flex items-center gap-6 pt-4 text-sm text-gray-500 dark:text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-xl">verified</span>
                                        <span>25-Year Warranty</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-xl">savings</span>
                                        <span>$0 Down Options</span>
                                    </div>
                                </div>
                            </div>

                            {/* Hero Image */}
                            <div className="relative order-1 lg:order-2 h-64 sm:h-96 lg:h-auto min-h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl group">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{
                                        backgroundImage: `url('https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')`,
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <p className="font-bold text-lg">Trusted by 10,000+ Homeowners</p>
                                    <div className="flex gap-1 mt-1">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="material-symbols-outlined text-primary fill-current text-sm">star</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Residential Solutions Section */}
                    <section className="w-full py-16 bg-white dark:bg-surface-dark" id="residential">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="mb-12 text-center max-w-3xl mx-auto">
                                <h2 className="text-3xl font-bold tracking-tight text-text-main dark:text-white sm:text-4xl mb-4">Residential Solar Packages</h2>
                                <p className="text-gray-600 dark:text-gray-300">Choose the perfect energy independence plan for your home. All packages include installation, permitting, and monitoring.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* Starter Card */}
                                <div className="flex flex-col rounded-2xl border border-gray-200 dark:border-gray-700 bg-surface-light dark:bg-[#152615] p-8 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden">
                                    <div className="mb-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-xl font-bold text-text-main dark:text-white">Starter System</h3>
                                            <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs font-bold text-gray-600 dark:text-gray-300">Basic</span>
                                        </div>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-4xl font-black text-text-main dark:text-white">$12k</span>
                                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">/ estimated net cost</span>
                                        </div>
                                        <p className="text-xs text-green-600 dark:text-green-400 mt-1 font-medium">*After federal tax incentives</p>
                                    </div>
                                    <div className="flex-1 space-y-4 mb-8">
                                        {[
                                            "4kW System Capacity",
                                            "10-12 High-Efficiency Panels",
                                            "Standard Inverter",
                                            "25-Year Performance Warranty"
                                        ].map((feature, index) => (
                                            <div key={index} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-200">
                                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                    <button className="w-full rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-4 py-3 text-sm font-bold text-text-main dark:text-white transition-colors">
                                        View Details
                                    </button>
                                </div>

                                {/* Family Plus Card (Highlighted) */}
                                <div className="flex flex-col rounded-2xl border-2 border-primary bg-white dark:bg-[#1a2e1a] p-8 shadow-xl relative overflow-hidden transform md:-translate-y-4">
                                    <div className="absolute top-0 inset-x-0 h-1 bg-primary"></div>
                                    <div className="mb-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-xl font-bold text-text-main dark:text-white">Family Plus</h3>
                                            <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-black">Most Popular</span>
                                        </div>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-4xl font-black text-text-main dark:text-white">$18k</span>
                                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">/ estimated net cost</span>
                                        </div>
                                        <p className="text-xs text-green-600 dark:text-green-400 mt-1 font-medium">*After federal tax incentives</p>
                                    </div>
                                    <div className="flex-1 space-y-4 mb-8">
                                        {[
                                            "8kW System Capacity",
                                            "20-24 Premium Panels",
                                            "Micro-Inverter Upgrade",
                                            "Smart Monitoring App"
                                        ].map((feature, index) => (
                                            <div key={index} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-200">
                                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                    <button className="w-full rounded-lg bg-primary hover:bg-green-400 px-4 py-3 text-sm font-bold text-text-main transition-colors shadow-lg shadow-green-500/20">
                                        Configure System
                                    </button>
                                </div>

                                {/* Premium Card */}
                                <div className="flex flex-col rounded-2xl border border-gray-200 dark:border-gray-700 bg-surface-light dark:bg-[#152615] p-8 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden">
                                    <div className="mb-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-xl font-bold text-text-main dark:text-white">Energy Independence</h3>
                                            <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs font-bold text-gray-600 dark:text-gray-300">Storage Included</span>
                                        </div>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-4xl font-black text-text-main dark:text-white">$25k</span>
                                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">/ estimated net cost</span>
                                        </div>
                                        <p className="text-xs text-green-600 dark:text-green-400 mt-1 font-medium">*After federal tax incentives</p>
                                    </div>
                                    <div className="flex-1 space-y-4 mb-8">
                                        {[
                                            "10kW+ System Capacity",
                                            "13.5 kWh Battery Storage",
                                            "Off-Grid Capabilities",
                                            "EV Charger Integration"
                                        ].map((feature, index) => (
                                            <div key={index} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-200">
                                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                    <button className="w-full rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-4 py-3 text-sm font-bold text-text-main dark:text-white transition-colors">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Commercial/Business Section */}
                    <section className="w-full py-16 bg-background-light dark:bg-background-dark" id="commercial">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="rounded-3xl bg-white dark:bg-[#1a2e1a] overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800">
                                <div className="grid grid-cols-1 lg:grid-cols-2">
                                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                                        <div className="inline-flex items-center gap-2 text-primary font-bold tracking-wide uppercase text-sm mb-4">
                                            <span className="material-symbols-outlined text-lg">domain</span>
                                            Commercial Grade
                                        </div>
                                        <h2 className="text-3xl lg:text-4xl font-black text-text-main dark:text-white mb-6">
                                            Scale Up Your Sustainability
                                        </h2>
                                        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                                            From small businesses to large industrial complexes, SolarTech provides scalable energy solutions that reduce overhead and demonstrate corporate responsibility.
                                        </p>
                                        <div className="space-y-6">
                                            {[
                                                {
                                                    icon: "trending_up",
                                                    title: "High ROI",
                                                    description: "Typical payback period of 3-5 years with current tax incentives."
                                                },
                                                {
                                                    icon: "factory",
                                                    title: "Custom Engineering",
                                                    description: "Tailored arrays for flat roofs, carports, or ground mounts."
                                                }
                                            ].map((item, index) => (
                                                <div key={index} className="flex gap-4">
                                                    <div className="flex-shrink-0 size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                                        <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-text-main dark:text-white text-lg">{item.title}</h4>
                                                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-10">
                                            <button className="rounded-lg bg-text-main dark:bg-white text-white dark:text-black px-8 py-3 font-bold hover:bg-opacity-90 transition-opacity">
                                                Request Commercial Proposal
                                            </button>
                                        </div>
                                    </div>
                                    <div className="relative h-64 lg:h-auto min-h-[400px]">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center"
                                            style={{
                                                backgroundImage: `url('https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')`,
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10 lg:to-transparent"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Technology Features Section */}
                    <section className="w-full py-16 lg:py-24" id="technology">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold text-text-main dark:text-white sm:text-4xl">Why Choose Our Technology?</h2>
                                <p className="mt-4 text-gray-600 dark:text-gray-400">We partner with industry leaders to bring you the most efficient and durable hardware.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {[
                                    {
                                        icon: "bolt",
                                        title: "High Efficiency",
                                        description: "Our N-type monocrystalline panels operate at 22%+ efficiency, capturing more sunlight even on cloudy days."
                                    },
                                    {
                                        icon: "shield",
                                        title: "Durability First",
                                        description: "Tested against hail, hurricane winds, and extreme heat. Built to last 30+ years with minimal degradation."
                                    },
                                    {
                                        icon: "smartphone",
                                        title: "Smart Monitoring",
                                        description: "Track your production and consumption in real-time via our mobile app. Get alerts for system optimization."
                                    },
                                    {
                                        icon: "design_services",
                                        title: "Sleek Design",
                                        description: "All-black panels and low-profile mounting systems ensure your roof looks modern and clean, not cluttered."
                                    }
                                ].map((feature, index) => (
                                    <div key={index} className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-white hover:dark:bg-[#1a2e1a] hover:shadow-xl transition-all duration-300 group">
                                        <div className="size-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined text-4xl">{feature.icon}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-text-main dark:text-white mb-3">{feature.title}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="w-full py-20 bg-background-dark relative overflow-hidden" id="contact">
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#13ec13 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                        <div className="relative max-w-4xl mx-auto px-4 text-center">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">Ready to make the switch?</h2>
                            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Get a free, custom solar design for your property in less than 24 hours. No commitment required.</p>
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                                <input
                                    className="flex-1 rounded-lg border-0 px-5 py-4 text-gray-900 focus:ring-2 focus:ring-primary outline-none"
                                    placeholder="Enter your email address"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button
                                    className="bg-primary hover:bg-green-500 text-background-dark font-bold py-4 px-8 rounded-lg transition-colors shadow-[0_0_20px_rgba(19,236,19,0.3)] hover:shadow-[0_0_30px_rgba(19,236,19,0.5)]"
                                    type="submit"
                                >
                                    Get Started
                                </button>
                            </form>
                            <p className="mt-4 text-sm text-gray-500">Join 500+ businesses and 10k+ homes powered by SolarTech.</p>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 pt-16 pb-8">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-text-main dark:text-white">
                                        <div className="flex items-center justify-center size-6 rounded bg-primary text-text-main">
                                            <span className="material-symbols-outlined text-sm">solar_power</span>
                                        </div>
                                        <span className="text-lg font-bold">SolarTech</span>
                                    </div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Leading the transition to sustainable energy with cutting-edge solar technology for everyone.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-bold text-text-main dark:text-white mb-4">Solutions</h4>
                                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                        {["Residential Solar", "Commercial Solar", "Battery Storage", "EV Charging"].map((item, index) => (
                                            <li key={index}>
                                                <a className="hover:text-primary transition-colors" href="#">{item}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold text-text-main dark:text-white mb-4">Company</h4>
                                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                        {["About Us", "Projects", "Careers", "Contact"].map((item, index) => (
                                            <li key={index}>
                                                <a className="hover:text-primary transition-colors" href="#">{item}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold text-text-main dark:text-white mb-4">Contact</h4>
                                    <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                                        {[
                                            { icon: "call", text: "+1 (555) 123-4567" },
                                            { icon: "mail", text: "hello@solartech.com" },
                                            { icon: "location_on", text: "123 Sun Valley Dr, CA" }
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-primary text-sm">{item.icon}</span>
                                                {item.text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                                <p className="text-xs text-gray-400">© 2024 SolarTech Inc. All rights reserved.</p>
                                <div className="flex gap-6">
                                    <a className="text-gray-400 hover:text-primary text-xs" href="#">Privacy Policy</a>
                                    <a className="text-gray-400 hover:text-primary text-xs" href="#">Terms of Service</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}