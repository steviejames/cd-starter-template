import React from "react";
import HeartIcon from "./heart.png";
import BearIcon from "./bear.png";
import bg from "./2.png";
import { Pacifico } from "next/font/google";
const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });
import Image from "next/image";
function Page({ event }: { event: InvitationDetails }) {
  return (
    <div
      className='min-h-fit h-full relative bg-cover resize bg-center sm:flex items-center justify-center'
      style={{
        backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/convite-digital.appspot.com/o/bg%2F2.png?alt=media&token=e75f91fb-c25e-40b1-ae7d-5bf6b5b810e0)`,
      }}>
      <div className='flex  flex-col-reverse sm:grid sm:grid-cols-2 gap-4  p-4 items-center justify-center mx-auto max-w-2xl'>
        <div className='flex flex-col items-center text-center space-y-6'>
          <span>
            <p className={`text-4xl sm:text-7xl font-medium text-pink-600 ${pacifico.className}`}>{event.title}</p>
          </span>

          <span className='text-xl font-light capitalize'>
            <p>
              {event.date.toLocaleDateString("pt-AO", {
                weekday:"long",
                day: "2-digit",
                month: "long",
              })}
            </p>
            <p>
              {"ás " + event.date.toLocaleTimeString("pt-AO", {
               // hour: "numeric",
                //minute: "numeric",
                hour12: false, timeStyle:"short"
              })}
            </p>
          </span>

          {/*<span className='uppercase text-lg font-medium'>
          <p>Casa de eventos Luena</p>
          <p>Avenida fidel de castro, Luanda</p>
  </span>*/}

          <p className='uppercase text-lg p-2 bg-pink-100 rounded text-center'>
            {event.subtitle}
          </p>
        </div>
        <div>
          <Image
            className='w-full h-full max-w-[250px] sm:max-w-[500px]'
            height={700}
            width={500}
            src={BearIcon}
            alt='bear'
            style={{
              objectFit: "contain",
              resize: "both",
              width: "100%",
              height: "100%",
              objectPosition: "center",
              flex: "1",
            }}
          />
        </div>
      </div>
      <Image
        className='w-full max-w-[60px] absolute top-0'
        height={700}
        width={500}
        src={HeartIcon}
        alt='heart'
      />
    </div>
  );
}

export default Page;
