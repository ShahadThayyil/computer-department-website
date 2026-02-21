import React from 'react';
import { motion } from 'framer-motion';

const HODSection = () => {
  // Data derived from official records
  const hod = {
    name: "DR. TECH LEAD",
    role: "HEAD OF SECTION",
    dept: "COMPUTER ENGINEERING",
    qualifications: ["M.TECH", "PH.D IN COMPUTER SCIENCE"],
    expertise: ["SYSTEM ARCHITECTURE", "AI & MACHINE LEARNING"],
    email: "hod.ce@ssmpoly.ac.in"
  };

  return (
    <section className="py-32 bg-[#FAF9F5] border-t-4 border-[#1A1A18] relative px-6 overflow-hidden">
      
      {/* Background Tech Label */}
      <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[20vw] font-black text-[#1A1A18] leading-none">LEADERSHIP</h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* --- LEFT: THE PROFILE IMAGE (Structural Block) --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          {/* Heavy Bordered Frame */}
          <div className="relative aspect-[4/5] bg-[#E3E0D5] border-4 border-[#1A1A18] rounded-[2rem] overflow-hidden shadow-[20px_20px_0px_#1A1A18] group">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000" 
              alt="HOD Profile" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            {/* Editorial Overlay */}
            <div className="absolute bottom-6 left-6 bg-[#D95D39] text-[#FAF9F5] font-mono text-[10px] font-black px-4 py-2 rounded-md shadow-lg">
              REF_ID: HOD_88_CE
            </div>
          </div>
        </motion.div>

        {/* --- RIGHT: TECHNICAL DATASHEET --- */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col items-start lg:items-end text-left lg:text-right"
        >
          <span className="font-mono text-xs font-black tracking-[0.4em] text-[#D95D39] uppercase mb-6 block">
            // LEADERSHIP_DIRECTORY
          </span>
          
          <h2 className="text-6xl md:text-8xl font-black text-[#1A1A18] tracking-tighter leading-[0.85] mb-4">
            {hod.name}
          </h2>
          <p className="text-xl font-black text-[#D95D39] mb-12 uppercase tracking-widest">
            {hod.role} // {hod.dept}
          </p>

          {/* Qualifications & Expertise Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="bg-white border-4 border-[#1A1A18] p-8 rounded-3xl shadow-[8px_8px_0px_#1A1A18] flex flex-col items-start lg:items-end">
              <h4 className="font-mono text-[10px] font-black text-gray-400 mb-4 uppercase tracking-widest">QUALIFICATIONS</h4>
              <ul className="space-y-2 text-lg font-bold text-[#1A1A18]">
                {hod.qualifications.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white border-4 border-[#1A1A18] p-8 rounded-3xl shadow-[8px_8px_0px_#1A1A18] flex flex-col items-start lg:items-end">
              <h4 className="font-mono text-[10px] font-black text-gray-400 mb-4 uppercase tracking-widest">AREA_OF_EXPERTISE</h4>
              <ul className="space-y-2 text-lg font-bold text-[#1A1A18]">
                {hod.expertise.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Action */}
          <div className="mt-12">
            <a 
              href={`mailto:${hod.email}`} 
              className="inline-flex items-center gap-6 group"
            >
              <span className="text-2xl font-black text-[#1A1A18] tracking-tighter border-b-8 border-[#D95D39] group-hover:bg-[#D95D39] group-hover:text-[#FAF9F5] transition-all">
                {hod.email}
              </span>
              <div className="w-12 h-12 rounded-full bg-[#1A1A18] flex items-center justify-center text-[#FAF9F5] group-hover:rotate-45 transition-transform duration-500">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HODSection;