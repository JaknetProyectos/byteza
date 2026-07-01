import type { Metadata } from "next";
import { ClientBody } from "./[locale]/ClientBody";
import "./globals.css";

import { Patrick_Hand } from 'next/font/google'

const caveat = Patrick_Hand({
  subsets: ['latin'],
  weight: "400",
  variable: '--font-handwritten',
})

export const metadata: Metadata = {
  title: "Byteza - Catálogos Digitales para Mayoristas",
  description: "En el entorno actual, vender al mayoreo ya no depende únicamente del precio o del producto, sino de qué tan fácil es para tu cliente entender, elegir y comprar.",
};

export default function RootLayout({ children,}: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html className={caveat.variable} lang="es" >
      <body  suppressHydrationWarning>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}