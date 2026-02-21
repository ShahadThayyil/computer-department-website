import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BentoGrid from '../components/BentoGrid'; // <-- Add this import
import TechMarquee from '../components/TechMarque';
import VisionMission from '../components/VissionMission';
import Ecosystem from '../components/Ecosystem';
import LatestCommits from '../components/LatestCommits';
import TerminalFooter from '../components/TerminalFooter';
import HODSection from '../components/HODSection';

const Home = () => {
  return (
    <div className="bg-[#0A0A0A] min-h-screen font-sans">
      {/* <Navbar /> */}
      <Hero />
      <BentoGrid />
      <TechMarquee />
      <VisionMission />
      <Ecosystem />

      <HODSection />
      <LatestCommits />
      {/* <TerminalFooter /> <-- Add the component here */}
    </div>
  );
};

export default Home;