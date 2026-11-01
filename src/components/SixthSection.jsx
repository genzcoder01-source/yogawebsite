'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import { splitWords } from '../utils/splitText';

gsap.registerPlugin(ScrollTrigger, CustomEase);

export default function SixthSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      splitWords('#titleSixthSection', 'wordsTitleSixthSection');

      gsap.set('.wordsTitleSixthSection', { opacity: 0, scale: 0.9238724, yPercent: 50 });
      gsap.fromTo(
        '.wordsTitleSixthSection',
        { opacity: 0, scale: 0.9238724 },
        {
          scale: 1,
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'back(2.1)',
          stagger: 0.06,
          scrollTrigger: {
            trigger: '.main-sixth-section',
            start: 'top bottom-=500px',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '#subTitleSixthSection',
        { opacity: 0, y: '3em', scale: 0.9238724 },
        {
          scale: 1,
          y: '0em',
          opacity: 1,
          duration: 0.5,
          ease: 'back(2.1)',
          scrollTrigger: {
            trigger: '.main-sixth-section',
            start: 'top bottom-=500px',
            toggleActions: 'play none none reverse',
          },
        }
      );

      const mm = gsap.matchMedia();
      mm.add('(min-width: 884px)', () => {
        const cards = el.querySelectorAll('.card-animation');
        gsap.set(cards, { yPercent: 60, y: 0.6 * window.innerHeight });

        ScrollTrigger.create({
          trigger: '.main-sixth-section',
          start: 'top top',
          end: '+=300%',
          pin: '.main-sixth-section',
          pinSpacing: true,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.main-sixth-section',
            start: 'top top',
            end: '+=300%',
            scrub: 1.2,
          },
        });

        const customEase = CustomEase.create('impactWave', 'M0,0 C0,0 0.098,0.613 0.5,0.5 0.899,0.386 1,1 1,1');

        tl.to(cards, {
          yPercent: -120,
          opacity: 1,
          y: '-120%',
          duration: 1,
          stagger: 0.12,
          ease: customEase,
        });
        tl.to(cards, { stagger: 0.12, duration: 0.5, ease: 'power3.out' }, 0);
        tl.to(cards, { rotation: 0, stagger: 0.12, duration: 0.5, ease: 'power3.in' }, 0.6);
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="impact" className="main-sixth-section" ref={sectionRef}>
      <div className="sixthSection">
        <div className="sixthSection__top-txt-grp">
          <h1 id="titleSixthSection">See the impact we’re making</h1>
          <span id="subTitleSixthSection">Real people. Real change. Measurable results.</span>
        </div>

        <div className="sixthSection__cards-animation">
          <div className="card-animation">
            <img
              alt="Icon"
              width="115"
              height="115"
              src="/assets/studentsIconPixel.svg"
            />
            <div className="text-grp-card-animation">
              <span>500+</span>
              <h1>Students Taught</h1>
            </div>
          </div>

          <div className="card-animation">
            <img
              alt="Icon"
              width="115"
              height="115"
              src="/assets/graduationCapPixel.svg"
            />
            <div className="text-grp-card-animation">
              <span>5+</span>
              <h1>Schools Worldwide</h1>
            </div>
          </div>

          <div className="card-animation">
            <img
              alt="Icon"
              width="115"
              height="115"
              src="/assets/earthPixel.svg"
            />
            <div className="text-grp-card-animation">
              <span>3+</span>
              <h1>Global Workshops</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
