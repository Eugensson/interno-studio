import { Hero } from "@/components/hero";
import { Steps } from "@/components/steps";
import { About } from "@/components/about";
import { Brands } from "@/components/brands";
import { OurWork } from "@/components/our-work";
import { Testimonials } from "@/components/testimonials";

const Home = () => {
  return (
    <main className="w-full max-w-480 mx-auto bg-white overflow-hidden">
      <div className="xl:bg-grid xl:bg-center xl:bg-repeat-y fixed top-0 bottom-0 left-0 right-0 z-10" />
      <Hero />
      <Steps />
      <About />
      <Testimonials />
      <Brands />
      <OurWork />
      <div className="h-1000" />
    </main>
  );
};

export default Home;
