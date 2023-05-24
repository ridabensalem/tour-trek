import './styles/globals.css'
import {Nunito} from 'next/font/google'
import Navbar from './components/navbar/Navbar'
const mainFont =Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Tour Trek',
  description: 'Tour Trek is a travel agency that specializes in Booking your space to your vacation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        {children}</body>
    </html>
  )
}
