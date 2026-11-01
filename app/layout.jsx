import './globals.css';

export const metadata = {
  title: 'Youth For Yoga | Empowering the next generation through mindfulness and movement',
  description: 'Youth For Yoga is a non-profit initiative dedicated to bringing yoga and mindfulness practices to youth across communities and schools.',
  icons: {
    icon: '/assets/logoMain.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/assets/HelveticaNeueRoman.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/HelveticaNeueMedium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/HelveticaNeueBold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}

