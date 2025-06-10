import { Contact } from '@/containers/home/contact';
import { Experience } from '@/containers/home/experience';
import { Hero } from '@/containers/home/hero';
import { Portfolio } from '@/containers/home/portfolio';
import { Skills } from '@/containers/home/skils';

export default function Home() {
  return (
    <div className="bg-background h-full w-full px-4">
      <Hero />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
}
