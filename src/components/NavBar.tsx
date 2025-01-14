import {useEffect, useRef, useState} from 'react';
import {TiLocationArrow} from 'react-icons/ti';
import {useWindowScroll} from 'react-use';
import gsap from 'gsap'
 import Button from './Button';
import { MdArrowForward } from 'react-icons/md';
const NavBar = () => {
    const navContainerRef = useRef<HTMLDivElement | null>(null);
    const audioElementRef = useRef<HTMLAudioElement | null>(null);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);
    const [isNavVisisble, setIsNavVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const navItems = ['Nexus','Vault', 'Prologue', 'About', 'Contact'];


    const {y: currentScrollY} = useWindowScroll();

    const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev)
    setIsIndicatorActive((prev) => !prev)
    };

    useEffect(() => {
        if (isAudioPlaying && audioElementRef.current) {
            audioElementRef.current.play();
        } else if (audioElementRef.current) {
            audioElementRef.current.pause();
        }
    }, [isAudioPlaying]);

    useEffect(() => {
        if(currentScrollY === 0){
            setIsNavVisible(true);
            navContainerRef.current?.classList.remove('floating-nav');
        } else if(currentScrollY > lastScrollY){
            setIsNavVisible(false);
            navContainerRef.current?.classList.add('floating-nav');
        } else if(currentScrollY < lastScrollY){
            setIsNavVisible(true);
            navContainerRef.current?.classList.add('floating-nav');
        }
        setLastScrollY(currentScrollY)
    }, [currentScrollY, lastScrollY])

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisisble ? 0 : -100,
            opacity: isNavVisisble ? 1 : 0,
            duration: 0.2,
        })
    }, [isNavVisisble]);

    // useEffect(() => {
    //     if (isNavOpen) {
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         document.body.style.overflow = 'unset';
    //     }

    //     // Cleanup when component unmounts
    //     return () => {
    //         document.body.style.overflow = 'unset';
    //     };
    // }, [isNavOpen]);

    const getLogo = () : string => {
        if(isNavOpen){
            return '/img/zentry-symbol-black.png'
        } else {
            return '/img/zentry-symbol-white.png'
        }
    }
    
    const showMenuLinks = () => {
        gsap.from('.menu-link', {
            y: 100,
            x: -50,
            opacity: 0,
            duration: 0.8,
            stagger: {
                amount: 0.4,
                from: "start"
            },
            ease: "power2.out"
        });
    }

    const handleMenuButtonClick = () => {
        setIsNavOpen((prev) => !prev);
        showMenuLinks();
    }
return(
    <div ref={navContainerRef} className={`fixed ${isNavOpen ? 'inset-x-0 top-0 lg:inset-x-4 lg:top-4' : 'inset-x-2 top-4'} z-50 h-16 border-none transition-all duration-700 sm:inset-x-4`}>
        <header className='absolute z-30 top-1/2 w-full -translate-y-1/2'>
            <nav className='flex size-full items-center justify-between py-4 px-3 md:px-4'>
                <div className='flex items-center gap-14'>
                    <div className="w-10 overflow-hidden">
                    <img
                    src={getLogo()}
                    alt='logo'
                    className='w-16 scale-[1.5]'
                    />
                    </div>

                    <div className="flex items-center gap-3 min-w-fit">
                    <Button
                    id='product-button'
                    title='Products'
                    rightIcon={<TiLocationArrow className='rotate-[140deg] lg:rotate-0 text-[10px] lg:text-normal' />}
                    containerClass={`${isNavOpen ? '!bg-black text-blue-50' : 'bg-blue-50 text-black'} items-center justify-center flex flex-row gap-1 py-[4px] px-3 lg:py-2 lg:px-5 text-[10px] font-medium md:text-xs`}
                    />
                    <Button
                    id='whitepaper-button'
                    title='Whitepaper'
                    containerClass={`${isNavOpen ? '!bg-black text-blue-50' : 'bg-blue-50 text-black'} items-center justify-center px-3 py-[4px] lg:py-2 lg:px-5 text-[10px] font-medium md:text-xs`}
                    />
                    </div>
                </div>

                <div className='flex h-full items-center'>
                    <div className='hidden md:block'>
                        {navItems.map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className='nav-hover-btn'>
                            {item}
                            </a>
                        ))}
                    </div>

                    <button onClick={toggleAudioIndicator} className='hidden lg:flex md:h-4 md:w-10 ml-10 justify-center items-center space-x-0.5'>
                        <audio ref={audioElementRef} src="/audio/loop.mp3" loop className='hidden' />
                        {[1,2,3,4].map((bar) => (
                            <div key={bar} className={`indicator-line ${isIndicatorActive ? 'active' : ''}`} style={{animationDelay: `${bar * 0.1}s`}}></div>
                        ))}
                    </button>

                    <button className="flex flex-col gap-1 items-center justify-center lg:hidden" onClick={handleMenuButtonClick}>
                        <span className={`w-7 h-[2px] rounded-l ${isNavOpen ? 'rotate-[45deg] bg-black' : 'bg-blue-50'} transition-all duration-300 ease-in-out`}></span>
                        <span className={`w-7 h-[2px] rounded-l ${isNavOpen ? 'rotate-[-45deg] bg-black' : 'bg-blue-50'} transition-all duration-300 ease-in-out`}></span>
                    </button>
                </div>
            </nav>
            
        </header>
        <div id='menu' className={`overflow-hidden fixed w-screen h-dvh bg-yellow-300 ${isNavOpen ? 'flex' : 'hidden'} flex-col justify-between z-20 p-4 lg:hidden`}>
                <nav className='mt-16 flex flex-col justify-start'>
                    <a className='menu-link flex items-start gap-5 opacity-100'>
                        <span className='font-general text-[8px]'>01</span>
                        <div className='flex items-end'>
                            <p className='text-7xl special-font font-zentry leading-0 uppercase'><b>N</b>EXUS</p>
                            <MdArrowForward className='rotate-[-45deg] mb-1 text-md'/>
                        </div>
                    </a>
                    <a className='menu-link flex items-start gap-5 mt-3 opacity-100'>
                        <span className='font-general text-[8px]'>02</span>
                        <div className='flex items-end'>
                            <p className='text-7xl special-font font-zentry leading-0 uppercase'>V<b>A</b>ULT</p>
                            <MdArrowForward className='rotate-[-45deg] mb-1 text-md'/>
                        </div>
                    </a>
                    <a className='menu-link flex items-start gap-5 mt-3 opacity-100'>
                        <span className='font-general text-[8px]'>03</span>
                        <div className='flex items-end'>
                            <p className='text-7xl special-font font-zentry leading-0 uppercase'>PR<b>0</b>LOGUE</p>
                        </div>
                    </a>
                    <a className='menu-link flex items-start gap-5 mt-3 opacity-100'>
                        <span className='font-general text-[8px]'>04</span>
                        <div className='flex items-end'>
                            <p className='text-7xl special-font font-zentry leading-0 uppercase'><b>A</b>BOUT</p>
                        </div>
                    </a>
                    <a className='menu-link flex items-start gap-5 mt-3 opacity-100'>
                        <span className='font-general text-[8px]'>05</span>
                        <div className='flex items-end'>
                            <p className='text-7xl special-font font-zentry leading-0 uppercase'>CONT<b>A</b>CT</p>
                        </div>
                    </a>
                </nav>

                <div className='flex items-center justify-between px-4'>
                    <p className='font-general text-[8px]'>Made with ❤  by Abass</p>
                    <div className="flex items-center gap-2">
                        <p className='font-general text-[10px] font-medium'>Sound {isAudioPlaying ? 'On' : 'Off'}</p>
                        
                    <button onClick={toggleAudioIndicator} className='flex h-4 :w-10 justify-center items-center space-x-0.5'>
                        <audio ref={audioElementRef} src="/audio/loop.mp3" loop className='hidden' />
                        {[1,2,3,4].map((bar) => (
                            <div key={bar} className={`indicator-line !bg-black ${isIndicatorActive ? 'active' : ''}`} style={{animationDelay: `${bar * 0.1}s`}}></div>
                        ))}
                    </button>
                    </div>
                </div>
            </div>
    </div>
)
}
export default NavBar;