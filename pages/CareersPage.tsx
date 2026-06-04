import React, { useState } from 'react';
import PageLayout from './PageLayout';

const REGIONS = [
  {
    name: 'South Luzon',
    positions: [
      { title: 'Sales Associate', type: 'Full-time', location: 'Laguna' },
      { title: 'Project Engineer', type: 'Full-time', location: 'Laguna' },
      { title: 'Office Engineer', type: 'Full-time', location: 'Laguna' },
      { title: 'Purchasing Associate', type: 'Full-time', location: 'Laguna' },
      { title: 'Account Officer', type: 'Full-time', location: 'Laguna' },
    ],
  },
  {
    name: 'Central Luzon',
    positions: [
      { title: 'Sales Associate', type: 'Full-time', location: 'Bulacan' },
      { title: 'Office Engineer', type: 'Full-time', location: 'Bulacan' },
      { title: 'Warehouse Associate', type: 'Full-time', location: 'Bulacan' },
      { title: 'Account Officer', type: 'Full-time', location: 'Bulacan' },
      { title: 'Liaison Associate', type: 'Full-time', location: 'Bulacan' },
      { title: 'Documentation Associate', type: 'Full-time', location: 'Bulacan' },
      { title: 'Property Engineer', type: 'Full-time', location: 'Bulacan' },
      { title: 'Treasury Associate', type: 'Full-time', location: 'Bulacan' },
    ],
  },
  {
    name: 'NCR',
    positions: [
      { title: 'Cash Management Associate', type: 'Full-time', location: 'Alabang (Head Office)' },
    ],
  },
];

const CareersPage: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState('South Luzon');
  const regionNames = REGIONS.map(r => r.name);
  const activeRegionObj = REGIONS.find(r => r.name === activeRegion);

  return (
    <PageLayout>
      <section className="bg-linear-to-r from-green-700 to-emerald-600 pt-10 md:pt-12 pb-10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Grow With Us</h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-green-600 mb-4">Build Your Career at Ovialand</h2>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
              Be part of a fast-growing real estate developer committed to Premier Family Living. We are always looking for driven and passionate individuals to join our growing team.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-green-600 mb-10 text-center">Open Positions</h3>
            <div className="flex justify-center mb-10">
              <div className="flex flex-wrap sm:inline-flex bg-gray-100 rounded-2xl sm:rounded-full p-1 gap-1 sm:gap-0 justify-center">
                {regionNames.map(region => (
                  <button
                    key={region}
                    onClick={() => setActiveRegion(region)}
                    className={`px-4 sm:px-8 py-3 rounded-xl sm:rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300
                      ${activeRegion === region
                        ? 'bg-green-600 text-white shadow-md scale-105'
                        : 'text-gray-500 hover:text-green-600 hover:scale-105'}
                      ${region !== regionNames[0] ? 'ml-0 sm:ml-2' : ''}
                    `}
                    style={{ transition: 'all 0.3s cubic-bezier(.4,0,.2,1)' }}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative min-h-50">
              <div className="animate-fadeIn">
                <div className="space-y-4">
                  {activeRegionObj?.positions.map((role) => (
                    <div
                      key={role.title + role.location}
                      className="flex flex-col items-start bg-gray-50 rounded-xl px-6 py-4 hover:bg-green-50 transition-colors gap-2"
                    >
                      <div>
                        <p className="font-bold text-gray-800">{role.title}</p>
                        <p className="text-gray-400 text-sm">{role.type} · {role.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16 bg-green-600 rounded-3xl p-10 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Interested?</h3>
              <p className="text-white/80 font-light mb-6">
                Send your resume to our HR team and we'll reach out when an opportunity arises.
              </p>
              <a
                href="https://bit.ly/oliprescreen"
                className="inline-block px-8 py-3 bg-white text-green-600 font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-green-50 transition-all duration-300"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CareersPage;
