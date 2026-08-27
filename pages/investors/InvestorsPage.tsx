import React from 'react';
import PageLayout from '../PageLayout';
import { ScrollReveal, ScrollContainer } from '../../components/shared/ScrollReveal';

const InvestorsPage: React.FC = () => (
  <PageLayout>
    <section id="governance" className="bg-linear-to-r from-green-700 to-emerald-600 pt-10 md:pt-12 pb-10">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Investor Relations</h1>
      </div>
    </section>

    <section className="py-16 md:py-24 bg-linear-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <ScrollReveal className="text-center mb-16">
            <p className="text-lg md:text-xl text-gray-600 mb-2">
              Access key information and stay updated on Ovialand's performance
            </p>
            <div className="h-1 w-20 bg-green-600 mx-auto mt-4"></div>
          </ScrollReveal>

          {/* Info Cards Grid */}
          <ScrollContainer className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Card 1 */}
            <ScrollReveal className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Reports</h3>
              <p className="text-gray-600">Access our latest financial statements and annual reports</p>
            </ScrollReveal>

            {/* Card 2 */}
            <ScrollReveal className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Governance</h3>
              <p className="text-gray-600">Learn about our Board of Directors and corporate governance</p>
            </ScrollReveal>

            {/* Card 3 */}
            <ScrollReveal className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">News & Updates</h3>
              <p className="text-gray-600">Stay informed with the latest company announcements</p>
            </ScrollReveal>
          </ScrollContainer>

          {/* Contact Card */}
          <ScrollReveal className="bg-linear-to-r from-green-600 to-emerald-600 rounded-3xl p-6 md:p-12 text-center shadow-lg">
            <div className="mb-6">
              <svg className="w-16 h-16 text-white mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Get in Touch
            </h3>
            <p className="text-white/90 text-base md:text-lg mb-8">
              For any information requests, please reach out to us directly
            </p>
            <a 
              href="mailto:investorrelations@ovialand.com" 
              className="inline-flex items-center gap-2 bg-white text-green-600 font-bold px-4 py-3 md:px-8 md:py-4 rounded-full hover:bg-gray-100 transition shadow-lg max-w-full text-xs sm:text-sm md:text-base"
            >
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span className="truncate">investorrelations@ovialand.com</span>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Contact Us Section */}
    <section className="bg-linear-to-r from-green-700 to-emerald-700 py-12 md:py-16">
      <div className="container mx-auto px-6">
        <ScrollContainer className="flex flex-col md:flex-row items-center md:items-start justify-between max-w-6xl mx-auto">
          {/* Logo and Button */}
          <ScrollReveal animation="fade-right" className="flex flex-col items-center md:items-start md:w-1/3 mb-10 md:mb-0">
            <img src="/new.png" alt="Ovialand Logo" className="h-24 w-auto object-contain mb-6" />
            <a
              href="/contact"
              className="bg-white text-green-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-green-100 transition mb-4 md:mb-0"
            >
              Send Inquiry
            </a>
          </ScrollReveal>
          {/* Contact Links */}
          <ScrollReveal animation="fade-left" className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
            <div>
              <h4 className="font-bold text-white mb-3 text-lg">ABOUT US</h4>
              <ul className="space-y-2">
                <li><a href="/company#mission-vision" className="text-white/90 hover:underline">Vision and Mission</a></li>
                <li><a href="/company#awards" className="text-white/90 hover:underline">Awards and Recognition</a></li>
                <li><a href="/socials" className="text-white/90 hover:underline">Socials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3 text-lg">PROPERTIES</h4>
              <ul className="space-y-2">
                <li><a href="/business#communities" className="text-white/90 hover:underline">Santevi</a></li>
                <li><a href="/business#communities" className="text-white/90 hover:underline">Savana</a></li>
                <li><a href="/business#communities" className="text-white/90 hover:underline">Sannera</a></li>
                <li><a href="/business#communities" className="text-white/90 hover:underline">Terraza de Sto. Tomas</a></li>
                <li><a href="/business#communities" className="text-white/90 hover:underline">Caliya</a></li>
                <li><a href="/business#communities" className="text-white/90 hover:underline">Seriya</a></li>
                <li><a href="/business#communities" className="text-white/90 hover:underline">Sentro</a></li>
                <li><a href="/business#communities" className="text-white/90 hover:underline">Anara</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3 text-lg">CONTACT US</h4>
              <ul className="space-y-2">
                <li><a href="/careers" className="text-white/90 hover:underline">Careers</a></li>
              </ul>
            </div>
          </ScrollReveal>
        </ScrollContainer>
      </div>
    </section>

  </PageLayout>
);

export default InvestorsPage;
