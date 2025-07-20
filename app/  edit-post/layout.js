'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
 import { auth } from 
'../../firebaseconfig';//  المسار الصحيح
export default function Layout({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
 const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{  setUser(currentUser);  setLoading(false);  
 if (!currentUser){ router.push('/'):
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return <div>جاري التحميل...</div>;
  }

  return <>{children}</>;
}
