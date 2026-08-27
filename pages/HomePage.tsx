import React, { useState } from 'react';
import PageLayout from './PageLayout';
import Hero from '../components/Hero';
import Houseasy from '../components/Houseasy';
import DevelopmentCard from '../components/DevelopmentCard';
import News from '../components/News';
import TrustedStats from '../components/TrustedStats';
import AwardsList from '../components/AwardsList';
import { southLuzon, centralLuzon } from '../data/developments';
import { PILLARS } from '../data/ui';
import { ScrollReveal, ScrollContainer } from '../components/shared/ScrollReveal';

const HomePage: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<'south' | 'central'>('south');

  return (
    <PageLayout>
      <div id="main-content" className="focus:outline-none">
        <Hero />
        <div className="h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>
        <Houseasy showImage={false} />
        
        <section id="pillars" className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-6">
            <ScrollReveal className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-4">
                3 Pillars of Premier Family Living
              </h2>
              <p className="text-gray-500 text-base md:text-lg font-light">
                Ovialand is committed to delivering homes and communities that redefine quality living for every Filipino family.
              </p>
            </ScrollReveal>

            <ScrollContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-0">
              {PILLARS.map((pillar) => (
                <ScrollReveal
                  key={pillar.title}
                  className="group flex flex-col items-center text-center bg-white rounded-3xl overflow-hidden shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full"
                >
                  <div className="w-full overflow-hidden">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-60 sm:h-80 md:h-100 object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="px-6 py-6">
                    <h3 className="text-xl md:text-2xl font-bold text-green-600 mb-2 transition-colors duration-300 group-hover:text-green-700">{pillar.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base font-light transition-colors duration-300 group-hover:text-gray-700">{pillar.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </ScrollContainer>
          </div>
        </section>

        <section id="communities" className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-6">
            <ScrollReveal className="text-center max-w-2xl mx-auto mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-600 mb-4">Our Communities</h2>
              <p className="text-gray-500 text-base md:text-lg font-light">
                Explore our master-planned communities across South Luzon and Central Luzon.
              </p>
            </ScrollReveal>

            <ScrollReveal className="flex justify-center mb-8">
              <div className="flex flex-wrap sm:inline-flex bg-gray-100 rounded-2xl sm:rounded-full p-1 gap-1 sm:gap-0 justify-center">
                {['south', 'central'].map(region => (
                  <button
                    key={region}
                    onClick={() => setActiveRegion(region as 'south' | 'central')}
                    className={`px-4 sm:px-8 py-3 rounded-xl sm:rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300
                      ${activeRegion === region
                        ? 'bg-green-600 text-white shadow-md scale-105'
                        : 'text-gray-500 hover:text-green-600 hover:scale-105'}
                      ${region !== 'south' ? 'ml-0 sm:ml-2' : ''}
                    `}
                    style={{ transition: 'all 0.3s cubic-bezier(.4,0,.2,1)' }}
                  >
                    {region === 'south' ? 'South Luzon' : 'Central Luzon'}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            <div className="relative min-h-100">
              {activeRegion === 'south' && (
                <ScrollContainer
                  key="south"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                >
                  {southLuzon.map(dev => (
                    <ScrollReveal key={dev.id} className="w-full flex">
                      <DevelopmentCard development={dev} />
                    </ScrollReveal>
                  ))}
                </ScrollContainer>
              )}

              {activeRegion === 'central' && (
                <ScrollContainer
                  key="central"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                >
                  {centralLuzon.length > 0 ? (
                    centralLuzon.map(dev => (
                      <ScrollReveal key={dev.id} className="w-full flex">
                        <DevelopmentCard development={dev} />
                      </ScrollReveal>
                    ))
                  ) : (
                    <div className="col-span-4 text-center py-20 text-gray-400 w-full">
                      <p className="text-lg font-light">More communities coming soon in Central Luzon.</p>
                    </div>
                  )}
                </ScrollContainer>
              )}
            </div>
          </div>
        </section>

        <TrustedStats />

        <AwardsList />

        <News />

        <div className="h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>

      </div>
    </PageLayout>
  );
};

export default HomePage;
