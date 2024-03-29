/**
 * @author Sílvio Dumba
 * @website https://github.com/steviejames
 * @description
 * This is the index file for the Ivory Card template.
 */

import React from "react";
import { Dancing_Script } from "next/font/google";
import { week } from "@/utils/constant";
import { FaHeart } from "react-icons/fa";

// Define a functional component called "TemplateName" that takes an "event" object as a prop

const mainFont = Dancing_Script({weight:"variable", subsets:["latin"]})
function TemplateName({  event }: { event:  InvitationDetails }) {
  // Define default theme data
  const defaultThemeData = {
    background: "",
    color: "",
  };
 
  // Function to scroll to the bottom of the page
  const goToBottom = () => {
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  };

  // Extract day, month, and year from the event date
  const day = new Date(event?.date).getDay();
  const month = new Date(event?.date).getMonth();
  const monthDay = new Date(event?.date).getDate();
  const year = new Date(event?.date).getFullYear();
  return (
    <div
   className={` bg-no-repeat bg-center bg-cover sm:bg-top  min-h-[100dvh] h-fit w-full`}
   style={{
     backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/convite-digital.appspot.com/o/bg%2Fbackground%20-%20ballongs.png?alt=media&token=d1ce2125-b392-4003-a02e-70c838fe9f03")`,
     backgroundOrigin: "border-box",
   }}>
   <div className=' pt-28 md:pt-56 px-4  flex-1 flex flex-col'>
     <div className={`justify-center p-4 items-center text-[#9A5237] bg-gradient-to-tr from-[#f2ceca]  via-white to-[#f3cecb] shadow w-[400px] max-h-fit min-h-[400px]   flex flex-col mx-auto  rounded-full text-center ${mainFont.className}`}>
       <h1 className='text-9xl  font-black'>{event.age}</h1>
       <h2 className='text-5xl leading-3'>anos da</h2>
       <h1 className='text-8xl  font-bold  '>{event.host.split(" ")[0]}</h1>
     </div>
     <div className="text-gray-900 md:my-8 md:border-8 border-[#9A5237] md:shadow-md md:bg-[#f7e8e3] rounded md:text-black pb-8  space-y-4 max-w-sm mx-auto flex flex-col items-center justify-center pt-8">
       <p className=" text-xl text-center">Convido você para comemorar este dia incrível comigo!</p>
       <div className="flex items-center justify-center gap-4 font-bold text-xl">
         <p className="">{monthDay}/{month +1}</p>
         <FaHeart color="#9A5237" size={15} />
         <p>{week[day]}</p>
         <FaHeart color="#9A5237" size={15} />
         <p>{event.time}</p>
       </div>
       <p className="text-center text-xl">{event.address} - {event.place}</p>

       <p  className={`${mainFont.className}  text-3xl italic font-semibold text-[#9A5237]`}>{event.subtitle}</p>
     </div>
   </div>
 </div>
 
  );
}

export default TemplateName;


function Bottom() {
  return<div className="h-screen" bg-black></div>
}