'use client'
import { Provider } from "react-redux"
import SingleCategory from "./pages/SingleCategory"
import { store } from "./redux/store"
import Navbar from "./component/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AllProducts from "./pages/AllProduct"
import AllCategories from "./pages/AllCategorise"
import SingleProduct from "./pages/SingleProduct"
import ProtectedRoute from "./component/ProtectedRoute"
import Wishlist from "./pages/Wishlist"
import Profile from "./pages/Profile"
import Footer from "./component/Footer"
import { Toaster } from "react-hot-toast"
import Cart from "./component/Cart"
import LoginModal from "./component/LoginModel"
import ScrollToTopButton from "./component/ScrollToTopButton"
import BannerPopup from "./component/BannerPopup"

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/categories" element={<AllCategories />} />
        <Route path="/product/:productID" element={<SingleProduct />} />
        <Route path="/category/:slug" element={<SingleCategory />} />
        <Route path="/wishlist" element={<ProtectedRoute />}>
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
        <Route path="/account" element={<ProtectedRoute />}>
          <Route path="/account" element={<Profile />} />
        </Route>
      </Route>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Footer />
      <Cart />
      <LoginModal />
      <ScrollToTopButton />
      <BannerPopup />
    </Provider>
  )
}

export default App
