import { Category } from "@/app/models/Category"
import { Product } from "@/app/models/Product"
import { ProductSlice } from "@/app/models/ProductSlice"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"


const initialState: ProductSlice = {
    allProducts: [],
    categories: [],
    newProducts: [],
    featuredProducts: [],
    wishList: [],
}

export const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        updateNewList: (state, action: PayloadAction<Product[]>) => {
            return { ...state, newProducts: action.payload }
        },
        updateFeaturedList: (state, action: PayloadAction<Product[]>) => {
            return { ...state, featuredProducts: action.payload }
        },
        addToWishlist: (state, action: PayloadAction<Product>) => {
            const { wishList } = state
            if (wishList.findIndex((item) => item.id === action.payload.id) === -1) {
                const updatedList = [...state.wishList, action.payload]
                return { ...state, wishList: updatedList }
            }
        },
        addCategories: (state, action: PayloadAction<Category[]>) => {
            return { ...state, categories: action.payload }
        },
        addProducts: (state, action: PayloadAction<Product[]>) => {
            return { ...state, allProducts: action.payload }
        },
    },
})

export const {
    updateNewList,
    updateFeaturedList,
    addToWishlist,
    addCategories,
    addProducts
} = productSlice.actions
export default productSlice.reducer