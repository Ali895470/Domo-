'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseconfig'; // 

export default function ProtectedRoute({ children }) {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/login'); // عدّل هذا المسار إذا كان login في مكان آخر
      }
    });

    return () => unsubscribe();
  }, [router]);

  return <>{children}</>;
}
