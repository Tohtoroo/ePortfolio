import type {Metadata} from 'next'
import Navbar from '../components/Navbar'
import Heartbreak from '../components/Heartbreak'

export const metadata: Metadata = {
  title: 'Year 2 NHS4001A Aeron Toh',
  description: '...',
  icons: {
    icon: '../assets/Logo.png',
  },
}

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Heartbreak/>
    </div>
  );
}
