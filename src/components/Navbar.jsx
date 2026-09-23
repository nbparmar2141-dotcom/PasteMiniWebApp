import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <header className='flex items-center justify-between  bg-black text-white p-2 rounded'>
                <div className=''>
                    <h1 className='text-4xl '>Logo</h1>
                </div>
                <div className='flex gap-15 mr-20'>
                <NavLink to="/" className={({isActive}) => isActive ? "rounded p-[10px] bg-white text-black" : "p-[10px] hover:bg-white hover:text-black duration-300 rounded"}>Home</NavLink>
                <NavLink to="/pastes" className={({isActive}) => isActive ? "rounded p-[10px] bg-white text-black" : "p-[10px] hover:bg-white hover:text-black duration-300 rounded"}>Paste</NavLink>
                </div>
            </header>
        </div>
    )
}

export default Navbar