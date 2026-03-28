import { ShieldCheck, Clock, Gem, Headphones } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "RERA Registered", description: "All projects are RERA approved for complete transparency and trust." },
  { icon: Clock, title: "On-Time Delivery", description: "Committed to delivering every project on schedule, every time." },
  { icon: Gem, title: "Quality Construction", description: "Premium materials and world-class engineering in every home." },
  { icon: Headphones, title: "24/7 Support", description: "Round-the-clock customer support for all your queries." },
];

const WhyUs = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-2">
            Our Promise
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary">
            Why Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((f) => (
            <div key={f.title} className="text-center p-6 rounded-lg bg-muted/50 hover:bg-gold-light transition-colors duration-300 group">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                <f.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="font-heading font-bold text-primary text-lg mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
