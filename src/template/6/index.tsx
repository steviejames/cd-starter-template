import { sliceDate } from "@/lib/utils";
import { Event, Theme } from "@prisma/client";
import React from "react";
import { Homemade_Apple } from "next/font/google";
import ScrollToBottom from "@/components/ScrollToBottom";
import { InvitationDetails } from "../../lib/types/theme";

const tag_font = Homemade_Apple({ subsets: ["latin"], weight: "400" });
function ThePartyTemplate({ data: event }: { data: InvitationDetails }) {
  //@ts-ignore
  const { theme } = event;
  const isColor = theme?.background?.includes("#", 0);
  const { month, monthDay, year, weekDay } = sliceDate(event.date);
  return (
    <div
      className={`relative min-h-[100vh] h-full  p-10 flex flex-1  flex-col text-white items-center justify-center  `}
      style={{
        background: isColor ? theme.background : `url(${theme.background})`,
        backgroundOrigin: "border-box",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
      <div className='absolute h-full bg-black/50 w-full p-8 flex items-center justify-around flex-col'>
        <div className='border-4 w-full max-w-2xl p-8 space-y-6'>
          <div className='flex justify-center items-center gap-x-4'>
            <span className='h-1 w-full bg-white'></span>
            <div className='w-full text-center font-semiibold text-3xl md:text-7xl'>{`${monthDay
              .toString()
              .padStart(2, "0")}.${month
              .toString()
              .padStart(2, "0")}.${year}`}</div>
            <span className='h-1 w-full bg-white '></span>
          </div>
          <h1 className='text-[6vw] font-bold text-center uppercase'>
            {event?.title}
          </h1>
          <p className={`${tag_font.className} text-2xl text-center`}>
            {event?.subtitle}
          </p>
        </div>
        <ScrollToBottom color={"white"} />
      </div>
    </div>
  );
}

export default ThePartyTemplate;