'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const programsData = [
  {
    title: 'Yoga Classes',
    desc: 'Show up. That’s the only requirement. Live sessions built for kids and teens — no experience, no pressure, no expectations, just movement, breath, and a room that’s actually yours where you can just arrive, settle in, and be part of something without overthinking anything.',
    img: '/assets/yogaClassesImage.png',
    btnText: 'Book your first class',
    link: '/contact-us?interest=book-class',
  },
  {
    title: 'Youth Leadership Programs',
    desc: 'Go from student to teacher. Get certified as a youth yoga instructor and step into a role where you’re not just practicing anymore—you’re guiding others through it. Build teaching skills, learn to structure sessions, handle groups, and communicate with confidence.',
    img: '/assets/youthLeadershipImage.png',
    btnText: 'Become a certified leader',
    link: '/contact-us?interest=youth-leader',
  },
  {
    title: 'School & Community Workshops',
    desc: 'We bring it to where you already are. Mindfulness and yoga sessions designed for classrooms, sports teams, and community groups — zero setup needed from you.',
    img: '/assets/schoolAndCommunityImage.png',
    btnText: 'Partner with us',
    link: '/contact-us?interest=workshops',
  },
  {
    title: 'Yoga Retreats & Camps',
    desc: 'Unplug for real. Multi-day retreats and camps built for teens, with mornings of movement and breathwork, time outside, and space away from screens, deadlines, and notifications. You come back rested, steadier, and with friends who get it.',
    img: '/assets/youthForYogaProgram4Image.png',
    btnText: 'Join a retreat',
    link: '/contact-us?interest=retreats',
  },
  {
    title: 'Digital Yoga Art Creations',
    desc: 'Where yoga meets creativity. Turn your practice into digital art, from poses and mandalas to moments of calm reimagined on screen, and share it with a community of young creators. No experience needed, just curiosity.',
    img: '/assets/youthForYogaProgram5Image.png',
    btnText: 'Explore yoga art',
    link: '/contact-us?interest=digital-art',
  },
];

export default function ProgramsList() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.wordsTitleSecondSectionPrograms',
        { opacity: 0, scale: 0.9238724, yPercent: 50 },
        {
          scale: 1,
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'back(2.1)',
          stagger: 0.06,
          scrollTrigger: {
            trigger: '.secondSection-programs',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.secondSection__program-card-programs',
        { opacity: 0, y: '3em', scale: 0.9238724 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back(1.5)',
          scrollTrigger: {
            trigger: '.secondSection__programs-wrapper-programs',
            start: 'top 85%',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  const headingWords = [
    'From',
    'beginner',
    'classes',
    'to',
    'leadership',
    'programs',
    '—',
    'find',
    'the',
    'right',
    'fit.',
  ];

  return (
    <div ref={containerRef} className="main-second-section-programs">
      <div className="secondSection-programs">
        <div className="secondSection__top-txt-grp-programs">
          <h1>
            {headingWords.map((word, idx) => (
              <React.Fragment key={idx}>
                <div
                  className={`wordsTitleSecondSectionPrograms wordsTitleSecondSectionPrograms${idx + 1}`}
                  aria-hidden="true"
                  style={{ position: 'relative', display: 'inline-block' }}
                >
                  {word}
                </div>{' '}
              </React.Fragment>
            ))}
          </h1>
        </div>

        <div className="secondSection__programs-wrapper-programs">
          {programsData.map((prog, idx) => (
            <div key={idx} className="secondSection__program-card-programs">
              <div className="image-program-card">
                <img
                  alt={prog.title}
                  width="475"
                  height="259"
                  src={prog.img}
                />
              </div>

              <div className="program-card-txt-grp">
                <h1>{prog.title}</h1>
                <span>{prog.desc}</span>
              </div>

              <div className="program-card-wrapper-btn">
                <a
                  data-button-034=""
                  className="button-034 btn-program-card-programs"
                  style={{
                    '--button-034-color': 'white',
                    '--button-034-color-background': '#A65D32',
                    '--button-034-hover-color': 'white',
                    '--button-034-hover-color-background': '#833100',
                    '--button-034-color-focus': '#fff',
                    '--button-034-border-color': 'transparent',
                    '--button-034-border-radius': '200px',
                    '--button-034-font-size': '20px',
                  }}
                  href={prog.link}
                >
                  <span className="button-034__inner">
                    <span className="button-034__default">
                      <span className="button-034__default-bg"></span>
                      <span className="button-034__default-inner">
                        <span className="button-034__text">{prog.btnText}</span>
                      </span>
                    </span>
                    <span aria-hidden="true" className="button-034__hover">
                      <span className="button-034__hover-bg"></span>
                      <span className="button-034__hover-inner">
                        <span className="button-034__text">{prog.btnText}</span>
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

