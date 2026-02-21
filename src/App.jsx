import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Layout Components
import Navbar from './components/Navbar';
import TerminalFooter from './components/TerminalFooter';

// Import Pages
import Home from './pages/Home';
import Academics from './pages/Academics';
import Faculty from './pages/Faculty';
import Labs from './pages/Labs';
import Gallery from './pages/Gallery';

const App = () => {
  return (
    <div className="bg-[#0A0A0A] min-h-screen font-sans flex flex-col">
      {/* Global dark mode wrapper */}
      
      {/* Navbar stays fixed at the top for every page */}
      <Navbar />

      {/* Main content changes based on the URL */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academics" element={<Academics />} />
          <Route path='/faculty' element={<Faculty />} />
          <Route path='/labs' element={<Labs />} />
          <Route path='/gallery' element={<Gallery />} />
        </Routes>
      </main>

      {/* Footer stays at the bottom for every page */}
      <TerminalFooter />
      
    </div>
  );
};

export default App;