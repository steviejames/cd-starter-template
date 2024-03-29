/**
 * @author Sílvio Dumba
 * @website https://github.com/steviejames
 * @description
 * This is the index file for the Ivory Card template.
 */

import React from "react";
import { Caveat } from "next/font/google";
import { Righteous } from "next/font/google";
const tag_font = Caveat({ subsets: ["latin"], weight: "400" });
const title_font = Righteous({ subsets: ["latin"], weight: "400" });
function ThePartyTemplate({ event }: { event: InvitationDetails }) {
  //@ts-ignore
  const { theme } = event;
  const isColor = theme?.background?.includes("#", 0);
  const date = new Date(event?.date);
  const weekDay = date.getDay();
  const year = date.getFullYear();
  const month = date.getUTCMonth();
  const monthDay = date.getUTCDate().toString().padStart(2, "0");
  return (
    <div
      className={`relative min-h-[100vh] h-full  p-10 flex flex-1  flex-col text-white items-center justify-center  `}
      style={{
        background: `url(https://firebasestorage.googleapis.com/v0/b/convite-digital.appspot.com/o/bg%2Fcroudy.jpg?alt=media&token=67584aae-1346-496f-9971-0c941c0f8384)`,
        backgroundOrigin: "border-box",
        backgroundPosition:"center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
      <div className='absolute h-full bg-black/50 w-full p-8 flex items-center justify-around flex-col'>
        <div className='border-4 w-full max-w-2xl p-8 space-y-6'>
          <div className='flex justify-center items-center gap-x-4'>
            <span className='h-1 w-full bg-white'></span>
            <div className='w-full text-center font-semibold text-3xl md:text-7xl'>{`${monthDay
              .toString()
              .padStart(2, "0")}.${(month +1)
              .toString()
              .padStart(2, "0")}.${year}`}</div>
            <span className='h-1 w-full bg-white '></span>
          </div>
          <h1 className={`text-[10dvw] sm:text-[6rem] break-words font-bold text-center uppercase ${title_font.className}`}>
            {event?.title}
          </h1>
          <p className={`${tag_font.className} text-3xl italic text-center`}>
            {event?.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThePartyTemplate;
