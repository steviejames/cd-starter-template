"use client";
"./style.module.css";
import React from "react";
import localFont from "next/font/local";
import { FiArrowDownCircle } from "react-icons/fi";
function TemplateName({ data: event }: { data: any }) {
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

  return (
    <div className="relative h-full">
      <div
        className={`relative  flex h-full max-h-screen overflow-hidden  flex-col text-white items-center justify-center max-w-full`}>
        <main className='absolute top-0 bottom-0 bg-black/80 bg-gradient-to-b from-black to-gray-950  max-h-screen h-full w-full  px-4 py-8 sm:p-8 flex items-center justify-between flex-col'>
          <div>Icones</div>
          <div className='flex flex-col items-center justify-center space-y-8'>
            
          <div className="flex flex-col items-center justify-center">
          <h1 className="font-semibold mb-4">A {event.host} cordialmente te convida para a</h1>
           <h1 className="text-5xl font-bold text-yellow-500">{event.title}</h1>
          </div>
         <div className="flex text-lg flex-col items-center justify-center">
          <p className="font-semibold">{event.time.split(":")[0]}h - {`${day} de ${month} de ${year}`}</p>
          <p className="font-semibold">{event.place}</p>
          {event.dresscode && <p className="font-semibold">Traje: {event.dresscode}</p>}

         </div>
          </div>
          
            <ScrollToBottom  />
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
      className='  animate-bounce cursor-pointer bottom-0'>
      <FiArrowDownCircle  {...props} size={30} color={color ? color : "white"} />
    </div>
  );
}
