import type {Metadata} from 'next'
import Navbar from '../components/Navbar'
import Reflection from '../components/Reflection'

export const metadata: Metadata = {
  title: 'Reflections NHS4001A Aeron Toh',
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
