import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useDropdown } from '../../hooks/useDropdown';

interface NavDropdownProps {
  label: string;
  href: string;
  isActive: boolean;
  children: React.ReactNode;
  width?: string;
}

const NavDropdown: React.FC<NavDropdownProps> = ({ 
  label, 
  href, 
  isActive, 
  children, 
  width = 'w-56' 
}) => {
  const { isOpen, open, close } = useDropdown();

  return (
    <div
      className="relative"
      onMouseEnter={open}
      onMouseLeave={() => close()}
    >
      <Link
        to={href}
        className={`text-sm font-bold uppercase tracking-wide transition-all duration-300 ease-in-out flex items-center gap-1 relative text-green-600 hover:text-green-800 after:bg-green-600 ${
          isActive ? 'text-green-700 after:scale-x-100' : ''
        } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:scale-x-0 after:origin-left after:transition-all after:duration-300 after:ease-in-out hover:after:scale-x-100`}
        onClick={() => close(true)}
      >
        {label}
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>
      
      <AnimatePresence>
        {isOpen && (
          <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 ${width} z-50`}>
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-xl shadow-2xl py-4 border border-gray-100"
            >
              {children}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavDropdown;
