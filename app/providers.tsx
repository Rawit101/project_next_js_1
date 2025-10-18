// app/providers.tsx
'use client'

import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Toaster } from 'react-hot-toast'
import Cart from './component/Cart'
import LoginModal from './component/LoginModel'
import ScrollToTopButton from './component/ScrollToTopButton'
import BannerPopup from './component/BannerPopup'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            {children}
            <Toaster position="bottom-center" reverseOrder={false} />
            <Cart />
            <LoginModal />
            <ScrollToTopButton />
            <BannerPopup />
        </Provider>
    )
}