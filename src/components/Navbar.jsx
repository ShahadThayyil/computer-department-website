import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/academics', label: 'ACADEMICS' },
    { path: '/faculty', label: 'FACULTY' },
    { path: '/labs', label: 'LABS' },
    { path: '/gallery', label: 'GALLERY' },
  ];

  return (
    <>
      {/* 1. THE TOP BRANDING BAR */}
      <div className="fixed top-0 left-0 w-full z-[100] px-8 py-8 flex justify-between items-start pointer-events-none">
        <Link to="/" className="pointer-events-auto group">
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter text-black leading-none">
              SSMCE<span className="text-emerald-500">.</span>
            </span>
            <span className="text-[8px] font-bold tracking-[0.4em] text-black/30 uppercase mt-1">
              Computer Engineering
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - Minimalist Inline */}
        <nav className="hidden lg:flex gap-12 pointer-events-auto mr-24">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative group"
            >
              <span className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-colors ${
                location.pathname === link.path ? 'text-black' : 'text-black/40 hover:text-black'
              }`}>
                {link.label}
              </span>
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="activeDot"
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-500 rounded-full"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Action Corner */}
        <div className="pointer-events-auto flex items-center gap-6">
           <Link to="/contact" className="hidden sm:block">
              <span className="text-[10px] font-black tracking-widest uppercase border-b border-black pb-1 hover:text-emerald-500 hover:border-emerald-500 transition-all">
                Join '26
              </span>
           </Link>
           
           {/* Burger */}
           <button 
             onClick={() => setMobileMenu(true)}
             className="flex flex-col gap-1 group"
           >
             <div className="w-6 h-[2px] bg-black" />
             <div className="w-4 h-[2px] bg-black self-end group-hover:w-6 transition-all" />
           </button>
        </div>
      </div>

      {/* 2. SIDEBAR METRICS (Structural Element) */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-[100] hidden xl:flex flex-col gap-20 pointer-events-none">
        <div className="rotate-90 origin-left">
          <span className="text-[8px] font-bold tracking-[0.5em] text-black/20 uppercase whitespace-nowrap">
            Architecture // Systems // Logic
          </span>
        </div>
      </div>

      {/* 3. FULLSCREEN MOBILE OVERLAY */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[120] bg-[#FAF9F6] p-8 flex flex-col"
          >
            <div className="flex justify-between items-center">
               <span className="text-xs font-black tracking-widest uppercase text-black/20">Menu</span>
               <button 
                 onClick={() => setMobileMenu(false)}
                 className="text-xs font-black tracking-widest uppercase"
               >
                 Close [×]
               </button>
            </div>

            <div className="flex-1 flex flex-col justify-center gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenu(false)}
                    className="text-6xl sm:text-8xl font-black text-black tracking-tighter hover:text-emerald-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 pt-8 border-t border-black/10">
               <div>
                  <p className="text-[10px] font-bold uppercase text-black/40 mb-2">Inquiries</p>
                  <p className="text-xs font-bold">dept@ssmce.edu</p>
               </div>
               <div className="text-right">
                  <p className="text-[10px] font-bold uppercase text-black/40 mb-2">Location</p>
                  <p className="text-xs font-bold">Kerala, India</p>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;