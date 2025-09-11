import React from 'react'

function Navbar() {
    return (
        <nav>
            <ul className='flex  bg-slate-300 p-4 text-black justify-center gap-10'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
            </ul>
        </nav>

    )
}

export default Navbar