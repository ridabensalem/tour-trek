"use client";

import { Nunito } from 'next/font/google'
import { usePathname } from 'next/navigation'

import Navbar from '@/app/components/navbar/Navbar';
import LoginModal from '@/app/components/modals/LoginModal';
import RegisterModal from '@/app/components/modals/RegisterModal';
import SearchModal from '@/app/components/modals/SearchModal';
import RentModal from '@/app/components/modals/RentModal';
import NavBarLandingpage from './components/navbar/NavBarLandingpage';

import ToasterProvider from '@/app/providers/ToasterProvider';

import './globals.css'
import ClientOnly from './components/elementsUi/ClientOnly';
import getCurrentUser from './actions/getCurrentUser';

export const metadata = {
  title: 'Tour Trek - Book Your Next Adventure',
  description: 'Tour Trek is a platform that allows you to book hassle-free travel to your favorite destinations. Explore the world with Tour Trek!',
  authors: [{ name: 'rida bensalem' }],
  keywords: ['travel', 'tour', 'trek', 'adventure', 'book', 'explore', 'world', 'hassle-free', 'destinations', 'platform', 'tour trek', 'tour trek travel', 'tour trek platform', 'tour trek destinations']
}

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  // Determine if the current path is the landing page
  const isLandingPage = pathname === '/landingpage';

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <SearchModal />
          <RentModal />
          {/* Navbar is applied for all the pages exept the landingpage   */}
          {isLandingPage ? <NavBarLandingpage /> : <Navbar />}
        </ClientOnly>
        <div className={isLandingPage ? "" : "pb-20 pt-28"}>
          {children}
        </div>
      </body>
    </html>
  )
}
