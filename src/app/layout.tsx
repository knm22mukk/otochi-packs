import { Inter } from 'next/font/google';

import Header from '@/components/Header';

import type { Metadata } from 'next';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'おとちパックス',
  description: 'おとちパックス',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
