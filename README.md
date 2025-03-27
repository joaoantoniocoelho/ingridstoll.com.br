# Serene Mind - Website para Psicologia

Um site moderno e elegante para serviços de psicologia e psicoterapia, focado em neurociência e psicanálise.

## Sobre o Projeto

Este é um site profissional para um psicólogo ou clínica de psicologia, com design minimalista e foco na experiência do usuário. Desenvolvido com as tecnologias mais recentes para garantir alta performance, acessibilidade e SEO otimizado.

### Principais Características

- Design minimalista com tipografia moderna (Inter)
- Navegação intuitiva para os usuários
- Layout responsivo para funcionar em todos os dispositivos
- Paleta de cores calma e relaxante que remete ao bem-estar mental
- Otimizado para SEO e performance web
- Acessibilidade implementada seguindo as melhores práticas WCAG

## Tecnologias Utilizadas

O projeto foi construído utilizando:

- [Next.js 14](https://nextjs.org/) - Framework React com renderização do lado do servidor
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática para JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [Framer Motion](https://www.framer.com/motion/) - Biblioteca para animações
- [Vercel Analytics](https://vercel.com/analytics) - Analytics para monitoramento

## Como Iniciar

Siga os passos abaixo para executar o projeto localmente:

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/serene-mind-portfolio.git

# Navegar para o diretório do projeto
cd serene-mind-portfolio

# Instalar as dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto

```
serene-mind-portfolio/
├── public/            # Arquivos estáticos
├── src/
│   ├── app/           # Rotas e layouts do Next.js
│   ├── components/    # Componentes React reutilizáveis
│   ├── styles/        # Estilos globais
│   └── utils/         # Funções utilitárias
├── package.json       # Dependências e scripts
└── README.md          # Documentação
```

## Customização

- **Cores**: As cores principais podem ser personalizadas no arquivo `globals.css` e `tailwind.config.js`
- **Fontes**: O projeto utiliza a fonte Inter. Para alterar, modifique o arquivo `layout.tsx`
- **Conteúdo**: O conteúdo principal está nos componentes em `src/components/`

## Implantação

Este projeto está configurado para ser implantado na Vercel. Para fazer a implantação:

1. Conecte sua conta Vercel ao seu repositório GitHub
2. Selecione o repositório e implante
3. A Vercel irá construir e implantar automaticamente o site

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE.md para mais detalhes.

## Contato

Para questões ou sugestões, entre em contato através do e-mail: [seu-email@exemplo.com]
