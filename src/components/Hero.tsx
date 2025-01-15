import {useRef, useState, useEffect} from 'react'
import Button from './Button';
import {TiLocationArrow} from 'react-icons/ti';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [hasClicked, setHasClicked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadedVideos, setLoadedVideos] = useState<number>(0);

  const nextVideoRef = useRef<HTMLVideoElement | null>(null);

  const totalVideos = 4;

  const getVideoSrc = (index:number) : string => `videos/hero-${index}.mp4`
  const upcomingVideo = (currentIndex % totalVideos) + 1;

  const handleMiniVideoClick = () : void => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideo);
  }

  const handleVideoLoad = () : void => {
    setLoadedVideos((prev) => prev + 1);
  }
  // type checkedItemsType = {
  //   num: number;
  //   frequency: number;
  // }
// const findTopKFrequency = (arr : number[]) => {
//   const checkedItems : checkedItemsType[]  = []
//   arr.map((num) => {
//     const index = checkedItems.findIndex((item) => item.num === num);
//     if(index != -1){
//       checkedItems[index] = {...checkedItems[index], frequency: checkedItems[index].frequency + 1}
//     } else {
//       checkedItems.push({num: num, frequency: 1})
//     }
//   })
//   checkedItems.sort((a,b) => b.frequency - a.frequency);
//   return [checkedItems[0].num, checkedItems[1].num];
// }
// console.log(findTopKFrequency([1,1,1,3,4,2,3,2,5,4,4,4]));

useEffect(()=> {
  if(loadedVideos === totalVideos - 1){
    setIsLoading(false)
  }
}, [loadedVideos])
useGSAP(()=>{
  if(hasClicked){
  gsap.set('#next-video', {visibility: 'visible'});

  gsap.to('#next-video', {
    transformOrigin: 'center center',
    scale: 1,
    width: '100%',
    height: '100%',
    duration: 1,
    ease: 'power1.inOut',
    onStart: () => {
      nextVideoRef.current?.play().catch(() => {});
    },
  });

  gsap.from('#current-video', {
    transformOrigin: 'center center',
    scale: 0,
    duration: 1.5,
    ease: 'power1.inOut'
  })
  }
}, {dependencies: [currentIndex], revertOnUpdate: true})

useGSAP(() => {
  gsap.set('#video-frame', {
    clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
    borderRadius: '0 0 40% 10%',
  })

  gsap.from('#video-frame', {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    borderRadius: '0 0 0 0',
    ease: 'power1.inOut',
    scrollTrigger : {
      trigger: '#video-frame',
      start: 'center center',
      end: 'bottom center',
      scrub: true,
    }
  })
})

useGSAP(() => {
  gsap.set(`#hero-animated-text-${currentIndex}`, {
    x: -300,
    y: -200, 
    rotation: 220,
    opacity: 0
  });

  // Animate to final state
  gsap.to(`#hero-animated-text-${currentIndex}`, {
    x: 0,
    y: 0,
    rotation: 0,
    opacity: 1,
    duration: 1.5,
    ease: "elastic.out(1, 0.3)"
  });
}, {dependencies: [currentIndex]})

  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>

      {isLoading && (
        <div className='flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50'>
          <div className='three-body'>
            <div className='three-body__dot'></div>
            <div className='three-body__dot'></div>
            <div className='three-body__dot'></div>
          </div>
        </div>
      )}
        <div id='video-frame' className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">

            <div>

                <div className="mask-clip-path absolute top-[60%] md:top-1/2 left-1/2 translate-x-[-50%] translate-y-[-60%] md:translate-y-[-50%] z-50 size-32 lg:size-64 cursor-pointer overflow-hidden rounded-lg">
                  <div onClick={handleMiniVideoClick} className='origin-center md:scale-50 scale-100 opacity-100 md:opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100 animation-pulse'>
                    <video 
                    src={getVideoSrc(upcomingVideo)} 
                    ref={nextVideoRef} 
                    loop
                    muted
                    id='current-video'
                    className='size-32 lg:size-64 origin-center scale-150 object-cover object-center'
                    onLoadedData={handleVideoLoad}
                    />
                  </div>
                </div>

                <video 
                ref={nextVideoRef}
                src={getVideoSrc(currentIndex)}
                muted
                loop
                id='next-video'
                className='absolute-center invisible absolute z-20 size-64 object-cover object-center'
                onLoadedData={handleVideoLoad}
                />

                <video 
                src={getVideoSrc(currentIndex === totalVideos - 1? 1 : currentIndex)}
                // autoPlay
                loop
                muted
                className='absolute left-0 right-0 size-full object-cover object-center'
                onLoadedData={handleVideoLoad}
                />

            </div>

            <h1 className='hidden lg:block special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75'>
              G<b>a</b>ming <br />
            </h1>

            <div className="absolute top-0 left-0 size-full z-40">
              <div className="mt-24 sm:mt-24 px-5 sm:px-10">
                <h1 className="special-font hero-heading text-blue-100">
                  Redefi<b>n</b>e
                </h1>
                {currentIndex === 1 && (
                  <h1 id='hero-animated-text-1' className="pl-10 special-font hero-heading text-blue-100 lg:hidden">
                  G<b>a</b>ming
                </h1>
                )}
                {currentIndex === 2 && (
                  <h1 id='hero-animated-text-2' className="pl-10 special-font hero-heading text-blue-100 lg:hidden">
                  Ide<b>n</b>tity
                </h1>
                )}
                {currentIndex === 3 && (
                  <h1 id='hero-animated-text-3' className="pl-10 special-font hero-heading text-blue-100 lg:hidden">
                  Re<b>a</b>lity
                </h1>
                )}
                {currentIndex === 4 && (
                  <h1 id='hero-animated-text-4' className="special-font hero-heading text-blue-100 lg:hidden">
                  Ag<b>e</b>ntic AI
                </h1>
                )}
                <p className="hidden lg:block mb-5 max-w-64 font-robert-regular text-blue-100">Enter the Meta Game Layer <br/> Unleash the Play Economy</p>
                <Button id='watch-trailer' title='Watch Trailer' leftIcon={<TiLocationArrow className='rotate-[40deg] !text-[16px]'/>} containerClass='hidden bg-yellow-300 lg:flex justify-center items-center gap-1 py-2.5 px-5 text-[10px] font-medium' />
              </div>
            </div>
    
        </div>

        <h1 className='special-font hero-heading absolute bottom-5 right-5 text-black'>
          G<b>a</b>ming
        </h1>

        <div className='lg:hidden absolute bottom-0 left-0 w-full flex justify-between items-center px-5 z-10 mb-5'>
          <p className="max-w-64 font-robert-regular text-blue-100 text-xs">Enter the Meta Game Layer <br/> Unleash the Play Economy</p>
          <Button id='watch-trailer-2' title='Trailer' leftIcon={<TiLocationArrow/>} containerClass='bg-yellow-300 flex-center gap-1 text-xs py-[8px] px-3' />
        </div>
        
    </div>
  )
}

export default Hero