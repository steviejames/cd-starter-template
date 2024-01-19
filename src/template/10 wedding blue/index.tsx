import React from "react";
import bg from "./bg.png";
import Image from "next/image";
function Wedding({event}: {event: InvitationDetails}) {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className='min-h-screen flex flex-col items-center'>
      <Image
        className='fixed max-w-lg  w-full h-full '
        src={bg}
        alt=''
        width={300}
        height={1000}
      />
      <div>
        <h2>Together with their families</h2>
        <h1>Alexandre & Olívia</h1>
        <p>
          Request the pleasure of your company the ceremony of their wedding
        </p>
      </div>
      <div>
        <h1>Saturday</h1>
        <div>
          <p></p>
          <h1>20</h1>
          <p>DECEMBER</p>
        </div>
        <h1>AT 10:00</h1>
      </div>
      <div>
        <h1>123 Anywhere St. Any City</h1>
        <h1>123 Anywhere St. Any City</h1>
      </div>
    </div>
  );
}

export default Wedding;
