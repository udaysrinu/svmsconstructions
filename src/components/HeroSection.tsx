import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-building.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium residential project by SVMS Constructions"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl space-y-6 animate-fade-in-up">
          <p className="text-secondary font-medium tracking-[0.3em] uppercase text-sm">
            Building Dreams Since 2005
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight">
            Luxury Living,{" "}
            <span className="text-gradient-gold">Redefined.</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-lg font-light">
            Experience world-class homes crafted with precision, passion, and a commitment to excellence across India's finest locations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="/#enquiry">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-base px-8 py-6"
              >
                Book Site Visit
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8 py-6"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
