import type { Metadata } from 'next';
import './globals.css';
import BackgroundRotator from '@/components/BackgroundRotator';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SiteEffects from '@/components/SiteEffects';
import { BootcampStateSync } from '@/components/Bootcamp';

export const metadata: Metadata = {
  title: 'Lagos AI Career Experience 1.0 | Hammet School of AI Foundations',
  description:
    'Theme: Reimagining Work. A two-week intensive AI certification training with compulsory examination. Opening Ceremony 31 October 2026, 10 Kayode Alabi, Ogba, Lagos.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Adds the "js" class before first paint so scroll-reveal animations work. */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js');" }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@500;700;800;900&family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <BackgroundRotator />
        <Nav />
        {children}
        <Footer />
        <SiteEffects />
        <BootcampStateSync />
      </body>
    </html>
  );
}
