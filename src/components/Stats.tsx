import AnimatedText from "./AnimatedText";
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/all';
const Stats = () => {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: `#glance`,
                start: '70 bottom',
                end: 'center bottom',
                toggleActions: 'play none none reverse'
            }
        })
        tl.from('#glance', {
            x: -400,
            opacity: 0,
            ease: 'power1.inOut',
            duration: 1,
        })
    })
    useGSAP(() => {
        gsap.from(`.stats-card-1`, {
            opacity: 0,
            y: 200,
            scrollTrigger: {
                trigger: `.stats-card-1`,
                start: '70 bottom',
                    end: 'center bottom',
                    toggleActions: 'play none none reverse'
            },
            ease: 'power1.inOut'
        })
        gsap.from(`.stats-card-2`, {
            opacity: 0,
            y: 200,
            scrollTrigger: {
                trigger: `.stats-card-2`,
                start: '70 bottom',
                    end: 'center bottom',
                    toggleActions: 'play none none reverse'
            },
            ease: 'power1.inOut'
        })
        gsap.from(`.stats-card-3`, {
            opacity: 0,
            y: 200,
            scrollTrigger: {
                trigger: `.stats-card-3`,
                start: '70 bottom',
                    end: 'center bottom',
                    toggleActions: 'play none none reverse'
            },
            ease: 'power1.inOut'
        })
        gsap.from(`.stats-card-4`, {
            opacity: 0,
            y: 200,
            scrollTrigger: {
                trigger: `.stats-card-4`,
                start: '70 bottom',
                    end: 'center bottom',
                    toggleActions: 'play none none reverse'
            },
            ease: 'power1.inOut'
        })
        gsap.from(`.stats-card-5`, {
            opacity: 0,
            y: 200,
            scrollTrigger: {
                trigger: `.stats-card-5`,
                start: '70 bottom',
                    end: 'center bottom',
                    toggleActions: 'play none none reverse'
            },
            ease: 'power1.inOut'
        })
        gsap.from(`.stats-card-6`, {
            opacity: 0,
            y: 200,
            scrollTrigger: {
                trigger: `.stats-card-6`,
                start: '70 bottom',
                    end: 'center bottom',
                    toggleActions: 'play none none reverse'
            },
            ease: 'power1.inOut'
        })
    })
  return (
    <section className='px-6 md:px-12 py-24 min-h-screen bg-black'>
        <div className='flex flex-col text-center md:text-left flex-center md:block'>
            <AnimatedText text='our universe in a nutshell' containerClass='!text-blue-50' />
            <h1 id='glance' className='opacity-1 mt-5 special-font font-zentry text-6xl uppercase leading-[.8] text-blue-50 md:text-[6rem]'>
            Ze<b>n</b>try at a <br />gla<b>n</b>ce
            </h1>
        </div>

        <div className='w-full h-[200vh] md:h-[230vh] flex items-center justify-center mt-20'>
            <div className='size-full max-w-4xl grid grid-rows-8 md:grid-rows-4 grid-cols-1 md:grid-cols-2 gap-7'>

                <div className='stats-card-1 opacity-1 col-span-1 row-span-1 bg-black border-hsla rounded-lg ms-14 md:ms-0 md:mt-20 p-4 flex justify-end relative'>
                    <div className='absolute top-3 left-3'>
                        <p className='text-blue-50 font-circular-web text-xs mb-4'>Products</p>
                        <h1 className='special-font font-zentry text-5xl md:text-[5.5rem] leading-[0.8] text-blue-50'>4<b>+</b></h1>
                    </div>
                    <video className='h-full' autoPlay muted src='/videos/product.webm' />
                </div>

                <div className='stats-card-2 opacity-1 col-span-1 row-span-2 bg-[#5542FF] rounded-lg p-4 relative me-14 md:me-0'>
                    <div className=''>
                        <p className='text-black font-circular-web  text-xs mb-4'>Residents</p>
                        <h1 className='special-font font-zentry text-black text-[6.5rem] md:text-[10.5rem] leading-[0.8] text-black'>500<b>K</b>+</h1>
                    </div>
                    <img className='absolute bottom-0 left-[50%] translate-x-[-50%] size-full' src='/img/residents.webp' />
                </div>

                <div className='stats-card-3 opacity-1 col-span-1 row-span-1 bg-yellow-300 rounded-lg ms-24 md:ms-32 p-4 flex flex-col items-center justify-center relative'>
                    <h1 className='special-font font-zentry text-black text-[6rem] md:text-[10.5rem] leading-[0.8] text-black'><span className=''>3</span><b>0</b>+</h1>
                    <p className='text-black text-xs absolute bottom-3 right-3'>Partners</p>
                </div>

                <div className='stats-card-4 opacity-1 col-span-1 row-span-2 bg-[#5542FF] rounded-lg me-14 md:me-0 flex items-center justify-center relative'>
                    <div className='absolute top-3 left-3'>
                        <p className='text-black font-circular-web  text-xs mb-4'>Treasury</p>
                        <h1 className='special-font font-zentry text-black text-[3.5rem] md:text-[5.5rem] leading-[0.8] text-black'>140<b>M</b><b>+</b></h1>
                    </div>
                    <video className='' autoPlay muted src='/videos/treasury.webm' />
                    <div className='absolute bottom-0 left-0 w-full flex justify-between items-center p-6 text-[6px] md:text-[11px] text-white font-general uppercase font-medium'>
                        <div className='flex items-start gap-1.5'>
                            <div className='size-1.5 md:size-3 rounded-full bg-black' />
                            <div className=' m-0 p-0'>
                                <p className='leading-[1.2] m-0'>Liquid Token</p>
                                <p className='leading-[1] m-0'>70%</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-1.5'>
                            <div className='size-1.5 md:size-3 rounded-full bg-yellow-300' />
                            <div className=' m-0 p-0'>
                                <p className='leading-[1.2] m-0'>Investments</p>
                                <p className='leading-[1] m-0'>20%</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-1.5'>
                            <div className='size-1.5 md:size-3 rounded-full bg-white' />
                            <div className=' m-0 p-0'>
                                <p className='leading-[1.2] m-0'>NFT Assets</p>
                                <p className='leading-[1] m-0'>70%</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='stats-card-5 opacity-1 col-span-1 row-span-1 bg-black border-hsla rounded-lg ms-32 md:me-32 p-4 relative'>
                    <h1 className='uppercase special-font font-zentry text-black text-2xl md:text-[3.1rem] leading-[1] text-blue-50'>
                        W<b>o</b>rld-class b<b>a</b>ckers
                        <div className='w-full flex items-end flex-col md:gap-2 absolute bottom-3 right-3'>
                            <p className='font-general text-[7px] md:text-[10px] text-blue-50'>Coinbase Ventures</p>
                            <p className='font-general text-[7px] md:text-[10px] text-blue-50'>binance Labs</p>
                            <p className='font-general text-[7px] md:text-[10px] text-blue-50'>defiance capital</p>
                            <p className='font-general text-[7px] md:text-[10px] text-blue-50'>hashed</p>
                            <p className='font-general text-[7px] md:text-[10px] text-blue-50'>pantera capital</p>
                            <p className='font-general text-[7px] md:text-[10px] text-blue-50'>animoca brands</p>
                            <p className='font-general text-[7px] md:text-[10px] text-blue-50'>play Ventures</p>
                            <p className='font-general text-[7px] md:text-[10px] text-blue-50'>skyvision capital</p>
                            <p className='font-general text-[7px] md:text-[10px] text-blue-50'>vessel capital</p>
                            <p className='font-general text-[7px] md:text-[10px] text-blue-50'>arche fund</p>
                        </div>
                    </h1>
                </div>

                <div className='stats-card-6 opacity-1 col-span-1 row-span-1 bg-[#DFDFF2] rounded-lg md:mb-20 p-4'>
                    <p className='font-circular-web text-xs mb-2'>Revenue generated<br/>2024</p>
                    <h1 className='special-font font-zentry text-black text-[7rem] md:text-[14rem] leading-[0.8]'>40<b>M</b></h1>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Stats