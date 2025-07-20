'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebaseconfig'; // تم تصحيح المسار

export default function Layout({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null); // إضافة state للمستخدم
  const [loading, setLoading] = useState(true); // إضافة loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      
      if (!currentUser) {
        router.push('/');
      }
    });

    return () => unsubscribe();
  }, [router]);

  // عرض loading أثناء التحقق من المصادقة
  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
