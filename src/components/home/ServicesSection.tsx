import { motion } from "framer-motion";
import { 
  BarChart3, 
  Code2, 
  Database, 
  Brain, 
  Palette, 
  GitBranch,
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/ui/section-header";

const services = [
  {
    icon: BarChart3,
    title: "Análise de Dados",
    description:
      "Extraímos insights valiosos dos seus dados com técnicas avançadas de Business Intelligence e visualização.",
    features: ["Dashboards Interativos", "KPIs Personalizados", "Relatórios Automatizados"],
  },
  {
    icon: Brain,
    title: "Machine Learning & IA",
    description:
      "Desenvolvemos modelos preditivos e soluções de inteligência artificial para automação e otimização.",
    features: ["Modelos Preditivos", "Processamento de Linguagem", "Visão Computacional"],
  },
  {
    icon: Code2,
    title: "Sistemas Inteligentes",
    description:
      "Criamos sistemas sob medida que integram IA e automação para resolver problemas complexos.",
    features: ["APIs Inteligentes", "Automação de Processos", "Integração de Sistemas"],
  },
  {
    icon: Database,
    title: "Engenharia de Dados",
    description:
      "Arquitetamos pipelines de dados robustos e escaláveis para suportar suas operações.",
    features: ["ETL/ELT", "Data Warehousing", "Real-time Processing"],
  },
  {
    icon: Palette,
    title: "Web Design & UX",
    description:
      "Design de interfaces modernas e intuitivas focadas na experiência do usuário.",
    features: ["UI/UX Design", "Design Systems", "Prototipagem"],
  },
  {
    icon: GitBranch,
    title: "Gerenciamento de Projetos",
    description:
      "Metodologias ágeis para entregas eficientes e alinhadas com seus objetivos.",
    features: ["Scrum/Kanban", "Consultoria Técnica", "Roadmap Estratégico"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container-custom">
        <SectionHeader
          badge="Nossos Serviços"
          title="Soluções completas em tecnologia e dados"
          description="Da análise à implementação, oferecemos expertise em todas as etapas da transformação digital da sua empresa."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative glass-card p-8 hover-lift"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
              >
                Saiba mais
                <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>

              {/* Hover gradient border effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border-gradient" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
