import React from 'react';
import PageLayout from '../PageLayout';
import { ScrollReveal, ScrollContainer } from '../../components/shared/ScrollReveal';

const FinancialsPage: React.FC = () => (
  <PageLayout>
    <section className="bg-linear-to-r from-green-700 to-emerald-600 pt-10 md:pt-12 pb-10">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Financials</h1>
      </div>
    </section>

    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">Financial Performance</h2>
            <p className="text-gray-500 text-lg font-light max-w-2xl mx-auto">
              Access Ovialand's annual reports, quarterly results, and financial statements.
            </p>
          </ScrollReveal>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-green-600 mb-8">Annual Reports</h3>
            <ScrollContainer className="space-y-4">
              {['2024 Annual Report', '2025 Annual Report', '2026 Annual Report'].map((report) => (
                <ScrollReveal key={report} className="flex items-center justify-between bg-gray-50 rounded-xl px-6 py-4 hover:bg-green-50 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-700">{report}</span>
                  </div>
                  <button className="text-green-600 font-bold text-sm uppercase tracking-widest hover:text-green-800 transition-colors">
                    View
                  </button>
                </ScrollReveal>
              ))}
            </ScrollContainer>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-green-600 mb-8">Quarterly Results</h3>
            <ScrollContainer className="space-y-4">
              {['2024 Quarterly Results', '2025 Quarterly Results', '2026 Quarterly Results'].map((report) => (
                <ScrollReveal key={report} className="flex items-center justify-between bg-gray-50 rounded-xl px-6 py-4 hover:bg-green-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-700">{report}</span>
                  </div>
                  <button className="text-green-600 font-bold text-sm uppercase tracking-widest hover:text-green-800 transition-colors">
                    View
                  </button>
                </ScrollReveal>
              ))}
            </ScrollContainer>
          </div>

          <ScrollReveal className="mt-16 text-center bg-green-50 rounded-2xl p-10">
            <p className="text-gray-500 font-light mb-4">Need access to specific financial documents?</p>
            <a href="/contact" className="inline-block px-6 py-3 bg-green-600 text-white font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-green-700 transition-all duration-300">
              Contact Investor Relations
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default FinancialsPage;
