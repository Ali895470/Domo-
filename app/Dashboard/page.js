'use client';

import ProtectedRoute from '../../lib/ProtectedRoute';

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <div>
        <h1>Dashboard</h1>
        {/* ضع هنا أي مكونات أو محتوى خاص بالداشبورد */}
      </div>
    </ProtectedRoute>
  );
}
