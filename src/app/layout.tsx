import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Metadata } from 'next';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ingridstoll.com.br'),
  title: 'Ingrid Stoll | Psicóloga e Psicanalista em Porto Alegre',
  description: 'Psicóloga e Psicanalista em Porto Alegre. Atendimento presencial e online para ansiedade, depressão e autoconhecimento.',
  keywords: 'psicóloga porto alegre, psicanalista, terapia online, ansiedade, depressão, autoconhecimento, saúde mental',
  authors: [{ name: 'Ingrid Stoll' }],
  creator: 'Ingrid Stoll',
  alternates: {
    canonical: 'https://www.ingridstoll.com.br',
  },
  openGraph: {
    title: 'Ingrid Stoll | Psicóloga e Psicanalista em Porto Alegre',
    description: 'Psicóloga e Psicanalista em Porto Alegre. Atendimento presencial e online para ansiedade, depressão e autoconhecimento.',
    url: 'https://www.ingridstoll.com.br',
    siteName: 'Ingrid Stoll',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
} 