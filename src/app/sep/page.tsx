import type {Metadata} from 'next'
import Navbar from '../components/Navbar'
import SEP from '../components/SEP'

export const metadata: Metadata = {
  title: 'Path of Reflection Year 3',
  description: '...',
  icons: {
    icon: '../assets/Logo.png',
  },
}

export default function Home() {
  return (
    <div>
      <Navbar/>
      <SEP/>
    </div>
  );
}
