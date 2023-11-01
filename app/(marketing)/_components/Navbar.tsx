"use client"
import { useScrollTop } from '@/hooks/use-scroll-top'
import React from 'react'

function Navbar() {
   const scrolled = useScrollTop();
   console.log("scrolled", scrolled);
   
  return (
    <div>Navbar</div>
  )
}

export default Navbar