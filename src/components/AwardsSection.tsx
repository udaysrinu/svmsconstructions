import { Award } from "lucide-react";

const awards = [
  "Best Builder Award 2023 – CREDAI",
  "Green Building Excellence – IGBC",
  "Best Luxury Project – Times Realty",
  "Customer Satisfaction Award – Housing.com",
  "Innovation in Design – Realty Plus",
  "Top Developer – Economic Times",
];

const AwardsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-2">
            Recognition
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary">
            Awards & Accolades
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {awards.map((award) => (
            <div
              key={award}
              className="flex items-center gap-4 p-5 bg-card rounded-lg border border-border hover:border-secondary/50 transition-colors"
            >
              <div className="shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <Award className="text-secondary" size={22} />
              </div>
              <p className="text-sm font-medium text-foreground">{award}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
