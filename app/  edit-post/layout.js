'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebaseconfig';

export default function AuthLayout({ children }) {
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthChecked(true);
      if (!user) {
        router.replace('/login'); // استخدم replace لمنع العودة
      }
    });

    return unsubscribe;
  }, [router]);

  if (!authChecked) {
    return null;
  }

  return <>{children}</>;
}
