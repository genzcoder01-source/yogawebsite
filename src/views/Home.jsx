import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SecondSection from '../components/SecondSection';
import ThirdSection from '../components/ThirdSection';
import FourthSection from '../components/FourthSection';
import FifthSection from '../components/FifthSection';
import SixthSection from '../components/SixthSection';
import SeventhSection from '../components/SeventhSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="page-module___8aEwW__mainHomePage">
        <div className="page-module___8aEwW__homePage">
          <Hero />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <FifthSection />
          <SixthSection />
          <SeventhSection />
          <CTASection />
          <Footer />
        </div>
      </div>
    </>
  );
}

