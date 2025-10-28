export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import './globals.css';
import type { Metadata, Viewport } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

/* Opcional: Next Fonts (evita preloads manuales y reduce CLS)
   import { Inter } from 'next/font/google';
   const inter = Inter({ subsets: ['latin'], display: 'swap' });
*/

export const metadata: Metadata = {
  title: 'Eurococinas Laguna',
  description: 'Diseño y fabricación de cocinas y muebles a medida',
  metadataBase: new URL('https://eurococinas-gm7mcswff-skisekias-projects.vercel.app/'), // ajusta si ya tienes dominio
  openGraph: {
    title: 'Eurococinas Laguna',
    description: 'Cocinas, baños y recámaras a medida',
    url: 'https://eurococinas-gm7mcswff-skisekias-projects.vercel.app/',
    siteName: 'Eurococinas Laguna',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'es_MX',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-dvh h-full flex flex-col overflow-x-hidden antialiased">
        {/* Si quieres TopBar global, colócala aquí encima del Header */}
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
