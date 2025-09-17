import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eurococinas",
  description: "Muebles a medida",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
