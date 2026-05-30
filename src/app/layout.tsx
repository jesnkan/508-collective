import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { ReactLenis } from 'lenis/react';
import { Analytics } from '@vercel/analytics/react';
import { Inter, Space_Grotesk } from 'next/font/google';
import ScrollToTop from './scroll-to-top';
import AppWrapper from './app-wrapper';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

// Define metadata based on index.html
export const metadata: Metadata = {
  title: '508 | Five Zero Eight | Multiple Businesses. One Bold Vision.',
  description: '508 (Five Zero Eight) is a multi-industry company building impactful businesses across retail, media, agriculture, lifestyle, and commerce. Discover our diverse portfolio.',
  keywords: '508, Five Zero Eight, 508 Vision, multi-industry, retail, media, agriculture, lifestyle, commerce, Ghana',
  authors: [{ name: '508' }],
  creator: '508',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <ThemeProvider defaultTheme="dark" storageKey="508-theme" attribute="class">
          <ReactLenis root options={{ 
            lerp: 0.12, 
            duration: 0.8, 
            smoothWheel: true, 
            syncTouch: true,
            wheelMultiplier: 1.1,
            touchMultiplier: 1.5
          }}>
            <ScrollToTop />
            <AppWrapper>
              {children}
            </AppWrapper>
          </ReactLenis>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}