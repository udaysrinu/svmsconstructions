import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Anil & Priya Sharma",
    project: "Royal Grandeur",
    quote: "Moving into our 3 BHK at Royal Grandeur was a dream come true. The quality of construction and attention to detail exceeded all our expectations.",
  },
  {
    name: "Dr. Srinivas Reddy",
    project: "Serene Heights",
    quote: "Prasiddhi delivered on every promise. The amenities, the views, and the community feel — everything is top-notch. Highly recommended!",
  },
  {
    name: "Meera & Karthik Nair",
    project: "Royal Grandeur",
    quote: "We compared over 20 projects before choosing Prasiddhi. The transparency, RERA compliance, and on-time delivery made all the difference.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-2">
            Homeowner Stories
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary">
            What Our Families Say
          </h2>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-secondary fill-secondary" size={20} />
            ))}
          </div>
          <blockquote className="text-lg md:text-xl text-foreground/80 italic leading-relaxed mb-8">
            "{t.quote}"
          </blockquote>
          <p className="font-heading font-bold text-primary text-lg">{t.name}</p>
          <p className="text-muted-foreground text-sm">{t.project}</p>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-secondary" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
