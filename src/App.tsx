import React from 'react'
import Hero from './components/Hero'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const App = () => {
  useGSAP(( )=> {
    gsap.from('.boxes', {
      width: 0,
      height:  0,
      opacity: 0,
      duration: 1,
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 1.5,
        grid: [4,4], 
        ease: 'none',
        from: 'start'
      }
    })
  })
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Hero />
      <section id='container' className='grid grid-cols-4 grid-rows-4 gap-3 min-h-screen bg-blue-500 z-0'>
        <div className="boxes col-span-1 row-span-1 bg-green-500 opacity-100"></div>
        <div className="boxes col-span-1 row-span-1 bg-green-500 opacity-100"></div>
        <div className="boxes col-span-1 row-span-1 bg-green-500 opacity-100"></div>
        <div className="boxes col-span-1 row-span-1 bg-green-500 opacity-100"></div>
        <div className="boxes col-span-1 row-span-1 bg-green-500 opacity-100"></div>
        <div className="boxes col-span-1 row-span-1 bg-green-500 opacity-100"></div>
        <div className="boxes col-span-1 row-span-1 bg-green-500 opacity-100"></div>
        <div className="boxes col-span-1 row-span-1 bg-green-500 opacity-100"></div>
        <div className="boxes col-span-1 row-span-1 bg-green-500 opacity-100"></div>
        <div className="boxes col-span-1 row-span-1 bg-green-500 opacity-100"></div>
        <div className="boxes col-span-1 row-span-1 bg-green-500 opacity-100"></div>
        <div className="boxes col-span-1 row-span-1 bg-green-500 opacity-100"></div>
        <div className="boxes col-span-1 row-span-1 bg-green-500 opacity-100"></div>
        <div className="boxes col-span-1 row-span-1 bg-green-500 opacity-100"></div>
        <div className="boxes col-span-1 row-span-1 bg-green-500 opacity-100"></div>
        <div className="boxes col-span-1 row-span-1 bg-green-500 opacity-100"></div>
      </section>
    </main>
  )
}

export default App