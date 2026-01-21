'use client';

import { useState } from 'react';
import Head from 'next/head';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { CreditCard, Home, Leaf, PiggyBank, Users, Wallet, Zap } from 'lucide-react';
import CountUpStat from '@/components/CountUpStat';

export default function SolarCompany() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <Head>
        <title>Solar Company - Homepage</title>
        <meta name="description" content="Power Your Future with Clean Energy" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className={`${isDarkMode ? 'dark' : ''}`}>
        <main className="bg-background-light dark:bg-background-dark font-display text-foreground overflow-x-hidden">
          {/* Navigation */}
          <Header />

          {/* Hero Section */}
          <section className="w-full relative px-6 py-12 md:py-20 lg:py-24 max-w-[1280px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="flex flex-col gap-6 order-2 lg:order-1">
                <div className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-brand-blue dark:text-blue-200 text-xs font-bold uppercase tracking-wider">
                  <Leaf size={20} />
                  Clean Energy Future
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-foreground">
                  Power Your Future with{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-600">
                    Clean Energy
                  </span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
                  Join thousands of homeowners saving money and the planet with our premium solar solutions. Experience energy independence today.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-green-400 text-primary-foreground text-base font-bold shadow-lg hover:shadow-primary/50 transition-all transform hover:-translate-y-0.5">
                    Get Your Free Quote
                  </button>
                  <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 text-foreground text-base font-bold hover:bg-gray-50 dark:hover:bg-white/20 transition-colors">
                    Learn More
                  </button>
                </div>
                <div className="flex items-center gap-4 mt-4 text-sm text-gray-500 dark:text-gray-400 font-medium">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="size-8 rounded-full bg-gray-200 border-2 border-white dark:border-background-dark"
                        style={{
                          backgroundImage: `url(https://randomuser.me/api/portraits/men/${item}.jpg)`,
                          backgroundSize: 'cover',
                        }}
                      />
                    ))}
                  </div>
                  <span>Trusted by 5,000+ homeowners</span>
                </div>
              </div>

              {/* Image Content */}
              <div className="relative order-1 lg:order-2">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-10"></div>
                  <div
                    className="w-full h-full bg-center bg-cover transition-transform duration-700 hover:scale-105"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBPbsM6UmCtd9cxLXQJcmmue6iVUcvAlejYtHsFX6nUeOMz09OfIK5CUmX4wJSJgqpwjgjve-IahzGMCIOHvmeihOqY9ahMlnQ-H1cwvmBEE3IwPV_6GCtkyPLZL2rRU4jNqJiKNafxj_8k101WlzDDyfrfswEA_R2zAmk9x7Bh4proHJG2SQpY2z8WYJBfvwq53rxZGbdgEFij49JZgevr_4_fBbANNk-h-M8tr7pDiyXiAXNuuN-O-kaBTFQAGgrLF0s-gzRvJ08')" }}
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 z-20 bg-white dark:bg-[#1e3a1e] p-4 rounded-xl shadow-xl border border-gray-100 dark:border-white/10 hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-lg text-green-700 dark:text-green-300">
                      <PiggyBank size={20} />
                      {/* <span className="material-symbols-outlined">savings</span> */}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Average Savings</p>
                      <p className="text-lg font-bold text-foreground">$1,500/yr</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="w-full bg-brand-blue text-white py-12">
            <div className="max-w-[1280px] mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
                {[
                  {
                    icon: <Zap size={28} color="#22c55e" />,
                    value: 500,
                    suffix: '+ MW',
                    label: 'Clean Energy Generated'
                  },
                  {
                    icon: <CreditCard size={28} color="#22c55e" />,
                    value: 10,
                    prefix: '$',
                    suffix: 'M+',
                    label: 'Customer Money Saved'
                  },
                  {
                    icon: <Users size={28} color="#22c55e" />,
                    value: 5000,
                    suffix: '+',
                    label: 'Happy Customers'
                  },
                ].map((stat, index) => (
                  <CountUpStat
                    key={index}
                    icon={stat.icon}
                    endValue={stat.value}
                    prefix={stat.prefix || ''}
                    suffix={stat.suffix || ''}
                    label={stat.label}
                  // Tuỳ chỉnh thêm nếu muốn
                  // duration={3}
                  // decimals={1} // cho số thập phân
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Mission / Overview Section */}
          <section className="w-full py-16 md:py-24 px-6 max-w-[960px] mx-auto text-center">
            <div className="flex flex-col items-center gap-6">
              <span className="text-primary font-bold text-sm tracking-widest uppercase">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Sustainable Energy for Everyone
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                We are dedicated to transforming how the world generates energy. Our mission is to provide affordable, clean, and reliable solar power to every home and business, ensuring a greener planet for future generations.
              </p>
            </div>
          </section>

          {/* Benefits Grid */}
          <section className="w-full bg-white dark:bg-[#152a15] py-16 md:py-24">
            <div className="max-w-[1280px] mx-auto px-6">
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold text-foreground mb-4">Why Switch to Solar?</h3>
                <p className="text-gray-500 dark:text-gray-400">Discover the advantages of powering your home with the sun.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Wallet size={24} />,
                    title: 'Massive Savings',
                    description: 'Reduce or even eliminate your electricity bills. Lock in lower energy rates and protect yourself from rising utility costs.',
                    bgColor: 'bg-blue-100',
                    textColor: 'text-blue-700',
                    darkBg: 'dark:bg-blue-900/30',
                    darkText: 'dark:text-blue-300'
                  },
                  {
                    icon: <Leaf size={24} />,
                    title: 'Energy Independence',
                    description: 'Take control of your power. Generate your own clean energy and rely less on the grid, ensuring stability for your home.',
                    bgColor: 'bg-green-100',
                    textColor: 'text-green-700',
                    darkBg: 'dark:bg-green-900/30',
                    darkText: 'dark:text-green-300'
                  },
                  {
                    icon: <Home size={24} />,
                    title: 'Increase Home Value',
                    description: 'Homes with solar panels sell faster and for more money. It\'s a smart investment that pays off now and in the future.',
                    bgColor: 'bg-teal-100',
                    textColor: 'text-teal-700',
                    darkBg: 'dark:bg-teal-900/30',
                    darkText: 'dark:text-teal-300'
                  },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="group bg-background-light dark:bg-background-dark p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20"
                  >
                    <div className={`size-14 ${benefit.bgColor} ${benefit.darkBg} rounded-xl flex items-center justify-center ${benefit.textColor} ${benefit.darkText} mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors`}>
                      {benefit.icon}
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Steps Section */}
          <section className="w-full py-16 md:py-24 px-6 max-w-[1280px] mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="w-full aspect-square md:aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                  <div
                    className="w-full h-full bg-center bg-cover"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1542338106-3514d8d33c7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')`,
                    }}
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 size-48 bg-primary rounded-full hidden lg:flex items-center justify-center text-primary-foreground font-black text-center text-lg p-6 rotate-12 shadow-xl border-4 border-white dark:border-background-dark">
                  Go Solar in<br />3 Easy Steps
                </div>
              </div>
              <div className="order-1 md:order-2 flex flex-col gap-8">
                <div>
                  <span className="text-primary font-bold text-sm tracking-widest uppercase">How It Works</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Simple Process, Powerful Results</h3>
                </div>
                <div className="flex flex-col gap-6">
                  {[
                    { number: '1', title: 'Free Consultation', description: 'We analyze your roof and energy usage to design the perfect system for your needs.' },
                    { number: '2', title: 'Expert Installation', description: 'Our certified team handles permits and installation quickly and professionally.' },
                    { number: '3', title: 'Power On & Save', description: 'Switch on your system and start generating your own clean, affordable electricity.' },
                  ].map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`size-10 rounded-full ${step.number === '3' ? 'bg-primary text-primary-foreground' : 'bg-brand-blue text-white'} flex items-center justify-center font-bold text-lg`}>
                          {step.number}
                        </div>
                        {index < 2 && <div className="w-0.5 h-full bg-gray-200 dark:bg-white/10 my-2"></div>}
                      </div>
                      <div className={`${index < 2 ? 'pb-8' : ''}`}>
                        <h4 className="text-xl font-bold text-foreground mb-2">{step.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Footer Section */}
          <section className="w-full bg-brand-blue py-20 px-6 mt-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#13ec13 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">Ready to Power Your Future?</h2>
              <p className="text-blue-100 text-lg md:text-xl">
                Get a custom solar quote in less than 24 hours. No obligation, just savings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
                <button className="flex items-center justify-center rounded-lg h-14 px-8 bg-primary hover:bg-green-400 text-primary-foreground text-lg font-bold shadow-lg transition-colors w-full sm:w-auto">
                  Get Started Now
                </button>
                <button className="flex items-center justify-center rounded-lg h-14 px-8 bg-transparent border-2 border-white/20 hover:bg-white/10 text-white text-lg font-bold transition-colors w-full sm:w-auto">
                  Call (555) 123-4567
                </button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}