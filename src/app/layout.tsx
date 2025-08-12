import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata, Viewport } from 'next';

// Theme Font
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ingridstoll.com.br'),
  title: 'Ingrid Stoll | Psicóloga e Psicanalista em Porto Alegre | Atendimento Online',
  description: 'Ingrid Stoll - Psicóloga e Psicanalista em Porto Alegre com atendimento online. Especialista em neurociência e psicanálise para tratamento de ansiedade, depressão e autoconhecimento.',
  keywords: 'psicóloga porto alegre, psicanalista online, terapia online, Ingrid Stoll, neurociência, psicanálise, saúde mental, ansiedade, depressão, autoconhecimento',
  authors: [{ name: 'Ingrid Stoll' }],
  creator: 'Ingrid Stoll',
  publisher: 'Serene Mind',
  formatDetection: {
    email: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.ingridstoll.com.br',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.ingridstoll.com.br',
    title: 'Ingrid Stoll | Psicóloga e Psicanalista em Porto Alegre | Atendimento Online',
    description: 'Psicóloga e Psicanalista em Porto Alegre com atendimento online. Tratamento para ansiedade, depressão e autoconhecimento com base em neurociência e psicanálise.',
    siteName: 'Ingrid Stoll - Psicóloga e Psicanalista',
    images: [
      {
        url: '/images/ingrid-stoll-psicologa.jpg',
        width: 1200,
        height: 630,
        alt: 'Ingrid Stoll - Psicóloga e Psicanalista',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ingrid Stoll | Psicóloga e Psicanalista',
    description: 'Psicóloga e Psicanalista em Porto Alegre com atendimento online especializada em neurociência e psicanálise.',
    images: ['/images/ingrid-stoll-psicologa.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        
        {/* Meta tags */}
        <meta name="theme-color" content="#6096ba" />
        <meta name="geo.region" content="BR-RS" />
        <meta name="geo.placename" content="Porto Alegre" />
        <link rel="canonical" href="https://www.ingridstoll.com.br" />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>

        {/* Schema.org structured data for local business and person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "ProfessionalService"],
              "@id": "https://www.ingridstoll.com.br",
              "name": "Ingrid Stoll - Psicóloga e Psicanalista",
              "description": "Psicóloga e Psicanalista em Porto Alegre com atendimento online especializada em neurociência e psicanálise.",
              "url": "https://www.ingridstoll.com.br",
              "logo": "https://www.ingridstoll.com.br/images/logo.png",
              "image": "https://www.ingridstoll.com.br/images/ingrid-stoll-psicologa.jpg",
              "priceRange": "$$",
              "telephone": "+55 (51) 99999-9999",
              "email": "contato@ingridstoll.com.br",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rua exemplo, 123",
                "addressLocality": "Porto Alegre",
                "addressRegion": "RS",
                "postalCode": "90000-000",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -30.0346,
                "longitude": -51.2177
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": [
                "https://instagram.com/ingridstoll",
                "https://linkedin.com/in/ingridstoll",
                "https://medium.com/@ingridstoll"
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": -30.0346,
                  "longitude": -51.2177
                },
                "geoRadius": "50000"
              },
              "makesOffer": [
                {
                  "@type": "Offer",
                  "name": "Terapia Individual",
                  "description": "Sessões de terapia individual com abordagem focada em neurociência e psicanálise."
                },
                {
                  "@type": "Offer",
                  "name": "Terapia Online",
                  "description": "Sessões de terapia através de videoconferência para pacientes de todo o Brasil."
                },
                {
                  "@type": "Offer",
                  "name": "Psicanálise",
                  "description": "Tratamento psicanalítico para compreensão profunda dos processos mentais."
                }
              ],
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.ingridstoll.com.br"
              },
              "person": {
                "@type": "Person",
                "name": "Ingrid Stoll",
                "jobTitle": "Psicóloga e Psicanalista",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Serene Mind"
                }
              }
            })
          }}
        />
      </body>
    </html>
  );
} 