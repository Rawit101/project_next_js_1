// app/component/ProtectedRoute.tsx
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAppSelector } from '../redux/hooks'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const isAuthenticated = useAppSelector(state => state.auth?.isAuthenticated) // ปรับตาม state ของคุณ

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/') // redirect ไปหน้า home ถ้าไม่ได้ login
        }
    }, [isAuthenticated, router])

    if (!isAuthenticated) {
        return null // หรือแสดง loading
    }

    return <>{children}</>
}