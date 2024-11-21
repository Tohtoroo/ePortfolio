import type {Metadata} from 'next'
import Navbar from './components/Navbar'
import Main from './components/Main'

export const metadata: Metadata = {
  title: 'Path of Reflection Main',
  description: '...',
  icons: {
    icon: './assets/Logo.png',
  },
}

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Main/>
    </div>
  );
}
