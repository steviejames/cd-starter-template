"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ScrollToBottom from "@/components/ScrollToBottom";
import { Pacifico, Montserrat, Playfair_Display } from "next/font/google";
import {
  checkIfDarkImageFromURL,
  sliceDate,
  verifyBackgroundType,
} from "@/lib/utils";

const nameFont = Pacifico({ subsets: ["latin"], weight: "400" });
const ageFont = Playfair_Display({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });

const Flower = ({ data, theme }: any) => {
  const [imageIsDark, setIsDark] = useState<any>();
  const darkText = "text-[#696861]";
  const lightText = "text-[#fff]";
  const { date, name, time } = data;
  const isColor = verifyBackgroundType(data.background);
  const { month, monthDay, year, weekDay } = sliceDate(date);
  useEffect(() => {
    checkIfDarkImageFromURL(data?.background, setIsDark);
  }, [data]);
  return (
    <div
      style={{
        background: isColor ? data.background : `url(${data.background})`,
        backgroundSize: "cover",
        resize: "both",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        objectFit: "contain",
        color: imageIsDark ? lightText : darkText,
      }}
      className={`flex flex-1  items-center justify-center  p-8`}
    >
      <div className="max-w-4xl h-full mx-auto flex flex-col gap-y-8  items-center">
        <p
          className={`${montserrat.className} uppercase  text-2xl text-center font-thin `}
        >
          ANIVERSÁRIO
        </p>
        <div className="text-center text-[#4d5f50]">
          <p className={`sm:text-8xl text-6xl  ${nameFont.className}`}>
            {data.host}
          </p>
          <p
            className={
              "sm:text-8xl text-6xl lowercase font-thin " + ageFont.className
            }
          >
            {data.age} anos
          </p>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 max-w-2xl rounded uppercase bg-black/5 p-8 gap-x-4 ">
          <div className="gap-y-1 sm:text-right text-center ">
            <p className="w-full">{data.location}</p>
            <p>
              {monthDay} | {month + 1} | {year}
            </p>
            <p>{data.time}</p>
          </div>
          <div className="gap-y-1 border-l pl-4 border-[#4d5f50] sm:text-right text-center ">
            <p className="sm:text-left text-center mt-4 sm:mt-0">
              {data.place}
            </p>
            <p className="sm:text-left text-center mt-4 sm:mt-0">
              {data.address}
            </p>
          </div>
        </div>
        {isColor ? (
          <Image
          loading="eager"
            className="mx-auto self-end sm:max-w-md max-w-xs"
            alt="flowers"
            src={"/assets/pngwing.com.png"}
            sizes="100vw"
            width={100}
            height={"100"}
            quality={100}
            style={{
              width: "100%",
              objectFit: "contain",
            }}
          />
        ) : (
          <div className="h-8"></div>
        )}
        <ScrollToBottom color="#4d5f50" />
      </div>
    </div>
  );
};
export default Flower;
