// app/profile/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Profile: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/PersonalInfo');
  }, [router]);

  return null;
};

export default Profile;
