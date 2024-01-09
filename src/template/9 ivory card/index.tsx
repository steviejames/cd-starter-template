"use client";
"./style.module.css";
import React from "react";
import localFont from "next/font/local";
import { Antic_Didone } from "next/font/google";
import { FiArrowDownCircle } from "react-icons/fi";
import { InvitationDetails } from "@/types/global";
const anticFont = Antic_Didone({
  weight: "400",
  subsets: ["latin"],
});
function TemplateName({ data: event }: { data: InvitationDetails }) {
  // Define default theme data
  const defaultThemeData = {
    background: "",
    color: "",
  };
  const { theme } = event;

  // Check if the background is a color (starts with "#")
  const isColor = theme?.background.includes("#", 0);

  // Function to scroll to the bottom of the page

  // Extract day, month, and year from the event date
  const day = new Date(event?.date).getDay();
  const month = new Date(event?.date).getMonth() + 1;
  const monthDay = new Date(event?.date).getDate().toString().padStart(2, "0");
  const year = new Date(event?.date).getFullYear();
  const color = "#000000";
  const bg = "#EFE7DA";
  return (
    <div className='relative h-full'>
      <div
        style={{ color: color, backgroundColor: bg }}
        className={`relative flex  h-full max-h-screen overflow-hidden  flex-col text-[${color}]  items-center justify-center max-w-full`}>
        <main className='absolute top-0 bottom-0 space-y-4 h-full w-full  px-4 py-8 sm:p-8 flex items-center justify-center flex-col'>
          <div className={`flex flex-col w-full max-w-3xl `}>
            <div className={`${anticFont.className} font-serif`}>
              <div className='w-[1px] bg-black h-14 ml-4'></div>
              <h1 className='text-7xl'>SAVE</h1>
              <p className='font-sans italic text-3xl'>the</p>
              <h1 className='text-7xl'>DATE</h1>
              <div className='w-[1px] bg-black h-full ml-4'></div>
            </div>
            <div className='flex items-end flex-col space-y-6 mt-8'>
              <p className='font-sans italic text-3xl'>{event.host}</p>
              <h1 className={`text-3xl font-serif ${anticFont.className}`}>
                {monthDay}.{month.toString().padStart(2, "0")}.{year}
              </h1>
              <h1 className={`text-3xl font-serif ${anticFont.className}`}>
                {event.title}
              </h1>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default TemplateName;
