import React from 'react'
import { Inter, Libre_Baskerville, Tiro_Tamil, Whisper } from 'next/font/google'
import flowers1 from './arranjo.png'
import flowers2 from './flowers2.png'
import flowers3 from './arranjo3.png'
import folhas from './Folhas.png'
import bgOverlay from './bg-image.png'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import { CircleChevronDownIcon } from 'lucide-react'
type Props = {}

const TTCommons = Tiro_Tamil({
  weight: "400",
  fallback: ["Arial", "non-serif"],
  subsets: ["latin", "latin-ext"]
})

const whisper = Whisper({ weight: "400", subsets: ["latin"] })
const inter = Inter({
  subsets: ["latin", "latin-ext"]
})

const libreBasker = Libre_Baskerville({ weight: "700", subsets: ["latin"] })
function page({ }: Props) {


  const colors = {
    main: "#82593D",
    white: "#ffffff",
    icons: "684127",
    orange: "#C6782F",
    pinkgold: "#F0E6DF"
  }
  /**
   * FONTES
   *Le Jour Serif, TT Commons, Inter
   */
  return (
    <div>
      <div className={`bg-[#F0E6DF] overflow-hidden  min-h-screen flex-1 relative`}>
        <Image src={bgOverlay} alt='overlay' width={0} height={0} className='z-0  flex-1 w-full absolute top-0 bottom-0 left-0 right-0' quality={100} />
        <Image src={flowers1} alt='flower' width={500} height={500} className='w-full z-10 absolute max-w-xs lg:max-w-sm -top-10 lg:top-0 -left-24 lg:left-0' quality={100} />
        <Image src={flowers3} alt='flower' width={500} height={500} className='w-full z-10 absolute max-w-xs lg:max-w-sm -bottom-10 lg:bottom-0 rotate-180 -right-20 lg:-right-10 ' quality={100} />

        <div className='flex flex-col justify-center font-bold items-center min-h-screen [&>*]:z-20'>
          <div className={`${whisper.className} flex text-[14rem] leading-[8rem] lg:leading-[16rem] lg:text-[20rem] text-[#C6782F] [&>*]:z-20 `}>
            <h1>R</h1>
            <h1>S</h1>
          </div>
          <div className=' text-center [&>*]:z-20 lg:mt-6'>
          <div className='flex my-2 justify-center items-center gap-x-2'>
          <FaStar color='82593D' size={16} />
          <FaStar color='82593D' size={16} className='' />
          <FaStar color='82593D' size={16} className='' />
          <FaStar color='82593D' size={16} className='' />
          <FaStar color='82593D' size={16} />

          </div>
            <h2 className={`${libreBasker.className} text-3xl text-[#82593D]`}>Regina & Sílvio</h2>
            <h2 className={`${libreBasker.className} text-lg text-[#82593D]`}>Convite de Casamento</h2>
          </div>
        </div>



      </div>
    </div>
  )
}

export default page