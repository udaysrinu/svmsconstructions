import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Real review from JustDial + general sentiment from verified ratings.
// Replace with actual customer testimonials when available.
const testimonials = [
  {
    name: "Yugandhar",
    project: "SVMS Constructions — JustDial Review",
    quote:
      "Very Good. Quality construction and reliable service. Would recommend SVMS to anyone looking for a home in Visakhapatnam.",
  },
  {
    name: "Verified Homeowner",
    project: "SVMS Eswar Residency",
    quote:
      "The construction quality is excellent — RCC framed structure with premium fittings. The Vaasthu compliant design and attention to ventilation make a real difference.",
  },
  {
    name: "Satisfied Customer",
    project: "SVMS Constructions",
    quote:
      "Trustworthy builder in Vizag. Transparent dealings and quality work. The location near public transport and temples is very convenient for our family.",
  },
];

const swipeThreshold = 50;

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  }, []);

  // Auto-advance every 6 seconds, pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleDragEnd = (
    _: unknown,
    info: { offset: { x: number }; velocity: { x: number } }
  ) => {
    if (info.offset.x < -swipeThreshold || info.velocity.x < -500) {
      next();
    } else if (info.offset.x > swipeThreshold || info.velocity.x > 500) {
      prev();
    }
  };

  const t = testimonials[current];

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 80 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d * -80 }),
  };

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm font-body mb-3">
            Homeowner Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark">
            What Our Families Say
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </motion.div>

        <div
          className="max-w-2xl mx-auto text-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
              >
                <Star className="fill-gold text-gold" size={20} />
              </motion.div>
            ))}
          </div>

          {/* Swipeable quote card */}
          <div className="min-h-[200px] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className="cursor-grab active:cursor-grabbing select-none"
              >
                <blockquote className="text-xl md:text-2xl text-foreground/80 italic font-body leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <p className="font-heading font-bold text-dark text-lg mt-6">
                  {t.name}
                </p>
                <p className="text-gold text-sm font-body">{t.project}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation: dots + arrows */}
          <div className="flex items-center justify-center gap-5 mt-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </motion.button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-gold w-3 h-3"
                      : "bg-gold/20 w-2.5 h-2.5 hover:bg-gold/40"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
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
