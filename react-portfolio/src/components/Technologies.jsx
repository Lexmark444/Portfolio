import design from '../public/static/design.png'
import code from '../public/static/code.png'
import consulting from '../public/static/consulting.png'
import Image from 'next/image'

export default function Technologies(){
    return(
        <div className='bg-gradient-to-b from-orange-100 to-white p-10'>
            <h1 className='text-3xl py-1'>Technologies</h1>
            <div className='lg:flex gap-10'>
                <div className='flex-1 text-center shadow-lg p-10 rounded-xl m-5'>
                    <div className='flex justify-center'>
                    <Image src={design} width={100} height={100}/>
                    </div>
                    <h3 className='text-lg font-medium pt-8 pb-2 text-sky-500'>Frontend</h3>
                    <p className=' text-gray-800 py-1'>lorem ipsum</p>
                    <p className=' text-gray-800 py-1'>lorem ipsum</p>
                    <p className=' text-gray-800 py-1'>lorem ipsum</p>
                    <p className=' text-gray-800 py-1'>lorem ipsum</p>
                    <p className=' text-gray-800 py-1'>lorem ipsum</p>
                </div>
                <div className='flex-1 text-center shadow-lg p-10 rounded-xl m-5'>
                <div className='flex justify-center'>
                    <Image src={code} width={100} height={100}/>
                    </div>
                    <h3 className='text-lg font-medium pt-8 pb-2 text-sky-500'>Backend</h3>
                    <p className=' text-gray-800 py-1'>lorem ipsum</p>
                    <p className=' text-gray-800 py-1'>lorem ipsum</p>
                    <p className=' text-gray-800 py-1'>lorem ipsum</p>
                    <p className=' text-gray-800 py-1'>lorem ipsum</p>
                    <p className=' text-gray-800 py-1'>lorem ipsum</p>
                </div>
                <div className='flex-1 text-center shadow-lg p-10 rounded-xl m-5'>
                <div className='flex justify-center'>
                    <Image src={consulting} width={100} height={100}/>
                    </div>
                    <h3 className='text-lg font-medium pt-8 pb-2 text-sky-500'>Bonus</h3>
                    <p className=' text-gray-800 py-1'>lorem ipsum</p>
                    <p className=' text-gray-800 py-1'>lorem ipsum</p>
                    <p className=' text-gray-800 py-1'>lorem ipsum</p>
                    <p className=' text-gray-800 py-1'>lorem ipsum</p>
                    <p className=' text-gray-800 py-1'>lorem ipsum</p>
                </div>
        </div>
        </div>
    )
}