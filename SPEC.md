# Youth for Yoga — Reverse Engineering Specification (SPEC.md)

This specification documents the exact measurements, design tokens, responsive typography, layout rules, and GSAP/ScrollTrigger animation choreography reverse-engineered directly from the live production site `https://www.youthforyoga.org/`.

---

## 1. Design Tokens

### Colors
| Token | Hex / CSS Value | Usage |
| :--- | :--- | :--- |
| `--orange-primary` | `#ff7213` | Primary brand accent, button backgrounds, star labels |
| `--orange-primary-stroke` | `#a65d32` | 2px solid border on all frosted glass cards |
| `--orange-dark` | `#833100` | Subtitles, hover buttons, footer background |
| `--orange-dark-stroke` | `#370808` | Deep stroke accent |
| `--brown` | `#a65d32` | Secondary button backgrounds, borders |
| `--brown-soft` | `rgba(166, 93, 50, 0.8)` | Translucent borders & shadows |
| `--card-bg-glass` | `rgba(255, 114, 19, 0.7)` | 70% opacity frosted glass background for all cards |
| `--white` | `#ffffff` | Text on buttons and frosted glass cards |
| `--white-soft` | `#fef7f2` | Navigation bar background |
| `--white-border` | `#cecece` | Pill container borders |
| `--black` | `#000000` | Primary headings, body copy |
| `background` | `linear-gradient(155deg, #fdefe6 30%, #ffaf95 120%) fixed` | Full-page background gradient |

### Fonts
| Family | Source File | Weights | Used For |
| :--- | :--- | :--- | :--- |
| `helveticaNeue` | `HelveticaNeueRoman.woff2`<br/>`HelveticaNeueMedium.woff2`<br/>`HelveticaNeueBold.woff2` | 400, 500, 700, 900 | **All Headings**, subheadings, stat numbers, card text, navigation |
| `wonderbar` | `wonderbar.otf` | 400 | **"About Us" Label** (`30px`) & **Footer Wordmark** (`151.2px`) |

### Spacing & Layout
| Property | Desktop (1440px) | Mobile (390px) | Notes |
| :--- | :--- | :--- | :--- |
| `--gutter-width` | `40px` | `20px` | Horizontal page margins |
| Container Max-Width | `2000px` | `100%` | Centered layout container |
| Section Padding-Bottom | `50px` | `50px` | Uniform bottom rhythm |
| Card Border Radius | `10px` | `10px` | Applied to third, fifth, sixth cards |
| Card Backdrop Filter | `blur(20px)` | `blur(20px)` | Standard glassmorphism |

---

## 2. Typography Scale (Measured Computed Styles)

| Element Selector / Name | Desktop Size (1440px) | Mobile Size (390px) | Weight | Line Height | Letter Spacing | Color |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Announcement Pill | `17.28px` | `15px` | 600 | Normal | `-0.1728px` | `#833100` |
| Hero Title (`#textHeroSectionTitle`) | `64.8px` | `35px` | 700 | Normal | `-1.944px` (`-0.03em`) | `#000000` |
| Hero Subtitle (`#textHeroSectionSubTitle`) | `28.8px` | `20px` | 600 | Normal | `-0.864px` | `#000000` |
| Hero Button Text | `20px` | `15px` | 400 | `20px` | Normal | `#ffffff` |
| Hero Stat Number | `30px` | `30px` | 700 | Normal | `-0.9px` | `#ffffff` |
| Hero Stat Label | `20px` | `20px` | 900 | Normal | `-0.2px` | `#ffffff` |
| About Us Label Pill | `30px` (`wonderbar`) | `20px` | 400 | `30px` | `-0.6px` | `#ff7213` |
| About Us Manifesto H1 | `57.6px` | `30px` | 700 | `57.6px` | `-2.304px` (`-0.04em`) | `#000000` |
| Section Titles (3, 5, 6, 7, CTA) | `93.6px` | `45px` - `50px` | 700 | `93.6px` - `101px` | `-2.808px` (`-0.03em`) | `#000000` |
| Section Subtitles | `28.8px` | `20px` | 600 | `28.8px` | `-0.864px` | `#000000` |
| Third Section Card H1 | `40px` | `30px` | 700 | `40px` | Normal | `#ffffff` |
| Fourth Section Headline 1 | `79.2px` | `35px` | 700 | Normal | `-2.376px` | `#000000` |
| Fourth Section Headline 2 | `50px` | `30px` | 700 | `50px` | `-1.5px` | `#000000` |
| Program Card Title | `35px` | `25px` | 700 | Normal | `-1.75px` | `#ffffff` |
| Program Card Description | `15px` | `15px` | 600 | Normal | `-0.3px` | `#ffffff` |
| Sixth Section Stat Number | `40px` | `40px` | 700 | Normal | `-1.2px` | `#ffffff` |
| Sixth Section Stat Label | `50px` | `50px` | 700 | `42.5px` | `-1.5px` | `#ffffff` |
| Footer Nav Links | `60px` | `35px` | 700 | `60px` | `-2.4px` (`-0.04em`) | `#ffffff` |
| Footer Newsletter Title | `40px` | `25px` | 700 | Normal | `-1.6px` | `#ffffff` |
| Footer Wordmark | `151.2px` (`wonderbar`) | `40.17px` | 700 | `151.2px` | Normal | `#ffffff` |

---

## 3. Section Architecture & Layout Dimensions

| Section | Desktop OffsetTop | Desktop Height | Pin Spacing | Mobile Height | Layout & Assets |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `.main-navbar` | `35px` | `82px` | None | `70px` | Fixed `z-index: 2147483647`, 3D flip nav links, `logoMain.png`, `.button-052` |
| `.main-hero-section` | `0px` | `900px` | None | `1062px` | Flex 2-column. Assets: `heroImageYouthForYoga.png`, `stickerYouthForYoga1.png`, `star1.png`, `star2.png` |
| `.main-second-section` | `900px` | `900px` | None | `844px` | Relative center text with 10 absolute floating photos (`secondSectionImage1..10.png`) |
| `.main-third-section` | `1800px` | `1043px` | None | `1196px` | Centered text, `sadFrog.svg`, 2 tilted glass cards (`-5deg` and `+6deg`) |
| `.main-fourth-section` | `0px` | `900px` | **4000px** | `844px` | **Pinned for 4000px**. Sequential word illumination via scroll scrub |
| `.main-fifth-section` | `7743px` | `1758px` | None | `2197px` | 3 Program cards (`yogaClassesImage.png`, `youthLeadershipImage.png`, `schoolAndCommunityImage.png`) |
| `.main-sixth-section` | `0px` | `965px` | **2700px** (`+=300%`) | `1540px` (unpinned) | **Pinned on Desktop for +=300%** (`scrub: 1.2`). 3 vertical stacking metric cards (`studentsIconPixel.svg`, `graduationCapPixel.svg`, `earthPixel.svg`) + India trip banner (`hero-6.jpg`) |
| `.main-seventh-section` | `13166px` | `1024px` | None | `884px` | Partner header + "Be the next one" CTA button |
| `.main-marquee` | `505px` | `419px` | None | `350px` | Hardware-accelerated infinite linear translateX marquee (`edu-girls.png`, `rainbow-yoga.png`, `dau-dayal-school.png`, `yoga-gives-back.png`) |
| `.main-cta-section` | `14189px` | `950px` | None | `1234px` | Hack Club 501(c)(3) card with floating pose sticker (`sticker2.png`) |
| `.main-footer-section` | `15139px` | `829px` | None | `979px` | Giant Wonderbar wordmark, newsletter signup, pixel social icons (`instagramLogoPixelated.svg`, `youtubeLogoPixelated.svg`) |

---

## 4. Animation Choreography Table (Live GSAP & ScrollTrigger Dump)

| Trigger Selector | Start | End | Pin | Scrub | ToggleActions | Animation Details (Properties, Timing, Easing) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `.main-hero-section` | `top top` | `bottom top` | No | `true` | `play` | `#heroSticker`: `y: -200, x: 10, rotate: 20, ease: "none"` |
| `.main-hero-section` | `top top` | `bottom top` | No | `true` | `play` | `#imageMainHero`: `yPercent: 10, ease: "none"` |
| `.main-second-section` | `top bottom+=300px` | `bottom top` | No | `true` | `play` | `#star1`: `rotate: 360, ease: "power2.inOut"`<br/>`#star2`: `rotate: -360, ease: "power2.inOut"` |
| `.main-third-section` | `top bottom-=500px` | — | No | No | `play none none reverse` | `.wordsTitleThirdSection`: `fromTo` `scale: 1, yPercent: 0, opacity: 1, duration: 0.5, ease: "back(2.1)", stagger: 0.06` |
| `.main-third-section` | `top bottom-=500px` | — | No | No | `play none none reverse` | `#subTitleThirdSection`: `fromTo` `scale: 1, y: 0, opacity: 1, duration: 0.5, ease: "back(2.1)"` |
| `.main-third-section` | `top bottom-=500px` | — | No | No | `play none none reverse` | `.thirdSection-card`: `fromTo` `scale: 1, y: 0, opacity: 1, duration: 0.5, ease: "back(2.1)", delay: 0.6, stagger: 0.06` |
| `.main-fourth-section` | `top top` | `+=4000` | **Yes** | `true` | `play` | **7.4s Timeline**: Words illuminate sequentially with `back(2.2)`, pause, then first headline fades out and second headline words illuminate |
| `.main-fifth-section` | `top bottom-=500px` | — | No | No | `play none none reverse` | `.wordsTitleFifthSection`: `scale: 1, yPercent: 0, opacity: 1, duration: 0.5, ease: "back(2.1)", stagger: 0.06` |
| `.main-fifth-section` | `top bottom-=500px` | — | No | No | `play none none reverse` | `#subTitleTFifthSection`: `scale: 1, y: 0, opacity: 1, duration: 0.5, ease: "back(2.1)"` |
| `.main-fifth-section` | `top bottom-=500px` | — | No | No | `play none none reverse` | Card 1: `fromTo` `y: "0em", scale: 1, opacity: 1, duration: 0.5, ease: "back(2.1)"` |
| `.main-fifth-section` | `top bottom-=80%` | — | No | No | `play none none reverse` | Card 2: `fromTo` `y: "0em", scale: 1, opacity: 1, duration: 0.5, ease: "back(2.1)"` |
| `.main-fifth-section` | `top bottom-=120%` | — | No | No | `play none none reverse` | Card 3: `fromTo` `y: "0em", scale: 1, opacity: 1, duration: 0.5, ease: "back(2.1)"` |
| `main-sixth-section` | `top bottom-=500px` | — | No | No | `play none none reverse` | `.wordsTitleSixthSection`: `scale: 1, yPercent: 0, opacity: 1, duration: 0.5, ease: "back(2.1)", stagger: 0.06` |
| `main-sixth-section` | `top bottom-=500px` | — | No | No | `play none none reverse` | `#subTitleSixthSection`: `scale: 1, y: 0, opacity: 1, duration: 0.5, ease: "back(2.1)"` |
| `main-sixth-section` | `top top` | `+=300%` | **Yes** (Desktop) | `1.2` | `play` | `.card-animation` (3 cards): `yPercent: -120, opacity: 1, duration: 1, stagger: 0.12, ease: "power3.out"` |
| `.main-seventh-section` | `top bottom-=500px` | — | No | No | `play none none reverse` | `.wordsTitleSeventhSection`: `scale: 1, yPercent: 0, opacity: 1, duration: 0.5, ease: "back(2.1)", stagger: 0.06` |
| `.main-seventh-section` | `top bottom-=500px` | — | No | No | `play none none reverse` | `#subTitleSeventhSection`: `y: 0, x: 0, opacity: 1, duration: 0.5, ease: "back(2.1)"` |
| `.main-seventh-section` | `top bottom-=500px` | — | No | No | `play none none reverse` | `.seventhSection__button`: `y: 0, x: 0, opacity: 1, duration: 0.5, ease: "back(2.1)"` |
| `main-cta-section` | `top bottom-=500px` | — | No | No | `play none none reverse` | `.wordsTitleCtaSection`: `scale: 1, yPercent: 0, opacity: 1, duration: 0.5, ease: "back(2.1)", stagger: 0.06` |
| `main-cta-section` | `top bottom-=500px` | — | No | No | `play none none reverse` | `#subTitleCtaSection`: `y: 0, x: 0, opacity: 1, duration: 0.5, ease: "back(2.1)"` |
| `main-cta-section` | `top bottom-=500px` | — | No | No | `play none none reverse` | `.ctaSection__button`: `y: 0, x: 0, opacity: 1, duration: 0.5, ease: "back(2.1)"` |
| `main-cta-section` | `top bottom-=500px` | — | No | No | `play none none reverse` | `.ctaSection__image-right`: `x: "0%", y: "0px", opacity: 1, duration: 0.5, ease: "back(0.9)"` |
| `main-cta-section` | `top bottom` | `bottom top` | No | `true` | `play` | Sticker image parallax: `yPercent: 10, ease: "none"` |

---

## 5. Smooth Scroll Configuration (Lenis)

```javascript
const lenis = new Lenis({
  duration: 1.2,
  lerp: 0.1,
  smoothWheel: true,
  syncTouch: false,
  touchMultiplier: 2,
  wheelMultiplier: 1,
  autoResize: true,
  overscroll: true,
  autoRaf: false
});

lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```

---

## 6. Reference Screenshots Inventory

- **Desktop (1440x900)**: 82 screenshots saved in [`reference/desktop/`](file:///Users/sathvaradhruvin/Desktop/contentcreationtools/hey/reference/desktop) at 100px-200px scroll intervals across the full 15,969px page height.
- **Mobile (390x844)**: 76 screenshots saved in [`reference/mobile/`](file:///Users/sathvaradhruvin/Desktop/contentcreationtools/hey/reference/mobile) at 100px-200px scroll intervals across the full 14,779px page height.

