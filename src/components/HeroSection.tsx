import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-building.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroImage}
          alt="Premium residential project by SVMS Constructions"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-secondary font-medium tracking-[0.3em] uppercase text-sm"
          >
            Building Dreams Since 2005
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight"
          >
            Luxury Living,{" "}
            <span className="text-gradient-gold">Redefined.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-primary-foreground/80 text-lg md:text-xl max-w-lg font-light"
          >
            Experience world-class homes crafted with precision, passion, and a commitment to excellence in Visakhapatnam.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <a href="/#enquiry">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-base px-8 py-6 hover:scale-105 transition-transform"
              >
                Book Site Visit
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8 py-6 hover:scale-105 transition-transform"
            >
              Download Brochure
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
