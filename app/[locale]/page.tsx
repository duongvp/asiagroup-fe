import { getTranslations } from 'next-intl/server';
import { CreditCard, Home, Leaf, PiggyBank, Users, Wallet, Zap } from 'lucide-react';
import CountUpStat from '@/components/CountUpStat';

export const metadata = {
  title: 'Solar Company - Homepage',
  description: 'Power Your Future with Clean Energy',
};

export default async function SolarCompany({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Khởi tạo các hàm dịch cho từng phần
  const t = await getTranslations('Home');

  const tHero = (key: string) => t(`Hero.${key}`);
  const tStats = (key: string) => t(`Stats.${key}`);
  const tMission = (key: string) => t(`Mission.${key}`);
  const tBenefits = (key: string) => t(`Benefits.${key}`);
  const tSteps = (key: string) => t(`Steps.${key}`);
  const tCTA = (key: string) => t(`CTA.${key}`);

  return (
    <main className="bg-background-light dark:bg-background-dark font-display text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full relative px-6 py-12 md:py-20 lg:py-24 max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-brand-blue dark:text-blue-200 text-xs font-bold uppercase tracking-wider">
              <Leaf size={20} />
              {tHero('badge')}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-foreground">
              {tHero('title')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-600">
                {tHero('title_highlight')}
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
              {tHero('description')}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-green-400 text-primary-foreground text-base font-bold shadow-lg hover:shadow-primary/50 transition-all transform hover:-translate-y-0.5">
                {tHero('cta_quote')}
              </button>
              <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 text-foreground text-base font-bold hover:bg-gray-50 dark:hover:bg-white/20 transition-colors">
                {tHero('cta_learn')}
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
              <span>{tHero('trusted')}</span>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-10"></div>
              <div
                className="w-full h-full bg-center bg-cover transition-transform duration-700 hover:scale-105"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBPbsM6UmCtd9cxLXQJcmmue6iVUcvAlejYtHsFX6nUeOMz09OfIK5CUmX4wJSJgqpwjgjve-IahzGMCIOHvmeihOqY9ahMlnQ-H1cwvmBEE3IwPV_6GCtkyPLZL2rRU4jNqJiKNafxj_8k101WlzDDyfrfswEA_R2zAmk9x7Bh4proHJG2SQpY2z8WYJBfvwq53rxZGbdgEFij49JZgevr_4_fBbANNk-h-M8tr7pDiyXiAXNuuN-O-kaBTFQAGgrLF0s-gzRvJ08')" }}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 z-20 bg-white dark:bg-[#1e3a1e] p-4 rounded-xl shadow-xl border border-gray-100 dark:border-white/10 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-lg text-green-700 dark:text-green-300">
                  <PiggyBank size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    {tHero('savings_label')}
                  </p>
                  <p className="text-lg font-bold text-foreground">{tHero('savings_value')}</p>
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
            <CountUpStat icon={<Zap size={28} color="#22c55e" />} endValue={500} suffix={tStats('energy_suffix')} label={tStats('energy_label')} />
            <CountUpStat icon={<CreditCard size={28} color="#22c55e" />} endValue={10} prefix="$" suffix={tStats('money_suffix')} label={tStats('money_label')} />
            <CountUpStat icon={<Users size={28} color="#22c55e" />} endValue={5000} suffix="+" label={tStats('customers_label')} />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-16 md:py-24 px-6 max-w-[960px] mx-auto text-center">
        <div className="flex flex-col items-center gap-6">
          <span className="text-primary font-bold text-sm tracking-widest uppercase">
            {tMission('badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            {tMission('title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
            {tMission('description')}
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="w-full bg-white dark:bg-[#152a15] py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-4">{tBenefits('title')}</h3>
            <p className="text-gray-500 dark:text-gray-400">{tBenefits('subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: 'savings', icon: <Wallet size={24} />, bgColor: 'bg-blue-100', textColor: 'text-blue-700', darkBg: 'dark:bg-blue-900/30', darkText: 'dark:text-blue-300' },
              { id: 'independence', icon: <Leaf size={24} />, bgColor: 'bg-green-100', textColor: 'text-green-700', darkBg: 'dark:bg-green-900/30', darkText: 'dark:text-green-300' },
              { id: 'value', icon: <Home size={24} />, bgColor: 'bg-teal-100', textColor: 'text-teal-700', darkBg: 'dark:bg-teal-900/30', darkText: 'dark:text-teal-300' },
            ].map((benefit) => (
              <div key={benefit.id} className="group bg-background-light dark:bg-background-dark p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20">
                <div className={`size-14 ${benefit.bgColor} ${benefit.darkBg} rounded-xl flex items-center justify-center ${benefit.textColor} ${benefit.darkText} mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors`}>
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{tBenefits(`${benefit.id}_title`)}</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{tBenefits(`${benefit.id}_desc`)}</p>
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
                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBHQZog9vRwppu5ij59afPw2ZgkSLSOaWiUJ1nPzgeKCJOhDSi-6Q-0rsml0AFF7qO0WbSMxr29i8ssnKTSpSzugkDJpT-AdMZJxY4OZmrxUva-P5Pqq9KH3y8LPgDY7cp5WYHfMCavKhFLZ09RUHGxN2kNbCYh3FS47Flg2O627isarxQPJxtrhMuxQJA881nIAafinhh-t-YLXBFWZrxtV3ErVTw31KZMoYwacVq7cFiU-2GxFiAa8KUe1357CQZzotoOc96z6wk')` }}
              />
            </div>
            <div className="absolute -bottom-8 -right-8 size-48 bg-primary rounded-full hidden lg:flex items-center justify-center text-primary-foreground font-black text-center text-lg p-6 rotate-12 shadow-xl border-4 border-white dark:border-background-dark">
              {tSteps('floating_badge')}
            </div>
          </div>
          <div className="order-1 md:order-2 flex flex-col gap-8">
            <div>
              <span className="text-primary font-bold text-sm tracking-widest uppercase">{tSteps('badge')}</span>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mt-2">{tSteps('title')}</h3>
            </div>
            <div className="flex flex-col gap-6">
              {['1', '2', '3'].map((num, index) => (
                <div key={num} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`size-10 rounded-full ${num === '3' ? 'bg-primary text-primary-foreground' : 'bg-brand-blue text-white'} flex items-center justify-center font-bold text-lg`}>
                      {num}
                    </div>
                    {index < 2 && <div className="w-0.5 h-full bg-gray-200 dark:bg-white/10 my-2"></div>}
                  </div>
                  <div className={`${index < 2 ? 'pb-8' : ''}`}>
                    <h4 className="text-xl font-bold text-foreground mb-2">{tSteps(`step${num}_title`)}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{tSteps(`step${num}_desc`)}</p>
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
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">{tCTA('title')}</h2>
          <p className="text-blue-100 text-lg md:text-xl">{tCTA('subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
            <button className="flex items-center justify-center rounded-lg h-14 px-8 bg-primary hover:bg-green-400 text-primary-foreground text-lg font-bold shadow-lg transition-colors w-full sm:w-auto">
              {tCTA('cta_primary')}
            </button>
            <button className="flex items-center justify-center rounded-lg h-14 px-8 bg-transparent border-2 border-white/20 hover:bg-white/10 text-white text-lg font-bold transition-colors w-full sm:w-auto">
              {tCTA('cta_secondary')}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}