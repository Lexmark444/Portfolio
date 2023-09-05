import Navbar from '@/components/NavBar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Technologies from '@/components/Technologies';


export default function Home() {
  return (
    <>
    <head>
      <title>Krishna Patel's Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
    </head>

    <body>
      <main className='px-10'>
        <Navbar />
      </main>
      <div className='min-h-screen bg-gradient-to-b from-neutral-50 to-white'>
        <Hero />
      </div>
      <About />
      <Technologies />
    </body>
    </>
  )
}
