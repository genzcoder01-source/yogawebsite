'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitWords } from '../utils/splitText';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      splitWords('.hero__top-left-text h1', 'titleHeroWord');

      gsap.set('.titleHeroWord', { opacity: 0, scale: 0.9238724, yPercent: 50 });
      gsap.fromTo(
        '.titleHeroWord',
        { opacity: 0, scale: 0.9238724 },
        {
          scale: 1,
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'back(2.1)',
          stagger: 0.06,
          delay: 0.2,
        }
      );

      gsap.fromTo(
        '#heroAnnouncement',
        { opacity: 0, scale: 0.9238724, y: '1em' },
        { scale: 1, y: '0em', opacity: 1, duration: 0.4, ease: 'back(2.1)', delay: 0.15 }
      );

      gsap.fromTo(
        '#textHeroSectionSubTitle',
        { opacity: 0, scale: 0.9238724, y: '2em', x: '-2em' },
        { scale: 1, y: '0em', x: '0em', opacity: 1, duration: 0.4, ease: 'back(2.1)', delay: 0.5 }
      );

      gsap.fromTo(
        '.hero__btn-grp',
        { opacity: 0, scale: 0.9238724, y: '2em', x: '-5em' },
        { scale: 1, y: '0em', x: '0em', opacity: 1, duration: 0.4, ease: 'back(2.1)', delay: 0.6 }
      );

      gsap.fromTo(
        '.hero__stats',
        { y: '2em', x: '-5em', opacity: 0 },
        { y: '0em', x: '0em', opacity: 1, duration: 0.4, ease: 'back(2.1)', delay: 0.7 }
      );

      gsap.from('#heroSticker', {
        scale: 0,
        opacity: 0,
        rotate: '0deg',
        duration: 0.4,
        ease: 'back(2.1)',
        delay: 0.8,
      });

      if (window.innerWidth < 1000) {
        gsap.fromTo(
          '.hero__image-wrapper',
          { y: '500px', opacity: 0 },
          { y: '0px', opacity: 1, duration: 0.5, ease: 'back(0.9)', delay: 0.7 }
        );
      } else {
        gsap.fromTo(
          '.hero__image-wrapper',
          { x: '100%', y: '500px', opacity: 0 },
          { x: '0%', y: '0px', opacity: 1, duration: 0.5, ease: 'back(0.9)', delay: 0.7 }
        );
      }

      gsap.to('#heroSticker', {
        y: -200,
        x: 10,
        rotate: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: '.main-hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to('#imageMainHero', {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: '.main-hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="main-hero-section" ref={heroRef}>
      <div className="heroSection">
        <div className="hero__left-heroSection">
          <div className="hero__top-left-text">
            <a
              id="heroAnnouncement"
              className="hero__announcement"
              href="https://yogawithoutborders.youthforyoga.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                Check out our trip to{' '}
                <span className="hero__announcement-accent">India!</span>
              </span>
              <svg
                className="hero__announcement-arrow"
                width="14"
                height="11"
                viewBox="0 0 39 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.2859 16.2061C39.238 15.2625 39.238 13.73 38.2859 12.7863L26.0978 0.707731C25.1456 -0.23591 23.5992 -0.23591 22.647 0.707731C21.6948 1.65137 21.6948 3.18385 22.647 4.12749L30.6759 12.0843H2.43762C1.08931 12.0843 0 13.1638 0 14.5C0 15.8362 1.08931 16.9157 2.43762 16.9157H30.6759L22.647 24.8725C21.6948 25.8161 21.6948 27.3486 22.647 28.2923C23.5996 29.236 25.1456 29.236 26.0978 28.2923L38.2859 16.2137V16.2061Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>

            <h1 id="textHeroSectionTitle">Helping Young People Grow Through Yoga</h1>

            <span id="textHeroSectionSubTitle">
              A youth-led movement creating space for focus, resilience, and connection.
            </span>

            <div style={{ fontSize: 'clamp(15px, 1.5vw, 20px)' }} className="hero__btn-grp">
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
                '--button-052-width': '8em',
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

            <a
              data-button-034=""
              aria-label="Start Volunteering"
              className="button-034"
              style={{
                '--button-034-color': '#0069C7',
                '--button-034-color-background': 'transparent',
                '--button-034-hover-color': 'white',
                '--button-034-hover-color-background': '#0069C7',
                '--button-034-color-focus': '#004077',
                '--button-034-border-color': '#0069C7',
                '--button-034-border-radius': '200px',
                '--button-034-font-size': '1em',
              }}
              href="/get-involved"
            >
              <span className="button-034__inner">
                <span className="button-034__default">
                  <span className="button-034__default-bg"></span>
                  <span className="button-034__default-inner">
                    <span className="button-034__text">Start Volunteering</span>
                  </span>
                </span>
                <span aria-hidden="true" className="button-034__hover">
                  <span className="button-034__hover-bg"></span>
                  <span className="button-034__hover-inner">
                    <span className="button-034__text">Start Volunteering</span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

          <div className="hero__stats">
            <div className="grp-one-statsHero">
              <div className="block-heroStats">
                <h1>500+</h1>
                <span>Students Taught</span>
              </div>
              <div className="block-heroStats">
                <h1>5+</h1>
                <span>Schools Worldwide</span>
              </div>
            </div>
            <a className="block-heroStats fill" href="#about">
              <svg width="39" height="29" viewBox="0 0 39 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38.2859 16.2061C39.238 15.2625 39.238 13.73 38.2859 12.7863L26.0978 0.707731C25.1456 -0.23591 23.5992 -0.23591 22.647 0.707731C21.6948 1.65137 21.6948 3.18385 22.647 4.12749L30.6759 12.0843H2.43762C1.08931 12.0843 0 13.1638 0 14.5C0 15.8362 1.08931 16.9157 2.43762 16.9157H30.6759L22.647 24.8725C21.6948 25.8161 21.6948 27.3486 22.647 28.2923C23.5996 29.236 25.1456 29.236 26.0978 28.2923L38.2859 16.2137V16.2061Z" fill="white"></path>
              </svg>
              <span>About Us</span>
            </a>
          </div>
        </div>

        <div className="hero__hero-sectionRight">
          <div className="hero__heroSticker">
            <img
              id="heroSticker"
              alt=""
              width="163"
              height="128"
              src="/assets/stickerYouthForYoga1.png"
            />
          </div>

          <div className="hero__image-grp-right">
            <div className="hero__image-wrapper">
              <img
                alt=""
                id="imageMainHero"
                width="874"
                height="887"
                src="/assets/heroImageYouthForYoga.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
