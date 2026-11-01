'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SecondSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Star rotation on scroll
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '#star1',
        { rotate: 0 },
        {
          rotate: 360,
          ease: 'power2.inOut',
          duration: 0.9,
          scrollTrigger: {
            trigger: '.main-second-section',
            start: 'top bottom+=300px',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        '#star2',
        { rotate: 0 },
        {
          rotate: -360,
          ease: 'power2.inOut',
          duration: 0.9,
          scrollTrigger: {
            trigger: '.main-second-section',
            start: 'top bottom+=300px',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    });

    // Exact floating photo drift algorithm
    const imgs = el.querySelectorAll('.secondSection__imagesLayer img');
    const opacities = [0.9, 0.65, 0.95, 1, 0.75, 0.9, 0.65, 0.95, 0.8, 0.88];
    const speeds = Array.from(imgs).map((_, t) => 0.6 + ((opacities[t] ?? 1) - 0.5) * 3.2);

    let animId;
    const update = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const height = el.offsetHeight;
      const vh = window.innerHeight;
      const s = Math.min(Math.max(0, (vh - rect.top) / (vh + height)), 1);

      imgs.forEach((img, t) => {
        const speed = speeds[t];
        const opacity = opacities[t];
        img.style.transform = `translate3d(0, ${150 - 220 * s * speed}px, 0) scale(0.8)`;
        img.style.opacity = opacity;
      });

      animId = requestAnimationFrame(update);
    };

    update();

    return () => {
      cancelAnimationFrame(animId);
      ctx.revert();
    };
  }, []);

  const imageList = [
    { src: '/assets/secondSectionImage1.png', width: 178, height: 225 },
    { src: '/assets/secondSectionImage2.png', width: 178, height: 225 },
    { src: '/assets/secondSectionImage3.png', width: 178, height: 159 },
    { src: '/assets/secondSectionImage4.png', width: 178, height: 159 },
    { src: '/assets/secondSectionImage5.png', width: 152, height: 196 },
    { src: '/assets/secondSectionImage6.png', width: 178, height: 225 },
    { src: '/assets/secondSectionImage7.png', width: 178, height: 225 },
    { src: '/assets/secondSectionImage8.png', width: 178, height: 159 },
    { src: '/assets/secondSectionImage9.png', width: 178, height: 241 },
    { src: '/assets/secondSectionImage10.png', width: 178, height: 159 },
  ];

  return (
    <div className="main-second-section" ref={containerRef} style={{ height: '100vh', minHeight: '100vh' }}>
      <div className="secondSection">
        <div className="secondSection__imagesLayer">
          {imageList.map((img, idx) => (
            <img
              key={idx}
              alt={`image-${idx}`}
              loading="lazy"
              width={img.width}
              height={img.height}
              src={img.src}
            />
          ))}
        </div>

        <div className="secondSection__labelTop" style={{ position: 'relative', zIndex: 10 }}>
          <img
            src="/assets/star1.png"
            height="15"
            width="15"
            alt=""
            id="star1"
          />
          <span>Our mission</span>
          <img
            src="/assets/star2.png"
            height="15"
            width="15"
            alt=""
            id="star2"
          />
        </div>

        <div className="secondSection__about-text" style={{ position: 'relative', zIndex: 10 }}>
          <h1 style={{ maxWidth: '952px' }}>
            Youth for Yoga started as a small teen-led initiative to share yoga with kids and has
            grown into a global movement promoting focus, resilience, physical health, and community
            among young people.
          </h1>
        </div>

        <a
          data-button-052=""
          aria-label="Donate Now"
          className="button-052 main-primary-button"
          style={{
            position: 'relative',
            zIndex: 10,
            '--button-052-color': 'white',
            '--button-052-color-background': '#FF7213',
            '--button-052-text-color': '#131313',
            '--button-052-border-color': 'transparent',
            '--button-052-color-focus': '#000',
            '--button-052-border-radius': '200px',
            '--button-52-font-size': '20px',
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
      </div>
    </div>
  );
}
