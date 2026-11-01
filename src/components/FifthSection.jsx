'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitWords } from '../utils/splitText';

gsap.registerPlugin(ScrollTrigger);

export default function FifthSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      splitWords('#titleFifthSection', 'wordsTitleFifthSection');

      gsap.set('.wordsTitleFifthSection', { opacity: 0, scale: 0.9238724, yPercent: 50 });
      gsap.fromTo(
        '.wordsTitleFifthSection',
        { opacity: 0, scale: 0.9238724 },
        {
          scale: 1,
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'back(2.1)',
          stagger: 0.06,
          scrollTrigger: {
            trigger: '.main-fifth-section',
            start: 'top bottom-=500px',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '#subTitleTFifthSection',
        { opacity: 0, y: '3em', scale: 0.9238724 },
        {
          scale: 1,
          y: '0em',
          opacity: 1,
          duration: 0.5,
          ease: 'back(2.1)',
          scrollTrigger: {
            trigger: '.main-fifth-section',
            start: 'top bottom-=500px',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.fifthSection__program-card',
        { opacity: 0, y: '3em', scale: 0.9238724 },
        {
          scale: 1,
          y: '0em',
          opacity: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: 'back(2.1)',
          scrollTrigger: {
            trigger: '.main-fifth-section',
            start: 'top bottom-=80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.fifthSection__view-all',
        { opacity: 0, y: '3em', scale: 0.9238724 },
        {
          scale: 1,
          y: '0em',
          opacity: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: 'back(2.1)',
          scrollTrigger: {
            trigger: '.main-fifth-section',
            start: 'top bottom-=120%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let animFrame;
    const cards = document.querySelectorAll('.fifthSection__program-card');
    if (!cards.length) return;

    let busy = false;
    const updateHeights = () => {
      if (busy) return;
      busy = true;
      cancelAnimationFrame(animFrame);
      animFrame = requestAnimationFrame(() => {
        cards.forEach((card) => {
          card.style.height = 'auto';
        });
        let maxHeight = 0;
        cards.forEach((card) => {
          maxHeight = Math.max(maxHeight, card.scrollHeight + 80);
        });
        cards.forEach((card) => {
          card.style.height = `${maxHeight}px`;
        });
        busy = false;
      });
    };

    const resizeObserver = new ResizeObserver(() => {
      updateHeights();
    });

    cards.forEach((c) => resizeObserver.observe(c));
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        updateHeights();
      });
    });
    window.addEventListener('resize', updateHeights);

    return () => {
      cancelAnimationFrame(animFrame);
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateHeights);
    };
  }, []);

  const programs = [
    {
      title: 'Yoga Classes',
      subtitle:
        'Show up. That’s the only requirement. Live sessions built for kids and teens — no experience, no pressure, no expectations, just movement, breath, and a room that’s actually yours where you can just arrive, settle in, and be part of something without overthinking anything.',
      img: '/assets/yogaClassesImage.png',
      btnText: 'Book your first class',
      href: '/contact-us?interest=book-class',
    },
    {
      title: 'Youth Leadership Programs',
      subtitle:
        'Go from student to teacher. Get certified as a youth yoga instructor and step into a role where you’re not just practicing anymore—you’re guiding others through it. Build teaching skills, learn to structure sessions, handle groups, and communicate with confidence.',
      img: '/assets/youthLeadershipImage.png',
      btnText: 'Become a certified leader',
      href: '/contact-us?interest=youth-leader',
    },
    {
      title: 'School & Community Workshops',
      subtitle:
        'We bring it to where you already are. Mindfulness and yoga sessions designed for classrooms, sports teams, and community groups — zero setup needed from you.',
      img: '/assets/schoolAndCommunityImage.png',
      btnText: 'Partner with us',
      href: '/contact-us?interest=workshops',
    },
  ];

  return (
    <div id="programs" className="main-fifth-section" ref={sectionRef}>
      <div className="fifthSection">
        <div className="fifthSection__top-txt-grp">
          <h1 id="titleFifthSection">What we buILt to fix this</h1>
          <span id="subTitleTFifthSection">
            Built by teens who needed this. Now here for every teen who does.
          </span>
        </div>

        <div className="fifthSection__programs-wrapper">
          {programs.map((p, idx) => (
            <div key={idx} className="fifthSection__program-card">
              <div className="image-program-card">
                <img src={p.img} alt={p.title} width="475" height="259" />
              </div>
              <div className="program-card-txt-grp">
                <h1>{p.title}</h1>
                <span>{p.subtitle}</span>
              </div>
              <div className="wrapper-btn-program-card">
                <a
                  data-button-034=""
                  className="button-034 btn-program-card"
                  style={{
                    '--button-034-color': 'white',
                    '--button-034-color-background': '#A65D32',
                    '--button-034-hover-color': 'white',
                    '--button-034-hover-color-background': '#833100',
                    '--button-034-border-color': 'transparent',
                    '--button-034-border-radius': '200px',
                    '--button-034-font-size': '20px',
                  }}
                  href={p.href}
                >
                  <span className="button-034__inner">
                    <span className="button-034__default">
                      <span className="button-034__default-bg"></span>
                      <span className="button-034__default-inner">
                        <span className="button-034__text">{p.btnText}</span>
                      </span>
                    </span>
                    <span aria-hidden="true" className="button-034__hover">
                      <span className="button-034__hover-bg"></span>
                      <span className="button-034__hover-inner">
                        <span className="button-034__text">{p.btnText}</span>
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="fifthSection__view-all">
          <a href="/programs-and-offerings">View All</a>
        </div>
      </div>
    </div>
  );
}
