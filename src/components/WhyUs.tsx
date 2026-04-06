import { ShieldCheck, Clock, Gem, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: ShieldCheck,
    title: "RERA Registered",
    description:
      "All projects are RERA approved for complete transparency and trust.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "Committed to delivering every project on schedule, every time.",
  },
  {
    icon: Gem,
    title: "Quality Construction",
    description:
      "Premium materials and world-class engineering in every home.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Round-the-clock customer support for all your queries.",
  },
];

const WhyUs = () => {
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
            Our Promise
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark">
            Why Choose Us
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-2xl p-8 text-center cursor-default group"
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5 transition-colors duration-300 group-hover:bg-gold"
              >
                <f.icon
                  className="text-gold transition-colors duration-300 group-hover:text-white"
                  size={28}
                />
              </motion.div>
              <h3 className="font-heading font-bold text-dark text-lg mb-2">
                {f.title}
              </h3>
              <p className="text-muted-foreground text-sm font-body">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
