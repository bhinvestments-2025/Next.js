'use client'

import { useEffect } from 'react'

export default function AdminPage() {
  useEffect(() => {
    // Redirect to static admin page
    window.location.href = '/admin/index.html'
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Redirecting to CMS...</p>
    </div>
  )
}
