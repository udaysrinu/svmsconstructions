import chairmanImg from "@/assets/chairman.jpg";
import { motion } from "framer-motion";

const ChairmanMessage = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FAF8F3 0%, #F5F0E8 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Chairman portrait */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative">
              <img
                src={chairmanImg}
                alt="Chairman of SVMS Constructions"
                className="rounded-2xl shadow-2xl w-72 md:w-96 h-auto object-cover"
                loading="lazy"
                width={512}
                height={640}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-4 -right-4 w-28 h-28 border-4 border-gold rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Right: Quote */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <span className="text-[120px] leading-none font-heading text-gold/20 absolute -top-8 -left-4 select-none pointer-events-none">
              &ldquo;
            </span>

            <p className="text-gold text-sm font-body font-medium tracking-[0.3em] uppercase mb-3">
              Chairman's Message
            </p>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark">
              A Vision Built on Trust
            </h2>

            <blockquote className="border-l-4 border-gold pl-6 text-foreground/70 text-lg leading-relaxed italic font-body mt-6">
              "At SVMS Constructions, we don't just build structures — we build
              communities, memories, and a legacy of trust. Every brick we lay
              carries the weight of our commitment to excellence and the dreams
              of families who choose us."
            </blockquote>

            <div className="mt-6">
              <p className="text-gold font-heading font-bold text-xl">
                P. Venkata Adinarayana
              </p>
              <p className="text-muted-foreground text-sm font-body">
                Founder &amp; Proprietor
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanMessage;
