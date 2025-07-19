'use client';

import ProtectedRoute from '../../lib/ProtectedRoute';

export default function EditPostPage() {
  return (
    <ProtectedRoute>
      <div>
        <h1>تعديل المنشور</h1>
        {/* تعديل المنشور هنا */}
      </div>
    </ProtectedRoute>
  );
}
