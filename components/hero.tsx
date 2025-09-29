import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="h-160 xl:h-210 bg-hero bg-center lg:bg-cover bg-no-repeat bg-fixed xl:rounded-bl-[290px] relative z-20"
    >
      <div className="container h-full flex items-center justify-center xl:justify-start">
        <div className="w-144 flex flex-col items-center lg:items-start text-center xl:text-left">
          <h1 className="h1 mb-8 text-primary">
            Interior Design That Reflects Your Lifestyle
          </h1>
          <p className="mb-8 md:text-lg">
            Elevate your home with personalized interior design solutions that
            combine creativity, functionality, and timeless style. Our expert
            team transforms ordinary spaces into inspiring environments tailored
            just for you.
          </p>
          <button type="button" className="mx-auto xl:mx-0 btn btn-primary">
            Request a Free Quote
            <ArrowRight className="text-accent" />
          </button>
        </div>
      </div>
    </section>
  );
};
