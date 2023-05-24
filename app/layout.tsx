import './styles/globals.css'
import {Fira_Code} from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
const mainFont =Fira_Code({ subsets: ['latin'] })

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
      <body className={mainFont.className}>{children}</body>
    </html>
  )
}
