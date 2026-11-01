'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GetInvolvedBenefits() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to('#imagePrimaryGetInvolvedSecondSection', {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: '.main-second-section-getInvolvedPage',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.fromTo(
        '.secondSection-getInvolvedPage-left',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.main-second-section-getInvolvedPage',
            start: 'top 80%',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="main-second-section-getInvolvedPage">
      <div className="secondSection-getInvolvedPage">
        <div className="secondSection-getInvolvedPage-left">
          <div className="secondSectionGetInvolvedPage__top-txt-grp">
            <h1 id="titleSecondSection-getInvolvedPage">
              Why you should volunteer with us?
            </h1>
            <span id="subtitleSecondSection-getInvolvedPage">
              Help create meaningful change through yoga, community, and youth leadership. Gain experience, meet passionate people, and make a real impact where it matters.
            </span>

            <div style={{ fontSize: 'clamp(15px, 1.5vw, 20px)' }} className="secondSection__button-getInvolvedPage">
              <a
                data-button-052=""
                aria-label="Start Volunteering"
                className="button-052 main-primary-button"
                style={{
                  '--button-052-color': 'white',
                  '--button-052-color-background': '#FF7213',
                  '--button-052-text-color': '#131313',
                  '--button-052-border-color': 'transparent',
                  '--button-052-color-focus': '#000',
                  '--button-052-border-radius': '200px',
                  '--button-52-font-size': '1em',
                  '--button-052-width': '10em',
                  '--button-052-icon-size': '2.5em',
                }}
                href="/contact-us?interest=volunteer-general"
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
                  <span className="button-052__text">Start Volunteering</span>
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

          <div className="secondSectionGetInvolvedPage__bottom-cta-links">
            <a href="/contact-us?interest=volunteer-participant">
              Start Volunteering as a Participant
              <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.8476 4.85553L19.6875 3.69543L17.3673 6.01563L18.5274 7.17572L27.211 15.8594H3.82812H2.1875V19.1406H3.82812H27.211L18.5274 27.8243L17.3673 28.9844L19.6875 31.3046L20.8476 30.1444L31.9454 19.0468C32.7996 18.1925 32.7996 16.8075 31.9454 15.9532L20.8476 4.85553Z"
                  fill="white"
                />
              </svg>
            </a>

            <a href="/contact-us?interest=volunteer-leader">
              Start Volunteering as a Youth Leader
              <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.8476 4.85553L19.6875 3.69543L17.3673 6.01563L18.5274 7.17572L27.211 15.8594H3.82812H2.1875V19.1406H3.82812H27.211L18.5274 27.8243L17.3673 28.9844L19.6875 31.3046L20.8476 30.1444L31.9454 19.0468C32.7996 18.1925 32.7996 16.8075 31.9454 15.9532L20.8476 4.85553Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="secondSection-getInvolvedPage-right">
          <div className="wrapper-image-getInvolved">
            <img
              alt="Volunteer With Us!"
              id="imagePrimaryGetInvolvedSecondSection"
              width="660"
              height="847"
              src="/assets/getInvolvedImage1.png"
              style={{ transform: 'scale(1.15, 1.15)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

