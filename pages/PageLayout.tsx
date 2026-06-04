import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface PageLayoutProps {
  children: React.ReactNode;
} 
const PageLayout: React.FC<PageLayoutProps> = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="grow pt-[68px] md:pt-[80px]">
      {children}
    </main>
    <Footer />
  </div>
);

export default PageLayout;
