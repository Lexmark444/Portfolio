import design from '../public/static/design.png'
import code from '../public/static/code.png'
import consulting from '../public/static/consulting.png'
import Image from 'next/image'
import { AiFillHtml5 } from 'react-icons/ai'

export default function Technologies(){
    return(
        <div className='bg-gradient-to-b from-orange-100 to-white p-10 md:px-20 lg:px-40'>
            <h1 className='text-3xl py-1'>Technologies</h1>
            <div className='lg:flex gap-10 py-2'>
                <div className='flex-1 text-center shadow-lg p-10 rounded-xl'>
                    <div className='flex justify-center'>
                    <Image src={design} width={100} height={100} alt='design'/>
                    </div>
                    <h3 className='text-lg font-medium pt-8 pb-2 text-sky-500'>Frontend</h3>
                    <p className=' text-gray-800 py-1'>React</p>
                    <p className=' text-gray-800 py-1'>JavaScript</p>
                    <p className=' text-gray-800 py-1'>HTML5/CSS3</p>
                    <p className=' text-gray-800 py-1'>Vite</p>
                    <p className=' text-gray-800 py-1'>NextJS</p>
                    <p className=' text-gray-800 py-1'>TailwindCSS</p>
                    <p className=' text-gray-800 py-1'>GraphQL</p>
                </div>
                <div className='flex-1 text-center shadow-lg p-10 rounded-xl'>
                <div className='flex justify-center'>
                    <Image src={code} width={100} height={100} alt={code}/>
                    </div>
                    <h3 className='text-lg font-medium pt-8 pb-2 text-sky-500'>Backend</h3>
                    <p className=' text-gray-800 py-1'>NodeJS</p>
                    <p className=' text-gray-800 py-1'>Flask</p>
                    <p className=' text-gray-800 py-1'>Python</p>
                    <p className=' text-gray-800 py-1'>SQL</p>
                    <p className=' text-gray-800 py-1'>PostgreSQL</p>
                    <p className=' text-gray-800 py-1'>MongoDB</p>
                </div>
                <div className='flex-1 text-center shadow-lg p-10 rounded-xl'>
                <div className='flex justify-center'>
                    <Image src={consulting} width={100} height={100} alt={consulting}/>
                    </div>
                    <h3 className='text-lg font-medium pt-8 pb-2 text-sky-500'>Bonus</h3>
                    <p className=' text-gray-800 py-1'>GitHub/Git</p>
                    <p className=' text-gray-800 py-1'>Photoshop</p>
                    <p className=' text-gray-800 py-1'>Netlify</p>
                    <p className=' text-gray-800 py-1'>Render</p>
                </div>
        </div>
        </div>
    )
}