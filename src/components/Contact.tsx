import React from 'react';

import MapComponent from './MapComponent';

const Contact = () => {

  return (
    <section id="contact" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm text-primary uppercase tracking-wider font-semibold mb-3 block animate-fade-in">
            Vamos Conversar
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center relative pb-6 after:content-[''] after:absolute after:w-24 after:h-1.5 after:bg-primary after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-0 after:rounded-full after:mt-4">Entre em Contato</h2>
          
          <p className="text-lg text-neutral-700 mt-10">
            Agende sua consulta com a Psicóloga e Psicanalista Ingrid Stoll em Porto Alegre ou online.
            O primeiro passo para cuidar da sua saúde mental começa aqui.
          </p>
        </div>
        
        {/* Contact and Map Section - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Contact Information Card */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-lg shadow-md p-8 h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-6 text-slate-800">Informações de Contato</h3>
              
              <div className="space-y-6 flex-grow">
                <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                  <h4 className="text-md font-medium text-neutral-800">Telefone/WhatsApp</h4>
                  <p className="text-neutral-600">(51) 9xxxx-xxxx</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                  <h4 className="text-md font-medium text-neutral-800">Endereço do Consultório</h4>
                  <p className="text-neutral-600">Av. Cristóvão Colombo, 580 - Floresta</p>
                  <p className="text-neutral-600">Porto Alegre, RS - 90560-000</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                  <h4 className="text-md font-medium text-neutral-800">Horário de Atendimento</h4>
                  <p className="text-neutral-600">Segunda a Sexta: 8h às 18h</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto pt-8 border-t border-slate-200">
                {/* CTA Section */}
                <div className="text-center">
                  <a 
                    href="https://wa.me/5551999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20psic%C3%B3loga%20Ingrid%20Stoll.%20Poderia%20me%20ajudar%20com%20informa%C3%A7%C3%B5es%20sobre%20disponibilidade%20e%20valores?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 mx-auto"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.106"/>
                    </svg>
                    Agendar Consulta
                  </a>
                </div>
              </div>
            </div>
          </div>
        
          {/* Map Section */}
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <MapComponent />
          </div>
          </div>
      </div>
    </section>
  );
};

export default Contact;
