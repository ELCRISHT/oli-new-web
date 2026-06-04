import React from 'react';
import PageLayout from '../PageLayout';
import CSR from '../../components/CSR';

const CSRPage: React.FC = () => (
  <PageLayout>
    <section className="bg-gradient-to-r from-green-700 to-emerald-600 pt-10 md:pt-12 pb-12">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Corporate Social Responsibility</h1>
      </div>
    </section>
    <CSR />
  </PageLayout>
);

export default CSRPage;
