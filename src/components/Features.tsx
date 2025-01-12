import { TiLocationArrow } from "react-icons/ti";
import BentoCard from "./BentoCard";
import { MouseEvent, useRef, useState } from "react";

const BentoTilt = ({children, className = ''}) => {
    const [transformStyle, settransformStyle] = useState<string>('');
    const itemRef = useRef<HTMLDivElement | null>(null);


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

    }
    return(
        <div onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove} style={{transform: transformStyle}} ref={itemRef} className={className}>{children}</div>
    )
}
const Features = () => {
    return(
        <section className="bg-black pb-52">
            <div className="container mx-auto px-3 md:px-10">
                <div className="px-5 py-32">
                    <p className="font-circular-web text-[15.5px] text-blue-50">Explore the Zentry Universe</p>
                    <p className="max-w-md font-circular-web text-[15.5px] text-blue-50 opacity-50">Immerse yourself in an IP-rich product universe where AI-driven gamification and hyper-personalization lead humans & AI into a global play economy.</p>
                </div>
                <BentoTilt className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
                    <BentoCard
                    src='/videos/feature-1.mp4'
                    description="The game of games transforming your in-game actions across Web2 & Web3 titles into a rewarding adventure."
                    isComingSoon
                    title={<>radia<b>n</b>t</>}
                    />
                </BentoTilt>
                <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
                    <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                    <BentoCard
                    src='/videos/feature-2.mp4'
                    description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
                    isComingSoon
                    title={<>zig<b>m</b>a</>}
                    />
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
                    <BentoCard
                    src='/videos/feature-3.mp4'
                    description="A gaming social hub, adding a new dimension of play to social interactions for Web3 communities."
                    isComingSoon
                    title={<>n<b>e</b>xus</>}
                    />
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_1 md:col-span-1 me-14 md:me-0">
                    <BentoCard
                    src='/videos/feature-4.mp4'
                    description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
                    isComingSoon
                    title={<>A<b>z</b>ul</>}
                    />
                    </BentoTilt>
                    <div className="bento-tilt_2">
                        <div className="flex flex-col size-full justify-between bg-violet-300 p-5">
                            <h1 className="bento-title special-font max-w-64 text-black">M<b>o</b>re Co<b>m</b>ing S<b>oo</b>n!</h1>
                            <TiLocationArrow className="m-5 scale-[5] self-end" />
                        </div>
                    </div>
                    <div className="bento-tilt_2">
                        <video 
                        src="/videos/feature-5.mp4"
                        autoPlay
                        muted
                        loop
                        className="size-full object-cover object-center"
                         />
                    </div>

                </div>
            </div>
        </section>
    )
};
export default Features;