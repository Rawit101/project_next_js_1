
'use client'
import { FC, useEffect } from "react"
import HeroSection from "../component/HeroSection"
import Features from "../component/Features"
import TrendingProducts from "../component/TrendingProducts"
import { useAppDispatch } from "../redux/hooks"
import {
    updateNewList,
    updateFeaturedList,
} from "../redux/features/productSlice"
import { Product } from "../models/Product"
import LatestProducts from "../component/LatestProducts"
import Banner from "../component/Banner"

const Home: FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        const fetchProducts = () => {
            fetch("https://dummyjson.com/products?limit=24")
                .then((res) => res.json())
                .then(({ products }) => {
                    const productList: Product[] = []
                    products.forEach((product: Product) => {
                        productList.push({
                            id: product.id,
                            title: product.title,
                            images: product.images,
                            price: product.price,
                            rating: product.rating,
                            thumbnail: product.thumbnail,
                            description: product.description,
                            category: product.category,
                            discountPercentage: product.discountPercentage,
                        })
                    })
                    dispatch(updateFeaturedList(productList.slice(0, 8)))
                    dispatch(updateNewList(productList.slice(8, 16)))
                })
        }
        fetchProducts()
    }, [dispatch])

    return (
        <div className="dark:bg-slate-800">
            <HeroSection />
            <Features />
            <TrendingProducts />
            <Banner />
            <LatestProducts />
            <br />
        </div>
    )
}

export default Home
