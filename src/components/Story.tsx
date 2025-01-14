import AnimatedTitle from "./AnimatedTitle";
import RoundedCorners from "./RoundedCorners";
import {useRef} from 'react';
import gsap from 'gsap';
import Button from "./Button";

const Story = () => {
    const frameRef = useRef<HTMLImageElement | null>(null);
    function handleMouseLeave(){
        if(!frameRef.current) return;
        gsap.to(frameRef.current, {
            duration: 0.3,
            rotateX: 0,
            rotateY: 0,
            ease: 'power1.inOut'
        })
    }
    function handleMouseMove(e: React.MouseEvent<HTMLImageElement>) {
        if (!frameRef.current) return;
        
        const {top, left, width, height} = frameRef.current.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        const centerX = width/2;
        const centerY = height/2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(frameRef.current, {
            duration: 0.3,
            rotateX,
            rotateY,
            transformPerspective: 500,
            ease: 'power1.inOut'
        })
    }
  return (
    <section className='min-h-dvh w-screen bg-black text-blue-50'>
      <div className="flex flex-col size-full items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">The multiversal ip world</p>
        <div className="relative size-full">
            <AnimatedTitle
            title="The st<b>o</b>ry of<br /> a hidden real<b>m</b>"
            sectionId='#story'
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
            />

            <div  className="story-img-container">
                <div className="story-img-mask">
                    <div className="story-img-content" >
                        <img onMouseLeave={handleMouseLeave} onMouseUp={handleMouseLeave} onMouseMove={handleMouseMove} onMouseEnter={handleMouseLeave} ref={frameRef} src="/img/entrance.webp" alt="Entrance" className="object-cover" />
                    </div>
                </div>
                <RoundedCorners />
            </div>
        </div>
        <div className="-mt-80 z-10 flex w-full h-fit justify-center md:-mt-48 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-xs md:max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>

            <Button
              id="realm-btn"
              title="discover prologue"
              containerClass="mt-5 text-xs"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story;