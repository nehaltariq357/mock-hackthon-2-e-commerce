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
      <div className="mx-36 space-y-5">
        <div className="flex gap-3">
          <span className="bg-red-600 w-4 rounded-sm"></span>
          <h4 className="text-red-600 font-semibold text-lg">Today’s</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Left Grid */}
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold">Flash Sales</h1>
            {/* Countdown Timer */}
            <div className="flex gap-8">
              {/* Days */}
              <div className="text-center">
                <span className="text-sm font-medium">Days</span>
                <h1 className="text-4xl font-bold mt-1">{days}</h1>
              </div>
              {/* Hours */}
              <div className="text-center">
                <span className="text-sm font-medium">Hours</span>
                <h1 className="text-4xl font-bold mt-1">{hours}</h1>
              </div>
              {/* Minutes */}
              <div className="text-center">
                <span className="text-sm font-medium">Minutes</span>
                <h1 className="text-4xl font-bold mt-1">{minutes}</h1>
              </div>
              {/* Seconds */}
              <div className="text-center">
                <span className="text-sm font-medium">Seconds</span>
                <h1 className="text-4xl font-bold mt-1">{seconds}</h1>
              </div>
            </div>
          </div>
          {/* Right Grid */}
          <div>
            <div className="flex justify-end gap-6">
              <Image
                src={`/images/left-arrow.png`}
                alt="left-arrow"
                width={40}
                height={20}
              />
              <Image
                src={`/images/right-arrow.png`}
                alt="right-arrow"
                width={40}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Flash_sale;
