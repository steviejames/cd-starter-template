import React from "react";
import Theme from "./theme-name/page";
//Dummy Theme
const theme = {
  background: "#fff",
};

//Dummy Data
const event = {
  id: "string",
  title: "Festa da Joana",
  active: true,
  isPaid: true,
  date: new Date("12/12/2023"),
  headline: "Sangraaaaa",
  time: "string",
  background: "#fff",
  theme: {
    background: "#fff",
    color: "#000",
    name: "string",
    title: "string",
    bgColor: "#000",
    preview: "string",
    category: "string",
    type: "string",
  },
  name: "Festa da Joana",
  age: 30,
  category: "string",
  address: "string",
  place: "string",
  infoline: "string",
  isForAnyone: false,
  host: "Joana",
  dresscode: "Tuo vermelho",
};
function page() {
  return (
    <div>
      <Theme data={event} />
    </div>
  );
}

export default page;
