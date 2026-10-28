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
    'Lagos AI Career Experience 1.0: two weeks of intensive AI certification training. Virtual training November 7–21, 2026. Physical opening event Saturday November 7, 2026, at 10 Kayode Alabi, Ogba, Lagos.',
};

export default function LaceLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="lace-page-scope">
      <BackgroundRotator />
      <Nav />
      {children}
      <Footer />
      <SiteEffects />
      <BootcampStateSync />
    </div>
  );
}
