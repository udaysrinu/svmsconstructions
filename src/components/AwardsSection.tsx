import { Award } from "lucide-react";
import { motion } from "framer-motion";

const awards = [
  "4.8/5 Rating on JustDial — 28+ Verified Reviews",
  "GST Registered — 37ADCFS2419L1ZV",
  "Vaasthu Compliant Designs — ISI Standard Construction",
  "RCC Framed Structure — Premium Quality Materials",
  "Listed on CommonFloor, IndiaMART & D&B",
  "Trusted Builder in Visakhapatnam Since 2014",
];

const AwardsSection = () => {
  return (
    <section className="bg-dark py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm font-body mb-3">
            Recognition
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-cream">
            Trust & Credentials
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {awards.map((award, i) => (
            <motion.div
              key={award}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="animate-float bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-gold/30 hover:shadow-[0_0_20px_rgba(202,138,4,0.15)] transition-all duration-300 cursor-default"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              <div className="flex items-center gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <Award className="text-gold" size={22} />
                </div>
                <p className="text-cream/90 text-sm font-medium font-body">
                  {award}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
