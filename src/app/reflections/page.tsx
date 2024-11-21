import type {Metadata} from 'next'
import Navbar from '../components/Navbar'
import Reflection from '../components/Reflection'

export const metadata: Metadata = {
  title: 'Path of Reflection Reflections',
  description: '...',
  icons: {
    icon: '../assets/Logo.png',
  },
}

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Reflection/>
    </div>
  );
}
