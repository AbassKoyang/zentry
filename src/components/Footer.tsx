import React from 'react';
import { FaDiscord, FaGithub, FaTelegram, FaTwitter } from 'react-icons/fa';
type LinksType = {
    href: string;
    icon: React.ReactNode;
}
const links : LinksType[] = [
    {href: 'https://discord.com/abass0622', icon: <FaDiscord/>},
    {href: 'https://twitter.com/realabasskoyang', icon: <FaTwitter/>},
    {href: 'https://github.com/abasskoyang', icon: <FaGithub/>},
    {href: 't.me/realabasskoyang', icon: <FaTelegram/>}
];

const Footer = () => {
    
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
            <p className='text-center text-sm font-normal md:text-left'>&copy; Nova 2025. All rights reserved.</p>

            <div className="flex justify-center gap-4 md:justify-start">
                {links.map((link) => (
                    <a key={link.href} href={link.href} target='_blank'>
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer