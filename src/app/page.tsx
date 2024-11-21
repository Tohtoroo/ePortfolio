import type {Metadata} from 'next'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Path of Reflection Main',
  description: 'Welcome to my e-portfolio!',
  icons: {
    icon: './assets/Logo.png',
  },
  openGraph: {
    title: 'Path of Reflection Main',
    description: 'An e-Portfolio that reflects my journey through university.',
    url: 'https://aeron-e-portfolio.vercel.app', // Your website URL
    siteName: 'Path of Reflection',
    images: [
      {
        url: '/assets/main-pg.png', // Path to your image
        width: 1200, // Recommended width
        height: 630, // Recommended height
        alt: 'Path of Reflection Main Image', // Alt text for accessibility
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Path of Reflection Main',
    description: 'An e-Portfolio that reflects my journey through university.',
    images: ['/assets/main-pg.png'], // Path to your image
  },
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Path of Reflection Main</title>
        <meta name="description" content="Welcome to my e-portfolio!" />
        <meta property="og:title" content="Path of Reflection Main" />
        <meta
          property="og:description"
          content="An e-Portfolio that reflects my journey through university."
        />
        <meta property="og:url" content="https://aeron-e-portfolio.vercel.app" />
        <meta property="og:site_name" content="Path of Reflection" />
        <meta
          property="og:image"
          content="https://aeron-e-portfolio.vercel.app/assets/main-pg.png"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Path of Reflection Main" />
        <meta
          name="twitter:description"
          content="An e-Portfolio that reflects my journey through university."
        />
        <meta
          name="twitter:image"
          content="https://aeron-e-portfolio.vercel.app/assets/main-pg.png"
        />
      </Head>
      <Navbar />
      <Main />
    </div>
  );
}
