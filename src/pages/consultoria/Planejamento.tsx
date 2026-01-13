import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { 
  ArrowRight, Target, Compass, Map, Flag, 
  ChevronRight, CheckCircle2, Lightbulb, Rocket,
  BarChart3, Users, TrendingUp, Zap, Eye, Crosshair,
  Layers, GitBranch, Clock, Award, Building2, Cog,
  PieChart, Brain, Shield, FileText, Network, Timer,
  MessageSquare, Calendar, Gauge, AlertCircle, CheckSquare
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

const strategicServices = [
  {
    icon: Compass,
    title: "Diagnóstico Estratégico 360°",
    description: "Análise profunda e estruturada do cenário atual, combinando dados quantitativos com insights qualitativos.",
    capabilities: [
      "Análise SWOT quantificada com scores de impacto",
      "Benchmarking competitivo com métricas comparativas",
      "Mapeamento de mercado com análise de Porter",
      "Gap analysis entre estado atual e desejado",
      "Voice of Customer (VoC) e análise de NPS",
      "Assessment de maturidade organizacional"
    ],
    deliverables: ["Relatório de Diagnóstico", "Mapa de Oportunidades", "Heat Map de Riscos"]
  },
  {
    icon: Target,
    title: "Definição de Metas & KPIs",
    description: "Estabelecimento de objetivos mensuráveis e indicadores-chave alinhados à visão estratégica.",
    capabilities: [
      "Framework OKR com cascateamento organizacional",
      "Balanced Scorecard customizado por área",
      "North Star Metric e métricas de suporte",
      "Leading vs Lagging indicators",
      "Dashboards executivos em tempo real",
      "Rituais de acompanhamento e governança"
    ],
    deliverables: ["Mapa Estratégico", "Dashboard de KPIs", "Playbook de Governance"]
  },
  {
    icon: Map,
    title: "Roadmap Estratégico",
    description: "Planejamento de iniciativas, priorização baseada em impacto e cronogramas de execução.",
    capabilities: [
      "Priorização com framework RICE/ICE",
      "Mapeamento de dependências e riscos",
      "Alocação de recursos e orçamento",
      "Milestone planning com gates de validação",
      "Scenario planning para contingências",
      "Integração com portfolio de projetos"
    ],
    deliverables: ["Roadmap Visual", "Business Cases", "Plano de Recursos"]
  },
  {
    icon: Rocket,
    title: "Gestão de Mudança & Execução",
    description: "Acompanhamento da implementação estratégica com framework de change management.",
    capabilities: [
      "Change management com modelo ADKAR",
      "Stakeholder mapping e engagement plan",
      "Comunicação estratégica multi-canal",
      "Programa de capacitação e upskilling",
      "Quick wins para momentum inicial",
      "Feedback loops e ajustes contínuos"
    ],
    deliverables: ["Change Roadmap", "Training Plan", "Comms Calendar"]
  },
];

const frameworks = [
  { 
    name: "OKRs", 
    fullName: "Objectives & Key Results",
    description: "Framework de metas cascateadas",
    origin: "Intel/Google",
    useCase: "Alinhamento organizacional"
  },
  { 
    name: "Balanced Scorecard", 
    fullName: "BSC - Kaplan & Norton",
    description: "4 perspectivas estratégicas",
    origin: "Harvard Business School",
    useCase: "Visão holística de performance"
  },
  { 
    name: "Porter's 5 Forces", 
    fullName: "Análise Competitiva",
    description: "Forças de mercado",
    origin: "Michael Porter",
    useCase: "Posicionamento competitivo"
  },
  { 
    name: "Blue Ocean", 
    fullName: "Estratégia do Oceano Azul",
    description: "Criação de novos mercados",
    origin: "INSEAD",
    useCase: "Inovação em valor"
  },
  { 
    name: "Business Model Canvas", 
    fullName: "BMC - Osterwalder",
    description: "9 blocos do modelo de negócio",
    origin: "Strategyzer",
    useCase: "Design de modelos de negócio"
  },
  { 
    name: "Jobs to Be Done", 
    fullName: "JTBD Framework",
    description: "Foco no trabalho do cliente",
    origin: "Clayton Christensen",
    useCase: "Inovação centrada no cliente"
  },
];

const processPhases = [
  {
    phase: "01",
    name: "Discovery",
    duration: "2-3 semanas",
    title: "Imersão & Diagnóstico",
    description: "Entendimento profundo do negócio, contexto competitivo e aspirações dos stakeholders.",
    activities: [
      "Entrevistas executivas (C-Level, diretoria)",
      "Análise de dados internos e externos",
      "Workshops de alinhamento estratégico",
      "Benchmark competitivo detalhado",
      "Voice of Customer qualitativo"
    ],
    outputs: [
      "Relatório de Discovery",
      "Stakeholder Map",
      "SWOT Quantificado",
      "Síntese de Insights"
    ]
  },
  {
    phase: "02",
    name: "Strategy",
    duration: "3-4 semanas",
    title: "Formulação Estratégica",
    description: "Definição da visão, objetivos estratégicos e iniciativas prioritárias.",
    activities: [
      "Workshop de visão e ambição",
      "Definição de pillars estratégicos",
      "Priorização de iniciativas (RICE)",
      "Modelagem financeira de cenários",
      "Validação com key stakeholders"
    ],
    outputs: [
      "Estratégia Documentada",
      "OKRs Definidos",
      "Portfolio de Iniciativas",
      "Business Cases"
    ]
  },
  {
    phase: "03",
    name: "Planning",
    duration: "2-3 semanas",
    title: "Planejamento Tático",
    description: "Detalhamento do roadmap, recursos necessários e plano de execução.",
    activities: [
      "Detalhamento de iniciativas",
      "Alocação de recursos e budget",
      "Definição de milestones e gates",
      "Setup de governança e rituais",
      "Preparação de change management"
    ],
    outputs: [
      "Roadmap Detalhado",
      "Plano de Recursos",
      "Governance Framework",
      "Change Roadmap"
    ]
  },
  {
    phase: "04",
    name: "Execution",
    duration: "Contínuo",
    title: "Execução & Acompanhamento",
    description: "Implementação com suporte contínuo, rituais de acompanhamento e ajustes.",
    activities: [
      "Kick-off com equipes",
      "Reuniões semanais de progresso",
      "Reviews mensais com liderança",
      "Troubleshooting de bloqueios",
      "Ajustes baseados em resultados"
    ],
    outputs: [
      "Reports de Progresso",
      "Dashboards Atualizados",
      "Lessons Learned",
      "Roadmap Atualizado"
    ]
  },
];

const differentiators = [
  {
    icon: Brain,
    title: "Data-Driven Strategy",
    description: "Diferente de consultorias tradicionais, cada recomendação é fundamentada em dados. Utilizamos análises quantitativas, modelagem de cenários e simulações para reduzir o viés e aumentar a assertividade."
  },
  {
    icon: Cog,
    title: "Execução Integrada",
    description: "Não entregamos apenas um plano em PowerPoint. Acompanhamos a execução, ajudamos a destravar bloqueios e garantimos que a estratégia saia do papel."
  },
  {
    icon: Users,
    title: "Engajamento Real",
    description: "Metodologia participativa que envolve todos os níveis da organização. Estratégia construída junto, não imposta de fora."
  },
  {
    icon: TrendingUp,
    title: "Foco em Resultados",
    description: "Métricas de sucesso definidas desde o início. ROI calculado e acompanhado. Remuneração atrelada a entrega de valor real."
  },
];

const successMetrics = [
  { value: "300+", label: "Estratégias Implementadas", description: "Em diversos setores" },
  { value: "87%", label: "Metas Atingidas", description: "No primeiro ano" },
  { value: "3.5x", label: "ROI Médio", description: "Retorno sobre investimento" },
  { value: "NPS 72", label: "Satisfação de Clientes", description: "Promotores ativos" },
];

const typicalEngagements = [
  {
    title: "Planejamento Estratégico Anual",
    duration: "8-12 semanas",
    scope: "Ciclo completo de planejamento",
    activities: ["Diagnóstico", "Formulação", "Desdobramento", "Acompanhamento trimestral"]
  },
  {
    title: "Estratégia de Crescimento",
    duration: "6-10 semanas",
    scope: "Foco em expansão e scale-up",
    activities: ["Market sizing", "Go-to-market", "Pricing strategy", "Sales playbook"]
  },
  {
    title: "Transformação Digital",
    duration: "12-20 semanas",
    scope: "Roadmap de digitalização",
    activities: ["Assessment digital", "Priorização", "Quick wins", "Roadmap 24 meses"]
  },
  {
    title: "M&A Strategy",
    duration: "4-8 semanas",
    scope: "Due diligence estratégica",
    activities: ["Fit analysis", "Synergy mapping", "Integration plan", "Value capture"]
  },
];

const industries = [
  { name: "Saúde & Pharma", icon: "🏥" },
  { name: "Varejo & E-commerce", icon: "🛒" },
  { name: "Serviços Financeiros", icon: "🏦" },
  { name: "Tecnologia & SaaS", icon: "💻" },
  { name: "Indústria & Manufatura", icon: "🏭" },
  { name: "Educação", icon: "🎓" },
];

export default function Planejamento() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-dark" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-orange-500/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl" />
        </div>

        {/* Strategic Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                to="/consultoria" 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm font-medium mb-8 hover:bg-amber-500/20 transition-colors"
              >
                <Target className="w-4 h-4" />
                Consultoria
                <ChevronRight className="w-4 h-4" />
                Planejamento Estratégico
              </Link>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              <span className="text-white">Planejamento</span>{" "}
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Estratégico
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            >
              Transforme visão em execução com metodologias comprovadas. 
              Combinamos frameworks de estratégia com análise de dados para construir 
              planos que geram resultados mensuráveis e sustentáveis.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 text-lg"
                asChild
              >
                <Link to="/contato">
                  Agendar Workshop Estratégico
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-500/50 text-lg"
                asChild
              >
                <Link to="/portfolio">Ver Cases</Link>
              </Button>
            </motion.div>

            {/* Success Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {successMetrics.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-muted/20 border border-border/30">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-foreground mt-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.description}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-12 bg-muted/10">
        <div className="container-custom">
          <div className="text-center mb-6">
            <span className="text-sm text-muted-foreground">Experiência em diversos setores</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-muted/30 border border-border/50"
              >
                <span className="text-xl">{industry.icon}</span>
                <span className="text-sm font-medium text-foreground">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Serviços"
            title="Consultoria"
            titleHighlight="Estratégica"
            description="Apoio completo desde o diagnóstico até a implementação e acompanhamento de resultados."
          />

          <div className="mt-16 space-y-8">
            {strategicServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 md:p-10"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="p-4 rounded-xl bg-amber-500/10 text-amber-400 w-fit mb-4">
                      <service.icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                    <p className="mt-3 text-muted-foreground">{service.description}</p>
                    <div className="mt-6">
                      <h5 className="text-xs font-semibold text-amber-400 mb-2">ENTREGÁVEIS</h5>
                      <div className="flex flex-wrap gap-2">
                        {service.deliverables.map((d, idx) => (
                          <span key={idx} className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-medium border border-amber-500/20">
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.capabilities.map((capability, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                          <CheckCircle2 className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                          <span className="text-sm text-foreground">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-muted/10">
        <div className="container-custom">
          <SectionHeader
            badge="Processo"
            title="Jornada"
            titleHighlight="Estratégica"
            description="Uma metodologia estruturada e iterativa para garantir resultados consistentes."
          />

          <div className="mt-16 space-y-6">
            {processPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 md:p-8"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-1/4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-500/50 flex items-center justify-center">
                        <span className="text-2xl font-bold text-amber-400">{phase.phase}</span>
                      </div>
                      <div>
                        <div className="text-xs text-amber-400 font-semibold">{phase.name}</div>
                        <h4 className="text-lg font-bold text-foreground">{phase.title}</h4>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Timer className="w-4 h-4" />
                          {phase.duration}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{phase.description}</p>
                  </div>
                  
                  <div className="lg:w-3/4 grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-sm font-semibold text-amber-400 mb-3">Atividades</h5>
                      <ul className="space-y-2">
                        {phase.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-amber-400 mb-3">Outputs</h5>
                      <ul className="space-y-2">
                        {phase.outputs.map((output, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckSquare className="w-4 h-4 text-amber-400" />
                            {output}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Metodologias"
            title="Frameworks"
            titleHighlight="Estratégicos"
            description="Utilizamos as melhores práticas e metodologias reconhecidas globalmente."
          />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card p-6 hover:border-amber-500/50 transition-colors hover-lift"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xl font-bold text-foreground">{framework.name}</h4>
                  <span className="px-2 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs">
                    {framework.origin}
                  </span>
                </div>
                <p className="text-sm font-medium text-muted-foreground">{framework.fullName}</p>
                <p className="mt-2 text-sm text-muted-foreground">{framework.description}</p>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <span className="text-xs text-amber-400">Uso: {framework.useCase}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Typical Engagements */}
      <section className="section-padding bg-muted/10">
        <div className="container-custom">
          <SectionHeader
            badge="Projetos"
            title="Tipos de"
            titleHighlight="Engajamento"
            description="Modelos de projeto adaptados às necessidades específicas de cada cliente."
          />

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {typicalEngagements.map((engagement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-8 hover-lift"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-bold text-foreground">{engagement.title}</h4>
                  <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-medium">
                    <Clock className="w-3 h-3" />
                    {engagement.duration}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{engagement.scope}</p>
                <div className="flex flex-wrap gap-2">
                  {engagement.activities.map((activity, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-muted/50 text-foreground text-sm border border-border/50">
                      {activity}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Por que Nós"
            title="Nosso"
            titleHighlight="Diferencial"
            description="O que nos diferencia de consultorias estratégicas tradicionais."
          />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((diff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-6 text-center hover-lift"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                  <diff.icon className="w-7 h-7 text-amber-400" />
                </div>
                <h4 className="font-bold text-foreground">{diff.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{diff.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-muted/20 to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-orange-500/10 to-amber-500/5" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm font-medium mb-6">
                <Flag className="w-4 h-4" />
                Próximos Passos
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Pronto para definir sua{" "}
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  estratégia de crescimento?
                </span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
                Agende um workshop estratégico gratuito de 2 horas e descubra como podemos 
                ajudar sua organização a alcançar novos patamares de performance.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8"
                  asChild
                >
                  <Link to="/contato">
                    Agendar Workshop Gratuito
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-amber-500/50"
                  asChild
                >
                  <Link to="/consultoria">Explorar Outras Áreas</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
