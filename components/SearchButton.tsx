import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { DEVELOPMENTS } from '../data/developments';

interface SearchResult {
  label: string;
  href: string;
  category: string;
}

const STATIC_RESULTS: SearchResult[] = [
  { label: 'About Us', href: '/company', category: 'Company' },
  { label: 'Vision and Mission', href: '/company#mission-vision', category: 'Company' },
  { label: 'Core Values', href: '/company#values', category: 'Company' },
  { label: 'Leadership', href: '/company#leadership', category: 'Company' },
  { label: 'CSR', href: '/company/csr', category: 'Company' },
  { label: 'Awards and Recognition', href: '/company#awards', category: 'Company' },
  { label: 'Communities', href: '/business#communities', category: 'Business' },
  { label: 'HousEasy', href: '/business/houseasy', category: 'Business' },
  { label: 'Homebuying Journey', href: '/business/houseasy#journey', category: 'Business' },
  { label: 'Investors', href: '/investors', category: 'Investors' },
  { label: 'Governance', href: '/investors#governance', category: 'Investors' },
  { label: 'Disclosure', href: '/investors#disclosure', category: 'Investors' },
  { label: 'News', href: '/news', category: 'News' },
  { label: 'Careers', href: '/careers', category: 'Careers' },
  { label: 'Contact Us', href: '/contact', category: 'Contact' },
  { label: 'OLI Ambassadors', href: '/our-ambassadors', category: 'OLI Ambassadors' },
  ...DEVELOPMENTS.map((d) => ({
    label: d.name,
    href: `/business#communities`,
    category: 'Community',
  })),
];

const SearchButton: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const results = query.trim().length > 0
    ? STATIC_RESULTS.filter((r) =>
      r.label.toLowerCase().includes(query.toLowerCase()) ||
      r.category.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8)
    : [];

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const handleSelect = (href: string) => {
    setOpen(false);
    const [path, hash] = href.split('#');
    navigate(path + (hash ? `#${hash}` : ''));
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Search"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.2}
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="16.5" y1="16.5" x2="22" y2="22" />
        </svg>
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4"
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setOpen(false)} />

          {/* Search panel */}
          <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Input row */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-green-600 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="16.5" y1="16.5" x2="22" y2="22" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages, communities…"
                className="flex-1 text-base text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent"
              />
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Results */}
            {results.length > 0 && (
              <ul className="max-h-72 overflow-y-auto divide-y divide-gray-50">
                {results.map((r, i) => (
                  <li key={i}>
                    <button
                      onClick={() => handleSelect(r.href)}
                      className="w-full flex items-center justify-between px-5 py-3 hover:bg-green-50 transition-colors text-left"
                    >
                      <span className="text-gray-800 font-medium text-sm">{r.label}</span>
                      <span className="text-xs text-green-600 font-semibold uppercase tracking-wide ml-4">{r.category}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {query.trim().length > 0 && results.length === 0 && (
              <p className="px-5 py-4 text-sm text-gray-400">No results for &ldquo;{query}&rdquo;</p>
            )}

            {query.trim().length === 0 && (
              <p className="px-5 py-4 text-sm text-gray-400">Start typing to search…</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchButton;
