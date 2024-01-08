import React from "react";
import { InvitationDetails } from "../theme";

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
console.log(theme)
  return (
    <div
      className={`relative min-h-[100vh] h-full  p-10 flex flex-1  flex-col text-white items-center justify-center  `}
      style={{
        background: isColor ? theme?.background : `url(${theme.background})`,
        backgroundOrigin: "border-box",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
      {
        //create your awesome template in this área
        <main className='absolute h-full bg-black/90 w-full p-8 flex items-center justify-around flex-col'>
          <div className='border-4 w-full max-w-2xl p-8 space-y-6'>
            <div className='flex justify-center items-center gap-x-4'>
              <span className='h-1 w-full bg-white'></span>
              <div className='w-full text-center font-semi-bold sm:text-7xl'>{`${monthDay
                .toString()
                .padStart(2, "0")}.${month
                .toString()
                .padStart(2, "0")}.${year}`}</div>
              <span className='h-1 w-full bg-white '></span>
            </div>
            <h1 className='text-[6vw] font-bold text-center uppercase'>
              {event?.name}
            </h1>
            <p className={`text-2xl text-center`}>{event?.headline}</p>
          </div>
          <div className='text-center flex items-center gap-x-2'>
            <p>by</p>
            <p>Convite Digital</p>
          </div>
        </main>
      }
    </div>
  );
}

export default TemplateName;
