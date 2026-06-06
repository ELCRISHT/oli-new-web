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

          <div className="mt-24">
            {/* Vision & Mission */}
            <div id="mission-vision" className="mb-16 scroll-mt-24">
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
            <div id="values" className="rounded-3xl overflow-hidden bg-white scroll-mt-24 py-12 md:py-20">
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
          <div id="leadership" className="mt-16 md:mt-24 scroll-mt-24">
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
  switch (type) {
    case 'excellence':
      return <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>;
    case 'integrity':
      return <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" /></svg>;
    case 'innovation':
      return <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-20C7.31 1 5 3.31 5 6c0 2.05.84 3.89 2.2 5.22.14 1.56.63 3.06 1.52 4.37.47.6.77 1.22.77 1.91V19c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1.5c0-.69.3-1.31.77-1.91.89-1.31 1.38-2.81 1.52-4.37C18.16 9.89 19 8.05 19 6c0-2.69-2.31-5-5-5zm0 2c1.66 0 3 1.34 3 3 0 1.66-1.34 3-3 3s-3-1.34-3-3c0-1.66 1.34-3 3-3z" /></svg>;
    case 'leadership':
      return <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>;
    case 'resourcefulness':
      return <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 15.5c1.93 0 3.5-1.57 3.5-3.5S13.93 8.5 12 8.5s-3.5 1.57-3.5 3.5 1.57 3.5 3.5 3.5zM19 6.41V5h-1.5v1.41c-1.12.33-2.13 1.05-2.9 2.02-.32.36-.59.78-.82 1.23-.83-.26-1.7-.4-2.59-.4-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10c0-.88-.14-1.75-.4-2.59.45-.23.87-.5 1.23-.82.97-.77 1.69-1.78 2.02-2.9H19v-1.5z" /></svg>;
    case 'respect':
      return <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>;
    default:
      return null;
  }
};

export default Company;
