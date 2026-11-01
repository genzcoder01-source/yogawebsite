'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitWords } from '../utils/splitText';

gsap.registerPlugin(ScrollTrigger);

export default function FourthSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      splitWords('.fourthSection__first-headline-txt h1', 'wordFourthSection__firstHeadlineTxt');
      splitWords('.fourthSection__second-headline-txt h1', 'wordFourthSection__secondHeadlineTxt');

      gsap.set(['.wordFourthSection__firstHeadlineTxt', '.wordFourthSection__secondHeadlineTxt'], {
        scale: 0.9,
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.main-fourth-section',
          start: 'top top',
          end: '+=4000',
          pin: true,
          scrub: true,
        },
      });

      tl.to('.wordFourthSection__firstHeadlineTxt', {
        scale: 1,
        opacity: 1,
        stagger: 0.03,
        ease: 'back(2.2)',
        duration: 1,
      })
        .to({}, { duration: 0.8 })
        .to('.wordFourthSection__firstHeadlineTxt', {
          scale: 0.9,
          opacity: 0,
          stagger: 0.02,
          ease: 'power2.inOut',
          duration: 0.8,
        })
        .to('.wordFourthSection__secondHeadlineTxt', {
          scale: 1,
          opacity: 1,
          stagger: 0.03,
          ease: 'back(2.2)',
          duration: 1,
        })
        .to({}, { duration: 0.8 })
        .to('.wordFourthSection__secondHeadlineTxt', {
          scale: 0.9,
          opacity: 0,
          stagger: 0.02,
          ease: 'power2.inOut',
          duration: 0.8,
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="main-fourth-section"
      ref={containerRef}
      style={{
        width: '100%',
        minHeight: '100vh',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="fourthSection">
        <div className="fourthSection__first-headline-txt">
          <h1>School mindfulness programs impRove focus and emotional control.</h1>
        </div>

        <div className="fourthSection__second-headline-txt">
          <h1>
            Stress doesn't wait for graduation. It shows up in the classroom, before practice, at
            2am. Most teens are handed nothing to deal with it. We started this because we lived it —
            and found something that actually helped.
          </h1>
        </div>
      </div>
    </div>
  );
}
