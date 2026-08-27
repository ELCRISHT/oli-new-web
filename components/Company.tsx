import React from 'react';
import Section from './base/Section';
import Container from './base/Container';
import { 
  COMPANY_STORY, 
  CORE_VALUES, 
  BOARD_OF_DIRECTORS, 
  MANAGEMENT_TEAM 
} from '../data/company';
import { ScrollReveal, ScrollContainer } from './shared/ScrollReveal';

const Company: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Story Section */}
      <Section id="company" className="scroll-mt-24">
        <Container>
          <ScrollContainer className="max-w-6xl mx-auto">
            {COMPANY_STORY.map((para, i) => (
              <ScrollReveal key={i}>
                <p className="text-gray-600 text-lg font-light leading-relaxed mb-6 text-center">
                  {para}
                </p>
              </ScrollReveal>
            ))}
          </ScrollContainer>

          <div className="mt-16 md:mt-20">
            {/* Vision & Mission */}
            <div id="mission-vision" className="mb-12 md:mb-16 scroll-mt-24">
              <ScrollContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                <ScrollReveal animation="fade-right" className="flex w-full">
                  <div id="vision" className="relative overflow-hidden rounded-3xl min-h-64 flex items-center p-6 md:p-10 group cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-green-600 w-full">
                    <div className="z-10">
                      <h3 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-wide mb-4">Our Vision</h3>
                      <p className="text-white text-lg leading-relaxed">
                        To become the most trusted name in homebuilding for the next generation of Filipino families—where every home represents stability, dignity, and a better future.
                      </p>
                    </div>
                    <div className="absolute bottom-6 left-6 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                      <svg className="w-20 h-20 text-white" fill="none" viewBox="0 0 64 64" stroke="currentColor">
                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M32 18c8 0 14 6 14 14s-6 14-14 14S18 40 18 32 24 18 32 18z" />
                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M44 32c0 6.627-5.373 12-12 12S20 38.627 20 32 25.373 20 32 20s12 5.373 12 12z" />
                      </svg>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal animation="fade-left" className="flex w-full">
                  <div id="mission" className="relative overflow-hidden rounded-3xl min-h-64 flex items-center p-6 md:p-10 group cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-green-600 w-full">
                    <div className="z-10">
                      <h3 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-wide mb-4">Our Mission</h3>
                      <p className="text-white text-lg leading-relaxed">
                        To bring <strong>Premier Family Living&reg;</strong> to life by creating homes and communities that families can grow into&mdash;guided by quality, integrity, and genuine care for every homeowner we serve.
                      </p>
                    </div>
                    <div className="absolute bottom-6 right-6 opacity-20 text-white group-hover:opacity-30 transition-opacity duration-300">
                      <svg className="w-14 h-14" fill="none" viewBox="0 0 64 64" stroke="currentColor">
                        <circle cx="32" cy="32" r="14" strokeWidth="2" />
                        <path d="M44 20L36 28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </ScrollReveal>
              </ScrollContainer>
            </div>

            {/* Core Values */}
            <div id="values" className="rounded-3xl overflow-hidden bg-white scroll-mt-24 py-12 md:py-16">
              <ScrollReveal>
                <h3 className="text-2xl md:text-4xl font-bold text-green-600 text-center uppercase tracking-widest md:tracking-[0.25em] mb-10 md:mb-16">
                  Our Core Values
                </h3>
              </ScrollReveal>
              <ScrollContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-12 w-full max-w-6xl mx-auto px-2 md:px-4 justify-items-center">
                {CORE_VALUES.map((value) => (
                  <ScrollReveal key={value.label} className="w-full flex">
                    <div className="flex flex-col items-center gap-4 group bg-gray-50/50 p-6 rounded-2xl hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-gray-100 w-full">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 p-1 bg-green-600 shadow-md">
                        {getValueIcon(value.iconType)}
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <span className="text-green-600 text-sm md:text-base font-bold uppercase tracking-[0.12em] mb-3">{value.label}</span>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </ScrollContainer>
            </div>
          </div>

          {/* Leadership */}
          <div id="leadership" className="mt-12 md:mt-16 scroll-mt-24">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-green-600">Leadership</h2>
              </div>
            </ScrollReveal>
            
            <div className="mb-16">
              <ScrollReveal>
                <h3 className="text-2xl font-bold text-gray-700 mb-8 border-l-4 border-green-600 pl-4">Board of Directors</h3>
              </ScrollReveal>
              <ScrollContainer className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
                {BOARD_OF_DIRECTORS.map((person) => (
                  <ScrollReveal key={person.name} className="w-full">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300 h-full">
                      <div className="aspect-4/5 bg-gray-100 overflow-hidden">
                        <img
                          src={person.image}
                          alt={person.name}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="text-base font-bold text-gray-800 leading-snug">{person.name}</h4>
                        <p className="text-green-600 font-medium text-sm mt-1">{person.title}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </ScrollContainer>
            </div>

            <div>
              <ScrollReveal>
                <h3 className="text-2xl font-bold text-gray-700 mb-8 border-l-4 border-green-600 pl-4">Management Team</h3>
              </ScrollReveal>
              <ScrollContainer className="bg-gray-50 rounded-3xl p-8 md:p-10">
                <ul className="list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-12">
                  {MANAGEMENT_TEAM.map((person) => (
                    <ScrollReveal key={person.name} className="flex flex-col">
                      <li className="flex flex-col">
                        <strong className="text-gray-800 text-base">{person.name}</strong>
                        <span className="text-gray-600 text-sm">{person.title}</span>
                      </li>
                    </ScrollReveal>
                  ))}
                </ul>
              </ScrollContainer>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

const getValueIcon = (type: string) => {
  const common = { className: 'w-9 h-9', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, viewBox: '0 0 24 24' } as const;
  switch (type) {
    case 'excellence':
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 21.5a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      );
    case 'integrity':
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286z" />
        </svg>
      );
    case 'innovation':
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
      );
    case 'leadership':
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
        </svg>
      );
    case 'resourcefulness':
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      );
    case 'respect':
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      );
    default:
      return null;
  }
};

export default Company;
