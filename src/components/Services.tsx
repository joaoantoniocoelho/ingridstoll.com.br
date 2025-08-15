const services = [
  {
    id: 1,
    title: "Psicoterapia Individual",
    description: "Sessões personalizadas para adultos com abordagem psicodinâmica para ansiedade, depressão, traumas e autoconhecimento. Disponível presencialmente em Porto Alegre ou online.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M19 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M5 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M12 8V4" />
        <path d="M18 10V5" />
        <path d="M6 10V5" />
        <path d="M12 16v4" />
        <path d="m19 14-.8 4.8c-.1.6-.4 1.1-.9 1.4-.5.3-1.1.5-1.7.4H8.4c-.6 0-1.2-.1-1.7-.4s-.8-.8-.9-1.4L5 14" />
      </svg>
    ),
    color: "bg-amber-100",
    features: [
      "Sessões semanais de 50 minutos",
      "Abordagem integrativa com base psicanalítica",
      "Atendimento presencial em Porto Alegre",
      "Atendimento online para todo o Brasil",
      "Aceita diversos convênios médicos"
    ]
  },
  {
    id: 3,
    title: "Consulta Psicanalítica",
    description: "Um mergulho no inconsciente para compreender comportamentos repetitivos, sonhos e conflitos internos. Baseada na tradição freudiana e avanços contemporâneos da psicoanálise.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
        <path d="M9 9h.01" />
        <path d="M15 9h.01" />
        <path d="M8 13h8" />
        <path d="M9.5 16a4.5 4.5 0 0 0 6 0" />
      </svg>
    ),
    color: "bg-blue-100",
    features: [
      "Associação livre e análise dos sonhos",
      "Identificação de padrões inconscientes",
      "Análise da transferência e resistências",
      "Trabalho com o inconsciente e pulsões",
      "Frequência de até três sessões semanais"
    ]
  },
  {
    id: 5,
    title: "Terapia de Casal",
    description: "Atendimento para casais que enfrentam conflitos, dificuldades de comunicação ou desejam fortalecer o relacionamento. Técnicas que facilitam o diálogo e entendimento mútuo.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M16 22c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2" />
        <path d="M8 22c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2" />
        <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        <path d="M20.97 3c.16.64.03 1.31-.33 1.83-.36.52-.96.87-1.64.87"/>
        <path d="M3.03 3c-.16.64-.03 1.31.33 1.83.36.52.96.87 1.64.87"/>
        <path d="M17 17.5l-1.37-.54c-.54-.22-1.12-.06-1.48.41L13 19l-1.15-1.13c-.36-.47-.94-.63-1.48-.41L9 17.93" />
      </svg>
    ),
    color: "bg-purple-100",
    features: [
      "Melhoria da comunicação do casal",
      "Identificação de padrões repetitivos",
      "Resolução de conflitos e negociações",
      "Reconstrução da intimidade e confiança",
      "Sessões conjuntas e individuais"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm text-primary uppercase tracking-wider font-semibold mb-3 block animate-fade-in">
            Serviços
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center relative pb-6 after:content-[''] after:absolute after:w-24 after:h-1.5 after:bg-primary after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-0 after:rounded-full after:mt-4">Atendimento Especializado</h2>
          
          <p className="text-lg text-neutral-700 mt-10">
            Como Psicóloga e Psicanalista em Porto Alegre, ofereço atendimento presencial 
            e online para todo o Brasil, com abordagem integrativa baseada em psicanálise e neurociência.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="flex flex-col h-full animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${service.color} p-6 rounded-lg h-72 flex flex-col`}>
                <div className="flex items-start mb-4">
                  <div className="bg-white w-12 h-12 rounded-md flex items-center justify-center text-slate-700">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-800 mb-4 border-l-4 pl-4 border-slate-800">
                  {service.title}
                </h3>
                
                <p className="text-slate-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">
            Modalidades de Atendimento
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <div className="bg-slate-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <svg className="h-5 w-5 text-serene mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h4 className="text-base font-medium text-slate-800">Presencial</h4>
              </div>
              <p className="text-slate-600 text-sm ml-7">
                Consultório localizado no bairro Exemplo, região central de Porto Alegre, 
                com ambiente acolhedor e privativo para suas sessões.
              </p>
              <div className="ml-7 mt-2">
                <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full min-h-[32px] flex items-center">
                  Porto Alegre - RS
                </span>
              </div>
            </div>
            
            <div className="bg-slate-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <h4 className="text-base font-medium text-slate-800">Online</h4>
              </div>
              <p className="text-slate-600 text-sm ml-7">
                Atendimento psicológico e psicanalítico por videoconferência em plataforma 
                segura e confidencial, disponível para pacientes de todo o Brasil.
              </p>
              <div className="ml-7 mt-2">
                <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full min-h-[32px] flex items-center">
                  Todo o Brasil
                </span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <a href="#contact" className="bg-primary-dark text-white font-semibold py-4 px-8 rounded-md hover:bg-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-50 shadow-md min-h-[44px] min-w-[44px] inline-flex items-center">
              Agendar Consulta
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
