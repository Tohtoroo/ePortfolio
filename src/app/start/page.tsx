import type {Metadata} from 'next'
import Navbar from '../components/Navbar'
import Start from '../components/Start';

export const metadata: Metadata = {
  title: 'Path of Reflection Start',
  description: '...',
  icons: {
    icon: '../assets/Logo.png',
  },
}

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Start/>
    </div>
  );
}
