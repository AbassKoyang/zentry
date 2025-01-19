import {useEffect} from 'react'
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
import Button from "./Button";

const AnimatedBox = ({src}) => {
    return(
    <div className='size-7 md:size-10 rounded-xs md:rounded-md bg-transparent transition-all duration-500 ease-in-out relative animate-bounce hover:animate-none'>
        <div className='z-[1000] animated-box group size-full bg-black overflow-hidden absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-md bg-black hover:size-[100px] lg:hover:size-[300px] transition-all duration-500 ease-in-out origin-center'>
            <img src={src} className='size-full object-center object-fit scale-150 opacity-0 group-hover:scale-100 group-hover:opacity-100' />
        </div>
    </div>)
}
const Discover = () => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            const titleAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: '.discover',
                    start: '200 bottom',
                    end: 'center bottom',
                    toggleActions: 'play none none reverse'
                }
            })

            // titleAnimation.to('.discover-title', {
            //     opacity: 1,
            //     transform: 'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
            //     ease: 'power2.inOut',
            //     duration: 1.5,
            // })
            titleAnimation.from('.animated-lines', {
                y: 100,
                opacity: 0,
                stagger: {
                    amount: 1,
                },
                duration: 1,
            })
            titleAnimation.from('#discover-subtext', {
                y: 50,
                opacity: 0,
                duration: 0.8,
            })
            titleAnimation.from('#discover-btn', {
                opacity: 0,
                duration: 0.8,
            })
        });

        return () => ctx.revert();
    },[])

  return (
    <section className='px-12 py-24 min-h-screen bg-blue-50 flex flex-center flex-col'>
        <p className="font-general text-sm uppercase md:text-[10px]">
          who we are
        </p>
        <div className='discover mt-10 text-black flex flex-center flex-col special-font font-zentry font-black text-6xl uppercase leading-[.8] sm:px-32 md:text-[6rem]'>
            <div className='animated-lines opacity-1'>
                <h1 className='z-10'>We're b<b>u</b>ilding</h1>
            </div>
            <div className='animated-lines opacity-1 flex items-center gap-4 md:gap-8 mt-2'>
                <h1 className='z-10'>A new</h1>
                <AnimatedBox src='/img/about.webp' />
                <h1 className='z-10'>realit<b>y</b></h1>
            </div>
            <div className='animated-lines opacity-1 mt-2'>
                <h1 className='z-10'>That Rew<b>a</b>rds</h1>
            </div>
            <div className='animated-lines opacity-1 flex items-center gap-4 md:gap-8 mt-2'>
                <h1 className='z-10'>Play<b>e</b>rs</h1>
                <AnimatedBox src='/img/about.webp' />
                <h1 className='z-10'>And</h1>
            </div>
            <div className='animated-lines opacity-1 mt-2'>
                <h1 className='z-10'>E<b>m</b>powers</h1>
            </div>
            <div className='animated-lines opacity-1 mt-2'>
                <h1 className='z-10'>Hu<b>m</b>ans & AI</h1>
            </div>
            <div className='animated-lines opacity-1 flex items-center gap-4 md:gap-8 mt-2'>
                <h1 className='z-10'>To</h1>
                <AnimatedBox src='/img/about.webp' />
                <h1 className='z-10'>Thri<b>v</b>e</h1>
            </div>
        </div>
        <p id='discover-subtext' className='mt-6 font-circular text-xs text-black max-w-sm text-center opacity-1'>Zentry envisions a future where players, emerging tech, and a new economy unite at the convergence of gaming and AI.</p>
        <Button
              id="discover-btn"
              title="discover who we are"
              containerClass="mt-6 px-4 py-2 lg:py-2.5 lg:px-6 text-[10px] font-medium !bg-black !text-white opacity-1"
            />
    </section>
  )
}

export default Discover