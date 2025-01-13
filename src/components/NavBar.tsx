import {useEffect, useRef, useState} from 'react';
import {TiLocationArrow} from 'react-icons/ti';
import {useWindowScroll} from 'react-use';
import gsap from 'gsap'
 import Button from './Button';
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

    const getLogo = () : string => {
        if(isNavOpen){
            return '/img/zentry-symbol-black.png'
        } else {
            return '/img/zentry-symbol-white.png'
        }
    }
    

return(
    <div ref={navContainerRef} className='fixed inset-x-3 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-4'>
        <header className='absolute top-1/2 w-full -translate-y-1/2'>
            <nav className='flex size-full items-center justify-between p-4'>
                <div className='flex items-center gap-7'>
                    <img
                    src={getLogo()}
                    alt='logo'
                    className='w-10'
                    />

                    <div className="flex items-center gap-3 min-w-fit">
                    <Button
                    id='product-button'
                    title='Products'
                    rightIcon={<TiLocationArrow className='rotate-[140deg] lg:rotate-0 text-xs lg:text-normal' />}
                    containerClass='bg-blue-50 items-center justify-center flex flex-row gap-1.5 py-1 px-3 lg:py-2 lg:px-5 text-[8px]'
                    />
                    <Button
                    id='whitepaper-button'
                    title='Whitepaper'
                    containerClass='bg-blue-50 items-center justify-center px-3 py-1 lg:py-2 lg:px-5 text-[8px]'
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

                    <button className="flex flex-col gap-1 items-center justify-center lg:hidden" onClick={() => {setIsNavOpen((prev) => !prev)}}>
                        <span className={`w-8 h-[1px] rounded-lg bg-white ${isNavOpen ? 'rotate-[45deg]' : ''} transition-all duration-300 ease-in-out`}></span>
                        <span className={`w-8 h-[1px] rounded-lg bg-white ${isNavOpen ? 'rotate-[-45deg]' : ''} transition-all duration-300 ease-in-out`}></span>
                    </button>
                </div>
            </nav>
        </header>
    </div>
)}
export default NavBar;