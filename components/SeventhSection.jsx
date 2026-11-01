'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitWords } from '../utils/splitText';

gsap.registerPlugin(ScrollTrigger);

export default function SeventhSection() {
  const sectionRef = useRef(null);
  const marqueeInnerRef = useRef(null);
  const lastScrollY = useRef(0);
  const offsetRef = useRef(0);
  const speedRef = useRef(-120);

  useEffect(() => {
    const ctx = gsap.context(() => {
      splitWords('#titleSeventhSection', 'wordsTitleSeventhSection');

      gsap.set('.wordsTitleSeventhSection', { opacity: 0, scale: 0.9238724, yPercent: 50 });
      gsap.fromTo(
        '.wordsTitleSeventhSection',
        { opacity: 0, scale: 0.9238724 },
        {
          scale: 1,
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'back(2.1)',
          stagger: 0.06,
          scrollTrigger: {
            trigger: '.main-seventh-section',
            start: 'top bottom-=500px',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '#subTitleSeventhSection',
        { opacity: 0, y: '3em', x: '-3em', scale: 0.9238724 },
        {
          scale: 1,
          y: '0em',
          x: '0em',
          opacity: 1,
          duration: 0.5,
          ease: 'back(2.1)',
          scrollTrigger: {
            trigger: '.main-seventh-section',
            start: 'top bottom-=500px',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.seventhSection__button',
        { opacity: 0, y: '3em', x: '-3em', scale: 0.9238724 },
        {
          scale: 1,
          y: '0em',
          x: '0em',
          opacity: 1,
          duration: 0.5,
          ease: 'back(2.1)',
          scrollTrigger: {
            trigger: '.main-seventh-section',
            start: 'top bottom-=500px',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Continuous marquee animation with scroll acceleration matching module 1175
    let lastTime = performance.now();
    let animId;

    const onScroll = () => {
      const currentScroll = window.scrollY;
      const diff = currentScroll - lastScrollY.current;
      lastScrollY.current = currentScroll;
      if (diff !== 0) {
        offsetRef.current -= Math.sign(diff) * Math.min(Math.abs(diff) * 0.4, 30);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    const animateMarquee = (now) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      offsetRef.current += speedRef.current * dt;

      const inner = marqueeInnerRef.current;
      if (inner && inner.firstElementChild) {
        const itemWidth = inner.firstElementChild.offsetWidth;
        if (itemWidth > 0) {
          while (offsetRef.current <= -itemWidth) {
            offsetRef.current += itemWidth;
            inner.appendChild(inner.firstElementChild);
          }
          inner.style.transform = `translateX(${offsetRef.current}px)`;
        }
      }

      animId = requestAnimationFrame(animateMarquee);
    };

    animId = requestAnimationFrame(animateMarquee);

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animId);
      ctx.revert();
    };
  }, []);

  const partners = [
    { name: 'Edu-GIRLS', src: '/assets/edu-girls.png', alt: 'Edu-GIRLS logo' },
    { name: 'Rainbow Yoga', src: '/assets/rainbow-yoga.png', alt: 'Rainbow Yoga logo' },
    { name: 'Dau Dayal School', src: '/assets/dau-dayal-school.png', alt: 'Dau Dayal Girls Inter College logo' },
    { name: 'Yoga Gives Back', src: '/assets/yoga-gives-back.png', alt: 'Yoga Gives Back logo' },
  ];

  return (
    <div className="main-seventh-section" ref={sectionRef}>
      <div className="seventhSection">
        <div className="seventhSection__top-txt-grp">
          <h1 id="titleSeventhSection">Partners Who Are Making This Possible</h1>
          <span id="subTitleSeventhSection">
            Built with the support of our partners and collaborators.
          </span>
          <div
            style={{ fontSize: 'clamp(15px, 1.5vw, 20px)' }}
            className="seventhSection__button"
          >
            <a
              data-button-052=""
              aria-label="Be the next one"
              className="button-052 main-primary-button"
              style={{
                '--button-052-color': 'white',
                '--button-052-color-background': '#FF7213',
                '--button-052-text-color': '#131313',
                '--button-052-border-color': 'transparent',
                '--button-052-color-focus': '#000',
                '--button-052-border-radius': '200px',
                '--button-52-font-size': '1em',
                '--button-052-width': '9em',
                '--button-052-icon-size': '2.5em',
              }}
              href="#contact"
            >
              <span className="button-052__icon-wrap is--default">
                <span className="button-052__icon-bg"></span>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="button-052__icon">
                  <path d="M14 19L21 12L14 5" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"></path>
                  <path d="M21 12H2" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"></path>
                </svg>
              </span>
              <span className="button-052__text-wrap">
                <span className="button-052__text">Be the next one</span>
              </span>
              <span className="button-052__icon-wrap is--hover">
                <span className="button-052__icon-bg"></span>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="button-052__icon">
                  <path d="M14 19L21 12L14 5" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"></path>
                  <path d="M21 12H2" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>

        <div className="main-marquee" aria-hidden="true">
          <div className="marquee-inner" ref={marqueeInnerRef}>
            {[1, 2, 3, 4].map((g) => (
              <div key={g} className="marquee-group" style={{ padding: '0px 15px' }}>
                <div className="logo-grp__seventhSection">
                  {partners.map((p, i) => (
                    <div key={i} className="seventhSection__logoWrapper">
                      <img src={p.src} alt={p.alt} />
                      <span>{p.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
