"use client";
"./style.module.css";
import React from "react";
import { InvitationDetails } from "../theme";
import localFont from "next/font/local";
import { Fira_Sans } from "next/font/google";
import Image from "next/image";
import image from "./suzana.png";
import { FiArrowDownCircle } from "react-icons/fi";
const gistesy = localFont({ src: "./assets/Gistesy.ttf" });
const fira_sans = Fira_Sans({ weight: ["400", "700"], subsets: ["latin"] });
// Define a functional component called "TemplateName" that takes an "event" object as a prop
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

  return (
    <div className="relative h-full">
      <div
        className={`relative  flex h-full max-h-screen overflow-hidden  flex-col text-white items-center justify-center max-w-full`}>
        <main className='absolute top-0 bottom-0 bg-black bg-gradient-to-b from-black to-gray-950  max-h-screen h-full w-full  px-4 py-8 sm:p-8 flex items-center justify-between flex-col'>
          <div className='flex flex-col items-center justify-center space-y-2'>
            <h1
              className={`${gistesy.className} text-center text-5xl sm:text-6xl animate-pulse shadow-inner `}
              style={{
                textShadow: "1px 1px 6px #fff",
              }}>
              Farofa da Suzana
            </h1>
            <div
              style={{
                color: "#fff",
                textShadow: `2px 1px 0px ${theme.color}`,
              }}
              className={`px-8 text-center z-10 font-bold text-2xl  flex ${fira_sans.className} gap-x-4 sm:gap-x-10 lg:gap-x-8`}>
              <p>
                {monthDay}/{month.toString().padStart(2, "0")}
              </p>
              <p>-</p>
              <p>{event?.time}</p>
            </div>
          </div>
          <div className='absolute lg:w-full lg:max-w-sm -bottom-20 lg:-bottom-20 overflow-hidden z-0'>
            <Image
              className='w-[95%] mx-auto sm:w-full fex flex-1'
              style={{
                imageResolution: "1000",
                maxWidth: "100%",
                height: "100%",
                resize: "both",
              }}
              src={image}
              width={200}
              height={400}
              alt='suzana'
            />
          </div>
          <div className='flex flex-col items-center justify-center space-y-4 z-10'>
            <h1
              style={{
                textShadow: "2px 1px pink",
              }}
              className={`${gistesy.className} text-4xl sm:text-6xl text-center  bg-gradient-to-r from-pink-300 to-pink-500 bg-clip-text text-transparent`}>
              {event?.title}
            </h1>
            <h1
              style={{
                textShadow: "1px 1px 20px #fff",
              }}
              className={`${gistesy.className} text-4xl sm:text-6xl text-center font-semibold animate-pulse`}>
              {event?.subtitle}
            </h1>
          </div>
          <div className='absolute bottom-0 z-30 w-full flex justify-center items-center'>
            <ScrollToBottom />
          </div>
        </main>
      </div>
      <div className='h-screen sm:p-8 text-gray-300   bg-gradient-to-b from-black to-gray-900 p-8 space-y-8'>
        <div className='flex flex-col items-center max-w-lg mx-auto justify-center space-y-2 '>
          <h1 className='text-3xl font-bold md:text-6xl text-center'>
            Confirmação de Presença
          </h1>
          <p className='text-center text-base'>
            Confirme ou desconfirme sua presença e ajude{" "}
            {event?.host || "o anfitrião"} a organizar melhor o evento
          </p>
        </div>
        <div className='flex flex-col items-center max-w-lg mx-auto justify-center space-y-2'>
          <input
            type='text'
            placeholder='Insira seu número de telefone'
            className='h-12 rounded border w-full p-2'
          />
          <div>
            <button>Confirmar</button>
            <button>Desconfirmar</button>
          </div>
        </div>
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
