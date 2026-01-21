'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    SolarPanel,
    Bolt,
    CircleDollarSign,
    Leaf,
    Timer,
    ArrowLeft,
    Info,
    Star,
    ExternalLink,
    ShieldCheck,
    Menu,
    Quote
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function JohnsonCaseStudy() {
    // Dữ liệu ảnh thực tế từ Unsplash cho case study
    const installationImages = [
        { id: 17, url: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=800", alt: "Roof Inspection" },
        { id: 18, url: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=800", alt: "Panel Installation" },
        { id: 15, url: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800", alt: "Completed System" },
    ];

    return (
        <div className="min-h-screen bg-[#f6f8f6] dark:bg-[#102210] text-[#111811] dark:text-white font-sans transition-colors duration-300">

            {/* Header - Sử dụng component chung của bạn */}
            <Header />

            <main className="grow">
                {/* Navigation & ID Bar */}
                <div className="max-w-[1200px] mx-auto px-6 py-6 flex items-center justify-between">
                    <Link
                        href="/testimonials"
                        className="flex items-center gap-2 text-gray-500 hover:text-[#13ec13] transition-colors text-sm font-semibold"
                    >
                        <ArrowLeft size={16} /> Back to Testimonials
                    </Link>
                    <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">
                        Residential Case Study #241
                    </div>
                </div>

                {/* Hero Banner */}
                <div className="w-full px-6 max-w-[1200px] mx-auto">
                    <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl group">
                        <Image
                            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600"
                            alt="The Johnson Family Residence"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-10 text-white">
                            <span className="inline-block px-3 py-1 rounded-full bg-[#13ec13]/20 backdrop-blur-md text-[#13ec13] text-xs font-bold mb-4 uppercase tracking-wider border border-[#13ec13]/30">
                                San Diego, CA
                            </span>
                            <h1 className="text-4xl md:text-5xl font-black mb-2">The Johnson Family Residence</h1>
                            <p className="text-gray-300 text-lg max-w-xl">
                                How a 12.4kW system transformed their energy independence and eliminated monthly bills.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Impact Stats Grid */}
                <div className="max-w-[1200px] mx-auto px-6 -mt-10 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-white/10">
                        <StatBox icon={<Bolt className="text-[#13ec13]" />} label="System Size" value="12.4 kW" />
                        <StatBox icon={<CircleDollarSign className="text-[#13ec13]" />} label="Annual Savings" value="$2,840" />
                        <StatBox icon={<Leaf className="text-sky-500" />} label="CO2 Offset" value="8.2 Tons" />
                        <StatBox icon={<Timer className="text-[#13ec13]" />} label="Payback Period" value="5.8 Years" />
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="max-w-[1200px] mx-auto px-6 py-16">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Story & Gallery Section */}
                        <div className="lg:w-2/3">
                            <div className="mb-12">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="relative size-16 rounded-full border-4 border-white shadow-md overflow-hidden">
                                        <Image
                                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
                                            alt="Marcus Johnson"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">The Johnson Story</h3>
                                        <p className="text-gray-500 text-sm">Homeowners since 2015 • SolarTech customers since 2022</p>
                                    </div>
                                </div>

                                <h2 className="text-3xl font-black mb-8 text-[#111811] dark:text-white">
                                    "It felt like we were throwing money away every summer."
                                </h2>

                                <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-8">
                                    <p className="text-lg font-medium italic border-l-4 border-[#13ec13] pl-6 py-2 bg-[#13ec13]/5">
                                        We sat down with Marcus Johnson to discuss his journey from skeptical utility customer to enthusiastic solar advocate.
                                    </p>

                                    <div>
                                        <h4 className="font-bold text-lg mb-2 text-[#13ec13]">What motivated you to consider solar?</h4>
                                        <p>For years, our electricity bill was a source of constant stress, especially during the San Diego summers. Our bills were hitting $400-500 a month. Beyond the financial aspect, we wanted to do our part for the environment.</p>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-lg mb-2 text-[#13ec13]">How was your experience with SolarTech Solutions?</h4>
                                        <p>From the first consultation, the difference was clear. The installation process was remarkably clean. The crew was professional, arrived on time, and finished the entire array in just two days.</p>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-lg mb-2 text-[#13ec13]">What has the impact been since going live?</h4>
                                        <p>It's been a game-changer. Our first full month, our bill was literally $12. Seeing the meter run backwards on a sunny day never gets old. We also have the battery backup now for total security.</p>
                                    </div>
                                </div>
                            </div>

                            {/* In-article Gallery */}
                            <div className="pt-10 border-t border-gray-200 dark:border-gray-800">
                                <h3 className="text-2xl font-bold mb-8">Installation Journey</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {installationImages.map((img) => (
                                        <div key={img.id} className="relative aspect-square rounded-xl overflow-hidden group shadow-sm">
                                            <Image
                                                src={img.url}
                                                alt={img.alt}
                                                fill
                                                className="object-cover transition-transform group-hover:scale-110"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Specs */}
                        <div className="lg:w-1/3">
                            <div className="sticky top-24 space-y-8">
                                {/* Project Specs Card */}
                                <div className="bg-white dark:bg-[#1a2e1a] rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm">
                                    <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                                        <Info className="text-[#13ec13]" size={20} /> Project Specs
                                    </h4>
                                    <ul className="space-y-4">
                                        <SpecRow label="Solar Panels" value="32x High-Efficiency Mono" />
                                        <SpecRow label="Inverter Type" value="Micro-inverter System" />
                                        <SpecRow label="Storage" value="13.5kWh Smart Battery" />
                                        <SpecRow label="Mounting" value="Low-Profile Flush Mount" />
                                        <SpecRow label="Warranty" value="25-Year Performance" last />
                                    </ul>
                                </div>

                                {/* Review Card */}
                                <div className="bg-[#13ec13]/10 rounded-2xl p-8 border border-[#13ec13]/20 relative overflow-hidden">
                                    <Quote className="absolute -top-4 -right-4 size-24 text-[#13ec13]/10" />
                                    <p className="text-[#13ec13] font-bold text-lg mb-4 relative z-10">
                                        "Best home investment we've ever made. The ROI is real and the peace of mind is priceless."
                                    </p>
                                    <div className="flex items-center gap-1 text-[#13ec13]">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                                    </div>
                                </div>

                                {/* Impact Card */}
                                <div className="bg-sky-500/10 rounded-2xl p-8 border border-sky-500/20">
                                    <h4 className="font-bold mb-2">Sustainable Choice</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                        The Johnson's project is equivalent to planting 125 trees every year.
                                    </p>
                                    <Link href="#" className="text-sky-500 font-bold text-sm flex items-center gap-2 hover:underline">
                                        Calculate your impact <ExternalLink size={14} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <section className="w-full bg-[#102210] py-20 px-6">
                    <div className="max-w-[1000px] mx-auto text-center">
                        <h2 className="text-white text-4xl md:text-5xl font-black mb-6">Ready to Switch to Solar?</h2>
                        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
                            Join the Johnson family and 2,000+ others who have secured their energy future with SolarTech Solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="w-full sm:w-auto px-10 py-4 bg-[#13ec13] text-[#102210] font-black rounded-xl hover:bg-[#0fbd0f] transition-all transform hover:-translate-y-1 shadow-xl">
                                Get Your Free Estimate
                            </button>
                            <button className="w-full sm:w-auto px-10 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/20 hover:bg-white/10 transition-all">
                                Speak with an Expert
                            </button>
                        </div>

                        {/* Certifications */}
                        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-50">
                            <CertBadge text="EnergyStar Partner" />
                            <CertBadge text="NABCEP Certified" />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

// --- Helper Components ---

function StatBox({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
    return (
        <div className="bg-white dark:bg-[#1a2e1a] p-6 text-center group hover:bg-[#13ec13]/5 transition-colors">
            <div className="flex justify-center mb-1">{icon}</div>
            <p className="text-xs text-gray-500 uppercase font-bold tracking-tighter mb-1">{label}</p>
            <p className="text-2xl font-black text-[#111811] dark:text-white">{value}</p>
        </div>
    );
}

function SpecRow({ label, value, last = false }: { label: string, value: string, last?: boolean }) {
    return (
        <li className={`flex justify-between items-center pb-4 ${!last ? 'border-b border-gray-100 dark:border-gray-800' : ''}`}>
            <span className="text-gray-500 text-sm">{label}</span>
            <span className="font-bold text-sm text-right">{value}</span>
        </li>
    );
}

function CertBadge({ text }: { text: string }) {
    return (
        <span className="text-white font-bold tracking-tighter text-lg italic flex items-center gap-2">
            <ShieldCheck className="text-[#13ec13]" size={20} /> {text}
        </span>
    );
}