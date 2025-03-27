"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-serene uppercase tracking-wider font-semibold mb-3 block"
          >
            Conheça Melhor
          </motion.span>
          
          <h2 className="section-title">Sobre Mim</h2>
          
          <p className="text-lg text-slate-700 mt-10">
            Psicóloga e Psicanalista dedicada à saúde mental, com atuação em Porto Alegre e atendimento online para todo o Brasil.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/psicologa-porto-alegre.jpg" 
                alt="Ingrid Stoll - Psicóloga e Psicanalista em Porto Alegre" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority={false}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-sm font-medium text-serene-dark">CRP 07/XXXXX</p>
              <p className="text-xs text-slate-500">Conselho Regional de Psicologia do RS</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-800">Ingrid Stoll - <span className="text-serene">Psicóloga e Psicanalista</span></h3>
            
            <div className="space-y-6 text-slate-600">
              <p>
                Sou psicóloga formada pela <strong>Universidade Federal do Rio Grande do Sul (UFRGS)</strong>, 
                com especialização em Psicanálise e Neurociência. Com mais de 10 anos de experiência clínica, dedico-me a 
                compreender os processos mentais e ajudar meus pacientes a encontrarem caminhos para o bem-estar emocional.
              </p>
              
              <p>
                Minha abordagem terapêutica combina os fundamentos da <strong>psicanálise</strong> com as descobertas mais 
                recentes da <strong>neurociência</strong>, oferecendo um tratamento personalizado para questões como 
                ansiedade, depressão, traumas, relacionamentos e autoconhecimento.
              </p>
              
              <p>
                Atendo em consultório em <strong>Porto Alegre</strong> e também ofereço <strong>sessões online</strong> para pacientes 
                de todo o Brasil, garantindo acessibilidade e comodidade para quem busca atendimento psicológico de qualidade.
              </p>
              
              <div className="pt-4">
                <h4 className="font-semibold text-slate-800 mb-3">Formação e Especialidades:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Graduação em Psicologia - UFRGS</li>
                  <li>Especialização em Psicanálise</li>
                  <li>Pós-graduação em Neurociência Aplicada</li>
                  <li>Especialista em Terapia para Ansiedade e Depressão</li>
                  <li>Membro da Sociedade Brasileira de Psicanálise</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
