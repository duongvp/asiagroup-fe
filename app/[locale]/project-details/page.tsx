'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
    Bolt,
    ChevronRight,
    MapPin,
    Leaf,
    Zap,
    ShieldCheck,
} from 'lucide-react';
import Image from 'next/image';

export default function ProjectDetail() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <div className={`${isDarkMode ? 'dark' : ''}`}>
            <div className="min-h-screen bg-white dark:bg-[#102210] text-[#0f172a] dark:text-white font-sans transition-colors duration-300">

                {/* Navigation */}
                <Header />

                <main className="flex flex-col w-full">
                    {/* Hero Section */}
                    <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
                        <img
                            alt="The Henderson Residence Solar Installation"
                            className="absolute inset-0 w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC83tGHWAzUnfNzOAUKjo8HmZylM-r4iC9c7tBJG4HfKHXTf4vF2rVwcJn9NFhFXtFZZ7hq2sVBVnAJETmD-neduEv8Ta7fMBy19FtkXF_AwOWai6I3abkngpMZmyUa0tL-MIprMTQCtYE4CMpW2fQrE3P4Dra1AddkciuTuzyg3T1Mhmnl-4rPFr_8zDP-IftiD3f2QBTqIWrh_529DgpCbuvL2NmT3Svak-kjBwbPjptchyvH9OMm3bJyQf3295y_D8tBoH7v3So"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#102210]/90 to-[#102210]/40 flex flex-col justify-end pb-16 px-6 md:px-10">
                            <div className="max-w-[1200px] mx-auto w-full">
                                <span className="inline-block px-3 py-1 rounded-full bg-[#13ec13] text-[#102210] text-xs font-bold uppercase tracking-widest mb-4">
                                    Residential Project
                                </span>
                                <h1 className="text-white text-4xl md:text-6xl font-black leading-tight mb-4">
                                    The Henderson Residence
                                </h1>
                                <div className="flex items-center gap-2 text-gray-200">
                                    <MapPin size={20} className="text-[#13ec13]" />
                                    <span className="text-lg">Austin, Texas</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Project Stats Bar */}
                    <div className="w-full bg-white dark:bg-[#162e16] border-b border-gray-100 dark:border-[#2a3c2a]">
                        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-8">
                            {/* Breadcrumbs */}
                            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                                <a className="hover:text-[#13ec13] transition-colors" href="#">Portfolio</a>
                                <ChevronRight size={14} />
                                <a className="hover:text-[#13ec13] transition-colors" href="#">Residential</a>
                                <ChevronRight size={14} />
                                <span className="text-[#0f172a] dark:text-white font-medium">The Henderson Residence</span>
                            </nav>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                                <StatCard icon={<Zap />} label="Capacity" value="12.5 kW" />
                                <StatCard icon={<Leaf />} label="Panel Type" value="Monocrystalline" />
                                <StatCard icon={<Bolt />} label="Annual Savings" value="$2,400" highlight />
                                <StatCard icon={<ShieldCheck />} label="CO2 Reduction" value="8.2 Tons/yr" />
                            </div>
                        </div>
                    </div>

                    {/* Main Content & Sidebar */}
                    <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-2 space-y-12">
                            <section>
                                <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                                <div className="text-gray-600 dark:text-gray-300 space-y-6 text-lg leading-relaxed">
                                    <p>
                                        The Henderson Residence project was a comprehensive residential energy overhaul located in the heart of Austin, Texas. The goal was to eliminate the homeowner's reliance on the local utility grid during peak summer months.
                                    </p>
                                    <p>
                                        Our team designed a custom 32-panel array using premium high-efficiency monocrystalline panels, meticulously positioned to capture maximum southern exposure while maintaining aesthetic integrity.
                                    </p>
                                </div>
                            </section>

                            {/* Site Gallery */}
                            <section>
                                <h2 className="text-2xl font-bold mb-6">Site Gallery</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {[7, 8, 9, 10, 11, 12].map((id) => (
                                        <div key={id} className="aspect-square rounded-xl overflow-hidden bg-gray-200 group">
                                            <Image
                                                alt={`Project gallery ${id}`}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                src={"https://lh3.googleusercontent.com/aida-public/AB6AXuDT6dCURsipIAk2yUjlZgzyCupYvJ0IuMsFEiZ3_BG-c_TqN-5LO_rO5SL7qKINvU85jwNNeuBTIIKhVMF-hq56zreY1RMTNsM3craI8w61tWBHPFmDjPO3EN4B_Y4dXmNw5xchk6ijcxCcKew8b3hN04WP_icKr5gqe1cv6oS0tYY0yFTltOtrrr_lAHAc8GnoG80Yvn1JpKGvw2kzrmj4dSQNGJd128Y5yKla2tioO6te3DlLg5nkISwUgMUeHLA7gfAQLLxAe-k"}
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Technical Box */}
                            <section className="bg-[#111811] text-white p-8 rounded-2xl border border-white/10">
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#13ec13]">
                                    <ShieldCheck size={28} />
                                    Technical Excellence
                                </h2>
                                <ul className="space-y-4 text-gray-300">
                                    <TechItem title="Mounting System" desc="Rail-less flashing-free system for maximum roof integrity." />
                                    <TechItem title="Inverters" desc="High-performance microinverters with per-panel monitoring." />
                                    <TechItem title="Storage" desc="Dual lithium-ion smart battery units (24kWh capacity)." />
                                    <TechItem title="Timeline" desc="Completed in 14 business days from permit to grid." />
                                </ul>
                            </section>
                        </div>

                        {/* Sidebar / Testimonial */}
                        <aside>
                            <div className="bg-white dark:bg-[#1a2e1a] p-8 rounded-2xl border border-gray-100 dark:border-[#2a3c2a] shadow-xl sticky top-24">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="size-14 rounded-full overflow-hidden">
                                        <img alt="Homeowner" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_fEuII25P1Wy3Qm6sdy47udvjuYwq-O79YOrMpZrpwV83vbRKTegJf9uebtzuWUTlnavaLE0yxyNSmTyaKtEiXOOI6mKES7sRgtzlMyh0JrJw6f2eXQ-tHB9PN4SV1byMXFlUuJpkizpeg99_M60X_hYWij9FmS7S8WdlBA1ABZhODZ0WFiI4XnDg-Lo321fVKhyf7K1P-BE4LwmGGzkLysJ5Mixan_enrWASeGNDrgR_ry_x4oDpZNemWmxsVLmTEmxgKjHs9b4" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg leading-none mb-1">Mark Henderson</p>
                                        <p className="text-sm text-gray-500">Homeowner</p>
                                    </div>
                                </div>
                                <blockquote className="italic text-gray-600 dark:text-gray-300 mb-6 border-l-4 border-[#13ec13] pl-4">
                                    "Our electricity bill went from $350 a month to a $12 credit in our first billing cycle. The team was professional and clean."
                                </blockquote>
                                <div className="space-y-4 mb-8">
                                    <DetailRow label="Completed" value="October 2023" />
                                    <DetailRow label="Sector" value="Residential" />
                                    <DetailRow label="Impact" value="Carbon Neutral" color="text-[#13ec13]" />
                                </div>
                                <button className="w-full py-4 bg-[#13ec13] text-[#102210] font-black rounded-xl hover:bg-[#10d010] transition-all shadow-lg">
                                    Get a Similar Quote
                                </button>
                            </div>
                        </aside>
                    </div>

                    {/* CTA Section */}
                    <section className="w-full bg-[#13ec13] py-20">
                        <div className="max-w-[1200px] mx-auto px-6 text-center">
                            <h2 className="text-[#102210] text-3xl md:text-5xl font-black mb-6">Ready for your own solar success story?</h2>
                            <p className="text-[#102210]/80 text-xl max-w-2xl mx-auto mb-10">Join thousands of homeowners saving money while protecting the planet.</p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <button className="bg-[#102210] text-white px-10 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all">
                                    Get Your Free Quote
                                </button>
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </div>
    );
}

// Helper Components để code gọn hơn
function StatCard({ icon, label, value, highlight = false }: any) {
    return (
        <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-[#1f3a1f]">
            <div className="size-12 rounded-lg bg-[#13ec13]/20 flex items-center justify-center text-[#13ec13]">
                {icon}
            </div>
            <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">{label}</p>
                <p className={`text-xl font-black leading-none ${highlight ? 'text-[#13ec13]' : ''}`}>{value}</p>
            </div>
        </div>
    );
}

function TechItem({ title, desc }: any) {
    return (
        <li className="flex items-start gap-3">
            <div className="mt-1 text-[#13ec13]"><ShieldCheck size={18} /></div>
            <span><strong className="text-white">{title}:</strong> {desc}</span>
        </li>
    );
}

function DetailRow({ label, value, color = "" }: any) {
    return (
        <div className="flex justify-between py-2 border-b border-gray-100 dark:border-[#2a3c2a]">
            <span className="text-gray-500 text-sm">{label}</span>
            <span className={`font-bold text-sm ${color}`}>{value}</span>
        </div>
    );
}