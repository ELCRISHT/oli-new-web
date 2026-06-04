import React from 'react';
import PageLayout from '../PageLayout';

const GovernancePage: React.FC = () => (
  <PageLayout>
    <section className="bg-linear-to-r from-green-700 to-emerald-600 pt-10 md:pt-12 pb-12">
      <div className="container mx-auto px-6 text-center">
         <h1 className="text-4xl md:text-5xl font-bold text-white">Investor Relations</h1>
      </div>
    </section>

    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-green-600 text-xs font-bold uppercase tracking-[0.3em] block mb-4">Corporate Governance</span>
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">Committed to Transparency</h2>
            <p className="text-gray-500 text-lg font-light max-w-2xl mx-auto">
              Ovialand is dedicated to upholding the highest standards of corporate governance, ensuring accountability, fairness, and transparency to all stakeholders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Board of Directors', desc: 'Our Board provides strategic oversight and ensures that the company operates with integrity and in the best interests of all shareholders.' },
              { title: 'Audit Committee', desc: 'The Audit Committee oversees financial reporting, internal controls, and compliance with applicable laws and regulations.' },
              { title: 'Code of Conduct', desc: 'Our comprehensive Code of Conduct guides every decision made at Ovialand, reinforcing our commitment to ethical business practices.' },
              { title: 'Compliance & Risk', desc: 'We maintain a robust compliance and risk management framework to safeguard the interests of investors and stakeholders.' },
            ].map((item) => (
              <div key={item.title} className="bg-linear-to-br from-green-50 to-emerald-50 border border-green-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-green-600 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div> 
        </div>
      </div>
    </section>
  </PageLayout>
);

export default GovernancePage;
