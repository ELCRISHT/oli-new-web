import React from 'react';
import { ScrollReveal, ScrollContainer } from './shared/ScrollReveal';

const FEATURES = [
  {
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Track Your Application',
    description: 'Monitor your homebuying application status in real time — from reservation down to loan approval and house turnover.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
    title: 'Upload Documents',
    description: 'Submit and manage all your required documents digitally — no need to visit the office. Fast, secure, and paperless.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: 'Manage Payments',
    description: 'View your payment schedule, check equity balances, and pay your monthly dues conveniently through the portal.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    title: 'Connect with Your AO',
    description: 'Stay in touch with your dedicated Account Officer directly through the portal for updates, queries, and assistance.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: 'Real-Time Notifications',
    description: 'Receive instant alerts on application milestones, payment reminders, and important announcements as they happen.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Unit Information',
    description: 'Access detailed information about your reserved unit — floor plans, amenities, turnover schedules, and more.',
  },
];

const STEPS = [
  { step: '01', title: 'Register', desc: 'Create your free OLIHome account using your email address.' },
  { step: '02', title: 'Link Your Unit', desc: 'Enter your account code to connect your reserved Ovialand home.' },
  { step: '03', title: 'Submit Documents', desc: 'Upload all required documents directly from your device.' },
  { step: '04', title: 'Track & Manage', desc: 'Monitor your application, pay dues, and communicate with your AO — all in one place.' },
];

const HBP: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-r from-green-700 to-emerald-600 pt-10 md:pt-15 pb-10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Homebuyers Portal</h1>
          <p className="text-green-100 text-lg font-light max-w-2xl mx-auto">
            Your all-in-one digital hub for managing your Ovialand homebuying journey — anytime, anywhere.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/our-ambassadors"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-green-700 font-bold uppercase tracking-widest text-sm rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Book a Viewing
            </a>
            <a
              href="https://olihome.ovialand.com/App/Login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-white hover:text-green-700 transition-all duration-300"
            >
              Log In
            </a>
          </div>
        </div>
      </section>

      {/* What is OLI Home */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-6">What is OLIHome?</h2>
            <p className="text-gray-600 text-lg font-light leading-relaxed">
              OLIHome is Ovialand's dedicated digital portal built exclusively for homebuyers. It centralizes every step of your homebuying journey — from document submission and payment tracking to direct communication with your Account Officer — into one seamless, secure, and easy-to-use platform.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />

      {/* Features */}
      <section className="py-10 bg-gray-50 to-transparent">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">Portal Features</h2>
            <p className="text-gray-500 text-lg font-light">
              Everything you need to manage your homeownership journey — right at your fingertips.
            </p>
          </ScrollReveal>
          <ScrollContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature) => (
              <ScrollReveal
                key={feature.title}
                className="group bg-white rounded-2xl shadow-md p-8 border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-green-200"
              >
                <div className="mb-5 inline-flex items-center justify-center w-14 h-14 bg-green-50 rounded-xl group-hover:bg-green-100 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{feature.description}</p>
              </ScrollReveal>
            ))}
          </ScrollContainer>
        </div>
      </section>

      <div className="h-px bg-linear-to-r from-transparent via-white to-transparent" />
      {/* CTA */}
      <section className="py-10 bg-linear-to-r from-white to-white">
        <ScrollReveal className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">Ready to Access Your Portal?</h2>
          <p className="text-green-700 text-lg font-light max-w-xl mx-auto mb-8">
            Join thousands of Ovialand homebuyers who are already managing their journey online.
          </p>
          <a
            href="https://olihome.ovialand.com/App/Login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-green-700 text-white font-bold uppercase tracking-widest text-sm rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Explore OLIHome Now
          </a>
        </ScrollReveal>
      </section>
    </>
  );
};

export default HBP;