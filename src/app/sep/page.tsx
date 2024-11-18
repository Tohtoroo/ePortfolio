import type {Metadata} from 'next'
import Navbar from '../components/Navbar'
import SEP from '../components/SEP'

export const metadata: Metadata = {
  title: 'Year 3 NHS4001A Aeron Toh',
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
