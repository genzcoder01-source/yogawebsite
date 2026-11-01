import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Home from './views/Home';
import ContactUs from './views/ContactUs';
import About from './views/About';
import Programs from './views/Programs';
import GetInvolved from './views/GetInvolved';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [currentPath, setCurrentPath] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
      ScrollTrigger.refresh();
    };

    window.addEventListener('popstate', handleLocationChange);

    // Exact Lenis configuration from youthforyoga.org
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      touchMultiplier: 2,
      autoRaf: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  const renderView = () => {
    if (currentPath === '/contact-us') {
      return <ContactUs />;
    }
    if (currentPath === '/about') {
      return <About />;
    }
    if (currentPath === '/programs-and-offerings') {
      return <Programs />;
    }
    if (currentPath === '/get-involved') {
      return <GetInvolved />;
    }
    return <Home />;
  };

  return <>{renderView()}</>;
}
