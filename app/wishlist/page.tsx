// app/wishlist/page.tsx
'use client'

import ProtectedRoute from '../component/ProtectedRoute'
import Wishlist from '../pages/Wishlist'

export default function WishlistPage() {
    return (
        <ProtectedRoute>
            <Wishlist />
        </ProtectedRoute>
    )
}