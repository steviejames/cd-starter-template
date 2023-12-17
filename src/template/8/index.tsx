"use client";
"./style.module.css";
import React from "react";
import localFont from "next/font/local";
import { FiArrowDownCircle } from "react-icons/fi";
import { InvitationDetails } from "@/types/global";
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
const color = "#474642"
const bg = "#f6f6f6"
  return (
    <div className="relative h-full">
      <div      style={{color: color}}

        className={`relativflex bg-slate-950 h-full max-h-screen overflow-hidden  flex-col text-[${color}]  items-center justify-center max-w-full`}>
        <main className='absolute top-0 bottom-0 space-y-4
          max-h-screen h-full w-full  px-4 py-8 sm:p-8 flex items-center justify-center flex-col'>
        
          <div style={{color: color, backgroundColor:bg}} className="w-full max-w-lg rounded border p-4">
            <h1 className={"font-bold text-5xl font-serif text-center mb-8 "+ `text-[${color}]`}>SAVE THE DATE</h1>
          <div className="grid mx-auto grid-cols-3 max-w-xl w-full text-white  gap-4">
            <div style={{backgroundColor:color, color:bg}} className={`flex rounded-md flex-col text-center  py-4 space-y-4 bg-[${color}]`}>
              <h1 className="font-bold font-serif text-5xl">{day}</h1>
              <div className="h-[1px] border-y border-dashed border-white/50"></div>
              <h3 className="font-light text-base">Dia</h3>
            </div>
            <div style={{backgroundColor:color, color:bg}} className={`flex rounded-md flex-col text-center  py-4 space-y-4 bg-[${color}]`}>
              <h1 className="font-bold font-serif text-5xl">{month}</h1>
              <div className="h-[1px] border-y border-dashed border-white/50"></div>
              <h3 className="font-light text-base">Mês</h3>
            </div>
            <div style={{backgroundColor:color, color:bg}} className={`flex rounded-md flex-col text-center  py-4 space-y-4 bg-[${color}]`}>
              <h1 className="font-bold font-serif text-5xl">{year}</h1>
              <div className="h-[1px] border-y border-dashed border-white/50"></div>
              <h3 className="font-light text-base">Ano</h3>
            </div>
            
          </div>
          <div className="text-center mt-2 font-semibold ">
            <p>{event.title}</p>
            <p>{event.subtitle}</p>
          </div>
          </div>
            <ScrollToBottom />
        </main>
      </div>
     
    </div>
  );
}

export default TemplateName;

function ScrollToBottom({ color, ...props }: { color?: string , props?:any}) {
  const goToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={goToBottom}
      className=' absolute animate-bounce cursor-pointer bottom-0'>
      <FiArrowDownCircle  {...props} size={30} color={color ? color : "white"} />
    </div>
  );
}
