import { lazy, Suspense } from 'react'
import Hero from '@/components/Hero'

// Lazy load non-critical components for better initial page load performance
const About = lazy(() => import('@/components/About'))
const Services = lazy(() => import('@/components/Services'))
const BlogCarousel = lazy(() => import('@/components/BlogCarousel'))
const Contact = lazy(() => import('@/components/Contact'))

// Simple loading fallback
const SectionFallback = () => (
  <div className="py-20 bg-neutral-50 animate-pulse">
    <div className="container mx-auto px-4">
      <div className="h-8 bg-neutral-200 rounded w-64 mx-auto mb-8"></div>
      <div className="h-4 bg-neutral-200 rounded w-96 mx-auto"></div>
    </div>
  </div>
)

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <BlogCarousel />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
    </>
  )
} 