import { motion } from "framer-motion";

const milestones = [
  { year: "2014", title: "The Foundation", description: "SVMS Constructions established in Visakhapatnam with a commitment to quality construction and Vaasthu-compliant design." },
  { year: "2015", title: "First Residential Project", description: "Delivered our first residential project, built with RCC framed structure to ISI standards." },
  { year: "2017", title: "SVMS Eswar Residency", description: "Launched SVMS Eswar Residency at Santhi Nagar, Nad Kotha Road — a landmark project in the area." },
  { year: "2019", title: "Growing Trust", description: "Earned a 4.8/5 rating on JustDial with 28+ verified reviews from happy homeowners." },
  { year: "2021", title: "SVMS Nivas", description: "Completed SVMS Nivas at Marripalem, VUDA Layout — near PF Office with excellent connectivity." },
  { year: "2023", title: "Digital Presence", description: "Listed on IndiaMART, CommonFloor, and D&B. Registered on GST with expanding business operations." },
  { year: "2026", title: "The Next Chapter", description: "Launching our new website and most ambitious projects yet. A comfort living experience awaits." },
];

const Timeline = () => {
  return (
    <section className="bg-cream py-20 md:py-28 overflow-hidden">
      {/* Header */}
      <div className="mb-16">
        <p className="text-gold text-sm font-body font-medium tracking-[0.3em] uppercase mb-3 text-center">
          Our Journey
        </p>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark text-center">
          Building Trust Since 2014
        </h2>
        <div className="w-20 h-0.5 bg-gold mx-auto mt-4" />
      </div>

      {/* Alternating timeline */}
      <div className="container mx-auto px-4 max-w-4xl relative">
        {/* Center gold line */}
        <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gold/20" />

        {milestones.map((m, i) => {
          const isLeft = i % 2 === 0;

          return (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Gold dot on the line */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-1 w-4 h-4 rounded-full bg-gold z-10 ring-4 ring-cream" />

              {/* Card — mobile always right, desktop alternates */}
              <div
                className={`pl-14 md:pl-0 md:w-[calc(50%-2rem)] ${
                  isLeft ? "md:mr-auto md:pr-8 md:text-right" : "md:ml-auto md:pl-8"
                }`}
              >
                <span className="text-4xl md:text-5xl font-heading font-bold text-gold">
                  {m.year}
                </span>
                <h3 className="text-lg font-heading font-semibold text-dark mt-2">
                  {m.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm mt-1.5 leading-relaxed">
                  {m.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;
