import '../responsive.css';
import Hero from '@/components/home/Hero';
import TickerBar from '@/components/home/TickerBar';
import Courses from '@/components/home/Courses';
import Timeline from '@/components/home/Timeline';
import Who from '@/components/home/Who';
import Why from '@/components/home/Why';
import RoadToLace from '@/components/home/RoadToLace';
import BootcampSection from '@/components/home/BootcampSection';
import Tickets from '@/components/home/Tickets';
import Speakers from '@/components/home/Speakers';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import Events from '@/components/home/Events';
import Sponsor from '@/components/home/Sponsor';
import Faq from '@/components/home/Faq';
import FinalCta from '@/components/home/FinalCta';

export default function Home() {
  return (
    <main>
      <Hero />
      <TickerBar />
      <Courses />
      <Timeline />
      <Who />
      <Why />
      <RoadToLace />
      <BootcampSection />
      <Tickets />
      <Speakers />
      <TestimonialsSection />
      <Events />
      <Sponsor />
      <Faq />
      <FinalCta />
    </main>
  );
}
