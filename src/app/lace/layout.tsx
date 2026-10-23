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
