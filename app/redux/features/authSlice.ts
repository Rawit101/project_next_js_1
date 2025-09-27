import { AuthSlice } from "@/app/models/AuthSlice"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { create } from "domain"
import { stat } from "fs"

interface loginProps {
    username: string
    password: string
}

const initialState: AuthSlice = {
    isLoggedIn:
        localStorage.getItem("username") !== null &&
        localStorage.getItem("username") !== undefined &&
        localStorage.getItem("username") !== "",
    modelOpen: false,
    username: localStorage.getItem("username") ?? "",
}

export const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        updateModel: (state, action: PayloadAction<boolean>) => {
            return { ...state, modelOpen: action.payload }
        },

        doLogin: (state, action: PayloadAction<loginProps>) => {
            if (
                action.payload.username === "admin" &&
                action.payload.password === "Passw0rd"
            ) {
                localStorage.setItem("username", "admin")
                return {
                    ...state,
                    username: "admin",
                    modalOpen: false,
                    isLoggedIn: true,
                }
            } else {
                return state
            }
        },
        doLogOut: (state) => {
            localStorage.removeItem("username")
            return { ...state, username: "", isLoggedIn: false }
        },
    },
})

export const { updateModel, doLogin, doLogOut } = authSlice.actions
export default authSlice.reducer