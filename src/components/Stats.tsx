import React from 'react'

const Stats = () => {
  return (
    <section className='px-12 py-24 min-h-screen bg-black'>
        <div className='w-full h-[230vh] flex items-center justify-center'>
            <div className='size-full max-w-4xl grid grid grid-rows-4 grid-cols-2 gap-7'>
                <div className='col-span-1 row-span-1 bg-black border-hsla rounded-lg mt-20 p-4 flex justify-end relative'>
                    <div className='absolute top-3 left-3'>
                        <p className='text-blue-50 font-circular-medium text-xs mb-4'>Products</p>
                        <h1 className='special-font font-zentry text-black text-5xl md:text-[5.5rem] leading-[0.8] text-blue-50'>4<b>+</b></h1>
                    </div>
                    <video className='h-full' autoPlay muted src='/videos/feature-2.mp4' />
                </div>
                <div className='col-span-1 row-span-2 bg-red-100 rounded-lg p-4 relative'>
                    <div className=''>
                        <p className='text-black font-circular-medium text-xs mb-4'>Products</p>
                        <h1 className='special-font font-zentry text-black text-5xl md:text-[10.5rem] leading-[0.8] text-black'>500<b>K</b>+</h1>
                    </div>
                    <img className='absolute bottom-0 left-[50%] translate-x-[-50%]' src='/img/swordman.webp' />
                </div>
                <div className='col-span-1 row-span-1 bg-blue-300 rounded-lg ms-32'></div>
                <div className='col-span-1 row-span-2 bg-blue-200 rounded-lg'></div>
                <div className='col-span-1 row-span-1 bg-yellow-200 rounded-lg me-32'></div>
                <div className='col-span-1 row-span-1 bg-yellow-400 rounded-lg mb-20'></div>
            </div>
        </div>
    </section>
  )
}

export default Stats