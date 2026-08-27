import React from 'react';
import { useLocation } from 'react-router-dom';
import PageLayout from './PageLayout';
import News from '../components/News';

const NewsPage: React.FC = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const year = params.get('year');

  return (
    <PageLayout>
      <section className="bg-linear-to-r from-green-700 to-emerald-600 pt-10 md:pt-12 pb-8">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">News & Updates</h1>
          <p className="mx-auto max-w-4xl text-base text-white md:text-lg">
            Be part of our story-discover the communities we're building, the milestones we're reaching, and the lives we're shaping.
          </p>

        </div>

      </section>
      <News filterYear={year} />
    </PageLayout>
  );
};

export default NewsPage;
