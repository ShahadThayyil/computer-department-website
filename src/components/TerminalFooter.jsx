import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const TerminalFooter = () => {
  return (
    <footer className="bg-[#FAF9F5] pt-32 pb-12 px-6 border-t-[12px] border-[#1A1A18] relative overflow-hidden">
      
      {/* Structural Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(#E3E0D5_1px,transparent_1px),linear-gradient(90deg,#E3E0D5_1px,transparent_1px)] bg-[size:64px_64px] opacity-20 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* --- GIANT FOOTER BRANDING --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-32">
          <div className="lg:w-2/3">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[12vw] lg:text-[10rem] font-black leading-[0.8] tracking-tighter text-[#1A1A18] mb-12"
            >
              BUILD <br />
              <span className="text-[#D95D39]">BEYOND.</span>
            </motion.h2>
            <p className="text-2xl font-bold text-[#4A4843] max-w-md leading-tight">
              SSM Polytechnic Computer Engineering. <br />
              Architecting the next generation of creators since 1988.
            </p>
          </div>

          {/* Large Scale CTA */}
          <div className="lg:w-1/3 flex flex-col items-end w-full">
            <Link 
              to="/contact"
              className="group w-full lg:w-auto bg-[#1A1A18] text-[#FAF9F5] p-10 md:p-16 rounded-[3rem] flex flex-col justify-between hover:bg-[#D95D39] transition-all duration-500 shadow-[15px_15px_0px_rgba(26,26,24,0.1)]"
            >
              <span className="font-mono text-xs font-black tracking-widest mb-12">// INITIATE_ADMISSION</span>
              <div className="flex items-end justify-between gap-8">
                <span className="text-4xl md:text-5xl font-black leading-none uppercase tracking-tighter">Apply <br/> Now</span>
                <svg className="w-12 h-12 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </div>
        </div>

        {/* --- DIRECTORY GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 border-t-4 border-[#1A1A18] pt-16 mb-24">
          
          <div className="col-span-2">
            <h4 className="font-mono text-xs font-black text-[#D95D39] mb-8 uppercase tracking-[0.3em]">// SYSTEM_LOCATION</h4>
            <p className="text-lg font-bold text-[#1A1A18] leading-snug">
              PB No.1, Thekkummuri PO,<br/>
              Tirur, Malappuram Dt.<br/>
              Kerala - 676 105
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs font-black text-[#D95D39] mb-8 uppercase tracking-[0.4em]">// NAV</h4>
            <ul className="space-y-3 text-sm font-black text-[#1A1A18] uppercase tracking-tighter">
              <li><Link to="/" className="hover:text-[#D95D39]">Home</Link></li>
              <li><Link to="/academics" className="hover:text-[#D95D39]">Academics</Link></li>
              <li><Link to="/faculty" className="hover:text-[#D95D39]">Faculty</Link></li>
              <li><Link to="/gallery" className="hover:text-[#D95D39]">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs font-black text-[#D95D39] mb-8 uppercase tracking-[0.4em]">// RES</h4>
            <ul className="space-y-3 text-sm font-black text-[#1A1A18] uppercase tracking-tighter">
              <li><a href="#" className="hover:text-[#D95D39]">LMS_Portal</a></li>
              <li><a href="#" className="hover:text-[#D95D39]">Syllabus_PDF</a></li>
              <li><a href="#" className="hover:text-[#D95D39]">NBA_Docs</a></li>
            </ul>
          </div>

          <div className="col-span-2 flex flex-col items-end">
            <h4 className="font-mono text-xs font-black text-[#D95D39] mb-8 uppercase tracking-[0.4em]">// SOCIAL_NET</h4>
            <div className="flex gap-4">
              {['GH', 'LI', 'IG', 'YT'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-12 h-12 border-2 border-[#1A1A18] flex items-center justify-center font-black text-xs hover:bg-[#1A1A18] hover:text-[#FAF9F5] transition-all rounded-lg"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#1A1A18]/10 font-mono text-[10px] font-bold text-[#4A4843] tracking-widest uppercase">
          <p>© 2026 SSM_POLYTECHNIC_CE // ALL_RIGHTS_RESERVED</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <p>DESIGN_BY: RINSHAD_T</p>
            <p>STATUS: 200_OK</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TerminalFooter;