import Image from 'next/image'
import React, { ReactNode } from 'react'
import flowers1 from './arranjo.png'
import flowers2 from './flowers2.png'
import flowers3 from './arranjo3.png'
import folhas from './Folhas.png'
import bgOverlay from './bg-image.png'
type Props = {
    children: ReactNode
}

const Section = ({children}: Props) => {
  return (
    <section className={`bg-[#F0E6DF]  overflow-x-hidden h-full  min-h-screen flex-1 relative`}>
        <Image src={bgOverlay} alt='overlay' width={0} height={0} className='z-0  flex-1 w-full absolute top-0 bottom-0 left-0 right-0' quality={100} />
        <Image src={flowers1} alt='flower' width={500} height={500} className='w-full z-10 absolute max-w-xs lg:max-w-sm -top-10 lg:top-0 -left-24 lg:left-0' quality={100} />
        <Image src={flowers3} alt='flower' width={500} height={500} className='w-full z-10 absolute max-w-xs lg:max-w-sm -bottom-52 rotate-180 -right-20 lg:-right-12 ' quality={100} />

        {children}



      </section>
  )
}

export default Section