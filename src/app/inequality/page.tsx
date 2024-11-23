import type {Metadata} from 'next'
import Navbar from '../components/Navbar'
import Inequality from '../components/Inequality'

export const metadata: Metadata = {
  title: 'Path of Reflection Year 2',
  description: '...',
  icons: {
    icon: '../assets/Logo.png',
  },
}

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Inequality/>
    </div>
  );
}
