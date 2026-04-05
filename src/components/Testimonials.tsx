import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Anil & Priya Sharma",
    project: "SVMS Grand Residency",
    quote: "Moving into our 3 BHK at SVMS Grand Residency was a dream come true. The quality of construction and attention to detail exceeded all our expectations.",
  },
  {
    name: "Dr. Srinivas Reddy",
    project: "SVMS Serenity Heights",
    quote: "SVMS delivered on every promise. The amenities, the views, and the community feel — everything is top-notch. Highly recommended!",
  },
  {
    name: "Meera & Karthik Nair",
    project: "SVMS Grand Residency",
    quote: "We compared over 20 projects before choosing SVMS. The transparency, RERA compliance, and on-time delivery made all the difference.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  };

  const t = testimonials[current];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-2">
            Homeowner Stories
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary">
            What Our Families Say
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
              >
                <Star className="text-secondary fill-secondary" size={20} />
              </motion.div>
            ))}
          </div>
          <div className="min-h-[160px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.35 }}
              >
                <blockquote className="text-lg md:text-xl text-foreground/80 italic leading-relaxed mb-8">
                  "{t.quote}"
                </blockquote>
                <p className="font-heading font-bold text-primary text-lg">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.project}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </motion.button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <motion.span
                  key={i}
                  animate={{ scale: i === current ? 1.3 : 1 }}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-secondary" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
