"use client";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { banner_image } from "@/app/data";
import Image from "next/image";

const Banner = () => {
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
      <div className="">
        {/* Grid layout for left and right sections */}
        <div className="grid grid-cols-[30%_70%]">
          {/* Left side navigation */}
          <div className="flex justify-center my-6">
  <ul className="space-y-3.5">
    <div className="flex items-center space-x-2">
      <li>Women’s Fashion</li>
      <li>
        <MdKeyboardArrowRight />
      </li>
    </div>
    <div className="flex items-center space-x-2">
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


        {/* Image slider */}
<div className="my-6">
  <Slider {...settings}>
    {banner_image.map((img, i) => (
      <div key={i} className="relative w-full max-w-[1500px] mx-auto h-80">
        {/* Enforce consistent dimensions */}
        <Image
          src={img}
          alt={`Banner image ${i}`}
          className="w-full h-full object-contain object-center"
          layout="fill"
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
