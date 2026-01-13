import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";

const technologies = [
  { name: "Python", category: "Backend & Data Science" },
  { name: "PHP", category: "Web Development" },
  { name: "JavaScript", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "TensorFlow", category: "Machine Learning" },
  { name: "PyTorch", category: "Machine Learning" },
  { name: "Pandas", category: "Data Science" },
  { name: "Scikit-learn", category: "Machine Learning" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "Power BI", category: "Analytics" },
  { name: "Tableau", category: "Analytics" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export function TechnologiesSection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container-custom">
        <SectionHeader
          badge="Stack Tecnológico"
          title="Tecnologias que dominamos"
          description="Utilizamos as melhores ferramentas do mercado para entregar soluções robustas, escaláveis e de alta performance."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative px-6 py-3 glass-card cursor-default"
            >
              <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                {tech.name}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {tech.category}
              </div>
              
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "16+", label: "Tecnologias Dominadas" },
            { value: "5+", label: "Linguagens de Programação" },
            { value: "100%", label: "Código Limpo" },
            { value: "24/7", label: "Monitoramento" },
          ].map((stat, index) => (
            <div key={index} className="text-center glass-card py-8">
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
