// app/category/[slug]/page.tsx
'use client'

import { useParams } from 'next/navigation'
import SingleCategory from '../../pages/SingleCategory'

export default function CategoryPage() {
    const params = useParams()

    return <SingleCategory slug={params.slug as string} />
}