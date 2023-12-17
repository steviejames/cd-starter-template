import React from "react";
import Theme from "../template/8";
//Dummy Theme
const theme = {
  background: "#fff",
};

//Dummy Data
const myEvent = {
  id: "12345",
  title: "Listenning Party",
  date: new Date("2023-12-4"),
  subtitle: "EP Qual é o problema?",
  time: "19:00",
  theme: {
    background: "https://firebasestorage.googleapis.com/v0/b/convite-digital.appspot.com/o/bg%2FConvite%20de%20anivers%C3%A1rio%20bal%C3%A3o%20moderno%20rose%20gold%2Fbackground.png",
    color: "#953175",
    secondary:"#fff",
    name: "Festa Colorida",
    title: "Convite Especial",
    bgColor: "#000",
    preview: "https://example.com/party-preview.jpg",
    category: "Aniversário",
    type: "Digital",
  },
  background: "https://example.com/event-background.jpg",
  titlw: "Maria's 30th Birthday",
  age: 30,
  category: ["Aniversário"],
  address: "123 Main Street",
  place: "Salão de Festas 5D",
  infoline: "",
  host: "Suzana",
  dresscode: "Casual",
};


function page() {
  return (
    
      <Theme data={myEvent} />
    
  );
}

export default page;
