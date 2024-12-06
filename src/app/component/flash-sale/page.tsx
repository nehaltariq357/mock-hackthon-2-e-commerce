"use client";
import { flash_sale } from "@/app/data";
import React, { useEffect, useState } from "react";
import Image from "next/image";
//product rating
const star_rating = (rating: number) => {
  return "⭐".repeat(Math.floor(rating));
};
const Flash_sale = () => {
  const [days, setDays] = useState<string>("");
  const [hours, setHours] = useState<string>("");
  const [minutes, setMinutes] = useState<string>("");
  const [seconds, setSeconds] = useState<string>("");

  useEffect(() => {
    // count-down-timer-function
    const countDown = () => {
      const currentTime = new Date();
      const targetTime = new Date("2024-12-31");
      const totalms = targetTime.getTime() - currentTime.getTime();

      //for days
      const days = Math.floor(totalms / (1000 * 60 * 60 * 24))
        .toString()
        .padStart(2, "0");
      // for hours

      const remaingHours = totalms % (1000 * 60 * 60 * 24);
      const hours = Math.floor(remaingHours / (1000 * 60 * 60))
        .toString()
        .padStart(2, "0");

      // for minutes

      const remainingMinutes = totalms % (1000 * 60 * 60);
      const minutes = Math.floor(remainingMinutes / (1000 * 60))
        .toString()
        .padStart(2, "0");

      //for seconds

      const remaingSeconds = totalms % (1000 * 60);
      const seconds = Math.floor(remaingSeconds / 1000)
        .toString()
        .padStart(2, "0");

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    };

    const timer = setInterval(() => {
      countDown();
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <main>
      <div className="">
    {/* flash sale */}
        <h1 className="text-red-600">Today’s</h1>
        <div className="flex justify-between">
          <h1 className="text-3xl">Flash Sales</h1>
          <ul className="flex">
            <li>day: {days}</li>
            <li>hours: {hours}</li>
            <li>minutes: {minutes}</li>
            <li>seconds: {seconds}</li>
          </ul>
          <ul className="flex">
            <li>
              <Image
                src={`/images/left-arrow.png`}
                alt="pic"
                width={30}
                height={20}
              />
            </li>
            <li>
              <Image
                src={`/images/right-arrow.png`}
                alt="pic"
                width={30}
                height={20}
              />
            </li>
          </ul>
        </div>
        {flash_sale.map((item) => (
          <div key={item.id} >
           <div className="flex">
           <div>
              <p>
                <Image src={item.image} alt="pic" width={200} height={200} />
              </p>
              <p>{item.title}</p>
              <p>{item.price}</p>
              <p>{star_rating(item.rating)}</p>
            </div>
           </div>
          </div>
        ))}
      </div>
    </main>
  );
}  

export default Flash_sale;
