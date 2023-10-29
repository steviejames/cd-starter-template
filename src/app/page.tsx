import React from "react";
import Theme from "../template/theme-name";
//Dummy Theme
const theme = {
  background: "#fff",
};

//Dummy Data
const myEvent = {
  id: "12345",
  title: "Festa de Aniversário",
  active: true,
  isPaid: false,
  date: new Date("2023-11-15"),
  headline: "Venha comemorar conosco!",
  time: "19:00",
  theme: {
    background: "https://example.com/party-background.jpg",
    color: "#FFA500",
    name: "Festa Colorida",
    title: "Convite Especial",
    bgColor: "#FFA500",
    preview: "https://example.com/party-preview.jpg",
    category: "Aniversário",
    type: "Digital",
  },
  background: "https://example.com/event-background.jpg",
  name: "Maria's 30th Birthday",
  age: 30,
  category: ["Aniversário"],
  address: "123 Main Street",
  place: "Salão de Festas",
  infoline: "Traje Casual",
  isForAnyone: true,
  host: "Maria Silva",
  dresscode: "Casual",
};

// Agora, você pode usar o objeto "myEvent" para renderizar o convite digital com base nos detalhes fornecidos.

function page() {
  return (
    <div>
      <Theme data={myEvent} />
    </div>
  );
}

export default page;
