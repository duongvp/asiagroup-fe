'use client';

import React from 'react';
import Head from 'next/head';
import {
    ArrowLeft,
    Bolt,
    Leaf,
    PiggyBank,
    Timer,
    Info,
    Star,
    ExternalLink,
    ShieldCheck,
    Award
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

// Mock data - Trong thực tế bạn có thể fetch từ API dựa trên ID
const projectData = {
    id: "johnson-residence",
    location: "San Diego, CA",
    title: "The Johnson Family Residence",
    description: "How a 12.4kW system transformed their energy independence and eliminated monthly bills.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB85PJPUinJ4ClWzMQiUN9MHDCiipf_XTS-kpi7gYZPdKofU6169spE617lh5FpW_shSfEUP0-nYu6x5DObxqO7xuJTs-CMV-GQ649LWlllOI-VYGHmjSEk3Cricgzr_DMzGUf-2RbIKj421MVccBkgcgcXPN4chhf0Y7XOkSS4yXMo6TL_ICrHgRHWGogian5oLfK64NkdBe7v9KmQlZF-LmvcDY1WF6IQCLD7Zd8RL1coG0JCKeI9klEyRNPg9-qP5kiwjV06VLA",
    stats: [
        { icon: <Bolt className="text-primary" size={28} />, label: "System Size", value: "12.4 kW" },
        { icon: <PiggyBank className="text-primary" size={28} />, label: "Annual Savings", value: "$2,840" },
        { icon: <Leaf className="text-secondary-blue" size={28} />, label: "CO2 Offset", value: "8.2 Tons" },
        { icon: <Timer className="text-primary" size={28} />, label: "Payback Period", value: "5.8 Years" }
    ],
    specs: [
        { label: "Solar Panels", value: "32x High-Efficiency Mono" },
        { label: "Inverter Type", value: "Micro-inverter System" },
        { label: "Storage", value: "13.5kWh Smart Battery" },
        { label: "Mounting", value: "Low-Profile Flush Mount" },
        { label: "Warranty", value: "25-Year Performance" }
    ],
    gallery: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBJyLCPq6fOSVXQrTBwsA4c-87AFpNvpNkUo3u01zXyio_wZzXgL66aQuHTEJBHCMd6ZtqlbQMXCEzhMmaKv0QWadoHW8VbGFbsQgxIow2nxWQ1jy9IkT7Evqp18uJ1fJq03S351r0s4kMvFvuhP8q6qxDZnjPj3OrAbfVbYZ56jYHL7SEsyym6HJaBpWOuyzU_019xcNqWGt7SxE-Cylaqi4P-ORkpdU08FrxUClgndyV59xd1cWbVW87mi6AvjokfKGcQxbSqxng",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA1oCOQTukeu1oosxHr4ivRjV_YoyzJP0SiA5ObPfBGfw-h0BW6Z3509iMRVSxiPAIUmuvPeYq9HAiP9CJPEFXl9bUHb0gOGv8_UJP1hp1KA-y00lGtsm1xy8GGVnFPfMBA56tUUa2aYyqijrh20iOGfmWFNWAl3edxCsDsxnajgFDrQEVWJ1YNGm6vO5napZoVcLYbMsnZYNcjw7v1iZDPQCx-zJ-1UwtzBU_supunmU0XIaycH_eKe9uqzLwUMpx1AQLV1fFEdlw",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB85PJPUinJ4ClWzMQiUN9MHDCiipf_XTS-kpi7gYZPdKofU6169spE617lh5FpW_shSfEUP0-nYu6x5DObxqO7xuJTs-CMV-GQ649LWlllOI-VYGHmjSEk3Cricgzr_DMzGUf-2RbIKj421MVccBkgcgcXPN4chhf0Y7XOkSS4yXMo6TL_ICrHgRHWGogian5oLfK64NkdBe7v9KmQlZF-LmvcDY1WF6IQCLD7Zd8RL1coG0JCKeI9klEyRNPg9-qP5kiwjV06VLA"
    ]
};

export default function CaseStudyDetail() {
    const t = useTranslations('CaseStudy'); // Giả định bạn đã config i18n

    return (
        <>
            <Head>
                <title>{projectData.title} - SolarTech Solutions</title>
            </Head>

            <div className="bg-background-light dark:bg-background-dark text-[#111811] dark:text-white font-display min-h-screen">
                <main className="max-w-[1200px] mx-auto px-6 py-8">

                    {/* Navigation & Header */}
                    <div className="flex items-center justify-between mb-8">
                        <Link
                            href="/testimonials"
                            className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm font-semibold group"
                        >
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Testimonials
                        </Link>
                        <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">
                            Case Study #241
                        </div>
                    </div>

                    {/* Hero Banner */}
                    <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl mb-12">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
                            style={{ backgroundImage: `url('${projectData.heroImage}')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-10 text-white">
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md text-primary text-xs font-bold mb-4 uppercase tracking-wider border border-primary/30">
                                {projectData.location}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-black mb-2">{projectData.title}</h1>
                            <p className="text-gray-300 text-lg max-w-xl">{projectData.description}</p>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="relative z-10 -mt-20 mb-16 px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-white/10">
                            {projectData.stats.map((stat, idx) => (
                                <div key={idx} className="bg-white dark:bg-[#1a2e1a] p-8 text-center flex flex-col items-center gap-2">
                                    {stat.icon}
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-tighter">{stat.label}</p>
                                    <p className="text-2xl font-black">{stat.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Main Content Area */}
                        <div className="lg:w-2/3">
                            <div className="mb-12">
                                <div className="flex items-center gap-4 mb-6">
                                    <div
                                        className="size-16 rounded-full bg-cover bg-center border-4 border-white shadow-md"
                                        style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAeLYSJnhuMLYO4S0zvOv1s1nhaQ3DcZJstSc4ku0Pl6cxLHBHG724L1OQLBFhKHjyv5nYSR7CdEc1tUHvUAO0ul54siNOjDdR2KBTurkP7UCUsfk-5TRIILjze3NA5vYxecq2PeoxI39bcUmVc7-qlHKpbwsZHZ6I29lbOAzFI334XfWU5lSDMQigobVl3lhahNxP-Ey8FPDt-hDuNwX8cgDxpsevF-EPx1oFYWWMTh-CljpgVQzOoLtuaP804Hq_xBiYElCpLjyU')` }}
                                    />
                                    <div>
                                        <h3 className="text-xl font-bold">The Johnson Story</h3>
                                        <p className="text-gray-500 text-sm">Homeowners since 2015 • Customers since 2022</p>
                                    </div>
                                </div>

                                <h2 className="text-3xl font-black mb-8 leading-tight">
                                    &quot;It felt like we were throwing money away every summer.&quot;
                                </h2>

                                <article className="prose prose-slate dark:prose-invert max-w-none">
                                    <p className="text-lg font-medium italic text-gray-700 dark:text-gray-300 border-l-4 border-primary pl-6 py-2 mb-8 bg-primary/5">
                                        We sat down with Marcus Johnson to discuss his journey from skeptical utility customer to enthusiastic solar advocate.
                                    </p>

                                    <h4 className="font-bold text-lg text-primary mb-3">What motivated you to consider solar?</h4>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                        For years, our electricity bill was a source of constant stress, especially during the San Diego summers. We have a growing family, and between the AC running and everyone being home, our bills were hitting $400-500 a month.
                                    </p>

                                    <h4 className="font-bold text-lg text-primary mb-3">How was your experience with SolarTech?</h4>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                        From the first consultation, the difference was clear. They didn&apos;t just try to sell us the biggest system possible. The crew was professional, arrived on time, and finished the entire array in just two days.
                                    </p>
                                </article>
                            </div>

                            {/* Image Gallery */}
                            <div className="pt-10 border-t border-gray-200 dark:border-gray-800">
                                <h3 className="text-2xl font-bold mb-8">Installation Journey</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {projectData.gallery.map((img, idx) => (
                                        <div key={idx} className="aspect-square rounded-xl overflow-hidden group">
                                            <img
                                                src={img}
                                                alt="Gallery"
                                                className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Sticky Area */}
                        <div className="lg:w-1/3">
                            <div className="sticky top-24 space-y-8">
                                {/* Project Specs */}
                                <div className="bg-white dark:bg-[#1a2e1a] rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm">
                                    <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                                        <Info className="text-primary" size={20} /> Project Specs
                                    </h4>
                                    <ul className="space-y-4">
                                        {projectData.specs.map((spec, idx) => (
                                            <li key={idx} className="flex justify-between items-center pb-4 border-b border-gray-100 dark:border-gray-800 last:border-0 last:pb-0">
                                                <span className="text-gray-500 text-sm">{spec.label}</span>
                                                <span className="font-bold text-sm text-right">{spec.value}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Quote Highlight */}
                                <div className="bg-primary rounded-2xl p-8 relative overflow-hidden text-[#102210]">
                                    <Star className="absolute -top-4 -right-4 size-24 opacity-10" />
                                    <p className="font-bold text-lg mb-4">
                                        &quot;Best home investment we&apos;ve ever made. The ROI is real and the peace of mind is priceless.&quot;
                                    </p>
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                    </div>
                                </div>

                                {/* Impact Card */}
                                <div className="bg-secondary-blue/10 rounded-2xl p-8 border border-secondary-blue/20">
                                    <h4 className="font-bold mb-2 flex items-center gap-2">
                                        <Leaf size={18} className="text-secondary-blue" /> Sustainable Choice
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                        The Johnson&apos;s project is equivalent to planting 125 trees every year.
                                    </p>
                                    <button className="text-secondary-blue font-bold text-sm flex items-center gap-2 hover:underline">
                                        Calculate your impact <ExternalLink size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Global CTA Section */}
                <div className="w-full bg-[#102210] py-20 px-6 mt-16">
                    <div className="max-w-[1000px] mx-auto text-center">
                        <h2 className="text-white text-4xl md:text-5xl font-black mb-6">Ready to Switch to Solar?</h2>
                        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
                            Join the Johnson family and 2,000+ others who have secured their energy future.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="w-full sm:w-auto px-10 py-4 bg-primary text-[#102210] font-black rounded-xl hover:bg-[#0fbd0f] transition-all transform hover:-translate-y-1 shadow-xl">
                                Get Your Free Estimate
                            </button>
                            <button className="w-full sm:w-auto px-10 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/20 hover:bg-white/10 transition-all">
                                Speak with an Expert
                            </button>
                        </div>

                        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-40">
                            <div className="flex items-center gap-2 text-white font-bold italic">
                                <ShieldCheck className="text-primary" /> EnergyStar Partner
                            </div>
                            <div className="flex items-center gap-2 text-white font-bold italic">
                                <Award className="text-primary" /> NABCEP Certified
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}   