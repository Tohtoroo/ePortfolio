import type {Metadata} from 'next'
import Navbar from '../components/Navbar'
import About from '../components/About'

export const metadata: Metadata = {
  title: 'Path of Reflection About',
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
