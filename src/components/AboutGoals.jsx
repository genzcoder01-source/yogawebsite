'use client';
import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const goalsData = [
  {
    title: 'Physical Health and Flexibility',
    content:
      'Yoga helps calm the mind, improve concentration, and sharpen your ability to focus. Through breathwork and mindfulness, you can develop clarity and a sense of calm that supports both schoolwork and life challenges.',
  },
  {
    title: 'Emotional Resilience',
    content:
      'Life can be overwhelming sometimes, but yoga teaches us how to handle emotions with grace. By connecting with your breath and body, you can build inner strength, let go of stress, and bounce back stronger from tough moments.',
  },
  {
    title: 'Mental Focus and Clarity',
    content:
      'Yoga isn’t just about stretching – it’s about feeling strong, balanced, and confident in your body. From boosting flexibility to improving posture and overall health, yoga helps you move and feel your best every day.',
  },
  {
    title: 'Community and Connection',
    content:
      'Yoga brings people together! Whether it’s through group practices or shared values, yoga creates a sense of belonging, encouraging support and friendships that uplift and inspire.',
  },
];

export default function AboutGoals() {
  const [openIndex, setOpenIndex] = useState(0);
  const containerRef = useRef(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to('#image-right-ssap', {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: '.main-second-section-aboutPage',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const handleToggle = (index) => {
    if (openIndex === index) {
      // Toggle close
      const contentEl = contentRefs.current[index];
      if (contentEl) {
        gsap.to(contentEl, {
          height: 0,
          duration: 0.4,
          ease: 'power3.out',
          onComplete: () => {
            setOpenIndex(null);
            ScrollTrigger.refresh();
          },
        });
      } else {
        setOpenIndex(null);
      }
    } else {
      // Close previous
      if (openIndex !== null && contentRefs.current[openIndex]) {
        gsap.to(contentRefs.current[openIndex], {
          height: 0,
          duration: 0.4,
          ease: 'power3.out',
        });
      }

      setOpenIndex(index);

      // Open new
      const targetEl = contentRefs.current[index];
      if (targetEl) {
        gsap.set(targetEl, { height: 'auto' });
        const autoHeight = targetEl.scrollHeight;
        gsap.fromTo(
          targetEl,
          { height: 0 },
          {
            height: autoHeight,
            duration: 0.4,
            ease: 'power3.out',
            onComplete: () => {
              gsap.set(targetEl, { height: 'auto' });
              ScrollTrigger.refresh();
            },
          }
        );
      }
    }
  };

  return (
    <div ref={containerRef} className="main-second-section-aboutPage">
      <div className="secondSection-aboutPage">
        <div className="secondSectionAbout-mainTxt">
          <h1>
            We aim to inspire youth to embrace yoga not just as a practice but as a way of life – creating healthier minds, stronger bodies, and empowered futures.
          </h1>
        </div>

        <div className="bottom-secondSection-aboutPage">
          <div className="our-goals-aboutPage">
            <div className="title-goals">
              <img
                alt=""
                id="star3"
                width="15"
                height="15"
                src="/assets/star1.png"
              />
              <h1>Our goals</h1>
            </div>

            <div className="goals-grp">
              {goalsData.map((goal, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`goal ${isOpen ? 'open' : 'closed'}`}
                    onClick={() => handleToggle(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="goal-title">
                      <h2>{goal.title}</h2>
                      <svg
                        width="39"
                        height="39"
                        viewBox="0 0 39 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease',
                          flexShrink: 0,
                        }}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.1875 10.3594H26.8125C27.8221 10.3594 28.6406 11.1779 28.6406 12.1875V26.8125C28.6406 27.8221 27.8221 28.6406 26.8125 28.6406H12.1875C11.1779 28.6406 10.3594 27.8221 10.3594 26.8125V12.1875C10.3594 11.1779 11.1779 10.3594 12.1875 10.3594ZM7.3125 12.1875C7.3125 9.49511 9.49511 7.3125 12.1875 7.3125L26.8125 7.3125C29.505 7.3125 31.6875 9.49511 31.6875 12.1875V26.8125C31.6875 29.505 29.505 31.6875 26.8125 31.6875H12.1875C9.49511 31.6875 7.3125 29.505 7.3125 26.8125L7.3125 12.1875ZM17.9766 25.2891V23.7656V21.0234H15.2344H13.7109V17.9766H15.2344H17.9766V15.2344V13.7109H21.0234V15.2344V17.9766H23.7656H25.2891V21.0234H23.7656H21.0234V23.7656V25.2891H17.9766Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div
                      ref={(el) => (contentRefs.current[index] = el)}
                      className="goal-content"
                      style={{
                        height: isOpen ? 'auto' : 0,
                        overflow: 'hidden',
                        opacity: isOpen ? 1 : 0.8,
                      }}
                    >
                      <p>{goal.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="imageRightSecondSection-aboutPage">
            <div className="wrapper-image-ssap">
              <img
                alt=""
                id="image-right-ssap"
                width="720"
                height="800"
                src="/assets/secondSectionImage-AboutPage.png"
                style={{ transform: 'scale(1.15, 1.15)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
