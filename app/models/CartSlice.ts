import { CartItem } from "./CartItem"

export interface CartSlice {
    cartItems: CartItem[]
    cartOpen: boolean
}