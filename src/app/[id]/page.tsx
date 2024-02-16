import React from "react";
import templates from '../../template'
const demoEvent: InvitationDetails = {
  id: "12345",
  title: "Listenning Party",
  date: new Date(Date.now()),
  subtitle: "EP Qual é o problema?",
  time: "19:00",
  age: 30,
  category: ["Aniversário"],
  address: "123 Main Street",
  place: "Salão de Festas 5D",
  infoline: "",
  host: "Suzana",
  dresscode: "Casual",
};


function page({params}:{params:{id:number}}) {
  const Theme = templates[params.id]?.component
  if(Theme)
  return (
    
      <Theme event={demoEvent} />
    
  );


  return <div><p>Template não localizado</p> <a href="">Voltar</a> </div>
}

export default page;
