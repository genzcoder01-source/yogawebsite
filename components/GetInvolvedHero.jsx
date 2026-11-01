'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GetInvolvedHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.top-getInvolvedPage .tag',
        { opacity: 0, y: '1.5em', scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'back(2.1)' }
      );

      gsap.fromTo(
        '.titleHeroGetInvolvedSectionWord',
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
        '#textHeroSectionGetInvolvedSubTitle',
        { opacity: 0, scale: 0.9238724, y: '2em' },
        {
          scale: 1,
          y: '0em',
          opacity: 1,
          duration: 0.4,
          ease: 'back(2.1)',
          delay: 0.2,
        }
      );

      gsap.to('#imageMainHeroGetInvolved', {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: '.main-hero-section-getInvolvedPage',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const words = ['Join', 'the', 'movement:', 'Learn,', 'Inspire', '&', 'Lead'];

  return (
    <div ref={containerRef} className="main-hero-section-getInvolvedPage">
      <div className="heroSection-getInvolvedPage">
        <div className="top-getInvolvedPage">
          <div className="tag">
            <span>Get Involved</span>
          </div>

          <div className="top-heroGetInvolvedText">
            <h1 id="textHeroSectionGetInvolvedTitle" aria-label="Join the movement:  Learn, Inspire & Lead">
              {words.map((word, idx) => (
                <React.Fragment key={idx}>
                  <div
                    className={`titleHeroGetInvolvedSectionWord titleHeroGetInvolvedSectionWord${idx + 1}`}
                    aria-hidden="true"
                    style={{ position: 'relative', display: 'inline-block' }}
                  >
                    {word}
                  </div>{' '}
                </React.Fragment>
              ))}
            </h1>

            <span id="textHeroSectionGetInvolvedSubTitle">
              Help us share the knowledge to the rest of the world, every small step counts!
            </span>
          </div>
        </div>

        <div className="heroGetInvolvedSectionImage">
          <div className="image-wrapper-heroGetInvolvedPage">
            <img
              alt="Join the movement: Learn, Inspire & Lead"
              id="imageMainHeroGetInvolved"
              width="1648"
              height="1236"
              src="/assets/hero-14.jpg"
              style={{ transform: 'scale(1.15, 1.15)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

