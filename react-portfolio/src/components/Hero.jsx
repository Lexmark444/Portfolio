import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'
import Image from "next/image"
import devkris from '../public/static/dev-kris-wave.png'
import AnimatedTyping from './AnimatedTyping'


export default function Hero() {
    return(
        <div className='min-h-screen bg-gradient-to-b from-neutral-50 to-white dark:bg-gray-800'>
        <div className="text-center p-10 md:px-20">
            <h2 className='py-2 text-5xl font-medium text-sky-500'>Krishna Patel</h2>
            <h3 className='text-2xl py-2'>
                <AnimatedTyping />
            </h3>
            <p className='text-md lg:text-lg py-5 leading-8 text-gray-800 max-w-xl mx-auto'>
                Freelancer providing services for programming and design content needs.
                Open for full-time opportunities where I can expand my skillset.
                Join me down below and let's get cracking!
            </p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a href='https://discord.gg/jE5CDU9VBm' target='_blank'><BsDiscord className='hover:text-indigo-500 cursor-pointer' /></a>
            <a href='https://www.linkedin.com/in/krishnapatel93/' target='_blank'><AiFillLinkedin className='hover:text-blue-600 cursor-pointer' /></a>
            <a href='https://github.com/Lexmark444' target='_blank'><AiFillGithub className='hover:text-black cursor-pointer' /></a>
        </div>
        <div className='relative mx-auto bg-gradient-to-b from-yellow-300 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={devkris} className="object-cover" alt='3D model of man'/>
        </div>
        </div>
    )
}