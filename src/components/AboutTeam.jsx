'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutTeam() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.wordsTitleAboutThirdSection',
        { opacity: 0, scale: 0.9238724, yPercent: 50 },
        {
          scale: 1,
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'back(2.1)',
          stagger: 0.06,
          scrollTrigger: {
            trigger: '.main-third-section-aboutPage',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '#subTitleThirdSectionAbout',
        { opacity: 0, y: '2em', scale: 0.9238724 },
        {
          scale: 1,
          y: '0em',
          opacity: 1,
          duration: 0.5,
          ease: 'back(2.1)',
          delay: 0.2,
          scrollTrigger: {
            trigger: '.main-third-section-aboutPage',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.team-member',
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'back(1.5)',
          scrollTrigger: {
            trigger: '.team-members',
            start: 'top 85%',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  const titleWords = ['Meet', 'the', 'people', 'behind', 'this.'];

  return (
    <div ref={containerRef} className="main-third-section-aboutPage">
      <div className="thirdSection-aboutPage">
        <div className="top-thirdSectionAbout">
          <div className="tag">
            <span>The Team</span>
          </div>

          <h1 id="titleThirdSectionAbout" aria-label="Meet the people behind this.">
            {titleWords.map((word, idx) => (
              <React.Fragment key={idx}>
                <div
                  className={`wordsTitleAboutThirdSection wordsTitleAboutThirdSection${idx + 1}`}
                  aria-hidden="true"
                  style={{ position: 'relative', display: 'inline-block' }}
                >
                  {word}
                </div>{' '}
              </React.Fragment>
            ))}
          </h1>

          <span id="subTitleThirdSectionAbout">
            A youth-driven effort passionate about mindfulness, movement, and wellness.
          </span>
        </div>

        <div className="team-members">
          <div className="team-member">
            <img
              alt="Rushil Chopra"
              width="372"
              height="496"
              src="/assets/rushilImage.jpeg"
            />
            <div className="info-team-member">
              <h1>Rushil Chopra</h1>
              <span>Co-Founder, YouthForYoga</span>
            </div>
          </div>

          <div className="team-member">
            <img
              alt="Kashni Chopra"
              width="372"
              height="496"
              src="/assets/kashniImage.png"
            />
            <div className="info-team-member">
              <h1>Kashni Chopra</h1>
              <span>Co-Founder, YouthForYoga</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
