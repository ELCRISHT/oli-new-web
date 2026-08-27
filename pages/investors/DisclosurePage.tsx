import React from 'react';
import PageLayout from '../PageLayout';
import { ScrollReveal, ScrollContainer } from '../../components/shared/ScrollReveal';

const DisclosurePage: React.FC = () => (
  <PageLayout>
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">Disclosures & Filings</h2>
            <p className="text-gray-500 text-lg font-light max-w-2xl mx-auto">
              Ovialand complies with all SEC and PSE disclosure requirements to ensure transparency with our stakeholders.
            </p>
          </ScrollReveal>

          <ScrollContainer className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: 'SEC Filings',
                icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
                desc: 'Annual reports, information statements, and other mandatory SEC filings.',
              },
              {
                title: 'Material Information',
                icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                desc: 'Timely disclosures of material information that may affect shareholder decisions.',
              },
              {
                title: 'Press Releases',
                icon: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z',
                desc: 'Official press releases and public announcements from Ovialand.',
              },
            ].map((item) => (
              <ScrollReveal key={item.title} className="bg-linear-to-br from-green-50 to-emerald-50 border border-green-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-green-600 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{item.desc}</p>
              </ScrollReveal>
            ))}
          </ScrollContainer>

          <div>
            <h3 className="text-2xl font-bold text-green-600 mb-8 border-b border-green-100 pb-4">Recent Disclosures</h3>
            <ScrollContainer className="space-y-4">
              {[
                { date: 'February 2026', title: 'Notice of Annual Stockholders Meeting', type: 'Corporate Action' },
                { date: 'January 2026', title: 'Q4 2025 Financial Results Disclosure', type: 'Financial' },
                { date: 'December 2025', title: 'Material Disclosure: New Project in Bulacan', type: 'Material Information' },
                { date: 'November 2025', title: 'Amended Articles of Incorporation', type: 'SEC Filing' },
              ].map((item) => (
                <ScrollReveal key={item.title} className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-50 rounded-xl px-6 py-4 hover:bg-green-50 transition-colors gap-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-green-600 block mb-1">{item.type}</span>
                    <p className="font-medium text-gray-700">{item.title}</p>
                    <p className="text-gray-400 text-sm">{item.date}</p>
                  </div>
                  <button className="text-green-600 font-bold text-sm uppercase tracking-widest hover:text-green-800 transition-colors whitespace-nowrap">
                    View
                  </button>
                </ScrollReveal>
              ))}
            </ScrollContainer>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default DisclosurePage;
