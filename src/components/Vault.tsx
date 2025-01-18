import {useState} from 'react';
import Button from './Button';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
const Vault = () => {
    const [accordion, setAccordion] = useState<string>('');
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: `#vault`,
                start: '70 bottom',
                end: 'center bottom',
                toggleActions: 'play none none reverse'
            }
        })
        tl.from('#vault', {
            x: -400,
            opacity: 0,
            ease: 'power1.inOut',
            duration: 1,
        })
        tl.from('#vault-button', {
            y: 20,
            opacity: 0,
            ease: 'power1.inOut',
            duration: 0.7,
        })
    })
    return (
        <section className={`px-10 pt-24 lg:pt-52 bg-yellow-300 min-h-screen flex items-center justify-between`}>
            <div>
                
            <h1 id='vault' className='special-font font-zentry font-black opacity-1 text-6xl uppercase leading-[.8] text-black  md:text-[6rem]'>The Univ<b>e</b>rse <br />Powered By Ze<b>n</b>t</h1>
            <Button id='vault-button' containerClass='mt-8 px-4 py-2 lg:py-2.5 lg:px-6 text-[10px] font-medium !bg-black !text-white opacity-1' title='Enter Vault' />

            <div className='w-full flex items-center justify-center mt-24'>
                <div className='size-[200px] relative lg:hidden'>
                    <video className='size-full absolute top-0 bottom-0' autoPlay muted loop src='/videos/vault-video.webm' />
                </div>
            </div>

            <div className='mt-24 lg:mt-32'>
                <div className=''>
                    <button className={`flex items-center gap-7 ${accordion === 'shaping' ? 'text-black font-medium' : 'text-black/50 text-[8px] transition-all duration-300 ease-in-out'} font-circular-medium`} onClick={() => setAccordion('shaping')}>
                        <p className='text-[8px] font-general'>01</p>
                        <p className={`${accordion === 'shaping' ? 'text-lg' : 'text-[8px] uppercase'}`}>Shaping Zentry Collectively</p>
                    </button>
                    <div className={`overflow-hidden max-w-[400px] ${accordion === 'shaping' ? 'h-12' : 'h-0'} 
                    pl-10 mt-3 ml-1 transition-all duration-300 ease-in-out border-l-2 border-l-black`}>
                        <p className='font-circular text-xs text-black'>Participate in governance, influence key decisions in the ever-growing Zentry Universe that is limited only by people's imaginations</p>
                    </div>
                </div>

                <div className='mt-3'>
                    <button className={`flex items-center gap-7 ${accordion === 'unlocking' ? 'text-black font-medium' : 'text-black/50 text-[8px] transition-all duration-300 ease-in-out'} font-circular-medium`} onClick={() => setAccordion('unlocking')}>
                        <p className='text-[8px] font-general'>02</p>
                        <p className={`${accordion === 'unlocking' ? 'text-lg' : 'text-[8px] uppercase'}`}>Unlocking Economic Opportunity</p>
                    </button>
                    <div className={`overflow-hidden max-w-[400px] ${accordion === 'unlocking' ? 'h-12' : 'h-0'} 
                    pl-10 mt-3 ml-1 transition-all duration-300 ease-in-out border-l-2 border-l-black`}>
                        <p className='font-circular text-xs text-black'>ZENT, a commodity-based currency that unlocks exclusive benefits, airdrops, quotas, and co-creation within and beyond Zentry ecosystem.</p>
                    </div>
                </div>

                <div className='mt-3'>
                    <button className={`flex items-center gap-7 ${accordion === 'sharing' ? 'text-black font-medium' : 'text-black/50 text-[8px] transition-all duration-300 ease-in-out'} font-circular-medium`} onClick={() => setAccordion('sharing')}>
                        <p className='text-[8px] font-general'>03</p>
                        <p className={`${accordion === 'sharing' ?  'text-lg' : 'text-[8px] uppercase'}`}>Sharing Value Accrued</p>
                    </button>
                    <div className={`overflow-hidden max-w-[400px] ${accordion === 'sharing' ? 'h-12' : 'h-0'} 
                    pl-10 mt-3 ml-1 transition-all duration-300 ease-in-out border-l-2 border-l-black`}>
                        <p className='font-circular text-xs text-black'>ZENT holders thrive as Zentry grows, benefiting from the expansive partnerships, treasury investment and economic activities.</p>
                    </div>
                </div>
            </div>
            </div>


            <div className='size-[500px] relative hidden lg:block'>
                <video className='size-full absolute top-0 bottom-0' autoPlay muted loop src='/videos/vault-video.webm' />
            </div>
        </section>
    )
}
export default Vault;