import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Scroll direction logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        // Scrolling Down - Hide Navbar
        setHidden(true);
        setIsOpen(false); // Close mobile menu if open while scrolling
      } else {
        // Scrolling Up - Show Navbar
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/academics', label: 'ACADEMICS' },
    { path: '/faculty', label: 'FACULTY' },
    { path: '/labs', label: 'LABS' },
    { path: '/gallery', label: 'GALLERY' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center z-50 pointer-events-none">
      
      {/* The Brutalist Arch with Scroll Animation */}
      <motion.nav 
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -150, opacity: 0 }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto relative flex items-center justify-between w-full max-w-7xl bg-[#FAF9F5] border-x-4 border-b-4 border-[#1A1A18] rounded-b-[3rem] md:rounded-b-[6rem] px-8 md:px-20 py-6 shadow-[12px_12px_0px_#D95D39]"
      >
        
        {/* Logo - Heavy Weight */}
        <Link to="/" className="flex items-center z-50">
          <span className="text-2xl md:text-3xl font-black text-[#1A1A18] tracking-tighter">
            SSM <span className="text-[#D95D39]">CE_</span>
          </span>
        </Link>

        {/* Desktop Links - All Caps Editorial Style */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            
            return (
              <Link 
                key={link.path} 
                to={link.path}
                className="relative px-6 py-2 group"
              >
                <span className={`relative z-10 text-xs font-black tracking-widest transition-colors duration-300 ${
                  isActive ? 'text-[#FAF9F5]' : 'text-[#1A1A18] group-hover:text-[#D95D39]'
                }`}>
                  {link.label}
                </span>
                
                {isActive && (
                  <motion.div
                    layoutId="brutalistNav"
                    className="absolute inset-0 bg-[#1A1A18] rounded-lg z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Action Button - Heavy Industrial Style */}
        <div className="flex items-center gap-6">
          <Link 
            to="/contact" 
            className="hidden md:block bg-[#D95D39] text-[#FAF9F5] font-black text-xs tracking-widest px-8 py-4 rounded-xl border-2 border-[#1A1A18] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all shadow-[4px_4px_0px_#1A1A18]"
          >
            ADMISSIONS
          </Link>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 bg-[#1A1A18] text-[#FAF9F5] rounded-2xl hover:bg-[#D95D39] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown - Solid Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="lg:hidden absolute top-[110%] left-0 w-full bg-[#FAF9F5] border-4 border-[#1A1A18] rounded-[2rem] shadow-[10px_10px_0px_#D95D39] p-6 overflow-hidden"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-xl font-black tracking-tighter p-4 rounded-xl border-2 transition-all ${
                      location.pathname === link.path 
                        ? 'bg-[#1A1A18] text-[#FAF9F5] border-[#1A1A18]' 
                        : 'text-[#1A1A18] border-transparent hover:border-[#1A1A18]'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-[#D95D39] text-[#FAF9F5] text-center font-black py-6 rounded-xl border-4 border-[#1A1A18]"
                >
                  ADMISSIONS
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.nav>
    </div>
  );
};

export default Navbar;