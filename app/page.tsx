import About from '@/components/Landing/about'
import Contact from '@/components/Landing/contact'
import Experience from '@/components/Landing/experience'
import Hero from '@/components/Landing/hero'
import Passion from '@/components/Landing/passion'
import Work from '@/components/Landing/work'
import Navbar from '@/components/Nav/navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#080C14]">
        <Hero />
        <About />
        <Passion />
        <Experience />
        <Work />
        <Contact />
      </main>
    </>
  )
}
