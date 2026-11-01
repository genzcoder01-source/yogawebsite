'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitWords } from '../utils/splitText';

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      splitWords('#titleCtaSection', 'wordsTitleCtaSection');

      gsap.set('.wordsTitleCtaSection', { opacity: 0, scale: 0.9238724, yPercent: 50 });
      gsap.fromTo(
        '.wordsTitleCtaSection',
        { opacity: 0, scale: 0.9238724 },
        {
          scale: 1,
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'back(2.1)',
          stagger: 0.06,
          scrollTrigger: {
            trigger: '.main-cta-section',
            start: 'top bottom-=500px',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '#subTitleCtaSection',
        { opacity: 0, y: '3em', x: '-3em', scale: 0.9238724 },
        {
          scale: 1,
          y: '0em',
          x: '0em',
          opacity: 1,
          duration: 0.5,
          ease: 'back(2.1)',
          scrollTrigger: {
            trigger: '.main-cta-section',
            start: 'top bottom-=500px',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.ctaSection__button',
        { opacity: 0, y: '3em', x: '-3em', scale: 0.9238724 },
        {
          scale: 1,
          y: '0em',
          x: '0em',
          opacity: 1,
          duration: 0.5,
          ease: 'back(2.1)',
          scrollTrigger: {
            trigger: '.main-cta-section',
            start: 'top bottom-=500px',
            toggleActions: 'play none none reverse',
          },
        }
      );

      if (window.innerWidth < 1000) {
        gsap.fromTo(
          '.ctaSection__image-right',
          { y: '500px', opacity: 0 },
          {
            y: '0px',
            opacity: 1,
            duration: 0.5,
            ease: 'back(0.9)',
            scrollTrigger: {
              trigger: '.main-cta-section',
              start: 'top bottom-=500px',
              toggleActions: 'play none none reverse',
            },
          }
        );
      } else {
        gsap.fromTo(
          '.ctaSection__image-right',
          { x: '100%', y: '500px', opacity: 0 },
          {
            x: '0%',
            y: '0px',
            opacity: 1,
            duration: 0.5,
            ease: 'back(0.9)',
            scrollTrigger: {
              trigger: '.main-cta-section',
              start: 'top bottom-=500px',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      gsap.to('.ctaSection__image-wrapper img', {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: '.main-cta-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="main-cta-section" ref={sectionRef}>
      <div className="ctaSection">
        <div className="ctaSection__top-txt-grp">
          <h1 id="titleCtaSection">Help us keep this Going</h1>
          <span id="subTitleCtaSection">
            Every small contribution makes a real difference.
          </span>
          <div
            style={{ fontSize: 'clamp(15px, 1.5vw, 20px)' }}
            className="ctaSection__button"
          >
            <a
              data-button-052=""
              aria-label="Donate Now"
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
              href="https://hcb.hackclub.com/donations/start/youthforyoga"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="button-052__icon-wrap is--default">
                <span className="button-052__icon-bg"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="button-052__icon"
                >
                  <path d="M14 19L21 12L14 5" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"></path>
                  <path d="M21 12H2" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"></path>
                </svg>
              </span>
              <span className="button-052__text-wrap">
                <span className="button-052__text">Donate Now</span>
              </span>
              <span className="button-052__icon-wrap is--hover">
                <span className="button-052__icon-bg"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="button-052__icon"
                >
                  <path d="M14 19L21 12L14 5" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"></path>
                  <path d="M21 12H2" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>

        <div className="ctaSection__image-right">
          <div className="ctaSection__stickerImage">
            <img alt="sticker" width="146" height="164.67" src="/assets/sticker2.png" />
          </div>
          <div className="ctaSection__image-wrapper">
            <img alt="" width="619" height="880" src="/assets/hero-6.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}
