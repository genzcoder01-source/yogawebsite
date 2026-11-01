'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.flower-right__aboutPage',
        { opacity: 0, scale: 0.8, y: -20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'back(1.8)', delay: 0.1 }
      );

      gsap.fromTo(
        '.top-heroAbout .tag',
        { opacity: 0, y: '1.5em', scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'back(2.1)' }
      );

      gsap.fromTo(
        '.titleHeroAboutSectionWord',
        { opacity: 0, scale: 0.9238724, yPercent: 50 },
        {
          scale: 1,
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'back(2.1)',
          stagger: 0.06,
        }
      );

      gsap.fromTo(
        '#textHeroSectionAboutSubTitle',
        { opacity: 0, scale: 0.9238724, y: '2em', x: '-2em' },
        {
          scale: 1,
          y: '0em',
          x: '0em',
          opacity: 1,
          duration: 0.4,
          ease: 'back(2.1)',
          delay: 0.2,
        }
      );

      gsap.to('#imageMainHeroAbout', {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: '.main-hero-section-aboutPage',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const titleWords = ['Inspiring', 'the', 'Next', 'Generation', 'of', 'Yogis'];

  return (
    <div ref={containerRef} className="main-hero-section-aboutPage">
      <div className="flower-right__aboutPage">
        <img
          alt=""
          id="imageFlowerRight_aboutPage"
          width="400"
          height="246"
          src="/assets/flowerAboutPageRight.png"
        />
      </div>

      <div className="heroSection-aboutPage">
        <div className="top-heroAbout">
          <div className="tag">
            <span>Our Story</span>
          </div>

          <div className="top-heroAboutText">
            <h1 id="textHeroSectionAboutTitle" aria-label="Inspiring the Next Generation of Yogis">
              {titleWords.map((word, idx) => (
                <React.Fragment key={idx}>
                  <div
                    className={`titleHeroAboutSectionWord titleHeroAboutSectionWord${idx + 1}`}
                    aria-hidden="true"
                    style={{ position: 'relative', display: 'inline-block' }}
                  >
                    {word}
                  </div>{' '}
                </React.Fragment>
              ))}
            </h1>

            <span id="textHeroSectionAboutSubTitle">
              Guiding young minds through movement, mindfulness, and balance.
            </span>
          </div>
        </div>

        <div className="heroAboutSectionImage">
          <div className="image-wrapper-heroAbout">
            <img
              alt="Inspiring the Next Generation of Yogis"
              id="imageMainHeroAbout"
              width="1648"
              height="1236"
              src="/assets/hero-11.jpg"
              style={{ transform: 'scale(1.15, 1.15)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

