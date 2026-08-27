import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ADDITIONAL_NEWS from '../data/news.json';
import { ScrollReveal, ScrollContainer } from './shared/ScrollReveal';

const NEWS_ITEMS = [
  {
    date: 'February 21, 2026',
    category: 'New Project',
    title: 'Housing that keeps its promise - Inquirer Business',
    excerpt:
      'Affordable housing has become a familiar phrase in Philippine property conversations officially breaks ground on its newest master-planned development in Bulacan.',
    image: '/News-1.jpg',
    link: 'https://business.inquirer.net/575224/housing-that-keeps-its-promise',
  },
  {
    date: 'December 11, 2025',
    category: 'Milestone',
    title: 'Ovialand expects to post P880-M net income this 2025 - Inquirer Business',
    excerpt:
      'A proud milestone for Ovialand as we celebrate the turnover of our 1,600th home, fulfilling our promise of Premier Family Living.',
    image: '/News-2.jpg',
    link: 'https://business.inquirer.net/563687/ovialand-expects-to-post-p880-m-net-income-this-2025',
  },
  {
    date: 'November 26, 2025',
    category: 'Event',
    title: "Ovialand rolls out third project with Japan's Takara Leben - The Manila Times",
    excerpt:
      'Ovialand Inc. has expanded its partnership with Japan’s Takara Leben Co. Ltd. with the launch of Anara, a 4.2-hectare residential development in Baliwag, Bulacan.',
    image: '/News-3.jpg',
    link: 'https://www.manilatimes.net/2025/11/26/business/corporate-news/ovialand-rolls-out-third-project-with-japans-takara-leben/2231476',
  },
];

const News: React.FC<{ moreNews?: any[]; filterYear?: string | null }> = ({ moreNews, filterYear = null }) => {
  const [expanded, setExpanded] = useState(!!filterYear);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const placeholders = moreNews ?? (ADDITIONAL_NEWS as any[]);
  const allNews = [...NEWS_ITEMS, ...placeholders];
  const normalized = allNews.map((n) => ({ ...n, year: n.year ?? (n.date ? Number(String(n.date).match(/\d{4}$/)) : undefined) }));

  // Sort by date in descending order (newest first)
  const parseDate = (dateStr: string) => {
    const months: { [key: string]: number } = {
      'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5,
      'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11
    };
    const parts = dateStr.split(' ');
    if (parts.length === 3) {
      const month = months[parts[0]];
      const day = parseInt(parts[1].replace(',', ''));
      const year = parseInt(parts[2]);
      return new Date(year, month || 0, day || 1);
    }
    return new Date(0);
  };

  const sortedNormalized = [...normalized].sort((a, b) => {
    return parseDate(b.date || '').getTime() - parseDate(a.date || '').getTime();
  });

  const effectiveFilter = selectedYear ?? filterYear;
  const filteredByYear = effectiveFilter ? sortedNormalized.filter(n => Number(n.year) === Number(effectiveFilter)) : null;
  const previewCount = 3;
  const visibleTop = effectiveFilter ? filteredByYear ?? [] : sortedNormalized.slice(0, previewCount);
  const remaining = effectiveFilter ? [] : sortedNormalized.slice(previewCount);
  const location = useLocation();
  const isNewsPage = location.pathname === '/news' || location.pathname.startsWith('/news');
  const currentYear = new Date().getFullYear();
  const years: number[] = [];
  for (let y = currentYear; y >= 2024; y--) years.push(y);
  return (
    <section id="news" className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-6">

        {!isNewsPage && (
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-600 mb-4">News & Updates</h2>
            <p className="text-gray-500 text-base md:text-lg font-light">
              Stay up-to-date with our latest projects, milestones, and events.
            </p>
          </ScrollReveal>
        )}

        <div className="flex justify-end mb-6 relative">
          <button
            aria-pressed={filterOpen}
            onClick={() => setFilterOpen(v => !v)}
            className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-200"
            title="Filter by year"
          >
            <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M10 12h10M6 18h8" />
            </svg>
          </button>

          {filterOpen && (
            <div className="absolute right-0 mt-3 w-48 bg-white rounded-lg shadow-lg p-3 border border-gray-100 z-20">
              <div className="text-sm font-semibold text-gray-700 mb-2">Filter by Year</div>
              <div className="flex flex-col gap-1 max-h-40 overflow-auto">
                {years.map((y) => (
                  <button
                    key={y}
                    onClick={() => { setSelectedYear(String(y)); setExpanded(true); }}
                    className={`text-left px-3 py-2 rounded ${selectedYear === String(y) ? 'bg-green-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    {y}
                  </button>
                ))}
              </div>
              <div className="flex justify-between mt-3">
                <button
                  onClick={() => { setSelectedYear(null); setFilterOpen(false); setExpanded(false); }}
                  className="text-xs text-gray-500 underline"
                >
                  Clear
                </button>
                <button onClick={() => setFilterOpen(false)} className="text-xs font-semibold text-green-600">Done</button>
              </div>
            </div>
          )}
        </div>

        <ScrollContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {visibleTop.map((item, i) => (
            <ScrollReveal
              key={i}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-7 flex flex-col grow">
                <p className="text-gray-400 text-xs uppercase tracking-widest font-medium mb-3">{item.date}</p>
                <h3 className="text-green-600 font-bold text-xl mb-3 leading-snug group-hover:text-green-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed grow">{item.excerpt}</p>
                <div className="mt-6">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 font-bold text-xs uppercase tracking-widest flex items-center space-x-2 hover:space-x-3 transition-all"
                    >
                      <span>Read More</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  ) : (
                    <button className="text-green-600 font-bold text-xs uppercase tracking-widest flex items-center space-x-2 group-hover:space-x-3 transition-all">
                      <span>Read More</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </ScrollContainer>
        {expanded && !filterYear && (
          <div className="mt-10">
            <ScrollContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {remaining.map((item, i) => (
                <ScrollReveal
                  key={`more-${i}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">{item.category}</span>
                    </div>
                  </div>
                  <div className="p-7 flex flex-col grow">
                    <p className="text-gray-400 text-xs uppercase tracking-widest font-medium mb-3">{item.date}</p>
                    <h3 className="text-green-600 font-bold text-xl mb-3 leading-snug group-hover:text-green-700 transition-colors">{item.title}</h3>
                    <p className="text-gray-500 font-light text-sm leading-relaxed grow">{item.excerpt}</p>
                    <div className="mt-6">
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-green-600 font-bold text-xs uppercase tracking-widest flex items-center space-x-2 hover:space-x-3 transition-all">
                          <span>Read More</span>
                        </a>
                      ) : (
                        <button className="text-green-600 font-bold text-xs uppercase tracking-widest flex items-center space-x-2 group-hover:space-x-3 transition-all" disabled>
                          <span>Coming Soon</span>
                        </button>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </ScrollContainer>
          </div>
        )}

        <div className="text-center mt-12 pb-12">
          {!isNewsPage ? (
            <Link to="/news" className="px-8 py-4 bg-white border-2 border-green-600 hover:bg-green-600 hover:text-white text-green-600 font-bold uppercase tracking-widest text-sm rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              View All News
            </Link>
          ) : (
            <button
              aria-expanded={expanded}
              onClick={() => setExpanded(v => !v)}
              className="px-8 py-4 bg-white border-2 border-green-600 hover:bg-green-600 hover:text-white text-green-600 font-bold uppercase tracking-widest text-sm rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {expanded ? 'Show Less' : 'View All News'}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default News;
