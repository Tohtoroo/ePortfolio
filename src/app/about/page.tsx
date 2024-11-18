import type {Metadata} from 'next'
import Navbar from '../components/Navbar'
import About from '../components/About'

export const metadata: Metadata = {
  title: 'About NHS4001A Aeron Toh',
  description: '...',
  icons: {
    icon: '../assets/Logo.png',
  },
}

export default function Home() {
  return (
    <div>
      <Navbar/>
      <About/>
    </div>
  );
}
