import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import TerminalFooter from '../components/TerminalFooter';

const Contact = () => {
  // Simple state to handle form submission visually
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // You would normally wire this up to an API or EmailJS here
    setTimeout(() => setIsSubmitted(false), 3000); 
  };

  // WhatsApp configuration (Replace with actual department number)
  const whatsappNumber = "+919876543210"; 
  const whatsappMessage = encodeURIComponent("Hello, I am interested in the Computer Engineering diploma program. Can I get more details?");

  return (
    <div className="bg-[#0A0A0A] min-h-screen font-sans flex flex-col">
      {/* <Navbar /> */}

      <main className="flex-grow pt-32 pb-24">
        
        {/* --- HERO SECTION --- */}
        <section className="relative mb-16 px-4">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-40 bg-purple-600/10 blur-[120px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="mb-4 inline-block">
              <span className="font-mono text-sm tracking-widest text-purple-400 uppercase">
                [ Initialize Connection ]
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
              Ping the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Server</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to compile your future? Reach out to our admissions team directly via WhatsApp, Email, or drop a packet through our secure form.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* --- LEFT COLUMN: DIRECT CONNECT --- */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              
              {/* WhatsApp Card */}
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} 
                target="_blank" 
                rel="noreferrer"
                className="group relative bg-[#121212] border border-white/10 rounded-2xl p-6 overflow-hidden hover:border-emerald-500/50 transition-all duration-300 flex items-center gap-6"
              >
                <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center border border-emerald-500/30 shrink-0 relative z-10">
                  <svg className="w-7 h-7 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="relative z-10">
                  <h3 className="text-white font-bold text-lg">WhatsApp</h3>
                  <p className="text-gray-400 text-sm font-mono mt-1">Direct Chat (Instant)</p>
                </div>
              </a>

              {/* Email Card */}
              <a 
                href="mailto:admissions.ce@ssmpoly.ac.in"
                className="group relative bg-[#121212] border border-white/10 rounded-2xl p-6 overflow-hidden hover:border-blue-500/50 transition-all duration-300 flex items-center gap-6"
              >
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center border border-blue-500/30 shrink-0 relative z-10">
                  <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="relative z-10">
                  <h3 className="text-white font-bold text-lg">Email Us</h3>
                  <p className="text-gray-400 text-sm font-mono mt-1">admissions.ce@ssmpoly...</p>
                </div>
              </a>

              {/* Address / Location Details */}
              <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 mt-2">
                <div className="mb-4">
                  <span className="font-mono text-xs tracking-widest text-gray-500 uppercase">
                    [ Location Node ]
                  </span>
                </div>
                <h4 className="text-white font-bold mb-3">SSM Polytechnic College</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  PB No.1, Thekkummuri PO,<br/>
                  Tirur, Malappuram Dt.<br/>
                  Kerala - 676 105
                </p>
                <div className="flex items-center gap-3 text-sm text-gray-300 font-mono">
                  <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  0494-2422234
                </div>
              </div>

            </div>

            {/* --- RIGHT COLUMN: TERMINAL CONTACT FORM --- */}
            <div className="lg:w-2/3">
              <div className="bg-[#121212] border border-white/10 rounded-3xl p-8 relative overflow-hidden">
                
                {/* Decorative terminal header */}
                <div className="flex items-center gap-2 border-b border-white/10 pb-4 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="ml-2 font-mono text-xs text-gray-500">~/send_packet.sh</span>
                </div>

                {isSubmitted ? (
                  <div className="h-64 flex flex-col items-center justify-center text-center animate-pulse">
                    <svg className="w-16 h-16 text-emerald-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Transmitted!</h3>
                    <p className="text-gray-400 font-mono text-sm">Status: 200 OK. We will reply shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-mono text-gray-400">const studentName =</label>
                        <input 
                          type="text" 
                          required
                          placeholder="'Enter your name'" 
                          className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-mono text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-mono text-gray-400">const emailAddress =</label>
                        <input 
                          type="email" 
                          required
                          placeholder="'your@email.com'" 
                          className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-mono text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-mono text-gray-400">const queryType =</label>
                      <select className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-mono text-sm appearance-none">
                        <option value="admission">Admissions Inquiry</option>
                        <option value="general">General Question</option>
                        <option value="technical">Technical Support</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-mono text-gray-400">let messageBody =</label>
                      <textarea 
                        required
                        rows="4" 
                        placeholder="'How can we help you build the future?'" 
                        className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-mono text-sm resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.3)] flex justify-center items-center gap-2"
                    >
                      Execute function send()
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </main>

      {/* <TerminalFooter /> */}
    </div>
  );
};

export default Contact;