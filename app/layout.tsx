import { Nunito } from 'next/font/google'

import Navbar from '@/app/components/navbar/Navbar';
import LoginModal from '@/app/components/modals/LoginModal';
import RegisterModal from '@/app/components/modals/RegisterModal';
import SearchModal from '@/app/components/modals/SearchModal';
import RentModal from '@/app/components/modals/RentModal';
import ChatBot from '@/app/components/chatBot/ChatBot';
import ToasterProvider from '@/app/providers/ToasterProvider';

import './globals.css'
import ClientOnly from './components/elementsUi/ClientOnly';
import getCurrentUser from './actions/getCurrentUser';

export const metadata = {
  title: 'Tour Trek - Book Your Next Adventure',
  description: 'Tour Trek is a platform that allows you to book hassle-free travel to your favorite destinations. Explore the world with Tour Trek!',
  authors: [{name: 'rida bensalem'}],
  keywords: ['travel', 'tour', 'trek', 'adventure', 'book', 'explore', 'world', 'hassle-free', 'destinations', 'platform', 'tour trek', 'tour trek travel', 'tour trek platform', 'tour trek destinations']
  
}

const font = Nunito({ 
  subsets: ['latin'], 
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
       <head>
        {/* Add Font Awesome Stylesheet */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <SearchModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
          <ChatBot />
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}
