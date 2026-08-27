import React from 'react';
import { AWARDS } from '../data/awards';

const AwardsList: React.FC = () => {
  return (
    <section id="awards" className="py-8 md:py-12 bg-white scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-600 mb-4">Awards and Recognition</h2>
          <p className="text-gray-500 text-base md:text-lg font-light">
            Celebrating industry awards reflect our commitment to excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {AWARDS.map((award, i) => (
            <div
              key={i}
              className="group bg-white border border-green-100 rounded-2xl hover:shadow-xl hover:border-green-300 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div
                className="h-40 bg-center bg-cover relative flex items-end"
                style={award.imageUrl ? { backgroundImage: `url(${award.imageUrl})` } : undefined}
              >
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                <div className="relative p-4">
                  <span className="text-white text-xs font-bold uppercase tracking-widest bg-black/30 px-2 py-1 rounded">{award.year}</span>
                  <h3 className="text-white font-bold text-lg mt-2 leading-snug drop-shadow">{award.title}</h3>
                </div>
              </div>

              <div className="p-6 flex flex-col mt-auto">
                <p className="text-gray-600 text-sm font-light mb-2">
                  {award.body || ''}
                  {award.url && (
                    <>
                      {' '}
                      <a href={award.url} target="_blank" rel="noopener noreferrer" className="text-green-600 underline">Learn more</a>
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsList;
