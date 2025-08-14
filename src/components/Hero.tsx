"use client"

import React, { lazy, Suspense } from 'react';

// Lazy load heavy animation components
const LazyScrollIndicator = lazy(() => import('./LazyScrollIndicator'));

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-10">
        <div className="flex justify-center">
          <div className="flex flex-col justify-center max-w-2xl animate-fade-in">
            
            {/* Optimize h1 for LCP and SEO */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-center">
              <span className="text-primary">Ingrid Stoll</span>
              <div className="text-2xl md:text-3xl mt-2">Psicóloga e Psicanalista</div>
            </h1>
            
            <p className="text-lg text-neutral-700 mb-8 text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Atendimento presencial em <strong>Porto Alegre</strong> e <strong>online</strong> para todo o Brasil. 
              Especialista em neurociência e psicanálise para ansiedade, depressão e autoconhecimento.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a 
                href="#contact" 
                className="bg-primary-dark text-white font-semibold py-4 px-8 rounded-md hover:bg-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-50 shadow-md min-h-[44px] min-w-[44px]"
                aria-label="Agende sua consulta com a psicóloga Ingrid Stoll"
                rel="nofollow"
              >
                Agendar Consulta
              </a>
              <a 
                href="#services" 
                className="bg-transparent text-primary-dark font-semibold py-4 px-8 rounded-md border-2 border-primary-dark hover:bg-primary-dark hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-50 min-h-[44px] min-w-[44px]"
                aria-label="Conheça os serviços de psicologia e psicanálise"
              >
                Conhecer Serviços
              </a>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-neutral-600">
                <span className="inline-flex items-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Porto Alegre, RS
                </span>
                <span className="inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Atendimento Online
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Suspense fallback={null}>
        <LazyScrollIndicator />
      </Suspense>
    </section>
  );
};

export default Hero;
