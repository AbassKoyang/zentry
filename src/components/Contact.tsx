import Button from './Button';
type ImageClipClass = {
    src: string;
    clipClass: string;
}
const ImageClip = ({src, clipClass} : ImageClipClass) => {
    return (
        <div className={clipClass}>
            <img src={src} />
        </div>
    )
}
const Contact = () => {
    return (
    <div id='contact' className='my-20 min-h-screen w-screen px-10'>
        <div className='bg-black rounded-lg relative py-24 text-blue-50 sm:overflow-hidden'>
            <div className='absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96'>
                <ImageClip src='/img/contact-1.webp' clipClass='contact-clip-path-1' />
                <ImageClip src='/img/contact-2.webp' clipClass='contact-clip-path-2 translate-y-60 md:translate-y-40' />
            </div>
            <div className='absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80'>
                <ImageClip src='/img/swordman-partial.webp' clipClass='absolute md:scale-125' />
                <ImageClip src='/img/swordman.webp' clipClass='sword-man-clip-path md:scale-125' />
            </div>
            <div className="flex flex-col items-center text-center">
                <div className="font-general text-[10px] uppercase">
                    <p>Join Zentry</p>
                    <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">
                        Let's b<b>u</b>ild the<br /> new era of<br /> g<b>a</b>ming t<b>o</b>gether
                    </p>
                    <Button id='contact-us-button' title='Contact Us' containerClass='mt-10 cursor-pointer text-xs' />
                </div>
            </div>
        </div>
    </div>
    )
}

export default Contact;