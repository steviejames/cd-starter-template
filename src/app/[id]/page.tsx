import React from "react";
import templates from '../../template'
const demoEvent: InvitationDetails & any = {
  id: "12345",
  title: "Até aqui Deus Ajudou",
  date: new Date(Date.now()),
  subtitle: "Com a bênção de Deus e de nossos pais convidamos você para o nosso casamento a ser realizado no dia:",
  time: "19:00",
  age: 30,
  category: ["Aniversário"],
  address: "123 Main Street",
  place: "Salão de Festas 5D",
  weddingDetails: {
    citation:{
      text: "Deixará o homem seu pai e sua mãe, unir-se-á à sua esposa e serão uma só carne",
      author: "Marcos 10:7"
    },
    civil: {
      place:"7ª conservatória",
      address:
        "Rua direta da samba junto do posto policial do calçadão.",
      coords: { lat: "", long: "" },
      time: "10:00",
      date: "10/12/2025",
    },
    cerimony: {
      place:"Igreja IECA, Pastorado de Monte Sinai",
      address:
        "Futungo de Belas, bairro Futungo 2 depois do CCB",
      coords: { lat: "", long: "" },
      time: "16:00",
      date: "10/12/2025",
    },
  },
  infoline: "",
  host: "Patrick Dizângela",
  dresscode: "Casual",
 
};


function page({params}:{params:{id:number}}) {
  const Theme = templates[params.id]?.component
  if(Theme)
  return (
    
      <Theme event={demoEvent}  />
    
  );


  return <div><p>Template não localizado</p> <a href="">Voltar</a> </div>
}

export default page;
