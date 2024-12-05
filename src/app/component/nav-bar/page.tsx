import React from 'react'
import { RiSearchLine } from "react-icons/ri";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5"
const NavBar = () => {
  return (
    <main>
        <div className='flex justify-around h-20 items-center'>
            {/* logo */}
            <ul>
                <li className='font-bold text-lg cursor-pointer'>Exclusive</li>
            </ul>
            {/* tabs */}
            <ul className='flex gap-5'>
                <li className='hover:underline hover:[text-decoration-color:grey] cursor-pointer'>Home</li>
                <li  className='hover:underline hover:[text-decoration-color:grey] cursor-pointer'>Contact</li>
                <li  className='hover:underline hover:[text-decoration-color:grey] cursor-pointer'>About</li>
                <li  className='hover:underline hover:[text-decoration-color:grey] cursor-pointer'>Sign Up</li>
            </ul>
            {/* input ,search-icon, wishlist, cart */}
            <ul className='flex gap-5 items-center'>
             <div className='flex items-center bg-inputColor py-1 px-5 rounded-md'>
             <li><input className='bg-inputColor outline-none placeholder:text-sm' type="text" placeholder='What are you looking for?'/></li>
             <li><RiSearchLine className='size-5 cursor-pointer' /></li>
             </div>
                <li><IoHeartOutline className='size-5 cursor-pointer'/></li>
                <li><IoCartOutline className='size-5 cursor-pointer'/></li>  
            </ul>
            
        </div>
    </main>
  )
}

export default NavBar