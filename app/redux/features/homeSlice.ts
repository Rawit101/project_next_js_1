import { HomeSlice } from "@/app/models/HomeSlice"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// ❌ ห้ามเรียก localStorage ตอนประกาศ initialState
// ✅ ให้ใช้ค่าเริ่มต้นปกติแทน
const initialState: HomeSlice = {
    isBannerVisible: true,
    isDarkMode: false,
    isLoading: false,
}

export const homeSlice = createSlice({
    name: "homeSlice",
    initialState,
    reducers: {
        // ✅ เมื่อคลิกปิดแบนเนอร์หรือสลับโหมดค่อยเขียนลง localStorage แบบปลอดภัย
        updateBanner: (state, action: PayloadAction<boolean>) => {
            if (typeof window !== "undefined") {
                localStorage.setItem("isBannerVisibleClosed", String(!action.payload))
            }
            return { ...state, isBannerVisible: action.payload }
        },

        updateDarkMode: (state, action: PayloadAction<boolean>) => {
            if (typeof window !== "undefined") {
                localStorage.setItem("isDarkMode", String(action.payload))
            }
            return { ...state, isDarkMode: action.payload }
        },

        updateLoading: (state, action: PayloadAction<boolean>) => {
            return { ...state, isLoading: action.payload }
        },

        // ✅ ฟังก์ชัน hydrate ใช้โหลดค่าจาก localStorage หลังจากอยู่บน client แล้ว
        hydrateFromLocalStorage: (state) => {
            if (typeof window !== "undefined") {
                const closed = localStorage.getItem("isBannerVisibleClosed") === "true"
                const dark = localStorage.getItem("isDarkMode") === "true"
                state.isBannerVisible = !closed
                state.isDarkMode = dark
            }
        },
    },
})

export const {
    updateBanner,
    updateDarkMode,
    updateLoading,
    hydrateFromLocalStorage,
} = homeSlice.actions

export default homeSlice.reducer
