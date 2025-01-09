import React from 'react'
type buttonType = {
    id: string;
    title: string;
    containerClass: string;
    rightIcon?: React.ReactNode;
    leftIcon?: React.ReactNode;
}
const Button = ({id, title, containerClass, rightIcon, leftIcon} : buttonType) => {
  return (
    <button id={id} className={`group relative w-fit z-10 cursor-pointer rounded-full overflow-hidden bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
        {leftIcon}
        <span className='relative inline-flex overflow-hidden font-general uppercase text-xs'>
          <div>
            {title}
          </div>
        </span>
        {rightIcon}
    </button>
  )
}

export default Button