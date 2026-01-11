import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Link Shortener - Shorten URLs and Track Performance',
  description:
    'Create short, memorable links in seconds. Track performance, customize URLs, and share with confidence.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <body className='antialiased'>
          <ThemeProvider
            attribute='class'
            defaultTheme='light'
            enableSystem={false}
            disableTransitionOnChange>
            <Header />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
