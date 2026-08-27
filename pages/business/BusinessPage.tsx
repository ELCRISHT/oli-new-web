import React, { useState } from 'react';
import PageLayout from '../PageLayout';
import Houseasy from '../../components/Houseasy';
import DevelopmentCard from '../../components/DevelopmentCard';
import { DEVELOPMENTS } from '../../data/developments';
import { ScrollReveal, ScrollContainer } from '../../components/shared/ScrollReveal';



const southLuzon = DEVELOPMENTS.filter(d =>
  ['Laguna', 'Batangas', 'Quezon'].some(loc => d.location.includes(loc))
);

const centralLuzon = DEVELOPMENTS.filter(d =>
  ['Bulacan', 'Pampanga', 'Nueva Ecija', 'Tarlac', 'Zambales', 'Bataan'].some(loc => d.location.includes(loc))
);

const BusinessPage: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<'south' | 'central'>('south');

  return (
    <PageLayout>
      <section id="communities" className="bg-linear-to-r from-green-700 to-emerald-600 pt-10 md:pt-12 pb-6">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Communities</h1>
          <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Explore our master-planned communities across South Luzon and Central Luzon.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-linear-to-b from-white to-gray-50 grow">
        <div className="container mx-auto px-6">

          <ScrollReveal className="flex justify-center mb-6 md:mb-8">
            <div className="flex flex-wrap sm:inline-flex bg-gray-100 rounded-2xl sm:rounded-full p-1 gap-1 sm:gap-0 justify-center">
              <button
                onClick={() => setActiveRegion('south')}
                className={`px-4 sm:px-8 py-3 rounded-xl sm:rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 ${activeRegion === 'south'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'text-gray-500 hover:text-green-600'
                  }`}
              >
                South Luzon
              </button>
              <button
                onClick={() => setActiveRegion('central')}
                className={`px-4 sm:px-8 py-3 rounded-xl sm:rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 ${activeRegion === 'central'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'text-gray-500 hover:text-green-600'
                  }`}
              >
                Central Luzon
              </button>
            </div>
          </ScrollReveal>

          <div className="relative min-h-100">
            {activeRegion === 'south' && (
              <ScrollContainer key="south" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {southLuzon.map(dev => (
                  <ScrollReveal key={dev.id}>
                    <DevelopmentCard development={dev} />
                  </ScrollReveal>
                ))}
              </ScrollContainer>
            )}
            {activeRegion === 'central' && (
              <ScrollContainer key="central" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {centralLuzon.length > 0 ? (
                  centralLuzon.map(dev => (
                    <ScrollReveal key={dev.id}>
                      <DevelopmentCard development={dev} />
                    </ScrollReveal>
                  ))
                ) : (
                  <div className="col-span-4 text-center py-20 text-gray-400">
                    <p className="text-lg font-light">More communities coming soon in Central Luzon.</p>
                  </div>
                )}
              </ScrollContainer>
            )}
          </div>
        </div>
      </section>

    </PageLayout>
  );
};

export default BusinessPage;
