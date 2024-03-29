/**
 * @author Sílvio Dumba
 * @website https://github.com/steviejames
 * @description
 * This is the index file for the Ivory Card template.
 */

"use client";
"./style.module.css";
import React from "react";
import { Leckerli_One, Montserrat } from "next/font/google";
import { FiArrowDownCircle } from "react-icons/fi";
import frame from "./frame.png";
import Image from "next/image";
import { months, week } from "@/utils/constant";
const titleFont = Leckerli_One({ weight: "400", subsets: ["latin"] });
const montserrat = Montserrat({subsets:["latin"]})
function TemplateName({ event }: { event: InvitationDetails }) {
  // Define default theme data

  // Extract day, month, and year from the event date
  const day = new Date(event?.date).getDay();
  const month = new Date(event?.date).getMonth() + 1;
  const monthDay = new Date(event?.date).getDate().toString().padStart(2, "0");
  const year = new Date(event?.date).getFullYear();
const dateString = `${week[day]}, ${monthDay} de ${months[month]} ás ${event.time}`
  return (
    <div
      style={{
        backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/convite-digital.appspot.com/o/bg%2Fbg.png?alt=media&token=4a8173e8-9b7d-46fd-a1c0-20ed204e1ed0)`,
        backgroundPosition: "fixed",

        backgroundRepeat: "no-repeat",
        backgroundSize: "fill",
        backgroundOrigin: "border-box",
      }}
      className='h-fit min-h-screen flex-1 flex items-center justify-center'>
      <div
        style={{
          backgroundSize: "object-contain",
        }}
        className={'max-w-xl mx-auto relative ' + montserrat.className}>
        <div className='text-gray-200 flex flex-col items-center  justify-center absolute top-0 bottom-0 left-0 right-0'>
          <div className='p-14 flex flex-col  text-8xl sm:text-9xl sm:font-black'>
            <h1 className={`text-center text-[#F2C6C2]  ${titleFont.className}`}>Let's</h1>
            <h1 className={`text-center text-[#F2C6C2] ${titleFont.className}`}>Party</h1>
          </div>
          <div className=" text-center">
            <h1 className={`text-xl sm:text-3xl mb-4 uppercase font-bold `}>Aniversário da {event.host}</h1>
            <h1 className={`sm:text-xl`}>{dateString}</h1>
            <h1 className={`sm:text-xl  `}>{event.place}</h1>
          </div>
            <h1 className={`text-xl mt-1 italic  ${titleFont.className}`}>{event.subtitle}</h1>
        </div>
        <Image
          src={frame}
          width={1000}
          height={1000}
          quality={100}
          alt='frame'
          
        />
      </div>
    </div>
  );
}

export default TemplateName;

