import type { Metadata } from 'next';
import { ClerkWrapper } from '@/components/clerk-wrapper';
import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

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
    <html
      lang='en'
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className='font-sans antialiased'>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem={false}
          disableTransitionOnChange>
          <ClerkWrapper>
            <Header />
            {children}
          </ClerkWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
