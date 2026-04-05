import chairmanImg from "@/assets/chairman.jpg";
import { motion } from "framer-motion";

const ChairmanMessage = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-primary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              <img
                src={chairmanImg}
                alt="Chairman of SVMS Constructions"
                className="rounded-lg shadow-2xl w-72 md:w-80 h-auto object-cover"
                loading="lazy"
                width={512}
                height={640}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-secondary rounded-lg"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-sm">
              Chairman's Message
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
              A Vision Built on Trust
            </h2>
            <blockquote className="text-primary-foreground/80 text-lg leading-relaxed italic border-l-4 border-secondary pl-6">
              "At SVMS Constructions, we don't just build structures — we build communities, memories, and a legacy of trust. Every brick we lay carries the weight of our commitment to excellence and the dreams of families who choose us."
            </blockquote>
            <div>
              <p className="text-secondary font-heading font-bold text-xl">Adi Narayana</p>
              <p className="text-primary-foreground/60 text-sm">Chairman & Managing Director</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanMessage;
