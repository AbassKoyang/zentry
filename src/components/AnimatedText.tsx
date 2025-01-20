import {useEffect, useRef} from 'react'
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({text, containerClass}:{text: string; containerClass?: string;}) => {
    const textRef = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: textRef.current,
                    start: '200 bottom',
                    end: 'center bottom',
                    toggleActions: 'play none none reverse'
                }
            })

            tl.from(textRef.current, {
                opacity: 0,
                ease: 'power2.inOut',
                stagger: {
                    amount: 0.4,
                },
                duration: 0.6,
            })
        });

        return () => ctx.revert();
    },[])

    return (
       <p className=''> {text.split(' ').map((word, index) => {
        return (
            <span ref={textRef} class={`animated-text opacity-1 font-general text-sm uppercase md:text-[10px] text-black mr-1 ${containerClass}`} key={index}>{word}</span>
        )
    })}</p>
    )
}
export default AnimatedText;