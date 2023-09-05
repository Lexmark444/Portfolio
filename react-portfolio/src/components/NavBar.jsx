import {BsFillMoonStarsFill, BsList} from 'react-icons/bs';
import KPlogo from '../public/static/kplogo.png';
import Image from "next/image"

export default function Navbar() {
    return(
        <section className='max-w-screen'>
        <nav className='py-5 mb-1 flex justify-between'>
            <div className='flex'>
            <Image src={KPlogo} />
            <h1 className='text-4xl font-bold font-sans ml-2'>KrisPDev</h1>
            </div>
            <ul className='flex items-center'>
                <li>
                    <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
                </li>
                <li>
                    <a className='bg-gradient-to-r from-black to-black
                        text-white px-4 py-2 ml-8' href="#">Resume</a>
                </li>
                <li>
                    <BsList className='cursor-pointer text-4xl ml-8' />
                </li>
            </ul>
        </nav>
        </section>
    )
};