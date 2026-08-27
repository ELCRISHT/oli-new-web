import React from 'react';
import Section from './base/Section';
import Container from './base/Container';
import StatCard from './shared/StatCard';
import CSRSection from './CSR/CSRSection';
import { CSR_SECTIONS, CSR_STATS } from '../data/csr';
import { ScrollReveal, ScrollContainer } from './shared/ScrollReveal';

const CSR: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Stats Section */}
      <Section bg="gray" className="py-10 md:py-12">
        <Container>
          <ScrollReveal className="text-center mb-10 max-w-3xl mx-auto">
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              We build more than just houses; we nurture communities, empower the youth, and preserve the environment for a sustainable future.
            </p>
          </ScrollReveal>
          <ScrollContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {CSR_STATS.map((stat, i) => (
              <ScrollReveal key={i}>
                <StatCard
                  stat={{
                    ...stat,
                    icon: getStatIcon(stat.label)
                  }}
                />
              </ScrollReveal>
            ))}
          </ScrollContainer>
        </Container>
      </Section>

      {/* Initiatives Sections */}
      {CSR_SECTIONS.map((section, idx) => (
        <Section
          key={section.id}
          bg={idx % 2 === 0 ? 'white' : 'gray'}
          className="py-10 md:py-14"
        >
          <Container>
            <ScrollReveal>
              <CSRSection
                {...section}
                reverse={idx % 2 !== 0}
              />
            </ScrollReveal>
          </Container>
        </Section>
      ))}
    </div>
  );
};

// Helper to restore icons
const getStatIcon = (label: string) => {
  switch (label) {
    case 'Trees Planted':
      return (
        <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 22V12m0 0C12 7 7 4 7 4s1 4 5 8zm0 0c0-5 5-8 5-8s-1 4-5 8z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 17c-2 .5-3 1.5-3 3h12c0-1.5-1-2.5-3-3" />
        </svg>
      );
    case 'Scholars':
      return (
        <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422A12.083 12.083 0 0121 13.5c0 3.314-4.03 6-9 6s-9-2.686-9-6a12.08 12.08 0 012.84-7.922L12 14z" />
        </svg>
      );
    case 'Classrooms Built':
      return (
        <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V10.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 21V12h6v9" />
        </svg>
      );
    default:
      return null;
  }
};

export default CSR;
