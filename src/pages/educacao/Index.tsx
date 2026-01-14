import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { 
  ArrowRight, GraduationCap, Target, BookOpen, Users, 
  ChevronRight, Check, Lightbulb, BarChart3, Brain,
  ClipboardCheck, Presentation, Award, Calendar, Lock,
  TrendingUp, Settings, MessageSquare, Zap, Shield,
  AlertTriangle, CheckCircle2, Quote, Star, Clock
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { useState, useEffect } from "react";

// Headlines rotativos para impacto
const headlines = [
  "Não treinamos equipes. Transformamos mentalidades.",
  "Capacitar não é ensinar. É fazer aplicar.",
  "Antes de tecnologia, pessoas preparadas.",
  "Diagnóstico sem ação é desperdício de tempo.",
];

const services = [
  {
    icon: ClipboardCheck,
    title: "Diagnóstico Empresarial & Organizacional",
    description: "Avaliação técnica e estratégica da empresa antes de qualquer decisão crítica.",
    problem: "Decisões tomadas no escuro, sem visão clara do estado atual",
    solution: "Relatório executivo com diagnóstico completo + plano de ação priorizado",
    capabilities: [
      "Diagnóstico de maturidade em dados",
      "Diagnóstico de processos e fluxos",
      "Diagnóstico de gestão, indicadores e governança",
      "Diagnóstico para adoção de sistemas e IA",
      "Assessment de cultura organizacional",
      "Gap analysis e roadmap de evolução",
    ],
    deliverable: "Relatório + Roadmap em até 15 dias",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    icon: BookOpen,
    title: "Capacitações & Formação In Company",
    description: "Programas sob medida para equipes técnicas, gestores e liderança.",
    problem: "Equipes despreparadas para cultura data-driven",
    solution: "Programa estruturado com teoria, prática e mentoria pós-treinamento",
    capabilities: [
      "Leitura e interpretação de dados",
      "Indicadores, KPIs e dashboards executivos",
      "Bioestatística aplicada à gestão e saúde",
      "Uso estratégico de IA e automação",
      "Planejamento estratégico orientado por evidências",
      "Tomada de decisão baseada em dados",
    ],
    deliverable: "Programa + Certificação + Suporte 30 dias",
    gradient: "from-pink-500 to-fuchsia-500",
  },
  {
    icon: Presentation,
    title: "Workshops Estratégicos & Executivos",
    description: "Intervenções de curta duração, focadas em decisão e alinhamento.",
    problem: "Liderança desalinhada, falta de visão compartilhada",
    solution: "Workshop intensivo com entregáveis concretos ao final",
    capabilities: [
      "Workshops de planejamento estratégico",
      "Alinhamento de liderança com dados",
      "Tomada de decisão baseada em evidências",
      "Estratégia, risco e cenário",
      "Definição de OKRs e métricas",
      "Design de cultura data-driven",
    ],
    deliverable: "Workshop + Plano de Ação Imediato",
    gradient: "from-fuchsia-500 to-purple-500",
  },
];

const diagnosticTypes = [
  {
    title: "Maturidade em Dados",
    description: "Nível de uso de dados na tomada de decisão",
    deliverables: ["Relatório de maturidade", "Benchmark setorial", "Roadmap de evolução"],
    duration: "5-7 dias",
  },
  {
    title: "Processos e Fluxos",
    description: "Mapeamento e análise de processos operacionais",
    deliverables: ["Mapa de processos", "Gargalos identificados", "Recomendações práticas"],
    duration: "7-10 dias",
  },
  {
    title: "Governança e Indicadores",
    description: "Estrutura de gestão, KPIs e governança",
    deliverables: ["Assessment de governança", "Análise de KPIs", "Framework recomendado"],
    duration: "5-7 dias",
  },
  {
    title: "Prontidão para Tecnologia",
    description: "Preparação para adoção de sistemas e IA",
    deliverables: ["Diagnóstico de prontidão", "Riscos identificados", "Plano de preparação"],
    duration: "7-10 dias",
  },
];

const trainingPrograms = [
  {
    title: "Fundamentos de Dados para Gestores",
    duration: "8h",
    format: "Presencial ou Online",
    audience: "Gerentes e Coordenadores",
    outcome: "Capacidade de ler e questionar dados",
  },
  {
    title: "Dashboards e Indicadores Executivos",
    duration: "16h",
    format: "Presencial",
    audience: "Liderança e C-Level",
    outcome: "Domínio de painéis e métricas",
  },
  {
    title: "Bioestatística para Saúde",
    duration: "24h",
    format: "Presencial ou Híbrido",
    audience: "Profissionais de Saúde",
    outcome: "Análise estatística aplicada",
  },
  {
    title: "IA e Automação na Prática",
    duration: "12h",
    format: "Online",
    audience: "Equipes Técnicas e Gestores",
    outcome: "Identificar e aplicar IA no dia a dia",
  },
  {
    title: "Planejamento Estratégico Data-Driven",
    duration: "16h",
    format: "Presencial",
    audience: "Diretoria e C-Level",
    outcome: "Estratégia baseada em evidências",
  },
  {
    title: "Cultura de Dados na Organização",
    duration: "8h",
    format: "Workshop",
    audience: "Toda a organização",
    outcome: "Mentalidade analítica disseminada",
  },
];

const differentiators = [
  {
    icon: Brain,
    title: "Expertise + Didática",
    description: "Experiência real de mercado combinada com habilidade para ensinar de forma clara e aplicável.",
    stat: "+500",
    statLabel: "profissionais capacitados",
  },
  {
    icon: Target,
    title: "Foco em Aplicação",
    description: "Conteúdo 100% prático, com casos reais e exercícios aplicáveis ao contexto do cliente.",
    stat: "100%",
    statLabel: "dos programas com projeto prático",
  },
  {
    icon: Settings,
    title: "Personalização Total",
    description: "Programas desenhados para as necessidades específicas de cada organização.",
    stat: "0",
    statLabel: "programas genéricos",
  },
  {
    icon: TrendingUp,
    title: "Mensuração de Impacto",
    description: "Avaliação de resultados e acompanhamento pós-capacitação.",
    stat: "30",
    statLabel: "dias de suporte inclusos",
  },
];

const journeySteps = [
  {
    step: "01",
    title: "Diagnóstico",
    description: "Avaliamos o estado atual da organização, gaps e objetivos",
    duration: "3-5 dias",
    output: "Relatório de diagnóstico",
  },
  {
    step: "02",
    title: "Desenho",
    description: "Projetamos o programa ideal com cronograma e métricas",
    duration: "2-3 dias",
    output: "Proposta técnica detalhada",
  },
  {
    step: "03",
    title: "Execução",
    description: "Realizamos a capacitação ou workshop com material dedicado",
    duration: "Conforme programa",
    output: "Treinamento + Material",
  },
  {
    step: "04",
    title: "Acompanhamento",
    description: "Medimos resultados e oferecemos suporte para aplicação",
    duration: "30 dias",
    output: "Relatório de impacto",
  },
];

const testimonials = [
  {
    quote: "O diagnóstico da Vixio revelou gargalos que não conseguíamos enxergar há anos. Em 3 meses, reduzimos 40% do retrabalho.",
    author: "Diretor de Operações",
    company: "Indústria de Médio Porte",
  },
  {
    quote: "A capacitação mudou a forma como nossa equipe olha para dados. Hoje, toda reunião começa com indicadores.",
    author: "CEO",
    company: "Rede de Saúde",
  },
];

export default function EducacaoIndex() {
  const [currentHeadline, setCurrentHeadline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* Hero Section - Executivo e Impactante */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-dark" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-rose-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-pink-500/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fuchsia-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-400 text-sm font-medium">
                <GraduationCap className="w-4 h-4" />
                Educação Corporativa & Diagnóstico Estratégico
              </span>
            </motion.div>

            {/* Headline Rotativo */}
            <motion.div
              key={currentHeadline}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-400 bg-clip-text text-transparent">
                  {headlines[currentHeadline]}
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-center"
            >
              Antes de analisar, desenvolver ou implantar tecnologia, avaliamos se a organização 
              está preparada — e capacitamos as pessoas para sustentar a decisão.
            </motion.p>

            {/* Proposta de Valor Clara */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {[
                { icon: ClipboardCheck, label: "Diagnóstico Preciso", desc: "Entendemos o problema real" },
                { icon: Lightbulb, label: "Solução Aplicável", desc: "Desenhamos o caminho" },
                { icon: Users, label: "Equipe Preparada", desc: "Capacitamos para executar" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center mb-3">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground">{item.label}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 text-lg"
                asChild
              >
                <Link to="/contato">
                  Solicitar Diagnóstico Gratuito
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-rose-500/30 text-foreground hover:bg-rose-500/10"
                asChild
              >
                <Link to="#metodologia">
                  Ver Metodologia
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            {/* Badge de Autoridade */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 flex items-center justify-center gap-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-rose-400" />
                <span>Confidencialidade total</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-rose-400" />
                <span>Proposta em 48h</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-rose-400" />
                <span>+500 profissionais capacitados</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filosofia - Posicionamento de Autoridade */}
      <section className="py-16 bg-gradient-to-r from-rose-500/10 via-pink-500/5 to-fuchsia-500/10 border-y border-rose-500/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Quote className="w-10 h-10 text-rose-400/50 mx-auto mb-6" />
            <p className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed">
              "Diagnóstico que não vira ação é perda de tempo. Treinamento que não muda comportamento é custo.{" "}
              <span className="text-rose-400">Entregamos transformação mensurável.</span>"
            </p>
            <p className="mt-6 text-muted-foreground">— Filosofia Vixio</p>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Com Problema/Solução */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="O que Entregamos"
            title="Três Frentes de"
            titleHighlight="Atuação"
            description="Cada serviço é desenhado para resolver um problema específico — com entrega concreta e prazo definido."
          />

          <div className="mt-16 space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 md:p-10 hover-lift"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${service.gradient} bg-opacity-10 w-fit mb-4`}>
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                    <p className="mt-3 text-muted-foreground">{service.description}</p>
                    
                    {/* Problema/Solução */}
                    <div className="mt-4 space-y-3">
                      <div className="flex items-start gap-2 p-3 rounded-lg bg-red-500/5 border border-red-500/10">
                        <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                        <p className="text-sm text-red-300/80">{service.problem}</p>
                      </div>
                      <div className="flex items-start gap-2 p-3 rounded-lg bg-green-500/5 border border-green-500/10">
                        <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                        <p className="text-sm text-green-300/80">{service.solution}</p>
                      </div>
                    </div>

                    {/* Entrega */}
                    <div className="mt-4 p-3 rounded-lg bg-rose-500/10 border border-rose-500/20">
                      <p className="text-sm font-medium text-rose-300">
                        <Zap className="w-4 h-4 inline mr-2" />
                        {service.deliverable}
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <h4 className="text-sm font-medium text-muted-foreground mb-4">O que está incluído:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.capabilities.map((capability, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                          <Check className="w-5 h-5 text-rose-400 mt-0.5 shrink-0" />
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

      {/* Diagnostic Types */}
      <section className="section-padding bg-muted/10">
        <div className="container-custom">
          <SectionHeader
            badge="Diagnósticos"
            title="Tipos de"
            titleHighlight="Diagnóstico"
            description="Avaliações especializadas com prazo e entrega definidos."
          />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diagnosticTypes.map((diagnostic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-6 hover-lift"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-bold text-foreground">{diagnostic.title}</h4>
                  <span className="text-xs px-2 py-1 rounded-full bg-rose-500/10 text-rose-400">
                    {diagnostic.duration}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{diagnostic.description}</p>
                <div className="space-y-1.5">
                  {diagnostic.deliverables.map((deliverable, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Check className="w-3 h-3 text-rose-400" />
                      {deliverable}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Capacitações"
            title="Programas de"
            titleHighlight="Formação"
            description="Treinamentos estruturados com resultado mensurável."
          />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-6 hover-lift"
              >
                <h4 className="font-bold text-foreground mb-3">{program.title}</h4>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-rose-400" />
                    {program.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Presentation className="w-4 h-4 text-rose-400" />
                    {program.format}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-rose-400" />
                    {program.audience}
                  </div>
                </div>
                <div className="pt-3 border-t border-border/50">
                  <div className="flex items-center gap-2 text-sm">
                    <Target className="w-4 h-4 text-green-400" />
                    <span className="text-green-300/80">{program.outcome}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Steps - Metodologia */}
      <section id="metodologia" className="section-padding bg-muted/10">
        <div className="container-custom">
          <SectionHeader
            badge="Metodologia"
            title="Como"
            titleHighlight="Trabalhamos"
            description="Processo estruturado com entregas claras em cada etapa."
          />

          <div className="mt-12 grid md:grid-cols-4 gap-6">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                {index < journeySteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-rose-500/50 to-transparent z-0" />
                )}
                <div className="glass-card p-6 relative z-10">
                  <div className="text-4xl font-bold text-rose-400/20 mb-2">{step.step}</div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                  <div className="pt-3 border-t border-border/50 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3 text-rose-400" />
                      {step.duration}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-rose-300">
                      <Zap className="w-3 h-3" />
                      {step.output}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Diferenciais"
            title="Por que"
            titleHighlight="Escolher a Vixio"
            description="O que nos torna únicos em educação corporativa e diagnóstico."
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
                <div className="w-14 h-14 mx-auto rounded-2xl bg-rose-500/10 flex items-center justify-center mb-4">
                  <diff.icon className="w-7 h-7 text-rose-400" />
                </div>
                <div className="text-3xl font-bold text-rose-400 mb-1">{diff.stat}</div>
                <div className="text-xs text-muted-foreground mb-3">{diff.statLabel}</div>
                <h4 className="text-lg font-bold text-foreground mb-2">{diff.title}</h4>
                <p className="text-sm text-muted-foreground">{diff.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/10">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-rose-400 text-rose-400" />
                  ))}
                </div>
                <p className="text-lg text-foreground italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-500/20 via-pink-500/10 to-fuchsia-500/20 p-12 md:p-16"
          >
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Sua organização está{" "}
                <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                  preparada para decidir?
                </span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Solicite um diagnóstico inicial gratuito. Em 48h você terá uma proposta 
                e em 15 dias, um relatório executivo completo.
              </p>

              {/* Quick Process */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <MessageSquare className="w-4 h-4 text-rose-400" />
                  <span>Conversa inicial</span>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <Clock className="w-4 h-4 text-rose-400" />
                  <span>Proposta em 48h</span>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <Zap className="w-4 h-4 text-rose-400" />
                  <span>Relatório em 15 dias</span>
                </div>
              </div>

              <div className="mt-10">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-10"
                  asChild
                >
                  <Link to="/contato">
                    Solicitar Diagnóstico Gratuito
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
