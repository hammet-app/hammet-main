import Hero from '@/components/home/Hero';
import Timeline from '@/components/home/Timeline';
import Speakers from '@/components/home/Speakers';
import Tracks from '@/components/home/Tracks';
import Tickets from '@/components/home/Tickets';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import Events from '@/components/home/Events';
import Sponsor from '@/components/home/Sponsor';
import Faq from '@/components/home/Faq';
import GallerySlideshow from '@/components/lace/GallerySlideshow';
import TrainingPopup from '@/components/lace/TrainingPopup';

export default function Home() {
  return (
    <>
      <main className="lace-landing">
        <Hero />
        <GallerySlideshow />
        <Timeline />
        <Speakers />
        <TrainingPopup />
        <Tracks />
        <Tickets />
        <TestimonialsSection />
        <Events />
        <Sponsor />
        <Faq />
      </main>
    </>
  );
}
