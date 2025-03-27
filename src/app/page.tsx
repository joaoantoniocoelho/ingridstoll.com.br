import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import BlogCarousel from '@/components/BlogCarousel'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <BlogCarousel />
      <Contact />
    </main>
  )
} 