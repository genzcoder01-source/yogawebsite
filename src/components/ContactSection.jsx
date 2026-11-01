'use client';
import React, { useEffect, useState, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import gsap from 'gsap';

function ContactFormInner() {
  const searchParams = useSearchParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('');
  const [hearAboutUs, setHearAboutUs] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const topicParam = searchParams ? searchParams.get('interest') : null;
    if (topicParam) {
      const mapping = {
        'book-class': 'Book a yoga class',
        'youth-leader': 'Youth leadership program',
        'workshops': 'School & community workshops',
        'retreats': 'Yoga retreats & camps',
        'digital-art': 'Digital yoga art',
        'volunteer-participant': 'Volunteering as a participant',
        'volunteer-leader': 'Volunteering as a youth leader',
        'volunteer-general': 'Volunteering',
        'volunteer': 'Volunteering',
        'partner': 'Becoming a partner',
        'donations': 'Donations',
      };
      if (mapping[topicParam]) {
        setInterest(mapping[topicParam]);
      }
    }
  }, [searchParams]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Title words animation
      gsap.fromTo(
        '.wordContactSectionTitle',
        { opacity: 0, scale: 0.9238724, yPercent: 50 },
        {
          scale: 1,
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'back(2.1)',
          stagger: 0.06,
          delay: 0.2,
        }
      );

      // Subtitle animation
      gsap.fromTo(
        '#textContactSectionSubTitle',
        { opacity: 0, y: '3em', x: '-3em', scale: 0.9238724 },
        {
          scale: 1,
          y: '0em',
          x: '0em',
          opacity: 1,
          duration: 0.5,
          ease: 'back(2.1)',
          delay: 0.2,
        }
      );

      // Form animation
      const isMobile = window.innerWidth <= 768;
      gsap.fromTo(
        '.formContactSection',
        { opacity: 0, y: '3em', x: isMobile ? '0em' : '7em', scale: 0.9238724 },
        {
          scale: 1,
          y: '0em',
          x: '0em',
          opacity: 1,
          duration: 0.5,
          ease: 'back(2.1)',
          delay: 0.2,
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  return (
    <div ref={containerRef} className="main-contact-section">
      <div className="contactSection">
        <div className="left-contactSection">
          <h1 id="textContactSectionTitle" aria-label="Let’s Get in Touch!">
            <div
              className="wordContactSectionTitle wordContactSectionTitle1"
              aria-hidden="true"
              style={{ position: 'relative', display: 'inline-block' }}
            >
              Let’s
            </div>{' '}
            <div
              className="wordContactSectionTitle wordContactSectionTitle2"
              aria-hidden="true"
              style={{ position: 'relative', display: 'inline-block' }}
            >
              Get
            </div>{' '}
            <div
              className="wordContactSectionTitle wordContactSectionTitle3"
              aria-hidden="true"
              style={{ position: 'relative', display: 'inline-block' }}
            >
              in
            </div>{' '}
            <div
              className="wordContactSectionTitle wordContactSectionTitle4"
              aria-hidden="true"
              style={{ position: 'relative', display: 'inline-block' }}
            >
              Touch!
            </div>
          </h1>
          <span id="textContactSectionSubTitle">
            Every small contribution makes a real difference.
          </span>
        </div>

        <form onSubmit={handleSubmit} className="formContactSection">
          <div className="title-form">
            <h1>Talk to us!</h1>
          </div>

          {submitted ? (
            <div style={{ padding: '2rem 0', textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--orange-primary)', marginBottom: '0.5rem' }}>
                Thank you!
              </h2>
              <p style={{ color: 'var(--gray-text)' }}>
                Your message has been sent. We will get back to you shortly!
              </p>
            </div>
          ) : (
            <>
              <div className="input-grp-form">
                <span>Name</span>
                <div className="input-wrapper">
                  <input
                    id="form-input-name"
                    placeholder="Name"
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="input-grp-form">
                <span>Email Address</span>
                <div className="input-wrapper">
                  <input
                    id="form-input-email"
                    placeholder="Email Address"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="input-grp-form">
                <span>What are you reaching out about?</span>
                <div className="input-wrapper">
                  <select
                    id="form-input-interest"
                    required
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                  >
                    <option value="" disabled>
                      Pick a topic
                    </option>
                    <option value="General message">General message</option>
                    <option value="Book a yoga class">Book a yoga class</option>
                    <option value="Youth leadership program">Youth leadership program</option>
                    <option value="School &amp; community workshops">School &amp; community workshops</option>
                    <option value="Yoga retreats &amp; camps">Yoga retreats &amp; camps</option>
                    <option value="Digital yoga art">Digital yoga art</option>
                    <option value="Volunteering as a participant">Volunteering as a participant</option>
                    <option value="Volunteering as a youth leader">Volunteering as a youth leader</option>
                    <option value="Volunteering">Volunteering</option>
                    <option value="Becoming a partner">Becoming a partner</option>
                    <option value="Donations">Donations</option>
                  </select>
                </div>
              </div>

              <div className="notice-form form-topic-hint">
                <span>
                  Want something specific, like classes or volunteering? Head to our{' '}
                  <a href="/programs-and-offerings">programs</a> or{' '}
                  <a href="/get-involved">get involved</a> pages and reach out from there!
                </span>
              </div>

              <div className="input-grp-form">
                <span>Where did you hear about us?</span>
                <div className="input-wrapper">
                  <input
                    id="form-input-hearAboutUs"
                    placeholder="Where did you hear about us?"
                    type="text"
                    value={hearAboutUs}
                    onChange={(e) => setHearAboutUs(e.target.value)}
                  />
                </div>
              </div>

              <div className="input-grp-form">
                <span>Message</span>
                <div className="input-wrapper">
                  <textarea
                    id="form-input-message"
                    placeholder="Anything you'd like us to know?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <div className="notice-form">
                <span>
                  By clicking the “Send Message” button, you agree to YouthForYoga collecting your name and email. We’ll never sell your data to anyone — pinky promise!
                </span>
              </div>

              <div className="send-btn-form">
                <button
                  type="submit"
                  data-button-034=""
                  className="button-034 btn-form-send"
                  style={{
                    '--button-034-color': 'white',
                    '--button-034-color-background': '#FF7213',
                    '--button-034-hover-color': 'white',
                    '--button-034-hover-color-background': '#A65D32',
                    '--button-034-color-focus': '#FF7213',
                    '--button-034-border-color': 'transparent',
                    '--button-034-border-radius': '10px',
                    '--button-034-font-size': '1.5em',
                  }}
                >
                  <span className="button-034__inner">
                    <span className="button-034__default">
                      <span className="button-034__default-bg"></span>
                      <span className="button-034__default-inner">
                        <span className="button-034__text">Send Message</span>
                      </span>
                    </span>
                    <span aria-hidden="true" className="button-034__hover">
                      <span className="button-034__hover-bg"></span>
                      <span className="button-034__hover-inner">
                        <span className="button-034__text">Send Message</span>
                      </span>
                    </span>
                  </span>
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default function ContactSection() {
  return (
    <Suspense fallback={<div className="main-contact-section" style={{ minHeight: '80vh' }} />}>
      <ContactFormInner />
    </Suspense>
  );
}
