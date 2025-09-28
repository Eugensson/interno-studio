import { Hero } from "@/components/hero";
import { Steps } from "@/components/steps";

const Home = () => {
  return (
    <main className="w-full max-w-480 mx-auto bg-white overflow-hidden">
      <div className="xl:bg-grid xl:bg-center xl:bg-repeat-y fixed top-0 bottom-0 left-0 right-0 z-10" />
      <Hero />
      <Steps />
      <div className="h-1000" />
    </main>
  );
};

export default Home;
