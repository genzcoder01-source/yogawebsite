'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProgramsHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.top-heroPrograms .tag',
        { opacity: 0, y: '1.5em', scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'back(2.1)' }
      );

      gsap.fromTo(
        '.titleHeroProgramsSectionWord',
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

      // Scribble draw animation
      const path = document.querySelector('#svgDrawHeroPrograms');
      if (path) {
        const length = path.getTotalLength ? path.getTotalLength() : 2947;
        gsap.set(path, { strokeDasharray: `${length} ${length}`, strokeDashoffset: length });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: 'power2.out',
          delay: 0.3,
        });
      }

      gsap.to('#imageHeroProgramsSection', {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: '.main-hero-section-programsPage',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const words = ['Programs', 'Designed', 'for', 'Every', 'YOGI'];

  return (
    <div ref={containerRef} className="main-hero-section-programsPage">
      <div className="heroSection-programsPage">
        <div className="top-heroPrograms">
          <div className="tag">
            <span>what we offer</span>
          </div>

          <div className="top-heroProgramsText">
            <h1 id="textHeroSectionProgramsTitle" aria-label="Programs Designed for Every YOGI">
              {words.map((word, idx) => (
                <React.Fragment key={idx}>
                  <div
                    className={`titleHeroProgramsSectionWord titleHeroProgramsSectionWord${idx + 1}`}
                    aria-hidden="true"
                    style={{ position: 'relative', display: 'inline-block' }}
                  >
                    {word}
                  </div>{' '}
                </React.Fragment>
              ))}
            </h1>

            <svg
              className="scribbleProgramsHero"
              width="1931"
              height="499"
              viewBox="0 0 1931 499"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="svgDrawHeroPrograms"
                d="M1929.35 324.571C1818.85 320.904 1625.55 296.271 1736.35 227.071C1847.15 157.871 1769.35 73.4281 1668.85 53.4166C1545.21 28.7977 1382.17 108.445 1359.85 261.071C1338.42 407.615 1135.35 146.071 990.351 77.0711C874.351 21.8711 812.684 154.071 796.351 227.071C724.351 202.904 550.951 174.171 433.351 252.571C286.351 350.571 350.851 102.571 291.851 95.5711C244.651 89.9711 211.517 275.571 200.851 369.071C190.184 462.571 156.851 465.004 116.351 425.504C75.8506 386.004 17.3506 364.004 17.3506 364.004"
                stroke="#FF7213"
                strokeOpacity="0.6"
                strokeWidth="98"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="heroProgramsSectionImage">
          <div className="image-wrapper-heroPrograms">
            <img
              alt="Programs Designed for Every YOGI"
              id="imageHeroProgramsSection"
              width="1648"
              height="1236"
              src="/assets/hero-1.jpg"
              style={{ transform: 'scale(1.15, 1.15)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
