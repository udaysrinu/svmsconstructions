import { motion } from "framer-motion";

const stats = [
  { value: "19+", label: "Years of Excellence" },
  { value: "45+", label: "Projects Delivered" },
  { value: "12,000+", label: "Happy Families" },
  { value: "6", label: "Cities" },
];

const StatsBar = () => {
  return (
    <section className="bg-primary py-10 md:py-14">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="text-3xl md:text-4xl font-heading font-bold text-secondary">
              {stat.value}
            </p>
            <p className="text-primary-foreground/70 text-sm mt-1 tracking-wide">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
