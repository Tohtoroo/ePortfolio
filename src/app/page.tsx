import type {Metadata} from 'next'
import Navbar from './components/Navbar'
import Main from './components/Main'

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
      <Navbar/>
      <Main/>
    </div>
  );
}
