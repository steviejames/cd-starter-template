"use client";
"./style.module.css";
import React from "react";
import { FiArrowDownCircle } from "react-icons/fi";
function SimpleSaveTheDate({ event }: { event: InvitationDetails }) {
  // Extract day, month, and year from the event date
  const day = new Date(event?.date).getDay();
  const month = new Date(event?.date).getMonth() + 1;
  const monthDay = new Date(event?.date).getDate().toString().padStart(2, "0");
  const year = new Date(event?.date).getFullYear();
  const color = "#474642";
  const bg = "#f6f6f6";
  return (
    <div className='relative '>
      <div
        style={{ color: color, backgroundColor: bg }}
        className={`relative flex bg-white h-full min-h-screen overflow-hidden  flex-col text-[${color}]  items-center justify-center max-w-full`}>
        <main
          className='absolute top-0 bottom-0 space-y-4
          min-h-screen  w-full  px-4 py-8 sm:p-8 flex items-center justify-center flex-col'>
          <div
            style={{ color: color, backgroundColor: bg }}
            className='w-full max-w-lg shadow p-4'>
            <h1
              className={
                "font-bold text-5xl font-serif text-center mb-8 " +
                `text-[${color}]`
              }>
              SAVE THE DATE
            </h1>
            <div className='grid mx-auto grid-cols-3 max-w-xl w-full text-white  gap-4'>
              <div
                style={{ backgroundColor: color, color: bg }}
                className={`flex rounded-md flex-col justify-between text-center  bg-[${color}]`}>
                <div></div>
                <h1 className='font-bold py-4 font-serif text-3xl sm:text-5xl'>
                  {day}
                </h1>
                <div className='border-t py-2 border-dashed border-white/50'>
                  <h3 className=' text-base font-medium '>Dia</h3>
                </div>
              </div>
              <div
                style={{ backgroundColor: color, color: bg }}
                className={`flex rounded-md flex-col justify-between text-center  bg-[${color}]`}>
                <div></div>
                <h1 className='font-bold py-4 font-serif text-3xl sm:text-5xl'>
                  {month}
                </h1>
                <div className='border-t py-2 border-dashed border-white/50'>
                  <h3 className=' text-base font-medium '>Mês</h3>
                </div>
              </div>
              <div
                style={{ backgroundColor: color, color: bg }}
                className={`flex rounded-md flex-col justify-between text-center  bg-[${color}]`}>
                <div></div>
                <h1 className='font-bold py-4 font-serif text-3xl sm:text-5xl'>
                  {year}
                </h1>
                <div className='border-t py-2 border-dashed border-white/50'>
                  <h3 className=' text-base font-medium '>Ano</h3>
                </div>
              </div>
             
             
            </div>
            <div className='text-center mt-2 '>
              <p className="font-bold text-2xl">{event.title}</p>
              <p>{event.subtitle}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SimpleSaveTheDate;
