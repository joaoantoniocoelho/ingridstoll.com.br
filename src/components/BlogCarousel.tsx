"use client"

import React, { useState, useRef, useEffect, TouchEvent } from 'react';
import { motion } from 'framer-motion';

// Mock blog post data
const blogPosts = [
  {
    id: 1,
    title: 'A Interseção da Tecnologia e Saúde Mental',
    excerpt: 'Explorando como ferramentas digitais podem apoiar o bem-estar psicológico na era moderna.',
    date: '15 de Junho, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Mindfulness na Era Digital',
    excerpt: 'Técnicas práticas para manter a presença e reduzir o estresse em nosso mundo impulsionado pela tecnologia.',
    date: '22 de Julho, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Terapia Cognitivo-Comportamental: Um Guia Completo',
    excerpt: 'Entendendo os princípios e aplicações de uma das abordagens terapêuticas mais eficazes.',
    date: '10 de Agosto, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Gerenciando Ansiedade em Tempos Incertos',
    excerpt: 'Estratégias para lidar com a ansiedade e construir resiliência durante períodos de estresse significativo e mudança.',
    date: '5 de Setembro, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1624959462622-c736118ca9fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'A Psicologia do Trabalho Remoto',
    excerpt: 'Examinando os desafios e oportunidades de saúde mental apresentados pela mudança para ambientes de trabalho remoto.',
    date: '18 de Outubro, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

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
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch events for mobile
  const handleTouchStart = (e: TouchEvent) => {
    if (!carouselRef.current) return;
    
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (carouselRef.current.offsetLeft || 0));
    setScrollLeft(carouselRef.current.scrollLeft || 0);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    
    const x = e.touches[0].pageX - (carouselRef.current.offsetLeft || 0);
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

  // Auto-scrolling effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to active index when it changes
  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = activeIndex * carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  }, [activeIndex]);

  // Adjust carousel on window resize
  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        const scrollAmount = activeIndex * carouselRef.current.offsetWidth;
        carouselRef.current.scrollLeft = scrollAmount;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex]);

  return (
    <section id="blog" className="py-24 bg-slate-100">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Últimos Artigos do Blog</h2>
          <p className="mt-6 text-slate-500 max-w-3xl mx-auto">
            Insights, pesquisas e conselhos práticos sobre psicologia, saúde mental e bem-estar no mundo moderno.
          </p>
        </motion.div>

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
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
                    <div className="h-36 overflow-hidden">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
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
                </motion.div>
              ))}
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center mt-8">
            {blogPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                  activeIndex === index ? 'bg-serene' : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Ir para o artigo ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-center"
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default BlogCarousel;
