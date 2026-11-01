'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitWords } from '../utils/splitText';

gsap.registerPlugin(ScrollTrigger);

export default function ThirdSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      splitWords('#titleThirdSection', 'wordsTitleThirdSection');

      gsap.set('.wordsTitleThirdSection', { opacity: 0, scale: 0.9238724, yPercent: 50 });
      gsap.fromTo(
        '.wordsTitleThirdSection',
        { opacity: 0, scale: 0.9238724 },
        {
          scale: 1,
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'back(2.1)',
          stagger: 0.06,
          scrollTrigger: {
            trigger: '.main-third-section',
            start: 'top bottom-=500px',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '#subTitleThirdSection',
        { opacity: 0, y: '3em', scale: 0.9238724 },
        {
          scale: 1,
          y: '0em',
          opacity: 1,
          duration: 0.5,
          ease: 'back(2.1)',
          scrollTrigger: {
            trigger: '.main-third-section',
            start: 'top bottom-=500px',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.thirdSection-card',
        { opacity: 0, y: '3em', scale: 0.9238724 },
        {
          scale: 1,
          y: '0em',
          opacity: 1,
          duration: 0.5,
          ease: 'back(2.1)',
          delay: 0.6,
          stagger: 0.06,
          scrollTrigger: {
            trigger: '.main-third-section',
            start: 'top bottom-=500px',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="main-third-section" ref={sectionRef}>
      <div className="thirdSection">
        <div className="thirdSection__top-txt-grp">
          <h1 id="titleThirdSection">The real Reason why we exist</h1>
          <span id="subTitleThirdSection">
            The world got harder for teens. Nobody handed them the tools to deal with it.
          </span>
        </div>

        <div className="thirdSection__card-grp">
          <div className="thirdSection-card">
            <div className="icon-card-sad">
              <img src="/assets/sadFrog.svg" alt="Sad Frog" />
            </div>
            <h1>
              <span id="highlight-txt__thirdSection">42% of high schoolers</span> felt persistently sad or hopeless in the past year
            </h1>
            <div className="source-card">
              <a
                href="https://www.cdc.gov/yrbs/results/2023-yrbs-results.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source: CDC Youth Risk Behavior Survey, 2023 ↗
              </a>
            </div>
          </div>

          <div className="thirdSection-card">
            <div className="icon-card-sad">
              <img src="/assets/sadFrog.svg" alt="Sad Frog" />
            </div>
            <h1>
              <span id="highlight-txt__thirdSection">1 in 3 teens</span> reports persistent sadness or hopelessness
            </h1>
            <div className="source-card">
              <a
                href="https://www.cdc.gov/yrbs/results/2023-yrbs-results.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source: CDC Youth Risk Behavior Survey, 2023 ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
