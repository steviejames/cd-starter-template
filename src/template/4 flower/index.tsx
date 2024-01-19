"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Pacifico, Montserrat, Playfair_Display } from "next/font/google";
import flowers from './pngwing.com.png'
const nameFont = Pacifico({ subsets: ["latin"], weight: "400" });
const ageFont = Playfair_Display({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });

const Flower = ( {event }: {event: InvitationDetails}) => {
  const [imageIsDark, setIsDark] = useState<any>();
  const darkText = "text-[#696861]";
  const lightText = "text-[#fff]";
  const date = new Date(event.date);
  const weekDay = date.getDay();
  const year = date.getFullYear();
  const month = date.getMonth().toString().padStart(1, "0");
  const monthDay = date.getUTCDate().toString().padStart(2, "0");

  return (
    <div
      style={{
        backgroundSize: "cover",
        resize: "both",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        objectFit: "contain",
        color: imageIsDark ? lightText : darkText,
      }}
      className={`flex bg-white flex-1 min-h-[100dvh]  items-center justify-center  `}>
      <div className='max-w-4xl p-8 h-fit mx-auto flex flex-col gap-y-8 b items-center'>
        <div className='text-center  text-[#4d5f50]'>
        <p
          className={`${montserrat.className} uppercase   text-xl text-center font-thin `}>
          ANIVERSÁRIO
        </p>
          <p className={`sm:text-8xl text-6xl  ${nameFont.className}`}>
            {event.host}
          </p>
          <p
            className={
              "sm:text-8xl text-6xl lowercase font-thin " + ageFont.className
            }>
            {event.age} anos
          </p>
        </div>


        <div className='grid sm:grid-cols-2 grid-cols-1 w-full sm:max-w-2xl rounded uppercase bg-black/5 p-8 gap-x-4 '>
          <div className='gap-y-1 flex items-center justify-around sm:block sm:text-right text-center '>
            
            <p>
              {monthDay} | {month + 1} | {year}
            </p>
            <p>{event.time}</p>
          </div>
          <div className='gap-y-1 border-t sm:border-t-0 mt-4 sm:mt-auto sm:border-l pl-4 border-[#4d5f50] sm:text-right text-center '>
            <p className='sm:text-left text-center mt-4 sm:mt-0'>
              {event.place}
            </p>
            <p className='sm:text-left text-center mt-4 sm:mt-0'>
              {event.address}
            </p>
          </div>
        </div>

        <Image
          className='mx-auto self-end sm:max-w-md max-w-xs'
          alt='flowers'
          src={flowers}
          sizes='100vw'
          width={400}
          height={400}
          quality={100}
          style={{
            width: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
};
export default Flower;
