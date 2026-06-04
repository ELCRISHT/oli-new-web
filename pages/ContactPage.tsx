import React from 'react';
import PageLayout from './PageLayout';
import ContactUs from '../components/ContactUs';

const ContactPage: React.FC = () => (
  <PageLayout>
    <section className="bg-linear-to-r from-green-700 to-emerald-600 pt-10 md:pt-12 pb-10">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Get in Touch</h1>
        <p className="mx-auto mt-4 max-w-4xl text-base text-white md:text-lg">
        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
       </p>
      </div>
    </section>
    <ContactUs />
  </PageLayout>
);

export default ContactPage;
