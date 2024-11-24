import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Conclusion from '../components/Conclusion'

export const metadata: Metadata = {
  title: 'Path of Reflection Conclusion',
  description: '...',
  icons: {
    icon: '../assets/Logo.png',
  },
}

export default function Home() {
  return (
    <div>
      <Navbar />
      <Conclusion />
    </div>
  );
}
