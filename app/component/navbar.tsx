'use client'

import React from 'react'
import { useState } from 'react'

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <nav className='bg-gray-400 p-4'>
            <div className='flex justify-between items-center'>
                <div className='text-white font-bold'>My App</div>
                {/* Toggle button for mobile menu */}
                <div className='md:hidden'>
                    <button id="menu-toggle" className='text-white' onClick={toggleMenu}><svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth="2"
                        viewBox='0 0 24 24'
                        className='w-6 h-6'
                    >
                        <path d='M4 6h16M4 12h16M4 18h16' /></svg>
                    </button>
                </div>
                <ul className='hidden md:flex space-x-4'>
                    <li><a href="#" className='text-white'>Home</a></li>
                    <li><a href="#" className='text-white'>About</a></li>
                    <li><a href="#" className='text-white'>Contact</a></li>
                    <li><a href="#" className='text-white'>Blog</a></li>
                </ul>
            </div>

            {/* Mobile menu */}

            {isMenuOpen ? (
                <ul className='flex-col md:hidden space-x-4'>
                    <li><a href="#" className='text-white'>Home</a></li>
                    <li><a href="#" className='text-white'>About</a></li>
                    <li><a href="#" className='text-white'>Contact</a></li>
                    <li><a href="#" className='text-white'>Blog</a></li>
                </ul>
            ) : null}
        </nav>
    )
}

export default Navbar