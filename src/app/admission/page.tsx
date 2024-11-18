import type {Metadata} from 'next'
import Navbar from '../components/Navbar'
import Admission from '../components/Admission'

export const metadata: Metadata = {
  title: 'Prior NHS4001A Aeron Toh',
  description: '...',
  icons: {
    icon: '../assets/Logo.png',
  },
}

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Admission/>
    </div>
  );
}
