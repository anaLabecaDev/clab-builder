import '@/app/core/globals.css';
import { inter } from '@/app/core/fonts';
import localFont from 'next/font/local'
import type { Metadata } from 'next';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'CLAB',
  description: 'App that helps you track anything.',
};

const materialSymbols = localFont({
  variable: '--font-family-symbols', // Variable name (to reference after in CSS/styles)
  style: 'normal',
  src: '../node_modules/material-symbols/material-symbols-rounded.woff2', // This is a reference to woff2 file from NPM package "material-symbols"
  display: 'block',
  weight: '100 700',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`clab-light ${inter.className} antialiased ${materialSymbols.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}


