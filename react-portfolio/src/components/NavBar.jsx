import KPlogo from '../public/static/kplogo.png';
import Image from "next/image"
import Link from 'next/link';

  
export default function Navbar() {
    return(
        <main className='px-10'> 
        <section className='max-w-screen'>
        <nav className='py-5 mb-1 flex justify-between'>
            <div className='flex'>
            <Image src={KPlogo} alt="kplogo that mimics Co.Lab's logo" />
            <h1 className='text-3xl font-bold font-sans ml-2'>KrisPDev</h1>
            </div>
            <ul className='flex items-center'>
                <li>
                    <Link href="../public/static/resume.pdf" target=' ' download className='bg-black text-white px-4 py-2'>Resume</Link>
                </li>
    {/*
                <li>
                   <BsList className='cursor-pointer text-4xl ml-8' />
                </li>
    */}
            </ul>
        </nav>
        </section>
        </main>

    )
};