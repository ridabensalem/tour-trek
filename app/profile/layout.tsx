'use client';

import React, { ReactNode } from 'react';
import EmptyState from "@/app/components/elementsUi/EmptyState";
import ClientOnly from "@/app/components/elementsUi/ClientOnly";
import Sidebar from "../components/profileComponents/Sidebar";
import PersonalInfo from '../components/profile/PersonalInfo';

interface ProfilePageProps {
  children: ReactNode;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ children }) => {
  return (
    <ClientOnly>
      <div className="container mx-auto max-w-screen-lg flex">
        <Sidebar />
        <main className="flex-grow">
          {children}
        </main>
      </div>
    </ClientOnly>
  );
};

export default ProfilePage;
