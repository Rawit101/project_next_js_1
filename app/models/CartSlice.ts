import { CartItem } from "./CartItem"

export interface CartSlice {
    CartItems: CartItem[]
    cartOpen: boolean
}