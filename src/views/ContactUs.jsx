import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

export default function ContactUs() {
  return (
    <div className="page-module__IEM2ma__mainContactUsPage">
      <div className="page-module__IEM2ma__contactUsPage">
        <Navbar />
        <main>
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

