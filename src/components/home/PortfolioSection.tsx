import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

const projects = [
  {
    id: 1,
    title: "Dashboard de BI para Varejo",
    category: "Business Intelligence",
    description: "Sistema completo de análise de vendas com previsões de demanda usando machine learning.",
    technologies: ["Python", "Power BI", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Plataforma de Automação Industrial",
    category: "Sistemas Inteligentes",
    description: "Solução IoT para monitoramento e controle de processos industriais em tempo real.",
    technologies: ["Python", "React", "AWS"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Sistema de Gestão Hospitalar",
    category: "Desenvolvimento Web",
    description: "ERP personalizado para gestão completa de clínicas e hospitais.",
    technologies: ["PHP", "MySQL", "Vue.js"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Chatbot com IA Generativa",
    category: "Machine Learning",
    description: "Assistente virtual inteligente para atendimento ao cliente com processamento de linguagem natural.",
    technologies: ["Python", "TensorFlow", "FastAPI"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export function PortfolioSection() {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container-custom">
        <SectionHeader
          badge="Portfólio"
          title="Projetos que geram impacto"
          description="Conheça alguns dos projetos que desenvolvemos e os resultados que entregamos para nossos clientes."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative glass-card overflow-hidden hover-lift"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  to={`/portfolio/${project.id}`}
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
                >
                  Ver detalhes
                  <ExternalLink className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 hover:bg-primary/10"
            asChild
          >
            <Link to="/portfolio">
              Ver Todos os Projetos
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
