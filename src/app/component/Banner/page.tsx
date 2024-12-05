"use client";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { banner_image } from "@/app/data";
import Image from "next/image";

const Banner = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <main>
      <div className="relative">
        {/* Hamburger menu icon */}
        <div className="absolute top-4 left-4 md:hidden z-30">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Grid layout for left and right sections */}
        <div className="grid grid-cols-1 md:grid-cols-[25%_1%_70%] items-start gap-6">
          {/* Left side navigation (hidden on mobile, visible on larger screens) */}
          <div
            className={`flex ml-6 my-6 md:ml-20 ${menuOpen ? "block fixed  z-20" : "hidden md:block"}`}
          >
            <div className="bg-white w-96 h-full py-6 px-4">
              <ul className="space-y-3.5 my-5">
                <div className="flex items-center space-x-2 gap-16">
                  <li>Women’s Fashion</li>
                  <li>
                    <MdKeyboardArrowRight />
                  </li>
                </div>
                <div className="flex items-center space-x-2 gap-[88px]">
                  <li>Men’s Fashion</li>
                  <li>
                    <MdKeyboardArrowRight />
                  </li>
                </div>
                <li>Electronic Fashion</li>
                <li>Home & Lifestyle</li>
                <li>Medicine</li>
                <li>Sports & Outdoor</li>
                <li>Baby’s & Toys</li>
                <li>Groceries & Pets</li>
                <li>Health & Beauty</li>
              </ul>
            </div>
          </div>

          {/* Vertical line (Hidden on mobile) */}
          <div className="bg-gray-300 w-[1px] h-[410px] hidden md:block"></div>

          {/* Image slider */}
          <div className="my-20 w-full">
            <Slider {...settings}>
              {banner_image.map((img, i) => (
                <div key={i} className="w-full h-80 flex justify-start items-start">
                  <Image
                    src={img}
                    alt={`Banner image ${i}`}
                    className="object-contain w-full h-full"
                    width={900}
                    height={100}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
