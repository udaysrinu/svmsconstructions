import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Phone } from "lucide-react";
import heroImage from "@/assets/hero-building.jpg";

/** Word-by-word blur-to-sharp reveal */
function WordReveal({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) {
  return (
    <>
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: "blur(8px)", y: 14 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.12,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full-bleed original building render */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
          src={heroImage}
          alt="SVMS Constructions premium residential project in Visakhapatnam"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/85 via-dark/60 to-dark/30" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-dark/70 to-transparent" />
      </div>

      {/* Content — centered on mobile, left on desktop */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl pt-8 md:pt-12">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-cream/90 text-sm font-body font-medium tracking-wide">
                Trusted Builder in Visakhapatnam
              </span>
            </motion.div>

            {/* Brand + tagline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-3">
              <WordReveal text="SVMS" delay={0.4} />
              <br />
              <WordReveal text="Constructions" delay={0.6} />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="text-xl md:text-2xl font-body font-light text-gold mb-6"
            >
              We Build Your Dream Home.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.3, ease: "easeOut" }}
              className="text-cream/70 text-lg font-body font-light max-w-lg mb-4"
            >
              A Comfort Living — Vaasthu-compliant residential projects with
              premium construction quality in Visakhapatnam.
            </motion.p>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-cream/50 text-sm font-body mb-8"
            >
              <span>RCC Framed Structure</span>
              <span className="text-gold/40">|</span>
              <span>ISI Standards</span>
              <span className="text-gold/40">|</span>
              <span>4.8/5 on JustDial</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.7, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#projects">
                <Button
                  size="lg"
                  className="bg-gold text-white hover:bg-gold/90 rounded-full px-8 py-6 text-base font-body font-semibold transition-transform hover:scale-105 cursor-pointer"
                >
                  View Our Projects
                </Button>
              </a>
              <a href="tel:+919848011696">
                <Button
                  size="lg"
                  className="bg-white text-dark hover:bg-cream rounded-full px-8 py-6 text-base font-body font-semibold transition-all hover:scale-105 cursor-pointer gap-2"
                >
                  <Phone size={18} />
                  Call Now
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-cream/50" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
