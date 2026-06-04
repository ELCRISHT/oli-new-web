import React from 'react';
import PageLayout from '../PageLayout';
import Houseasy from '../../components/Houseasy';

const HouseasyPage: React.FC = () => (
  <PageLayout>
    <section className="bg-linear-to-r from-green-700 to-emerald-600 pt-10 md:pt-12 pb-12">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Homebuying Made Easy</h1>

      </div>
    </section>

    <Houseasy showButton={false} />

    <section id="journey" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">Homebuying Journey</h2>
          <p className="text-gray-500 text-lg font-light">
            We are committed to offering you the Premier Home of your dreams. From securing your reservation to handing you the keys, experience how easy it is to achieve homeownership with Ovialand.
          </p>
        </div>

        {/* Timeline */}
        <div className="py-4">
          <div className="max-w-5xl mx-auto">
            {/* Desktop Timeline */}
            <div className="hidden md:block relative">
              {/* Horizontal connecting line */}
              <div className="absolute top-8 left-[calc(100%/12)] right-[calc(100%/12)] h-0.5 bg-gray-300 z-0" />
              
              <div className="flex items-start justify-between">
                {[
                  { step: '01', title: 'Book a Site Tripping', desc: 'Experience the community firsthand. Walk through our model units and see why Ovialand is the perfect place to start your future.' },
                  { step: '02', title: 'Reservation', desc: 'Secure your chosen unit today. Pay the reservation fee and officially claim your spot in the community.' },
                  { step: '03', title: 'Equity Payment', desc: 'Move closer to ownership with flexible and manageable payment terms designed for your convenience.' },
                  { step: '04', title: 'Loan Processing', desc: 'We make it easy. Our team guides you through every step of your loan application for a smooth approval process.' },
                  { step: '05', title: 'Loan Take-Out', desc: 'Your loan is approved and released. Bringing you one step closer to homeownership.' },
                  { step: '06', title: 'House Turnover', desc: 'Celebrate as we officially turn over your brandnew Ovialand home.' },
                ].map((item) => (
                  <div key={item.step} className="group relative z-10 flex flex-col items-center flex-1 cursor-default">
                    <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:bg-green-400 group-hover:scale-110 group-hover:shadow-xl">
                      <span className="text-white font-bold text-xl">{item.step}</span>
                    </div>
                    <div className="w-0.5 h-10 bg-green-700 transition-all duration-300 group-hover:bg-green-400" />
                    <div className="w-3 h-3 bg-green-700 rounded-full transition-all duration-300 group-hover:bg-green-400 group-hover:scale-125" />
                    <div className="mt-4 px-2 text-center transition-all duration-300 group-hover:-translate-y-1">
                      <h3 className="text-sm font-bold text-gray-800 leading-snug transition-colors duration-300 group-hover:text-green-600">{item.title}</h3>
                      <p className="text-gray-500 text-xs font-light leading-relaxed mt-2">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden relative border-l-2 border-gray-200 ml-8 pl-8 space-y-12 py-4">
              {[
                { step: '01', title: 'Book a Site Tripping', desc: 'Experience the community firsthand. Walk through our model units and see why Ovialand is the perfect place to start your future.' },
                { step: '02', title: 'Reservation', desc: 'Secure your chosen unit today. Pay the reservation fee and officially claim your spot in the community.' },
                { step: '03', title: 'Equity Payment', desc: 'Move closer to ownership with flexible and manageable payment terms designed for your convenience.' },
                { step: '04', title: 'Loan Processing', desc: 'We make it easy. Our team guides you through every step of your loan application for a smooth approval process.' },
                { step: '05', title: 'Loan Take-Out', desc: 'Your loan is approved and released. Bringing you one step closer to homeownership.' },
                { step: '06', title: 'House Turnover', desc: 'Celebrate as we officially turn over your brandnew Ovialand home.' },
              ].map((item) => (
                <div key={item.step} className="group relative cursor-default">
                  {/* Step circle on the left line */}
                  <div className="absolute -left-[57px] top-0 w-12 h-12 bg-green-700 rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:bg-green-400 group-hover:scale-110">
                    <span className="text-white font-bold text-sm">{item.step}</span>
                  </div>
                  
                  {/* Step Content */}
                  <div>
                    <h3 className="text-base font-bold text-gray-800 leading-snug transition-colors duration-300 group-hover:text-green-600">{item.title}</h3>
                    <p className="text-gray-500 text-sm font-light leading-relaxed mt-1.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="/our-ambassadors"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold uppercase tracking-widest text-sm rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Inquire now and schedule a viewing
          </a>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default HouseasyPage;
