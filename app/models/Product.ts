export interface Product {
    id: number
    title: string
    price: number
    rating: number
    thumbnail?: string
    description?: string
    category?: string
    brand?: string
    stock?: number
    discountPercentage?: number
}