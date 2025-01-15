import React from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti';
type BentoCardType = {
    src: string;
    title: React.ReactNode;
    description: string;
    isComingSoon: boolean;
}
const BentoCard = ({src, title, description, isComingSoon} : BentoCardType) => {
  return (
    <div className='relative size-full'>
        <video
        src={src}
        autoPlay
        loop
        muted
        className='absolute top-0 left-0 size-full object-cover object-center'
        /> 
        <div className='relative flex flex-col z-10 size-full justify-between p-5 text-blue-50'>
            <div className=''>
                <h1 className='bento-title special-font'>{title}</h1>
                {description && (
                    <p className='mt-3 max-w-xs text-xs md:text-sm font-medium'>{description}</p>
                )}
            </div>
            {isComingSoon && (
                <Button
                id='coming-soon-button'
                    title='Coming Soon'
                    leftIcon={<TiLocationArrow className='text-blue-50/50 text-[14px]' />}
                    containerClass='border-hsla !bg-black !text-blue-50/50 md:flex hidden items-center justify-center gap-1 py-2 px-5 text-[8px] font-medium'
                />
            )}
        </div>
    </div>
  )
}

export default BentoCard