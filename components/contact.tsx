import { ArrowRight } from "lucide-react";

export const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container py-20 bg-primary sm:rounded-[70px]">
        <h2 className="mb-8 h2 text-center text-white">
          Do you want to join Interno?
        </h2>
        <p className="mb-8 md:text-lg text-center max-w-200 mx-auto text-white">
          It is a long established fact will be distracted.
        </p>
        <button type="button" className="btn btn-accent mx-auto">
          Connect with us
          <ArrowRight className="text-primary" />
        </button>
      </div>
    </section>
  );
};
