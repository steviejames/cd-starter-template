"use client";
"./style.module.css";
import React from "react";
import localFont from "next/font/local";
import { Fira_Sans } from "next/font/google";
import Image from "next/image";
import image from "./suzana.png";
import { FiArrowDownCircle } from "react-icons/fi";
const featherly = localFont({ src: "./assets/featherly.ttf" });
const fira_sans = Fira_Sans({ weight: ["400", "700"], subsets: ["latin"] });
// Define a functional component called "TemplateName" that takes an "event" object as a prop
function TemplateName({ event }: { event: InvitationDetails}) {
  // Define default theme data
 
  const date = new Date(event?.date)
  const day = date.getDay();
  const month = date.getMonth() + 1;
  const monthDay = date.getUTCDate().toString().padStart(2, "0");
  const year = date.getFullYear();
  return (
    <div className="relative h-screen">
      <div
        className={`relative  flex h-full min-h-screen overflow-hidden  flex-col text-white items-center justify-center max-w-full`}>
        <main className='absolute top-0 bottom-0 bg-black max-h-screen h-full w-full  px-4 py-8 sm:p-8 flex items-center justify-between flex-col'>
          <div className='flex flex-col items-center justify-center space-y-2'>
            <h1
              className={`${featherly.className} text-center text-5xl sm:text-6xl animate-pulse shadow-inner `}
              style={{
                textShadow: "1px 1px 6px #fff",
              }}>
              Farofa da Suzana
            </h1>
            <div
              style={{
                color: "#fff",
              }}
              className={`px-8 text-center z-10 font-bold text-2xl  flex ${fira_sans.className} gap-x-4 sm:gap-x-10 lg:gap-x-8`}>
              <p>
                {monthDay}/{month.toString().padStart(2, "0")}
              </p>
              <p></p>
              <p>{event?.time}</p>
            </div>
          </div>
          <div className='absolute h-screen max-w-sm w-full lg:max-w-sm -bottom-20 lg:-bottom-20 overflow-hidden z-0'>
            <Image
            
              className='w-[95%] mx-auto sm:w-full fex flex-1'
              style={{
                imageResolution: "1000",
                maxWidth: "100%",
                height: "100%",
                resize: "both",
              }}
             
              placeholder="blur"
              src={image}
              width={200}
              height={400}
              alt='suzana'
            />
          </div>
          <div className='flex flex-col items-center justify-center space-y-4 z-10'>
            <h1
              style={{
                textShadow: "2px 1px #fff",
              }}
              className={`${featherly.className} text-4xl sm:text-6xl text-center  bg-gradient-to-r from-pink-300 to-pink-500 bg-clip-text text-transparent`}>
              {event?.title}
            </h1>
            <h1
              style={{
                textShadow: "1px 1px 20px #fff",
              }}
              className={`${featherly.className} text-4xl sm:text-6xl text-center font-semibold animate-pulse`}>
              {event?.subtitle}
            </h1>
          </div>
          
        </main>
      </div>
      
    </div>
  );
}

export default TemplateName;

function ScrollToBottom({ color }: { color?: string }) {
  const goToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={goToBottom}
      className=' animate-bounce cursor-pointer bottom-0'>
      <FiArrowDownCircle size={30} color={color ? color : "white"} />
    </div>
  );
}