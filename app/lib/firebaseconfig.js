// lib/firebaseconfig.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseconfig = {
  apiKey: "AIzaSyC5tEXAMPLE8LhdYhP90bfMTxkGZoWEXAMPLE",
  authDomain: "my-project-123.firebaseapp.com",
  projectId: "my-project-123",
  storageBucket: "my-project-123.appspot.com",
  messagingSenderId: "987654321000",
  appId: "1:987654321000:web:abc123def456ghi789"
};

// ✅ لمنع إعادة التهيئة عند إعادة تحميل الصفحة (مهم في Next.js)
const app = getApps().length ? getApp() : initializeApp(firebaseconfig);

// ✅ خدمات Firebase
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// ✅ التصدير
export { auth, provider, db };
