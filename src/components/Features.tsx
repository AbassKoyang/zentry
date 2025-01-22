import BentoCard from "./BentoCard";
import {ReactNode, MouseEvent, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const BentoTilt = ({children, className = '', id} : {children: ReactNode; className: string; id: string;}) => {
    const [transformStyle, settransformStyle] = useState<string>('');
    const itemRef = useRef<HTMLDivElement | null>(null);
    
    // GSAP Animations
    useGSAP(() => {
        gsap.from(`#${id}`, {
            opacity: 0,
            y: 200,
            scrollTrigger: {
                trigger: `#${id}`,
                start: '70 bottom',
                    end: 'center bottom',
                    toggleActions: 'play none none reverse'
            },
            ease: 'power1.inOut'
        })
    })
    //Craetes a tilt effect on the bento cards
    const handleMouseMove = (e: MouseEvent) => {
        if(!itemRef.current) return;

        const {top, left, width, height} = itemRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;

        const tiltX = (relativeX - 0.5) * 5;
        const tiltY = (relativeY - 0.5) * -5;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

        settransformStyle(newTransform);
    }
    const handleMouseLeave = () => {
        settransformStyle('');
    }
    return(
        <div id={id} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove} style={{transform: transformStyle}} ref={itemRef} className={`${className} opacity-1`}>{children}</div>
    )
}
const Features = () => {
    
    return(
        <section id='nexus' className="bg-black pb-52 flex justify-center">
            <div className='w-full max-w-[1400px]'>
            <div className="container mx-auto px-3 md:px-10">
                <div className="px-5 py-32">
                    <p className="font-circular-web text-[15.5px] text-blue-50">Explore the Zentry Universe</p>
                    <p className="max-w-md font-circular-web text-[15.5px] text-blue-50 opacity-50">Immerse yourself in an IP-rich product universe where AI-driven gamification and hyper-personalization lead humans & AI into a global play economy.</p>
                </div>
                <BentoTilt id='bento-card-1' className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[75vh]'>
                    <BentoCard
                    src='/videos/feature-1.mp4'
                    description="The game of games transforming your in-game actions across Web2 & Web3 titles into a rewarding adventure."
                    isComingSoon
                    title={<>radia<b>n</b>t</>}
                    />
                </BentoTilt>
                <div className="grid h-[135vh] md:h-[170vh] max-h-[1000px] grid-cols-2 grid-rows-3 gap-7">
                    <BentoTilt id='bento-card-2' className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                    <BentoCard
                    src='/videos/feature-2.mp4'
                    description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
                    isComingSoon
                    title={<>zig<b>m</b>a</>}
                    />
                    </BentoTilt>
                    <BentoTilt id='bento-card-3'  className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
                    <BentoCard
                    src='/videos/feature-3.mp4'
                    description="A gaming social hub, adding a new dimension of play to social interactions for Web3 communities."
                    isComingSoon
                    title={<>n<b>e</b>xus</>}
                    />
                    </BentoTilt>
                    <BentoTilt id='bento-card-4' className="bento-tilt_1 md:col-span-1 me-14 md:me-0">
                    <BentoCard
                    src='/videos/feature-4.mp4'
                    description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
                    isComingSoon
                    title={<>A<b>z</b>ul</>}
                    />
                    </BentoTilt>
                    <BentoTilt id='bento-card-5' className="bento-tilt_2 opacity-1">
                        <div className="flex flex-col size-full justify-between bg-violet-300 p-5">
                            <h1 className="bento-title special-font max-w-64 xl:max-w-xl text-black xl:text-[6rem]">M<b>o</b>re Co<b>m</b>ing S<b>oo</b>n!</h1>
                            <div className='mt-5 overflow-hidden w-12 h-12 self-end object-center'>
                            <img src='/img/zentry-symbol-black.png' className="scale-[1.5] object-cover" />
                            </div>
                        </div>
                    </BentoTilt>
                    <BentoTilt id='bento-card-6' className="bento-tilt_2 opacity-1">
                        <video 
                        src="/videos/feature-5.mp4"
                        autoPlay
                        muted
                        loop
                        className="size-full object-cover object-center"
                         />
                    </BentoTilt>

                </div>
            </div>
            </div>
        </section>
    )
};
export default Features;