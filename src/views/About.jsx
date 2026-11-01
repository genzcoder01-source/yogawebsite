import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHero from '../components/AboutHero';
import AboutGoals from '../components/AboutGoals';
import AboutTeam from '../components/AboutTeam';
import CTASection from '../components/CTASection';

export default function About() {
  return (
    <div className="page-module__NfDiEG__mainAboutPage">
      <div className="page-module__NfDiEG__aboutPage">
        <Navbar />
        <main>
          <AboutHero />
          <AboutGoals />
          <AboutTeam />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

