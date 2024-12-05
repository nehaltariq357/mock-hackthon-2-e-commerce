"use client";
import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { IoHeartOutline, IoCartOutline } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <main>
      <div className="flex justify-around h-20 items-center px-5 md:px-10 border-b-slate-200 border-2">
        {/* Logo */}
        <ul>
          <li className="font-bold text-lg cursor-pointer">Exclusive</li>
        </ul>

        {/* Tabs */}
        <ul className="hidden md:flex gap-5">
          <li className="hover:underline hover:[text-decoration-color:grey] cursor-pointer">
            Home
          </li>
          <li className="hover:underline hover:[text-decoration-color:grey] cursor-pointer">
            Contact
          </li>
          <li className="hover:underline hover:[text-decoration-color:grey] cursor-pointer">
            About
          </li>
          <li className="hover:underline hover:[text-decoration-color:grey] cursor-pointer">
            Sign Up
          </li>
        </ul>

        {/* Input, Search Icon, Wishlist, Cart */}
        <ul className="flex gap-5 items-center">
          {/* Search Bar */}
          <div className="flex items-center bg-inputColor py-1 px-5 rounded-md">
            <li>
              <input
                className="bg-inputColor outline-none placeholder:text-sm"
                type="text"
                placeholder="What are you looking for?"
              />
            </li>
            <li>
              <RiSearchLine className="text-xl cursor-pointer" />
            </li>
          </div>

          {/* Wishlist */}
          <li>
            <IoHeartOutline className="text-xl cursor-pointer hidden md:flex" />
          </li>

          {/* Cart */}
          <li>
            <IoCartOutline className="text-xl cursor-pointer hidden md:flex" />
          </li>

          {/* Hamburger Menu */}
          <button
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-inputColor p-5 min-w-full fixed z-50 ">
          <div className="grid grid-cols-2">
            <div>
              <ul className="flex flex-col gap-4">
                <li className="hover:underline hover:[text-decoration-color:grey] cursor-pointer">
                  Home
                </li>
                <li className="hover:underline hover:[text-decoration-color:grey] cursor-pointer">
                  Contact
                </li>
                <li className="hover:underline hover:[text-decoration-color:grey] cursor-pointer">
                  About
                </li>
              </ul>
            </div>
            {/* right grid */}
            <div className="list-none flex flex-col items-end gap-5">
              {" "}
              <li>
                <IoHeartOutline className="text-xl cursor-pointer " />
              </li>
              {/* Cart */}
              <li>
                <IoCartOutline className="text-xl cursor-pointer" />
              </li>
              <li className="hover:underline hover:[text-decoration-color:grey] cursor-pointer">
                Sign Up
              </li>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default NavBar;
