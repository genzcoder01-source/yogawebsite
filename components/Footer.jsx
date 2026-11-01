'use client';
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const wordmarkRef = useRef(null);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const el = wordmarkRef.current;
    if (!el || isTouch) return;

    const letters = el.querySelectorAll('.letterFooterText');
    const cleanups = [];

    letters.forEach((letter) => {
      const onEnter = () => {
        gsap.killTweensOf(letter);
        gsap.timeline({ overwrite: true })
          .to(letter, { scale: 1.12, scaleX: 1.08, y: -6, duration: 0.14, ease: 'back(2.2)' })
          .to(letter, { scale: 1, scaleX: 1, y: 0, duration: 0.15, ease: 'back(2.2)' });
      };
      letter.addEventListener('mouseenter', onEnter);
      cleanups.push(() => letter.removeEventListener('mouseenter', onEnter));
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  const wordmark = 'Youth For Yoga';

  return (
    <div className="main-footer-section">
      <div className="footerSection">
        <div className="top-footerSection">
          <div className="footerSection__links-top-left">
            <a className="footerText" href="/">Home</a>
            <a className="footerText" href="/contact-us">Contact</a>
            <a className="footerText" href="/about">About Us</a>
            <a className="footerText" href="/programs-and-offerings">Programs &amp; Offerings</a>
            <a className="footerText" href="/get-involved">Get Involved</a>
          </div>

          <div className="footerSection__newsletter-socials">
            <div className="top-text-newsletterTextGrp">
              <span>Newsletter</span>
              <h1>
                Wanna get the latest updates?{' '}
                <span id="highlight-txt__footerSection">Let us loop you in!</span>
              </h1>
            </div>

            <div className="footerSection__input-grp">
              <input
                id="footerSection-input-newsletter"
                placeholder="janesmith@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="button"
                onClick={handleSubmit}
                data-button-052=""
                aria-label="Sign Up"
                className="button-052 main-primary-button btnNewsletterSignup"
                style={{
                  '--button-052-color': 'white',
                  '--button-052-color-background': 'var(--orange-dark)',
                  '--button-052-text-color': '#131313',
                  '--button-052-border-color': 'transparent',
                  '--button-052-color-focus': '#000',
                  '--button-052-border-radius': '200px',
                  '--button-52-font-size': '20px',
                  '--button-052-width': '6em',
                  '--button-052-icon-size': '2.5em',
                }}
              >
                <span className="button-052__icon-wrap is--default">
                  <span className="button-052__icon-bg"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="button-052__icon">
                    <path d="M14 19L21 12L14 5" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"></path>
                    <path d="M21 12H2" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"></path>
                  </svg>
                </span>
                <span className="button-052__text-wrap">
                  <span className="button-052__text">
                    {subscribed ? 'Joined!' : 'Sign Up'}
                  </span>
                </span>
                <span className="button-052__icon-wrap is--hover">
                  <span className="button-052__icon-bg"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="button-052__icon">
                    <path d="M14 19L21 12L14 5" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"></path>
                    <path d="M21 12H2" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"></path>
                  </svg>
                </span>
              </button>
            </div>

            <div className="footerSection__social-grp">
              <span>Follow us on socials!</span>
              <div className="social-grp-main">
                <a
                  href="https://instagram.com/youthforyoga"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <div className="social-icon">
                    <img
                      alt="Instagram"
                      src="/assets/instagramLogoPixelated.svg"
                    />
                  </div>
                </a>
                <a
                  href="https://www.youtube.com/@youth4yoga"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <div className="social-icon">
                    <img
                      alt="YouTube"
                      src="/assets/youtubeLogoPixelated.svg"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="wordmark-footer-bottom">
          <h1 ref={wordmarkRef} aria-label={wordmark}>
            {wordmark.split('').map((char, i) => (
              <div
                key={i}
                className="letterFooterText"
                aria-hidden="true"
                style={{ position: 'relative', display: 'inline-block' }}
              >
                {char === ' ' ? ' ' : char}
              </div>
            ))}
          </h1>
          <span>© 2026 YouthForYoga – All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
}
