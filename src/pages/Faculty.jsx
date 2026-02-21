import React from 'react';
import { motion } from 'framer-motion';

const Faculty = () => {
  // Enhanced Mock Data with Image Placeholders
  const hod = {
    name: "DR. TECH LEAD",
    role: "HEAD OF SECTION",
    qualifications: "M.TECH, PH.D IN COMPUTER SCIENCE",
    expertise: ["SYSTEM ARCHITECTURE", "AI & MACHINE LEARNING"],
    email: "hod.ce@ssmpoly.ac.in",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200"
  };

  const teachingStaff = [
    { name: "PROF. ALAN TURING", role: "SENIOR LECTURER", techStack: ["C++", "DSA"], image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800" },
    { name: "PROF. ADA LOVELACE", role: "LECTURER", techStack: ["PYTHON", "ALGO"], image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" },
    { name: "PROF. LINUS TORVALDS", role: "LECTURER", techStack: ["LINUX", "OS"], image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" },
    { name: "PROF. GRACE HOPPER", role: "LECTURER", techStack: ["JAVA", "SWE"], image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-44 pb-32 selection:bg-[#D95D39] selection:text-white">
      
      {/* --- HERO: BOLD HEADER --- */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="font-mono text-xs font-black tracking-[0.4em] text-[#D95D39] uppercase mb-6 block">
              // ACADEMIC_LEADERSHIP
            </span>
            <h1 className="text-6xl md:text-9xl font-black text-[#1A1A18] tracking-tighter leading-[0.85] mb-12">
              THE <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #1A1A18' }}>MENTORS.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- HOD: FEATURED FULL-WIDTH PROFILE --- */}
      <section className="px-6 mb-44">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch border-4 border-[#1A1A18] rounded-[3rem] overflow-hidden bg-white shadow-[20px_20px_0px_#1A1A18]">
            
            {/* Image Side */}
            <div className="lg:col-span-7 h-[500px] lg:h-[700px] overflow-hidden border-r-0 lg:border-r-4 border-[#1A1A18]">
              <motion.img 
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                src={hod.image} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>

            {/* Info Side */}
            <div className="lg:col-span-5 p-10 md:p-16 flex flex-col justify-center bg-[#FAF9F5]">
              <span className="font-mono text-xs font-black text-[#D95D39] mb-4">REF_ID: HOD_DIR</span>
              <h2 className="text-5xl md:text-7xl font-black text-[#1A1A18] tracking-tighter leading-none mb-6">
                {hod.name}
              </h2>
              <p className="text-lg font-black text-[#D95D39] mb-8 uppercase tracking-widest">{hod.role}</p>
              
              <div className="space-y-6 mb-12">
                <div className="border-l-4 border-[#1A1A18] pl-6">
                  <h4 className="font-mono text-[10px] text-gray-400 mb-2 font-black uppercase tracking-widest">CREDENTIALS</h4>
                  <p className="font-bold text-[#1A1A18]">{hod.qualifications}</p>
                </div>
                <div className="border-l-4 border-[#1A1A18] pl-6">
                  <h4 className="font-mono text-[10px] text-gray-400 mb-2 font-black uppercase tracking-widest">DOMAINS</h4>
                  <p className="font-bold text-[#1A1A18]">{hod.expertise.join(", ")}</p>
                </div>
              </div>

              <a href={`mailto:${hod.email}`} className="group flex items-center gap-4 text-sm font-black tracking-widest uppercase">
                <span className="border-b-4 border-[#1A1A18] group-hover:border-[#D95D39] transition-all">INBOX_ACCESS</span>
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- TEACHING STAFF: STAGGERED FULL CARDS --- */}
      <section className="px-6 mb-44">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-black text-[#1A1A18] tracking-tighter uppercase mb-20 border-b-4 border-[#1A1A18] pb-6">
            CORE_FACULTY
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teachingStaff.map((staff, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col group"
              >
                {/* Large Scale Portrait */}
                <div className="aspect-[4/5] w-full bg-gray-200 border-4 border-[#1A1A18] rounded-[2.5rem] overflow-hidden mb-8 shadow-[12px_12px_0px_#1A1A18] group-hover:shadow-[12px_12px_0px_#D95D39] transition-all">
                  <img src={staff.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={staff.name} />
                </div>
                
                {/* Info Block */}
                <div className="px-4">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-3xl font-black text-[#1A1A18] tracking-tighter leading-none">{staff.name}</h4>
                    <span className="font-mono text-[10px] font-black text-[#D95D39] mt-1 tracking-widest">{staff.role}</span>
                  </div>
                  <div className="flex gap-2">
                    {staff.techStack.map((tech, i) => (
                      <span key={i} className="font-mono text-[10px] font-black bg-[#1A1A18] text-[#FAF9F5] px-3 py-1 rounded-full uppercase tracking-widest">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECH STAFF: MINIMALIST DATA LIST --- */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto border-t-4 border-[#1A1A18] pt-16 flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="md:w-1/3">
            <h3 className="text-3xl font-black text-[#1A1A18] tracking-tighter uppercase">SUPPORT <br/>MODULES</h3>
          </div>
          <div className="md:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
            {["John Doe", "Jane Smith", "Alex Code"].map((name, i) => (
              <div key={i} className="border-b-2 border-[#1A1A18]/10 pb-4 flex justify-between items-end">
                <div>
                  <p className="text-xl font-black text-[#1A1A18]">{name}</p>
                  <p className="text-xs font-bold text-[#D95D39] uppercase">Technical Assistant</p>
                </div>
                <span className="font-mono text-[10px] text-gray-400">LAB_OP</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;