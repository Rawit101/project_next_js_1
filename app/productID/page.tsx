// app/product/[productID]/page.tsx
'use client'

import { useParams } from 'next/navigation'
import { SingleProduct } from '@/components/SingleProduct'

export default function ProductDetailPage() {
    const params = useParams()

    // ส่ง productID เป็น prop หรือใช้ใน component
    return <SingleProduct productID={params.productID as string} />
}