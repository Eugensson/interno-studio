import { Hero } from "@/components/hero";
import { News } from "@/components/news";
import { Steps } from "@/components/steps";
import { About } from "@/components/about";
import { Stats } from "@/components/stats";
import { Brands } from "@/components/brands";
import { Contact } from "@/components/contact";
import { OurWork } from "@/components/our-work";
import { Testimonials } from "@/components/testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Steps />
      <About />
      <Testimonials />
      <Brands />
      <OurWork />
      <Stats />
      <News />
      <Contact />
    </>
  );
};

export default Home;
