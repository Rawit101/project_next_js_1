// app/account/page.tsx
'use client'

import ProtectedRoute from '../component/ProtectedRoute'
import Profile from '../pages/Profile'

export default function AccountPage() {
    return (
        <ProtectedRoute>
            <Profile />
        </ProtectedRoute>
    )
}