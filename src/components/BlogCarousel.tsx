"use client"

import React, { useState, useRef, useEffect, TouchEvent } from 'react';

// Mock blog post data - using placeholder icons instead of external images for better performance
const blogPosts = [
  {
    id: 1,
    title: 'A Interseção da Tecnologia e Saúde Mental',
    excerpt: 'Explorando como ferramentas digitais podem apoiar o bem-estar psicológico na era moderna.',
    date: '15 de Junho, 2023',
    icon: 'brain',
  },
  {
    id: 2,
    title: 'Mindfulness na Era Digital',
    excerpt: 'Técnicas práticas para manter a presença e reduzir o estresse em nosso mundo impulsionado pela tecnologia.',
    date: '22 de Julho, 2023',
    icon: 'meditation',
  },
  {
    id: 3,
    title: 'Terapia Cognitivo-Comportamental: Um Guia Completo',
    excerpt: 'Entendendo os princípios e aplicações de uma das abordagens terapêuticas mais eficazes.',
    date: '10 de Agosto, 2023',
    icon: 'therapy',
  },
  {
    id: 4,
    title: 'Gerenciando Ansiedade em Tempos Incertos',
    excerpt: 'Estratégias para lidar com a ansiedade e construir resiliência durante períodos de estresse significativo e mudança.',
    date: '5 de Setembro, 2023',
    icon: 'heart',
  },
  {
    id: 5,
    title: 'A Psicologia do Trabalho Remoto',
    excerpt: 'Examinando os desafios e oportunidades de saúde mental apresentados pela mudança para ambientes de trabalho remoto.',
    date: '18 de Outubro, 2023',
    icon: 'computer',
  },
];

// Icon component for better performance
const getIcon = (iconType: string) => {
  const iconProps = { className: "w-12 h-12 text-primary", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" };
  
  switch (iconType) {
    case 'brain':
      return (
        <svg {...iconProps}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    case 'meditation':
      return (
        <svg {...iconProps}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      );
    case 'therapy':
      return (
        <svg {...iconProps}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'heart':
      return (
        <svg {...iconProps}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    case 'computer':
      return (
        <svg {...iconProps}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    default:
      return (
        <svg {...iconProps}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
  }
};

const BlogCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex < blogPosts.length - 1 ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : blogPosts.length - 1
    );
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    
    setIsDragging(true);
    const rect = carouselRef.current.getBoundingClientRect();
    setStartX(e.clientX - rect.left);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    
    const rect = carouselRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch events for mobile
  const handleTouchStart = (e: TouchEvent) => {
    if (!carouselRef.current) return;
    
    setIsDragging(true);
    const rect = carouselRef.current.getBoundingClientRect();
    setStartX(e.touches[0].clientX - rect.left);
    setScrollLeft(carouselRef.current.scrollLeft || 0);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    
    const rect = carouselRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const walk = (x - startX) * 2;
    
    // Detect swipe direction
    if (Math.abs(walk) > 50) {
      if (walk > 0 && activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
        setIsDragging(false);
      } else if (walk < 0 && activeIndex < blogPosts.length - 1) {
        setActiveIndex(activeIndex + 1);
        setIsDragging(false);
      }
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Auto-scrolling effect - optimize with useCallback
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]); // Add activeIndex dependency for better performance

  // Scroll to active index when it changes - optimize with requestAnimationFrame
  useEffect(() => {
    if (carouselRef.current) {
      requestAnimationFrame(() => {
        if (carouselRef.current) {
          const rect = carouselRef.current.getBoundingClientRect();
          const scrollAmount = activeIndex * rect.width;
          carouselRef.current.scrollTo({
            left: scrollAmount,
            behavior: 'smooth',
          });
        }
      });
    }
  }, [activeIndex]);

  // Adjust carousel on window resize - throttled for better performance
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (carouselRef.current) {
          const rect = carouselRef.current.getBoundingClientRect();
          const scrollAmount = activeIndex * rect.width;
          carouselRef.current.scrollLeft = scrollAmount;
        }
      }, 150); // Throttle resize events
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [activeIndex]);

  return (
    <section id="blog" className="py-24 bg-neutral-100">
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="section-title">Últimos Artigos do Blog</h2>
          <p className="mt-6 text-slate-500 max-w-3xl mx-auto">
            Insights, pesquisas e conselhos práticos sobre psicologia, saúde mental e bem-estar no mundo moderno.
          </p>
        </div>

        {/* Mobile Indicator - Swipe Instructions */}
        <div className="md:hidden text-center text-slate-500 mb-4 flex items-center justify-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          <span>Deslize para navegar</span>
        </div>

        <div className="relative">
          {/* Carousel Navigation */}
          <div className="hidden md:flex justify-between absolute top-1/2 transform -translate-y-1/2 left-0 right-0 z-10 px-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-serene hover:bg-serene hover:text-white transition-colors duration-300"
              aria-label="Artigo anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-serene hover:bg-serene hover:text-white transition-colors duration-300"
              aria-label="Próximo artigo"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="overflow-hidden w-full"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex w-full transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${activeIndex * 100}%)` 
              }}
            >
              {blogPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="w-full flex-shrink-0 px-4 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
                    <div className="h-36 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      {getIcon(post.icon)}
                    </div>
                    <div className="p-4 flex-grow flex flex-col">
                      <div className="text-xs text-slate-400 mb-1">{post.date}</div>
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-sm text-slate-500 mb-3 line-clamp-2">{post.excerpt}</p>
                      <div className="mt-auto">
                        <a
                          href={`https://medium.com/@joaoac`}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-serene-dark hover:text-serene font-medium inline-flex items-center"
                          aria-label={`Leia mais sobre ${post.title}`}
                        >
                          Leia Mais
                          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center mt-8">
            {blogPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-11 h-11 rounded-full mx-1 transition-colors flex items-center justify-center ${
                  activeIndex === index ? 'bg-primary' : 'bg-neutral-300 hover:bg-neutral-400'
                }`}
                aria-label={`Ir para o artigo ${index + 1}`}
              >
                <div className={`w-3 h-3 rounded-full ${
                  activeIndex === index ? 'bg-white' : 'bg-neutral-600'
                }`} />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <a 
            href="https://medium.com/@joaoac" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button-primary inline-flex items-center"
          >
            Siga no Medium
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
