import Header from '@/components/Header';
import ThemeProvider from '@/components/ThemeProvider';

import type { Metadata } from 'next';

import './globals.css';

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
    <html lang='ja' suppressHydrationWarning>
      <body className='bg-orange-50 text-gray-800 dark:bg-gray-800 dark:text-white'>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
