'use client';
import React, { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="main-navbar">
        <div className="navbar">
          <div className="leftNavbar">
            <a href="/">
              <div className="logo">
                <img
                  alt="Youth For Yoga Logo"
                  width="80"
                  height="80"
                  src="/assets/logoMain.png"
                />
              </div>
            </a>
            <div className="navigation">
              <a className="navTextEffect" href="/contact-us">
                <span className="navTextEffect__inner">
                  <span className="navTextEffect__default">Contact</span>
                  <span aria-hidden="true" className="navTextEffect__hover">Contact</span>
                </span>
              </a>
              <a className="navTextEffect" href="/about">
                <span className="navTextEffect__inner">
                  <span className="navTextEffect__default">About Us</span>
                  <span aria-hidden="true" className="navTextEffect__hover">About Us</span>
                </span>
              </a>
              <a className="navTextEffect" href="/programs-and-offerings">
                <span className="navTextEffect__inner">
                  <span className="navTextEffect__default">Programs &amp; Offerings</span>
                  <span aria-hidden="true" className="navTextEffect__hover">Programs &amp; Offerings</span>
                </span>
              </a>
              <a className="navTextEffect" href="/get-involved">
                <span className="navTextEffect__inner">
                  <span className="navTextEffect__default">Get Involved</span>
                  <span aria-hidden="true" className="navTextEffect__hover">Get Involved</span>
                </span>
              </a>
            </div>
          </div>

          <div className="btn-right-navbar">
            <a
              data-button-052=""
              aria-label="Donate Now"
              className="button-052 main-primary-button"
              style={{
                '--button-052-color': 'white',
                '--button-052-color-background': '#FF7213',
                '--button-052-text-color': '#131313',
                '--button-052-border-color': 'transparent',
                '--button-052-color-focus': '#000',
                '--button-052-border-radius': '200px',
                '--button-52-font-size': 'var(--button-font-size-normal)',
                '--button-052-width': '160px',
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

          <div
            className={`menuBtn ${mobileOpen ? 'active' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className="line1"></div>
            <div className="line2"></div>
          </div>
        </div>
      </div>

      <div
        className="menu"
        style={{
          pointerEvents: mobileOpen ? 'auto' : 'none',
          opacity: mobileOpen ? 1 : 0,
          clipPath: mobileOpen
            ? 'inset(0% 0% 0% round 0px 0px 5px 5px)'
            : 'inset(0% 0% 100% round 0px 0px 5px 5px)',
          transition: 'all 0.4s ease',
        }}
      >
        <div className="content-menu">
          <a className="menuLink" href="/contact-us" onClick={() => setMobileOpen(false)}>Contact</a>
          <a className="menuLink" href="/about" onClick={() => setMobileOpen(false)}>About Us</a>
          <a className="menuLink" href="/programs-and-offerings" onClick={() => setMobileOpen(false)}>Programs &amp; Offerings</a>
          <a className="menuLink" href="/get-involved" onClick={() => setMobileOpen(false)}>Get Involved</a>
          <a
            data-button-052=""
            aria-label="Donate Now"
            className="button-052 main-primary-button menu-btn-donate"
            style={{
              '--button-052-color': 'white',
              '--button-052-color-background': '#FF7213',
              '--button-052-text-color': '#131313',
              '--button-052-border-color': 'transparent',
              '--button-052-color-focus': '#000',
              '--button-052-border-radius': '200px',
              '--button-52-font-size': '25px',
              '--button-052-width': '100%',
              '--button-052-icon-size': '2.5em',
            }}
            href="https://hcb.hackclub.com/donations/start/youthforyoga"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="button-052__icon-wrap is--default">
              <span className="button-052__icon-bg"></span>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="button-052__icon">
                <path d="M14 19L21 12L14 5" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M21 12H2" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"></path>
              </svg>
            </span>
            <span className="button-052__text-wrap">
              <span className="button-052__text">Donate Now</span>
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
