import { TestimonialSlider } from "@/components/testimonial-slider";

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container mt-20 xl:mt-50 relative z-20 py-10 lg:py-20 bg-accent-secondary rounded-2xl">
        <h2 className="mb-8 h2 text-center">What Our Clients Say</h2>
        <p className="mb-8 md:text-lg text-center max-w-200 mx-auto">
          Discover genuine feedback from our clients who trusted us with their
          interior design projects. Their stories highlight our dedication to
          creating stylish, functional, and comfortable spaces tailored to
          individual lifestyles.
        </p>
        <TestimonialSlider />
      </div>
    </section>
  );
};
