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
        {stats.map((stat) => (
          <div key={stat.label} className="text-center animate-count-up">
            <p className="text-3xl md:text-4xl font-heading font-bold text-secondary">
              {stat.value}
            </p>
            <p className="text-primary-foreground/70 text-sm mt-1 tracking-wide">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
