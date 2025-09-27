// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

// Si tu carpeta "components" está en la raíz del proyecto:
import Header from '../components/Header';
import Footer from '../components/Footer';

// Si la tienes dentro de /app/components/, usa en su lugar:
// import Header from './components/Header';
// import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Eurococinas Laguna',
  description: 'Diseño y fabricación de cocinas y muebles a medida',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full">
      <head>
        {/* Recorta el espacio del último bloque antes del footer */}
        <style
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
              main > section:last-of-type {
                padding-bottom: 0 !important;
                margin-bottom: 0 !important;
              }
            `,
          }}
        />
      </head>
      <body className="min-h-dvh h-full flex flex-col overflow-x-hidden antialiased">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
