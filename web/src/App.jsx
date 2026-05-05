import React from 'react';
import { Toaster } from 'sonner';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import HeroSection from '@/components/sections/HeroSection.jsx';
import AboutSection from '@/components/sections/AboutSection.jsx';
import SkillsSection from '@/components/sections/SkillsSection.jsx';
import CertificatesSection from '@/components/sections/CertificatesSection.jsx';
import ProjectSection from '@/components/sections/ProjectSection.jsx';
import EducationSection from '@/components/sections/EducationSection.jsx';
import LeadershipActivitiesSection from '@/components/sections/LeadershipActivitiesSection.jsx';
import AwardsSection from '@/components/sections/AwardsSection.jsx';
import ContactSection from '@/components/sections/ContactSection.jsx';

function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-accent/30 selection:text-white">
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <CertificatesSection />
        <ProjectSection />
        <EducationSection />
        <LeadershipActivitiesSection />
        <AwardsSection />
        <ContactSection />
      </main>

      <Footer />
      
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}

export default App;