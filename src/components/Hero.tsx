"use client"

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-serene/10 to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-10">
        <div className="flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center max-w-2xl"
          >
            
            {/* Optimize h1 for LCP and SEO */}
            <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-center">
              <span className="text-serene">Ingrid Stoll</span>
              <div className="text-2xl md:text-3xl mt-2">Psicóloga e Psicanalista</div>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-slate-700 mb-8 text-center"
            >
              Atendimento presencial em <strong>Porto Alegre</strong> e <strong>online</strong> para todo o Brasil. 
              Especialista em neurociência e psicanálise para ansiedade, depressão e autoconhecimento.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <a 
                href="#contact" 
                className="button-primary"
                aria-label="Agende sua consulta com a psicóloga Ingrid Stoll"
                rel="nofollow"
              >
                Agendar Consulta
              </a>
              <a 
                href="#services" 
                className="button-secondary"
                aria-label="Conheça os serviços de psicologia e psicanálise"
              >
                Conhecer Serviços
              </a>
            </motion.div>

            <div className="mt-8 text-center">
              <p className="text-sm text-slate-600">
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
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        aria-hidden="true"
      >
        <span className="text-sm text-slate-700 mb-2">Role para descobrir</span>
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5,
            }}
            className="w-2 h-2 bg-serene rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
