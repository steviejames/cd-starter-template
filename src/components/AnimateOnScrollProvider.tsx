"use client"
import React, { ReactNode, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
type Props = {
    children:ReactNode
}

function AnimateOnScrollProvider({children}: Props) {
    useEffect(()=>{
        AOS.init()
    },[])
  return (
    <div>{children}</div>
  )
}

export default AnimateOnScrollProvider