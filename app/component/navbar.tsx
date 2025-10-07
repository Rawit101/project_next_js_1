import { useActionState } from "react"
import { BsSearch } from "react-icons/bs"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import useAuth from "../hooks/ีuseAuth"
import { setCartState } from "../redux/features/cartSlice"
import Link from "next/link"
import { updateModel } from "../redux/features/authSlice"
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md"


function Navbar() {
    const dispatch = useAppDispatch()
    const cardCount = useAppSelector(
        (state) => state.cartReducer.cartItem.length
    )
    const username = useAppSelector((state) => state.authReducer.username)
    const isDarkMode = useAppSelector((state) => state.homeReducer.isDarkMode)
    const { requireAuth } = useAuth()

    const showCart = () => {
        requireAuth(() => dispatch(setCartState(true)))
        // Additional logic for showing the cart can be added here
    }

    return (
        <div className={"py-4 bg-white dark:bg-gray-800 top-0 sticky z-10 shadow-lg font-karla"}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex justify-between items-center">
                    <Link
                        href="/"
                        className="text-4xl font-bold dark:text-white"
                        data-testid="main-logo"
                    >
                        Shopify
                    </Link>
                    <div className="lg:flex hidden w-full max-w-[500px]">
                        <input type="text"
                            placeholder="Search products..."
                            className="border-2 border-blue-500 px-6 py-2 w-full dark:text-white dark:bg-slate-800"
                        />
                        <div className="bg-blue-500 text-white text-[26px] grid place-item-center px-4">
                            <BsSearch />
                        </div>
                    </div>
                    <div className="flex gap-4 md:gap-8 item-center dark:text-white">
                        <Link
                            href="/products"
                            className="text-xl font-bold"
                            data-test="link-products"
                        >
                            Products
                        </Link>
                        <Link
                            href="/categories"
                            className="text-xl font-bold"
                            data-test="link-categories"
                        >
                            Categories
                        </Link>
                        <div className="flex items-center gap-2">
                            {username !== "" ? (
                                <img src="/path/to/user/avatar.jpg"
                                    alt="User Avatar"
                                    className="w-6"
                                />
                            ) : (
                                <FaUser className="text-gray-50 text-2xl dark:text-white" />
                            )}
                            <div className="text-gray-500 text-2xl">
                                {username !== "" ? (
                                    <customPopup />

                                ) : (
                                    <span
                                        className="cursor-pointer hover:opacity-85 dark:text-white"
                                        onClick={() => dispatch(updateModel(true))}
                                    >
                                        Login
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="text-gray-500 text-[32px] relative hover:cursor-pointer hover:opacity-80"
                            onClick={showCart}
                            data-testid="cart-btn"
                        >
                            <AiOutlineShoppingcart className="dark:text-white" />
                            <div
                                className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center"
                                data-test="cart-item-count"
                            >
                                {cardCount}
                            </div>
                        </div>
                        <div
                            onClick={() => {
                                dispatch(updateModel(!isDarkMode))
                                document.body.classList.toggle("dark")
                            }}
                        >
                            {isDarkMode ? (
                                <MdOutlineLightMode className="cursor-pointer" size={30} />
                            ) : (
                                <MdOutlineDarkMode className="cursor-pointer" size={30} />
                            )}
                        </div>;
                    </div>;
                </div>;
            </div>;
        </div>
    )
};

export default Navbar

