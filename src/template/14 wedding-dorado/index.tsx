import React from "react";
import {
  Inter,
  Libre_Baskerville,
  Raleway,
  Tiro_Tamil,
  Whisper,
} from "next/font/google";
import localFont from "next/font/local";

import flower from "./flower.png";
import flowers1 from "./arranjo.png";
import flowers2 from "./arranjo right.png";
import flowers3 from "./arranjo3.png";
import folhas from "./Folhas.png";
import bgOverlay from "./bg-image.png";
import couple from "./noivos.svg";
import Image from "next/image";
import { FaRing, FaStar } from "react-icons/fa";
import {
  CircleCheck,
  CircleChevronDownIcon,
  GemIcon,
  Hammer,
  Info,
} from "lucide-react";
import Link from "next/link";
type Props = {};

const TTCommons = Raleway({
  weight: "400",
  fallback: ["Arial", "non-serif"],
  subsets: ["latin", "latin-ext"],
});

const whisper = Whisper({ weight: "400", subsets: ["latin"] });
const inter = Inter({
  subsets: ["latin", "latin-ext"],
});

const libreBasker = Libre_Baskerville({ weight: "700", subsets: ["latin"] });
function page({}: Props) {
  const colors = {
    main: "#82593D",
    white: "#ffffff",
    icons: "684127",
    orange: "#C6782F",
    pinkgold: "#F0E6DF",
  };
  /**
   * FONTES
   *Le Jour Serif, TT Commons, Inter
   */
  return (
    <div
      className='bg-[#F0E6DF] relative min-h-screen '
      style={{
        backgroundImage: `url(${require("./bg-image.png")})`,
        backgroundSize: "cover",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center"
        
      }}>
      <div className={`overflow-hidden   flex-1 relative`}>
        <Image
          data-aos='zoom-in'
          data-aos-duration='1000'
          src={flowers1}
          alt='flower'
          width={500}
          height={500}
          className='w-full  z-10 absolute max-w-xs lg:max-w-md -top-10 lg:top-0 -left-24 lg:left-0'
          quality={100}
        />
        <Image
          src={flowers1}
          alt='flower'
          width={500}
          height={500}
          className='w-full hidden  z-10 absolute max-w-xs lg:max-w-md -bottom-10 -right-24 lg:left-0 rotate-180'
          quality={100}
        />

        <div className='flex flex-col overflow-hidden justify-center font-bold items-center min-h-screen py-20 [&>*]:z-20'>
          <div
            className={`${whisper.className} flex text-[14rem] leading-[8rem] lg:leading-[16rem] lg:text-[20rem] text-[#C6782F] [&>*]:z-20 `}>
            <h1
              data-aos='zoom-in-left'
              data-aos-delay='50'
              data-aos-duration='1000'
              data-aos-mirror='true'
              data-aos-once='false'>
              R
            </h1>
            <h1
              data-aos='zoom-in-right'
              data-aos-delay='50'
              data-aos-duration='1000'
              data-aos-mirror='true'
              data-aos-once='false'
              data-aos-anchor-placement='top-center'>
              S
            </h1>
          </div>
          <div
            data-aos='fade-up'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-mirror='true'
            data-aos-once='false'
            data-aos-anchor-placement='center'
            className=' text-center [&>*]:z-20 mt-8 px-4'>
            <div className='flex my-2 justify-center items-center gap-x-2'>
              <FaStar color='82593D' size={16} />
              <FaStar color='82593D' size={16} className='' />
              <FaStar color='82593D' size={16} className='' />
              <FaStar color='82593D' size={16} className='' />
              <FaStar color='82593D' size={16} />
            </div>
            <h2
              className={`${libreBasker.className} text-4xl text-[#82593D] uppercase`}>
              Regina e Sílvio
            </h2>
            <h2 className={`${libreBasker.className} text-lg text-[#82593D]`}>
              Convite de Casamento
            </h2>
          </div>
        </div>
        <Image
          data-aos='zoom-in'
          data-aos-duration='1000'
          data-aos-delay='50'
          data-aos-once='false'
          data-aos-mirror='true'
          data-aos-anchor-placement='center'
          src={flowers2}
          alt='flower'
          width={500}
          height={500}
          className='w-full    max-w-[250px]  lg:max-w-md  z-50 ml-auto   -mr-10  -mt-48  '
          quality={100}
        />
        <section
          data-aos='fade-down'
          data-aos-delay='50'
          data-aos-duration='1000'
          data-aos-once='false'
          data-aos-mirror='true'
          data-aos-anchor-placement='center'
          className='py-6 z-30  [&>*]:-z-30 px-10 text-[#82593D]'>
          <p className={`${TTCommons.style} text-center italic`}>
            “Deixará o homem seu pai e sua mãe, unir-se-á à sua esposa e serão
            uma só carne”
          </p>
          <p
            className={`${TTCommons.style} text-center italic font-bold uppercase`}>
            Marcos 10:7
          </p>
        </section>
        <div
          className={`flex flex-col items-center min-h-screen overflow-hidden flex-1 relative overflow-x-hidden`}>
          <Image
            data-aos='zoom-in'
            data-aos-duration='1000'
            data-aos-delay='50'
            data-aos-once='false'
            data-aos-mirror='true'
            data-aos-anchor-placement='center'
            src={flowers3}
            alt='flower'
            width={500}
            height={500}
            className=' right-0 w-full z-10 absolute max-w-xs lg:max-w-sm  lg:top-0 -left-24 lg:left-0'
            quality={100}
          />

          <div className='flex flex-col justify-center font-bold items-center min-h-screen pt-20 [&>*]:z-20'>
            <div
              className={`${whisper.className} flex text-[14rem] leading-[8rem] lg:leading-[16rem] lg:text-[20rem] text-[#C6782F] [&>*]:z-20 mt-16 `}>
              <h1
                data-aos='zoom-in-left'
                data-aos-delay='50'
                data-aos-duration='1000'
                data-aos-mirror='true'
                data-aos-once='false'
                data-aos-anchor-placement='top-center'>
                R
              </h1>
              <h1
                data-aos='zoom-in-right'
                data-aos-delay='50'
                data-aos-duration='1000'
                data-aos-mirror='true'
                data-aos-once='false'
                data-aos-anchor-placement='top-center'>
                S
              </h1>
            </div>
            <div
              data-aos='fade-down'
              data-aos-delay='50'
              data-aos-duration='1000'
              data-aos-mirror='true'
              data-aos-once='false'
              data-aos-anchor-placement='center'
              className={`space-y-4 max-w-lg text-center [&>*]:z-20 mt-8 px-4 ${libreBasker.className}`}>
              <div className='flex my-2 justify-center items-center gap-x-2'>
                <FaStar color='82593D' size={16} />
                <FaStar color='82593D' size={16} className='' />
                <FaStar color='82593D' size={16} className='' />
                <FaStar color='82593D' size={16} className='' />
                <FaStar color='82593D' size={16} />
              </div>
              <h2 className={` text-3xl text-[#82593D] uppercase`}>
                Regina & Sílvio
              </h2>
              <h2 className={` text-lg text-[#82593D]`}>
                Com a bênção de Deus e de nossos pais convidamos você para o
                nosso casamento a ser realizado no dia:
              </h2>
            </div>
            <div
              data-aos='zoom-in'
              className={`mt-8 text-center [&>*]:z-20 px-4 ${libreBasker.className} flex gap-x-4 items-center`}>
              <div
                data-aos='fade-left'
                data-aos-delay='50'
                data-aos-duration='1000'
                data-aos-mirror='true'
                data-aos-once='false'
                data-aos-anchor-placement='center'
                className={`flex flex-col items-center`}>
                <h2 className={` text-3xl text-[#C6782F] uppercase`}>10 de</h2>
                <h2 className={` text-3xl text-[#C6782F] uppercase`}>Junho</h2>
              </div>
              <span 
              data-aos='zoom-out'
              data-aos-delay='50'
              data-aos-duration='1000'
              data-aos-mirror='true'
              data-aos-once='false'
              data-aos-anchor-placement='center'
              className='w-1 h-[60px] max-h-full bg-[#82593D] flex-1'>
               
              </span>
              <div
                data-aos='fade-right'
                data-aos-delay='50'
                data-aos-duration='1000'
                data-aos-mirror='true'
                data-aos-once='false'
                data-aos-anchor-placement='center'
                className={`flex flex-col items-center`}>
                <h2 className={` text-3xl text-[#C6782F] uppercase`}>Às</h2>
                <h2 className={` text-3xl text-[#C6782F] uppercase`}>
                  19 horas
                </h2>
              </div>
            </div>

            <div className='flex items-center gap-6 text-[#82593D] mt-8'>
              <div
                data-aos='zoom-in-up'
                data-aos-delay='50'
                data-aos-duration='1000'
                data-aos-mirror='true'
                data-aos-once='false'
                data-aos-anchor-placement='center'
                className='flex justify-center flex-col items-center'>
                <GemIcon size={60} className='p-2 cursor-pointer' />
                <p>Noivos</p>
              </div>
              <div
                data-aos='zoom-in-up'
                data-aos-delay='50'
                data-aos-duration='1250'
                data-aos-mirror='true'
                data-aos-once='false'
                data-aos-anchor-placement='center'
                className='flex justify-center flex-col items-center'>
                <CircleCheck size={60} className='p-2  cursor-pointer' />
                <p>Confirmação</p>
              </div>
              <div
                data-aos='zoom-in-up'
                data-aos-delay='50'
                data-aos-duration='1500'
                data-aos-mirror='true'
                data-aos-once='false'
                data-aos-anchor-placement='center'
                className='flex justify-center flex-col items-center'>
                <Link href={"#details"}>
                <Info size={60} className='p-2 cursor-pointer' />

                <p>Detalhes</p>
                </Link>
              </div>
            </div>
          </div>
          <Image
          data-aos='zoom-in'
          data-aos-offset="0"
            src={flowers2}
            alt='flower'
            width={500}
            height={500}
            className='w-full z-10 mx-auto max-w-[280px] lg:max-w-sm -bottom-52 rotate-180 -mr-20 lg:-right-12 -mt-36 lg:-mt-52'
            quality={100}
          />
        </div>
      <div id="details" className={`flex flex-col items-center py-16 text-[#82593D] space-y-4 text-4xl ${libreBasker.className} `}>
        <h1 data-aos="zoom-in" className={`uppercase text-center`}>Informações</h1>
        <div className="flex flex-col space-y-2">
        <div className="flex flex-col items-center space-y-2 text-center px-6 py-12">
          <Image
          data-aos='zoom-in-up'
          data-aos-delay='50'
          data-aos-duration='800'
          data-aos-mirror='true'
          data-aos-once='false'
          data-aos-anchor-placement='center'
          alt="Tribunal" width={100} height={100} quality={100} className="w-full h-auto max-w-[50px]" src={require("./court.png")} />
          <h2
          data-aos='zoom-in-up'
          data-aos-delay='50'
          data-aos-duration='1000'
          data-aos-mirror='true'
          data-aos-once='false'
          data-aos-anchor-placement='center'
          className="text-2xl">Ato civíl</h2>
          <p 
          data-aos='zoom-in-up'
          data-aos-delay='50'
          data-aos-duration='1200'
          data-aos-mirror='true'
          data-aos-once='false'
          data-aos-anchor-placement='center'
          className="text-lg">
          7ª conservatória, rua direta da samba  junto do posto policial do calçadão.
          </p>
          <Link
          data-aos='zoom-in-up'
          data-aos-delay='50'
          data-aos-duration='1400'
          data-aos-mirror='true'
          data-aos-once='false'
          data-aos-anchor-placement='center'
          href={""} target="_blank" className="underline text-sm text-[#C6782F]">Abrir no mapa</Link>
        </div>
        <Image
         data-aos="zoom-in"
         data-aos-once="false"
         data-aos-duration='1000'

            src={flower}
            alt='flower'
            width={500}
            height={500}
            className='w-full z-10 mx-auto max-w-[150px] lg:max-w-xs -bottom-52 -rotate-[90deg] lg:-right-12 -mt-36 lg:-mt-52'
            quality={100}
          />
      <div className="flex flex-col items-center space-y-2 text-center px-6 py-12">
          <Image
          data-aos='zoom-in-up'
          data-aos-delay='50'
          data-aos-duration='800'
          data-aos-mirror='true'
          data-aos-once='false'
          data-aos-anchor-placement='center'
          alt="Tribunal" width={100} height={100} quality={100} className="w-full h-auto max-w-[50px]" src={require("./Church.png")} />
          <h2
          data-aos='zoom-in-up'
          data-aos-delay='50'
          data-aos-duration='1000'
          data-aos-mirror='true'
          data-aos-once='false'
          data-aos-anchor-placement='center'
          className="text-2xl">Cerimónia religiosa</h2>
          <p 
          data-aos='zoom-in-up'
          data-aos-delay='50'
          data-aos-duration='1200'
          data-aos-mirror='true'
          data-aos-once='false'
          data-aos-anchor-placement='center'
          className="text-lg">
          7ª conservatória, rua direta da samba  junto do posto policial do calçadão.
          </p>
          <Link
          data-aos='zoom-in-up'
          data-aos-delay='50'
          data-aos-duration='1400'
          data-aos-mirror='true'
          data-aos-once='false'
          data-aos-anchor-placement='center'
          href={""} target="_blank" className="underline text-sm text-[#C6782F]">Abrir no mapa</Link>
        </div>
        <Image
         data-aos="zoom-in"
         data-aos-duration='1000'

         src={flower}
         alt='flower'
         width={500}
         height={500}
         className='w-full z-10 mx-auto max-w-[150px] lg:max-w-xs -bottom-52 -rotate-[90deg] lg:-right-12 -mt-36 lg:-mt-52'
         quality={100}
       />
     <div className="flex flex-col items-center space-y-2 text-center px-6 py-12">
          <Image
          data-aos='zoom-in-up'
          data-aos-delay='50'
          data-aos-duration='800'
          data-aos-mirror='true'
          data-aos-once='false'
          data-aos-anchor-placement='center'
          alt="Tribunal" width={100} height={100} quality={100} className="w-full h-auto max-w-[50px]" src={require("./court.png")} />
          <h2
          data-aos='zoom-in-up'
          data-aos-delay='50'
          data-aos-duration='1000'
          data-aos-mirror='true'
          data-aos-once='false'
          data-aos-anchor-placement='center'
          className="text-2xl">Copo d'Água</h2>
          <p 
          data-aos='zoom-in-up'
          data-aos-delay='50'
          data-aos-duration='1200'
          data-aos-mirror='true'
          data-aos-once='false'
          data-aos-anchor-placement='center'
          className="text-lg">
          7ª conservatória, rua direta da samba  junto do posto policial do calçadão.
          </p>
          <Link
          data-aos='zoom-in-up'
          data-aos-delay='50'
          data-aos-duration='1400'
          data-aos-mirror='true'
          data-aos-once='false'
          data-aos-anchor-placement='center'
          href={""} target="_blank" className="underline text-sm text-[#C6782F]">Abrir no mapa</Link>
        </div>
        </div>
      </div>
      <Image
          data-aos='zoom-in'
          data-aos-duration='1000'
          data-aos-delay='50'
          data-aos-once='false'
          data-aos-mirror='true'
          data-aos-anchor-placement='center'
          src={flowers2}
          alt='flower'
          width={500}
          height={500}
          className='w-full    max-w-[250px]  lg:max-w-md  z-50 ml-auto   -mr-10  -mt-48  '
          quality={100}
        />
      </div>
    </div>
  );
}

export default page;
