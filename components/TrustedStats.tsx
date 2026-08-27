import React from 'react';
import { useCountUp } from '../hooks/useCountUp';
import { TRUSTED_STATS } from '../data/stats';

const TrustedStats: React.FC = () => {
  return (
    <section id="trusted" className="py-8 md:py-12 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-600 mb-4 md:mb-6">Trusted Developer</h2>
          <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
            With more than 3,500 homes turned over in the past decade, we are a trusted developer committed to deliver our commitments to our homebuyers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {TRUSTED_STATS.map((stat, i) => (
            <StatItem key={i} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatItem: React.FC<{ stat: typeof TRUSTED_STATS[0] }> = ({ stat }) => {
  const { count, ref } = useCountUp(stat.target);
  
  return (
    <div 
      ref={ref}
      className="bg-white rounded-2xl p-6 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 text-center hover:-translate-y-1"
    >
      <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
        {getIcon(stat.iconType)}
      </div>
      <p className="text-4xl md:text-6xl font-bold text-green-600 mb-3">
        {count.toLocaleString()}{stat.suffix}
      </p>
      <h3 className="text-lg md:text-xl font-bold text-green-600 mb-2">{stat.label}</h3>
      <p className="text-gray-500 font-light text-sm">{stat.description}</p>
    </div>
  );
};

const getIcon = (type: string) => {
  switch (type) {
    case 'location':
      return (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case 'house':
      return (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      );
    case 'family':
      return (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    default:
      return null;
  }
};

export default TrustedStats;
