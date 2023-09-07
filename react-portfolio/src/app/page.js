import Navbar from '@/components/NavBar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Technologies from '@/components/Technologies';
import Projects from '@/components/Projects';
import ContactForm from '@/components/ContactForm';
import QuoteGen from '@/components/QuoteGen';
import JokeGen from '@/components/JokeGen';
import Why from '@/components/Why.jsx';

export default function Home() {
  return (
    <>
    <head>
      <title>Krishna Patel's Portfolio</title>
    </head>
    <body>
      <Navbar />
      <Hero />
      <About />
      <QuoteGen />
      <Technologies />
      <JokeGen />
      <Projects />
      <Why />
      <ContactForm />
    </body>
    </>
  )
}
