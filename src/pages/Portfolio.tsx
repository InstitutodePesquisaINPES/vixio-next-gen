import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";

const categories = ["Todos", "Business Intelligence", "Machine Learning", "Sistemas Web", "Automação"];

const projects = [
  {
    id: 1,
    title: "Dashboard de BI para Varejo",
    category: "Business Intelligence",
    description: "Sistema completo de análise de vendas com previsões de demanda usando machine learning. Redução de 35% nos custos operacionais.",
    fullDescription: "Desenvolvemos um sistema completo de Business Intelligence para uma grande rede varejista, integrando dados de mais de 200 lojas em tempo real. O dashboard permite visualização de KPIs, análise de tendências e previsões de demanda utilizando modelos de machine learning.",
    technologies: ["Python", "Power BI", "PostgreSQL", "Azure"],
    results: ["35% redução de custos", "Real-time analytics", "200+ lojas integradas"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Plataforma de Automação Industrial",
    category: "Automação",
    description: "Solução IoT para monitoramento e controle de processos industriais em tempo real com alertas inteligentes.",
    fullDescription: "Sistema de automação industrial que integra sensores IoT para monitoramento contínuo de equipamentos, com alertas preditivos baseados em machine learning para manutenção preventiva.",
    technologies: ["Python", "React", "AWS IoT", "TensorFlow"],
    results: ["50% menos paradas", "Manutenção preditiva", "ROI em 6 meses"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Sistema de Gestão Hospitalar",
    category: "Sistemas Web",
    description: "ERP personalizado para gestão completa de clínicas e hospitais com agendamento inteligente.",
    fullDescription: "ERP completo para gestão hospitalar incluindo prontuário eletrônico, agendamento inteligente de consultas, gestão financeira e integração com sistemas de convênios.",
    technologies: ["PHP", "Laravel", "MySQL", "Vue.js"],
    results: ["80% mais eficiência", "Zero papel", "15 unidades"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Chatbot com IA Generativa",
    category: "Machine Learning",
    description: "Assistente virtual inteligente para atendimento ao cliente com processamento de linguagem natural.",
    fullDescription: "Chatbot empresarial com IA generativa capaz de entender contexto, responder perguntas complexas e escalar para atendimento humano quando necessário. Integrado com sistemas internos da empresa.",
    technologies: ["Python", "OpenAI", "FastAPI", "React"],
    results: ["70% automação", "24/7 disponível", "NPS +40 pontos"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Plataforma de E-commerce B2B",
    category: "Sistemas Web",
    description: "Marketplace B2B com integração ERP, gestão de pedidos e analytics avançado.",
    fullDescription: "Plataforma de e-commerce B2B desenvolvida para distribuidora, com catálogo inteligente, precificação dinâmica, integração com ERP e analytics de comportamento de compra.",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
    results: ["300% mais vendas", "2000+ clientes", "API integrada"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Sistema de Detecção de Fraudes",
    category: "Machine Learning",
    description: "Modelo de ML para detecção de fraudes em tempo real com 99.5% de precisão.",
    fullDescription: "Sistema de detecção de fraudes financeiras utilizando ensemble de modelos de machine learning, processando milhões de transações em tempo real com altíssima precisão.",
    technologies: ["Python", "Scikit-learn", "Kafka", "Kubernetes"],
    results: ["99.5% precisão", "Real-time", "R$50M economizados"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
              Portfólio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Projetos que{" "}
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-300 bg-clip-text text-transparent">
                geram impacto
              </span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Conheça alguns dos projetos que desenvolvemos e os resultados 
              que entregamos para nossos clientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-background border-b border-border sticky top-20 z-30 backdrop-blur-xl bg-background/80">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group glass-card overflow-hidden hover-lift cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-background/50 backdrop-blur-sm text-foreground hover:bg-background/80 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-8">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
                  {selectedProject.category}
                </span>
                <h2 className="text-2xl font-bold text-foreground mt-4 mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {selectedProject.fullDescription}
                </p>

                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  {selectedProject.results.map((result, i) => (
                    <div key={i} className="bg-secondary rounded-lg p-4 text-center">
                      <div className="text-lg font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
                        {result}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Portfolio;
