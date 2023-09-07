import Image from 'next/image'
import eCommerce from '../public/static/eCommerce.png'
import spotify from '../public/static/spotify.png'
import whiskey from '../public/static/whiskey.png'
import library from '../public/static/library.png'

export default function Projects() {
    return(
        <div className="bg-gradient-to-b from-white to-cyan-50 p-10 lg:px-40">
            <h1 className='text-3xl py-1 text-black'>
                Projects
            </h1>
            <div className='flex flex-wrap py-2 md:px-10 gap-10 justify-evenly'>
                

            <div className='flex-col lg:basis-1/3 text-center shadow-lg rounded-xl'>
                <Image src={eCommerce} className='object-cover' alt='KrisP Corner eCommerce' />
                <h3 className='text-2xl text-sky-500 pt-2'>KrisP Corner eCommerce</h3>
                <div className='flex flex-row justify-around p-10'>
                    <p className='text-xl font-semibold hover:text-yellow-300'>
                        <a href='https://github.com/Lexmark444/KrisPCorner-eCommerce' target='_blank'>GitHub</a>
                    </p>
                    <p className='text-xl font-semibold hover:text-yellow-300'>
                        <a href='https://krispcorner.netlify.app/' target='_blank'>Site</a>
                    </p>
                </div>
            </div>

            <div className='flex-col lg:basis-1/3 text-center shadow-lg rounded-xl'>
                <Image src={spotify} className='object-cover' alt='music gallery'/>
                <h3 className='text-2xl text-sky-500 py-2'>Spotify Music Gallery</h3>
                <div className='flex flex-row justify-around p-10'>
                    <p className='text-xl font-semibold hover:text-yellow-300'>
                        <a href='https://github.com/Lexmark444/Spotify-API---Music-gallery' target='_blank'>GitHub</a>
                    </p>
                    <p className='text-xl font-semibold hover:text-yellow-300'>
                        <a href='https://spotifymusicgallery.netlify.app/' target='_blank'>Site</a>
                    </p>
                </div>
            </div>

            <div className='flex-col lg:basis-1/3 text-center shadow-lg rounded-xl'>
                <Image src={whiskey} className='object-cover'alt='Whiskey'/>
                <h3 className='text-2xl text-sky-500 py-2'>Whiskey Catalog</h3>
                <div className='flex flex-row justify-around p-10'>
                    <p className='text-xl font-semibold hover:text-yellow-300'>
                        <a href='https://github.com/Lexmark444/react-whiskey' target='_blank'>GitHub</a>
                    </p>
                    <p className='text-xl font-semibold hover:text-yellow-300'>
                        <a href='https://whiskeycatalog.netlify.app/' target='_blank'>Site</a>
                    </p>
                </div>
            </div>

            <div className='flex-col lg:basis-1/3 text-center shadow-lg rounded-xl'>
                <Image src={library} className='object-cover' alt='library'/>
                <h3 className='text-2xl text-sky-500 py-2'>Library App</h3>
                <div className='flex flex-row justify-around p-10'>
                    <p className='text-xl font-semibold hover:text-yellow-300'>
                        <a href='https://github.com/Lexmark444/react-library' target='_blank'>GitHub</a>
                    </p>
                    <p className='text-xl font-semibold hover:text-yellow-300'>
                        <a href='https://librarybookcatalog.netlify.app/' target='_blank'>Site</a>
                    </p>
                </div>
            </div>



            </div>
        </div>
    )
}