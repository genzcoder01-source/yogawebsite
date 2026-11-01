import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GetInvolvedHero from '../components/GetInvolvedHero';
import GetInvolvedBenefits from '../components/GetInvolvedBenefits';
import CTASection from '../components/CTASection';

export default function GetInvolved() {
  return (
    <div className="page-module__QUJBFa__mainGetInvolvedPage">
      <div className="page-module__QUJBFa__getInvolvedPage">
        <Navbar />
        <main>
          <GetInvolvedHero />
          <GetInvolvedBenefits />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

