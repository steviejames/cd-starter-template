/**
 * @author Sílvio Dumba
 * @website https://github.com/steviejames
 * @description
 * This is the index file for the Ivory Card template.
 */

"use client";
import React from "react";
import Image from "next/image";
import { Grenze, Caveat_Brush } from "next/font/google";
import { months, week } from "@/utils/constant";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { FaMapPin } from "react-icons/fa";
import { Abhaya_Libre } from "next/font/google";
import textBg from "./grunge-brush.png"
import mugs from './mugs.png'
const myFont = Abhaya_Libre({
  weight: "600",
  subsets: [],
});

const grenze = Grenze({ subsets: ["latin"], weight: "400" });

function DefaultPage({ event }: { event: InvitationDetails }) {
  const bg = "#000";
  const colors = {
    primary: "#fea514",
  };
  const date = new Date(event?.date);
  const weekDay = date.getDay()
  const month = date.getMonth()
  const monthDay = date.getUTCDate().toString().padStart(2, "0");
 
  return (
    <div
      className={`relative min-h-[100vh]  p-10 flex flex-1  flex-col text-white items-center justify-center ${grenze.className} `}
      style={{
        backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/convite-digital.appspot.com/o/bg%2Fblack-rock.jpg?alt=media&token=caf66b25-0686-46ac-94c8-b6aa762924da)`,
        backgroundColor: bg,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>
      <div className='max-w-sm '>
        <Image
          alt='v'
          loading='eager'
          src={mugs}
          sizes='100dvw'
          width={100}
          height={100}
          quality={100}
          style={{
            width: "100%",
            maxWidth: "400px",
            objectFit: "contain",
          }}
        />
      </div>
      <p
        className={`${myFont.className} flex-1 my-6 px-4 text-center text-4xl sm:text-6xl font-black`}>
        {String(event?.host)}
      </p>
      {event.age && (
        <div
          className={`flex items-center gap-2 ${grenze.className}`}
          style={{ fontSize: "3rem" }}>
          <span className={` ${grenze.className}`}>faz</span>
          <p
            className={`${myFont.className} text-7xl sm:text-9xl `}
            style={{
              color: colors.primary,
            }}>
            {event.age}
          </p>
          anos
        </div>
      )}
      <div className='relative flex object-contain  justify-center items-center'>
        <Image
          alt='come'
          loading='eager'
          src={textBg}
          sizes='100vw'
          width={100}
          height={100}
          quality={100}
          style={{
            width: "100%",
            maxHeight: "10rem",
            maxWidth: "100%",
            objectFit: "contain",
            flex: 1,
          }}
        />
        <div className='flex -rotate-3  absolute flex-1 '>
          <p
            className={
              "text-center text-black sm:text-5xl text-3xl " + grenze.className
            }>
            Venha comemorar!!!
          </p>
        </div>
      </div>
      <div
        className='flex w-full   flex-col justify-between items-center mt-8 mb-8  sm:flex-row sm:space-y-0 space-y-8  sm:max-w-md'
        style={{ lineHeight: 1 }}>
        <div className='text-center sm:text-center'>
          <p className={`${grenze.className} text-4xl`}>{week[weekDay]}</p>
          <p
            className={`${myFont.className}  text-6xl`}
            style={{
              color: colors.primary,
            }}>
            {monthDay}
          </p>
          <p className={`${grenze.className} text-4xl`}>{months[month]}</p>
        </div>
        <div className='hidden sm:flex flex-1 justify-center rotate-90 sm:rotate-0  h-full w-1'>
          <FiArrowRight size={30} />
        </div>
        <div
          className='aspect-square flex items-center justify-center p-6 rounded-full'
          style={{ background: colors.primary }}>
          <p className={`${myFont.className} text-6xl`}>
            {event.time.split(":")[0]}H
          </p>
        </div>
      </div>
    
    </div>
  );
}

export default DefaultPage;
