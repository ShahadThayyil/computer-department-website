import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Academics = () => {
  const [activeSem, setActiveSem] = useState(1);

  const syllabusData = {
    1: ["Communication Skills in English", "Mathematics I", "Applied Physics I", "Applied Chemistry", "Engineering Graphics", "Computer Fundamentals Lab"],
    2: ["Mathematics II", "Applied Physics II", "Environmental Science", "Programming in C", "Web Designing Lab", "C Programming Lab"],
    3: ["Computer Architecture", "Computer Networks", "Data Structures using C", "Database Management Systems", "DBMS Lab", "Data Structures Lab"],
    4: ["Object Oriented Programming", "Operating Systems", "Microprocessors", "Software Engineering", "OOP Lab", "Microprocessor Lab"],
    5: ["Web Programming", "Java Programming", "System Software", "Project Management", "Web Programming Lab", "Java Lab"],
    6: ["Mobile Application Development", "Internet of Things (IoT)", "Network Security", "Entrepreneurship", "IoT Lab", "Major Project"]
  };

  const resources = [
    { title: "STUDENT_LMS", id: "RES.01", desc: "Access assignments, notes, and digital classrooms." },
    { title: "NBA_RECORDS", id: "RES.02", desc: "Official National Board of Accreditation documentation." },
    { title: "ACADEMIC_CAL", id: "RES.03", desc: "Deployment schedule for exams and practicals." }
  ];

  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-44 pb-24 selection:bg-[#D95D39] selection:text-white">
      
      {/* --- HERO: BOLD EDITORIAL --- */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl"
          >
            <span className="font-mono text-xs font-black tracking-[0.4em] text-[#D95D39] uppercase mb-6 block">
              // PROGRAM_SPECIFICATION
            </span>
            <h1 className="text-6xl md:text-9xl font-black text-[#1A1A18] tracking-tighter leading-[0.85] mb-12">
              DIPLOMA IN <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #1A1A18' }}>COMP_ENG.</span>
            </h1>
            <p className="text-2xl font-bold text-[#4A4843] max-w-xl leading-tight border-l-8 border-[#D95D39] pl-8">
              A rigorous 3-year structural program affiliated with DTE Kerala, designed for raw production and system architecture.
            </p>
          </motion.div>
          
          <div className="hidden lg:block text-right font-mono text-[10px] font-bold text-[#1A1A18] opacity-30">
            <p>INSTITUTION: SSMP_TIRUR</p>
            <p>LOC_ID: 676_105</p>
            <p>DEPT: CSE_MODULE</p>
          </div>
        </div>
      </section>

      {/* --- CURRICULUM: STRUCTURAL DIRECTORY --- */}
      <section className="px-6 mb-40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 border-t-4 border-[#1A1A18] pt-16">
          
          {/* Sidebar: Semester Selector */}
          <div className="lg:col-span-3 lg:sticky lg:top-40 h-fit">
            <h3 className="font-mono text-xs font-black tracking-widest text-[#D95D39] mb-10 uppercase">
              SELECT_SEMESTER
            </h3>
            <div className="flex flex-wrap lg:flex-col gap-2">
              {[1, 2, 3, 4, 5, 6].map((sem) => (
                <button
                  key={sem}
                  onClick={() => setActiveSem(sem)}
                  className={`px-6 py-4 rounded-xl font-black text-sm tracking-widest transition-all text-left border-4 ${
                    activeSem === sem 
                      ? 'bg-[#1A1A18] text-[#FAF9F5] border-[#1A1A18] shadow-[8px_8px_0px_#D95D39]' 
                      : 'bg-transparent text-[#1A1A18] border-transparent hover:border-[#1A1A18]/20'
                  }`}
                >
                  SEMESTER_0{sem}
                </button>
              ))}
            </div>
          </div>

          {/* Main Grid: Subject Cards */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AnimatePresence mode="wait">
                {syllabusData[activeSem].map((subject, index) => (
                  <motion.div 
                    key={`${activeSem}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white border-4 border-[#1A1A18] p-8 rounded-3xl flex items-start gap-6 hover:bg-[#F4F2EC] transition-colors group"
                  >
                    <span className="font-mono text-xs font-black text-[#D95D39] mt-1">
                      [{index + 1 < 10 ? `0${index + 1}` : index + 1}]
                    </span>
                    <h4 className="text-xl md:text-2xl font-black text-[#1A1A18] tracking-tighter uppercase leading-none">
                      {subject}
                    </h4>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Tactical Download Action */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              className="mt-12 w-full py-8 bg-[#D95D39] text-[#FAF9F5] font-black text-sm tracking-[0.3em] uppercase rounded-[2rem] border-4 border-[#1A1A18] shadow-[12px_12px_0px_#1A1A18] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              DOWNLOAD_FULL_SYLLABUS_PDF
            </motion.button>
          </div>
        </div>
      </section>

      {/* --- RESOURCES: INDUSTRIAL BLOCKS --- */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto border-t-4 border-[#1A1A18] pt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((res, index) => (
            <motion.a 
              key={index}
              href="#"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="bg-[#1A1A18] p-10 rounded-[2.5rem] flex flex-col justify-between min-h-[300px] border-b-[12px] border-r-[12px] border-[#D95D39] hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <span className="font-mono text-[10px] text-[#FAF9F5]/40 tracking-[0.4em] uppercase">
                {res.id}
              </span>
              <div>
                <h3 className="text-3xl font-black text-[#FAF9F5] tracking-tighter mb-4">
                  {res.title}
                </h3>
                <p className="text-[#FAF9F5]/60 font-bold leading-tight">
                  {res.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Academics;