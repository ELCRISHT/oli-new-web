import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface PageLayoutProps {
  children: React.ReactNode;
} 
const PageLayout: React.FC<PageLayoutProps> = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <motion.main 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="grow pt-[68px] md:pt-[80px]"
    >
      {children}
    </motion.main>
    <Footer />
  </div>
);

export default PageLayout;
