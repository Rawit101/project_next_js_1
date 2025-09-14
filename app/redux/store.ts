import { configureStore } from "@reduxjs/toolkit"



export const store = configureStore({
    reducer: {
        cartReducer,
        productReducer,
        authReducer,
        homeReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch