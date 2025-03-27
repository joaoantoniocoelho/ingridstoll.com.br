"use client"

import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-serene uppercase tracking-wider font-semibold mb-3 block"
          >
            Vamos Conversar
          </motion.span>
          
          <h2 className="section-title">Entre em Contato</h2>
          
          <p className="text-lg text-slate-700 mt-10">
            Agende sua consulta com a Psicóloga e Psicanalista Ingrid Stoll em Porto Alegre ou online.
            O primeiro passo para cuidar da sua saúde mental começa aqui.
          </p>
        </div>
        
        {/* Contact and Form Section - Equal Height */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Form Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-6 text-slate-800">Entre em Contato</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5 flex-grow flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nome Completo*</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      className="input-field"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email*</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      className="input-field"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Telefone/WhatsApp*</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      className="input-field"
                      placeholder="(51) 9xxxx-xxxx"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="appointment_type" className="block text-sm font-medium text-slate-700 mb-1">Tipo de Atendimento*</label>
                    <select 
                      id="appointment_type" 
                      name="appointment_type" 
                      required 
                      className="input-field"
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="presencial">Atendimento Presencial (Porto Alegre)</option>
                      <option value="online">Atendimento Online</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Motivo do Contato</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    className="input-field min-h-[100px]"
                    placeholder="Descreva brevemente o motivo da consulta ou suas dúvidas..."
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      required
                      className="h-4 w-4 text-serene border-gray-300 rounded focus:ring-serene"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="privacy" className="text-slate-600">
                      Concordo com a <a href="#" className="text-serene hover:underline">Política de Privacidade</a> e com o tratamento de meus dados pessoais para contato
                    </label>
                  </div>
                </div>
                
                <div className="mt-auto pt-4">
                  <button 
                    type="submit" 
                    className="button-primary w-full"
                  >
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
          
          {/* Contact Info Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-6 text-slate-800">Informações de Contato</h3>
              
              <div className="space-y-6 flex-grow">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-serene/10 flex items-center justify-center text-serene">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-md font-medium text-slate-800">Telefone/WhatsApp</h4>
                    <p className="text-slate-600">(51) 9xxxx-xxxx</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-serene/10 flex items-center justify-center text-serene">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-md font-medium text-slate-800">Email</h4>
                    <p className="text-slate-600">contato@ingridstoll.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-serene/10 flex items-center justify-center text-serene">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-md font-medium text-slate-800">Endereço do Consultório</h4>
                    <p className="text-slate-600">Av. Cristóvão Colombo, 580 - Floresta</p>
                    <p className="text-slate-600">Porto Alegre, RS - 90560-000</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-serene/10 flex items-center justify-center text-serene">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-md font-medium text-slate-800">Horário de Atendimento</h4>
                    <p className="text-slate-600">Segunda a Sexta: 8h às 18h</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto pt-6 border-t border-slate-200">
                <h4 className="text-md font-semibold mb-3 text-slate-800">Atendimento</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-serene/10 text-serene text-xs font-medium px-2.5 py-1 rounded-full">Presencial</span>
                  <span className="bg-serene/10 text-serene text-xs font-medium px-2.5 py-1 rounded-full">Online</span>
                  <span className="bg-serene/10 text-serene text-xs font-medium px-2.5 py-1 rounded-full">Convênios</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Map Section - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="bg-white rounded-lg shadow-md p-4 h-72">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.3023370511194!2d-51.20744732375172!3d-30.02459277496933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979a6b5cd496f%3A0x6d7a1fc8a1c87026!2sAv.%20Crist%C3%B3v%C3%A3o%20Colombo%2C%20580%20-%20Floresta%2C%20Porto%20Alegre%20-%20RS%2C%2090560-000!5e0!3m2!1spt-BR!2sbr!4v1692723154350!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do consultório"
              className="rounded"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
