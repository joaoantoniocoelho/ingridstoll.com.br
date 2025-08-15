const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-lg font-semibold mb-4">Ingrid Stoll</h3>
            <p className="text-neutral-300 mb-4">
              Psicóloga e Psicanalista em Porto Alegre com atendimento online para todo o Brasil. 
              Especializada em neurociência e psicoanálise para tratamento de ansiedade, 
              depressão e autoconhecimento.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center text-white hover:bg-primary transition-colors duration-300"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center text-white hover:bg-primary transition-colors duration-300"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
              <a 
                href="https://medium.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Medium"
                className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center text-white hover:bg-primary transition-colors duration-300"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-neutral-300 hover:text-primary transition-colors duration-300">Início</a>
              </li>
              <li>
                <a href="#about" className="text-neutral-300 hover:text-primary transition-colors duration-300">Sobre</a>
              </li>
              <li>
                <a href="#services" className="text-neutral-300 hover:text-primary transition-colors duration-300">Serviços</a>
              </li>
              <li>
                <a href="#blog" className="text-neutral-300 hover:text-primary transition-colors duration-300">Blog</a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-300 hover:text-primary transition-colors duration-300">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-neutral-300 hover:text-primary transition-colors duration-300">Psicoterapia Individual</a>
              </li>
              <li>
                <a href="#services" className="text-neutral-300 hover:text-primary transition-colors duration-300">Avaliação Psicológica</a>
              </li>
              <li>
                <a href="#services" className="text-neutral-300 hover:text-primary transition-colors duration-300">Consulta Psicanalítica</a>
              </li>
              <li>
                <a href="#services" className="text-neutral-300 hover:text-primary transition-colors duration-300">Orientação Profissional</a>
              </li>
              <li>
                <a href="#services" className="text-neutral-300 hover:text-primary transition-colors duration-300">Atendimento Online</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="text-primary mr-3 mt-1">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-neutral-300">
                  Av. Cristóvão Colombo, 580 - Floresta<br />
                  Porto Alegre, RS - 90560-000
                </span>
              </li>
              <li className="flex items-start">
                <div className="text-primary mr-3 mt-1">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-neutral-300">(51) 9xxxx-xxxx</span>
              </li>
              <li className="flex items-start">
                <div className="text-primary mr-3 mt-1">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-neutral-300">contato@ingridstoll.com.br</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-neutral-400">
          <p>© {new Date().getFullYear()} Ingrid Stoll - Psicóloga e Psicanalista. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">
            <a href="#" className="hover:text-primary transition-colors duration-300">Política de Privacidade</a>
            {' '} · {' '}
            <a href="#" className="hover:text-primary transition-colors duration-300">Termos de Serviço</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
