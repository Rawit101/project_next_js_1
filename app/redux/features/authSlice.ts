import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AuthSlice } from "../../models/AuthSlice"

interface LoginProps {
    username: string
    password: string
}

const initialState: AuthSlice = {
    isLoggedIn: typeof window !== "undefined" &&
        localStorage.getItem("username") !== null &&
        localStorage.getItem("username") !== undefined &&
        localStorage.getItem("username") !== "",
    modelOpen: false,
    username: ""
}


export const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        updateModel: (state, action: PayloadAction<boolean>) => {
            return { ...state, modelOpen: action.payload }
        },
        doLogin: (state, action: PayloadAction<LoginProps>) => {
            if (
                action.payload.username === "atuny0" &&
                action.payload.password === "9uQFF1Lh"
            ) {
                localStorage.setItem("username", "atuny0")
                return {
                    ...state,
                    username: "atuny0",
                    modalOpen: false,
                    isLoggedIn: true,
                }
            } else {
                return state
            }
        },
        doLogout: (state) => {
            localStorage.removeItem("username")
            return { ...state, username: "", isLoggedIn: false }
        },
    },
})

export const { updateModel, doLogin, doLogout } = authSlice.actions
export default authSlice.reducer
