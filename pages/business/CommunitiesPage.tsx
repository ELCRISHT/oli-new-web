import React, { useState } from 'react';
import PageLayout from '../PageLayout';
import DevelopmentCard from '../../components/DevelopmentCard';
import { DEVELOPMENTS } from '../../constants';

const southLuzon = DEVELOPMENTS.filter(d =>
  ['Laguna', 'Batangas', 'Quezon'].some(loc => d.location.includes(loc))
);

const centralLuzon = DEVELOPMENTS.filter(d =>
  ['Bulacan', 'Pampanga', 'Nueva Ecija', 'Tarlac', 'Zambales', 'Bataan'].some(loc => d.location.includes(loc))
);

const CommunitiesPage: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<'south' | 'central'>('south');

  return (
    <PageLayout>
      <section className="bg-linear-to-r from-green-700 to-emerald-600 pt-10 md:pt-12 pb-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Communities</h1>
          <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Explore our master-planned communities across South Luzon and Central Luzon.
          </p>
        </div>
      </section>

      <section className="py-12 bg-linear-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">

          <div className="flex justify-center mb-12">
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
          </div>

          <div className="relative min-h-100">
            {activeRegion === 'south' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {southLuzon.map(dev => (
                  <DevelopmentCard key={dev.id} development={dev} />
                ))}
              </div>
            )}
            {activeRegion === 'central' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {centralLuzon.length > 0 ? (
                  centralLuzon.map(dev => (
                    <DevelopmentCard key={dev.id} development={dev} />
                  ))
                ) : (
                  <div className="col-span-4 text-center py-20 text-gray-400">
                    <p className="text-lg font-light">More communities coming soon in Central Luzon.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CommunitiesPage;
