'use client';

import { useLocale, useTranslations } from 'use-intl';
import { EyeIcon, Hammer, Handshake, Leaf, Target, Users } from 'lucide-react';
import { useTeamMembers } from '@/services/team.service';
import Image from 'next/image';
import { getStrapiImageUrl } from '@/helper/strapi-convert-url';

export default function AboutUs() {
    const t = useTranslations('AboutUs');
    const locale = useLocale();
    const { members, isLoading, isError } = useTeamMembers(locale as string);

    return (
        <>
            <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root bg-background-light dark:bg-background-dark font-display text-[#111418] dark:text-white overflow-x-hidden">
                {/* Main Content Wrapper */}
                <main className="flex flex-1 flex-col">
                    {/* Hero Section */}
                    <section className="relative flex min-h-[480px] flex-col justify-center overflow-hidden bg-cover bg-center py-20 px-4" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("/images/LINE_ALBUM_工事925_251231_5.jpg")' }}>
                        <div className="flex flex-col max-w-[960px] mx-auto w-full text-center">
                            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl lg:text-6xl mb-6">
                                {t('Hero.title')}
                            </h1>
                            <h2 className="text-white text-base font-normal leading-relaxed max-w-2xl mx-auto md:text-lg opacity-90">
                                {t('Hero.description')}
                            </h2>
                            <div className="mt-8">
                                <button className="inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-green-600 hover:bg-green-700 text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors">
                                    <span>{t('Hero.cta')}</span>
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Introduction Section */}
                    <section className="px-4 py-16 lg:px-40 bg-white dark:bg-background-dark">
                        <div className="max-w-[960px] mx-auto flex flex-col md:flex-row gap-12 items-center">
                            <div className="flex-1">
                                <h2 className="text-[#111418] dark:text-white text-[28px] font-bold leading-tight tracking-[-0.015em] mb-4">{t('Introduction.title')}</h2>
                                <div className="w-16 h-1 bg-green-500 rounded-full mb-6"></div>
                                <p className="text-[#111418] dark:text-gray-300 text-base leading-relaxed mb-4">{t('Introduction.p1')}</p>
                                <p className="text-[#111418] dark:text-gray-300 text-base leading-relaxed">{t('Introduction.p2')}</p>
                            </div>
                            <div className="flex-1 w-full">
                                <div
                                    className="aspect-video w-full rounded-xl overflow-hidden bg-gray-200"
                                    style={{ backgroundImage: "url('/images/whoweare.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                                ></div>
                            </div>
                        </div>
                    </section>

                    {/* Mission & Vision Section */}
                    <section className="px-4 py-16 lg:px-40 bg-background-light dark:bg-gray-900/50">
                        <div className="max-w-[960px] mx-auto">
                            <div className="flex flex-col gap-10">
                                <div className="text-center max-w-[720px] mx-auto">
                                    <h2 className="text-[#111418] dark:text-white text-[32px] font-bold">{t('Purpose.title')}</h2>
                                    <p className="text-gray-500 dark:text-gray-400 mt-2">{t('Purpose.subtitle')}</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Mission Card */}
                                    <div className="flex flex-col gap-4 rounded-xl border border-[#dce0e5] dark:border-gray-700 bg-white dark:bg-background-dark p-8 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="size-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                                            <Target size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-[#111418] dark:text-white text-xl font-bold leading-tight mb-2">{t('Purpose.mission_title')}</h3>
                                            <p className="text-[#637288] dark:text-gray-400 text-sm font-normal leading-relaxed">
                                                {t('Purpose.mission_desc')}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Vision Card */}
                                    <div className="flex flex-col gap-4 rounded-xl border border-[#dce0e5] dark:border-gray-700 bg-white dark:bg-background-dark p-8 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="size-12 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                                            <EyeIcon size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-[#111418] dark:text-white text-xl font-bold leading-tight mb-2">{t('Purpose.vision_title')}</h3>
                                            <p className="text-[#637288] dark:text-gray-400 text-sm font-normal leading-relaxed">
                                                {t('Purpose.vision_desc')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Core Values */}
                    <section className="px-4 py-16 lg:px-40 bg-white dark:bg-background-dark">
                        <div className="max-w-[960px] mx-auto">
                            <h2 className="text-[#111418] dark:text-white text-[28px] font-bold leading-tight mb-10 text-center">{t('Values.title')}</h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {/* Value 1 */}
                                <div className="flex flex-col items-center text-center gap-3">
                                    <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                                        <Leaf size={28} />
                                    </div>
                                    <h3 className="text-lg font-bold text-[#111418] dark:text-white">{t('Values.v1_t')}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('Values.v1_d')}</p>
                                </div>

                                {/* Value 2 */}
                                <div className="flex flex-col items-center text-center gap-3">
                                    <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                                        <Handshake size={28} />
                                    </div>
                                    <h3 className="text-lg font-bold text-[#111418] dark:text-white">{t('Values.v2_t')}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('Values.v2_d')}</p>
                                </div>

                                {/* Value 3 */}
                                <div className="flex flex-col items-center text-center gap-3">
                                    <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                                        <Hammer />
                                    </div>
                                    <h3 className="text-lg font-bold text-[#111418] dark:text-white">{t('Values.v3_t')}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('Values.v3_d')}</p>
                                </div>

                                {/* Value 4 */}
                                <div className="flex flex-col items-center text-center gap-3">
                                    <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                                        <Users size={28} />
                                    </div>
                                    <h3 className="text-lg font-bold text-[#111418] dark:text-white">{t('Values.v4_t')}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('Values.v4_d')}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Stats Section */}
                    <section className="w-full bg-secondary-blue py-16 text-white">
                        <div className="max-w-[960px] mx-auto px-4 lg:px-40 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-4xl lg:text-5xl font-black mb-2">15+</div>
                                <div className="text-blue-100 text-sm font-medium uppercase tracking-wide">{t('Stats.years')}</div>
                            </div>
                            <div>
                                <div className="text-4xl lg:text-5xl font-black mb-2">5k+</div>
                                <div className="text-blue-100 text-sm font-medium uppercase tracking-wide">{t('Stats.installs')}</div>
                            </div>
                            <div>
                                <div className="text-4xl lg:text-5xl font-black mb-2">20k</div>
                                <div className="text-blue-100 text-sm font-medium uppercase tracking-wide">{t('Stats.co2')}</div>
                            </div>
                            <div>
                                <div className="text-4xl lg:text-5xl font-black mb-2">100%</div>
                                <div className="text-blue-100 text-sm font-medium uppercase tracking-wide">{t('Stats.satisfaction')}</div>
                            </div>
                        </div>
                    </section>

                    {/* Team Section */}
                    <section className="px-4 py-20 lg:px-40 bg-background-light dark:bg-background-dark">
                        <div className="max-w-[960px] mx-auto">
                            <div className="flex flex-col gap-2 mb-10">
                                <h2 className="text-[#111418] dark:text-white text-[28px] font-bold leading-tight">{t('Team.title')}</h2>
                                <p className="text-gray-500 dark:text-gray-400">{t('Team.subtitle')}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* Member 1 */}
                                {
                                    members?.map((member) => (
                                        <div key={member.id} className="flex flex-col gap-4">
                                            <div className="aspect-[4/3] rounded-xl bg-gray-200 overflow-hidden relative">
                                                <div
                                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                                                >
                                                    <Image unoptimized src={getStrapiImageUrl(member.avartar?.url || '')} alt={member.name} width={500} height={500} className="w-full h-full object-cover" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-[#111418] dark:text-white">{member.name}</h3>
                                                <p className="text-sm text-primary font-medium">{member.role}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="px-4 py-20 bg-white dark:bg-background-dark">
                        <div className="max-w-[960px] mx-auto rounded-2xl overflow-hidden relative">
                            <div className="absolute inset-0 bg-secondary-blue opacity-95"></div>
                            <div
                                className="absolute inset-0 opacity-20"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBQPHOq3KnHg2aenuZ4GhtX_rYX-FSE4Wbhu3aaEezjka4je0_SLF2SVhGhT1O4kaaSC1H47Jps_avVrozmHoqeeLtK4mQDtnwpVx8TlpwUb-TNzEVG5vWwdn05G2FEBMTOsj9oPLIuz2KhCeeWkyymqd0yGig12obl-XPHQdJQaysxfzcdRiPHyUpu0uEmpQ4bFPLZ3QTStGGhUCe04w7I8lnC-HpgKrDFQ2IbuDzADl9KobCVBB3qjC12Aq3QK2u8TvrBalGNueg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                            ></div>
                            <div className="relative z-10 flex flex-col items-center justify-center text-center p-10 lg:p-16 gap-6">
                                <h2 className="text-white text-3xl lg:text-4xl font-black leading-tight">{t('CTA.title')}</h2>
                                <p className="text-blue-100 text-base max-w-lg">{t('CTA.description')}</p>
                                <button className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-lg transition-transform hover:-translate-y-1">
                                    {t('CTA.button')}
                                </button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}