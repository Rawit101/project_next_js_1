import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { updateModel } from "../redux/features/authSlice"

const useAuth = () => {
    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector((state) => state.authReducer.isLoggedIn)

    const requireAuth = (action: () => void) => {
        if (!isLoggedIn) {
            dispatch(updateModel(true))
        } else {
            action()
        }
    }

    return { requireAuth }
}


export default useAuth