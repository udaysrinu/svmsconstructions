import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Maximize, TreePine } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

const statusColors: Record<string, string> = {
  "Under Construction": "bg-gold text-white",
  "Ready to Move": "bg-emerald-600 text-white",
  "Upcoming": "bg-blue-600 text-white",
};

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <Link
        to={`/project/${project.id}`}
        className="group relative block rounded-xl hover:-translate-y-2 transition-all duration-300 shadow-elegant hover:shadow-xl"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <div
            className="absolute inset-0 z-10 rounded-xl pointer-events-none"
            style={{
              background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(202,138,4,0.1), transparent 70%)`,
            }}
          />
        )}

        <div className="relative h-64 overflow-hidden rounded-t-xl">
          <motion.div
            className="w-full h-full"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ clipPath: "inset(0% 0 0 0)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
              width={800}
              height={600}
            />
          </motion.div>
          <Badge
            className={`absolute top-4 right-4 z-20 ${statusColors[project.status]} text-xs font-semibold`}
          >
            {project.status}
          </Badge>
        </div>

        <div className="p-6 bg-white rounded-b-xl space-y-3">
          <h3 className="text-xl font-heading font-bold text-dark">
            {project.name}
          </h3>

          <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
            <MapPin size={14} />
            <span>{project.location}</span>
          </div>

          <div className="flex items-center gap-4 text-sm text-foreground/70">
            <span>{project.bhk}</span>
            <span className="flex items-center gap-1">
              <Maximize size={14} />
              {project.sizeRange}
            </span>
            <span className="flex items-center gap-1">
              <TreePine size={14} />
              {project.acres} Acres
            </span>
          </div>

          <p className="text-lg font-bold text-gold">{project.priceRange}</p>

          <div className="pt-2">
            <span className="relative text-gold font-medium text-sm after:w-0 group-hover:after:w-full after:transition-all after:duration-300 after:h-0.5 after:bg-gold after:block">
              View Details
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

const FeaturedProjects = () => {
  return (
    <section id="projects" className="bg-cream py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gold text-sm font-body font-medium tracking-[0.3em] uppercase mb-3">
            Our Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark">
            Our Signature Projects
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
