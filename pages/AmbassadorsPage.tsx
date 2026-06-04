import React from 'react';
import PageLayout from './PageLayout';
import Ambassadors from '../components/Ambassadors';

const AmbassadorsPage: React.FC = () => {
  return (
    <PageLayout>
      <section className="bg-linear-to-r from-[#152d25] via-[#5f7960] to-[#bb9c60] pt-10 md:pt-12 pb-6">
        <div className="container mx-auto px-6 text-center">
          <div className="mx-auto my-4 flex items-center justify-center">
            <img
              src="/Ambassadors/Gold-Logo.png"
              alt="OLI Ambassadors"
              className="h-24 md:h-36 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      <Ambassadors />
    </PageLayout>
  );
};

export default AmbassadorsPage;
