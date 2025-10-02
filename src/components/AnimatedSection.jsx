import { forwardRef } from "react";

const AnimatedSection = forwardRef(({ title }, ref) => {
  return (
    <section
      ref={ref}
      className="h-screen flex justify-center items-center bg-gray-100"
    >
      <h2 className="text-5xl font-bold text-gray-800">{title}</h2>
    </section>
  );
});

AnimatedSection.displayName = "AnimatedSection";

export default AnimatedSection;