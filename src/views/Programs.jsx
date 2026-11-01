import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProgramsHero from '../components/ProgramsHero';
import ProgramsList from '../components/ProgramsList';
import CTASection from '../components/CTASection';

export default function Programs() {
  return (
    <div className="page-module__vFwY_q__mainProgramsPage">
      <div className="page-module__vFwY_q__programsPage">
        <Navbar />
        <main>
          <ProgramsHero />
          <ProgramsList />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

