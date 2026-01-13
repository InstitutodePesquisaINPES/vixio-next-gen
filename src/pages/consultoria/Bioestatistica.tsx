import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { 
  ArrowRight, Microscope, FileText, BarChart2, Activity, 
  ChevronRight, CheckCircle2, FlaskConical, Heart, Shield,
  BookOpen, Award, Users, TrendingUp, Dna, Pill, ClipboardList,
  Calculator, Target, Zap, Eye, AlertCircle, Timer, Database,
  PieChart, Binary, Sparkles, GraduationCap, Building2
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

const expertiseAreas = [
  {
    icon: FlaskConical,
    title: "Ensaios Clínicos",
    description: "Suporte estatístico completo para todas as fases de desenvolvimento clínico de medicamentos e dispositivos.",
    capabilities: [
      "Desenho de estudos Fase I-IV",
      "Cálculo amostral e power analysis",
      "Randomização estratificada e em blocos",
      "Análises interinas com futility/efficacy stopping",
      "Análise de dados conforme protocolo e ITT",
      "Tabelas, listagens e figuras (TLF) para submissão"
    ],
    standards: ["ICH E6 (GCP)", "ICH E9 (Statistical)", "FDA 21 CFR Part 11"]
  },
  {
    icon: BarChart2,
    title: "Análise Estatística Avançada",
    description: "Aplicação rigorosa de métodos estatísticos para pesquisas biomédicas, epidemiológicas e de saúde pública.",
    capabilities: [
      "Modelos lineares e generalizados (GLM, GLMM)",
      "Análise de sobrevivência (Kaplan-Meier, Cox, AFT)",
      "Meta-análises e revisões sistemáticas",
      "Análise multivariada (PCA, FA, MCA)",
      "Modelos de equações estruturais (SEM)",
      "Análise de dados longitudinais"
    ],
    standards: ["STROBE", "CONSORT", "PRISMA"]
  },
  {
    icon: Database,
    title: "Real World Evidence (RWE)",
    description: "Análises de dados do mundo real para suporte a decisões clínicas e regulatórias.",
    capabilities: [
      "Estudos observacionais retrospectivos/prospectivos",
      "Análise de registros eletrônicos de saúde (EHR)",
      "Propensity Score Matching e IPTW",
      "Análise de claims e bases administrativas",
      "Estudos de utilização de medicamentos",
      "Avaliação de efetividade comparativa"
    ],
    standards: ["ISPE Guidelines", "EMA RWD Framework", "FDA RWE Program"]
  },
  {
    icon: Calculator,
    title: "Avaliação de Tecnologias em Saúde (ATS)",
    description: "Análises econômicas e de impacto para incorporação de tecnologias em saúde.",
    capabilities: [
      "Análise de custo-efetividade (CEA)",
      "Análise de custo-utilidade (CUA) com QALY",
      "Análise de impacto orçamentário (BIA)",
      "Modelagem de Markov e microssimulação",
      "Análise de sensibilidade (PSA, DSA)",
      "Avaliação de valor baseada em evidências"
    ],
    standards: ["NICE Guidelines", "CONITEC", "ISPOR Standards"]
  },
];

const studyDesigns = [
  {
    type: "Ensaio Clínico Randomizado",
    icon: FlaskConical,
    description: "Padrão-ouro para demonstrar eficácia",
    designs: ["Paralelo", "Crossover", "Factorial", "Cluster", "Adaptive"],
    analysis: ["ANCOVA", "Mixed Models", "GEE", "MMRM"]
  },
  {
    type: "Estudos Observacionais",
    icon: Eye,
    description: "Dados do mundo real e hipóteses causais",
    designs: ["Coorte", "Caso-Controle", "Transversal", "Ecológico"],
    analysis: ["Propensity Score", "Instrumental Variables", "Difference-in-Differences"]
  },
  {
    type: "Meta-Análises",
    icon: Sparkles,
    description: "Síntese quantitativa de evidências",
    designs: ["Pairwise", "Network (NMA)", "IPD Meta-Analysis"],
    analysis: ["Random Effects", "GRADE Assessment", "Publication Bias"]
  },
  {
    type: "Estudos Diagnósticos",
    icon: Target,
    description: "Avaliação de testes e biomarcadores",
    designs: ["Acurácia diagnóstica", "Prognóstico", "Prediction Models"],
    analysis: ["ROC/AUC", "Calibração", "Validação Interna/Externa"]
  },
];

const therapeuticAreas = [
  { icon: Heart, name: "Cardiologia", studies: "Hipertensão, IC, FA, DAC" },
  { icon: Dna, name: "Oncologia", studies: "Sólidos, hematológicos, imunoterapia" },
  { icon: Activity, name: "Neurologia", studies: "Alzheimer, Parkinson, esclerose" },
  { icon: Pill, name: "Infectologia", studies: "HIV, hepatites, antimicrobianos" },
  { icon: Users, name: "Pediatria", studies: "Vacinas, desenvolvimento, raras" },
  { icon: Microscope, name: "Reumatologia", studies: "AR, LES, espondiloartrites" },
];

const regulatoryCompliance = [
  {
    agency: "ANVISA",
    country: "Brasil",
    description: "Agência Nacional de Vigilância Sanitária",
    services: [
      "Dossiês de registro de medicamentos",
      "Estudos de bioequivalência",
      "Relatórios de segurança (PBRER/PSUR)",
      "Pareceres técnicos para submissão"
    ]
  },
  {
    agency: "FDA",
    country: "EUA",
    description: "Food and Drug Administration",
    services: [
      "IND/NDA Statistical Sections",
      "Análises conforme ICH E9/E9(R1)",
      "FDA 21 CFR Part 11 compliance",
      "Integrated Summary of Safety/Efficacy"
    ]
  },
  {
    agency: "EMA",
    country: "Europa",
    description: "European Medicines Agency",
    services: [
      "CTD Module 5 preparation",
      "Scientific Advice meetings support",
      "Risk-benefit assessment",
      "Pediatric Investigation Plans (PIP)"
    ]
  },
];

const methodology = [
  {
    phase: "01",
    title: "Planejamento Estatístico",
    description: "Desenho rigoroso do estudo com fundamentos metodológicos sólidos.",
    deliverables: [
      "Protocolo estatístico (SAP)",
      "Cálculo amostral justificado",
      "Plano de randomização",
      "Case Report Forms (CRF)",
      "Data Management Plan"
    ]
  },
  {
    phase: "02",
    title: "Gestão de Dados",
    description: "Coleta, validação e preparação de dados seguindo padrões GCP.",
    deliverables: [
      "Database design (CDISC)",
      "Edit checks e validation",
      "Data cleaning documentation",
      "Coding (MedDRA, WHO-DD)",
      "Database lock memo"
    ]
  },
  {
    phase: "03",
    title: "Análise Estatística",
    description: "Execução das análises conforme plano pré-especificado.",
    deliverables: [
      "Análises pré-especificadas",
      "Análises exploratórias",
      "Sensitivity analyses",
      "Subgroup analyses",
      "Programs validation (double programming)"
    ]
  },
  {
    phase: "04",
    title: "Relatórios & Submissão",
    description: "Documentação completa para publicação e submissão regulatória.",
    deliverables: [
      "Statistical Report (CSR Section)",
      "TLFs para submissão",
      "Datasets CDISC (SDTM, ADaM)",
      "Define.xml",
      "Suporte para queries de agências"
    ]
  },
];

const softwareExpertise = [
  { name: "SAS", category: "Industry Standard", use: "Análises clínicas, submissões regulatórias" },
  { name: "R", category: "Statistical Computing", use: "Análises avançadas, visualizações, Shiny" },
  { name: "STATA", category: "Epidemiology", use: "Surveys, análise de sobrevida, meta-análises" },
  { name: "Python", category: "Data Science", use: "ML, processamento, automação" },
  { name: "Medidata Rave", category: "EDC", use: "Data management, eCRF" },
  { name: "nQuery", category: "Sample Size", use: "Power analysis, adaptive designs" },
];

const credentials = [
  { value: "200+", label: "Estudos Clínicos", description: "Todas as fases (I-IV)" },
  { value: "50+", label: "Publicações Indexadas", description: "Journals de alto impacto" },
  { value: "20+", label: "Anos de Experiência", description: "Em pesquisa clínica" },
  { value: "99%", label: "Taxa de Aprovação", description: "Em submissões regulatórias" },
];

const publications = [
  {
    title: "Análise de Não-Inferioridade em Ensaios Cardiovasculares",
    journal: "Statistical Methods in Medical Research",
    year: "2024",
    type: "Metodologia"
  },
  {
    title: "Propensity Score em Estudos Observacionais: Revisão Prática",
    journal: "Revista de Saúde Pública",
    year: "2023",
    type: "Revisão"
  },
  {
    title: "Network Meta-Analysis em Oncologia: Aplicações e Limitações",
    journal: "Journal of Clinical Epidemiology",
    year: "2023",
    type: "Metodologia"
  },
];

export default function Bioestatistica() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-dark" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        {/* DNA Helix Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <pattern id="dna-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M20 0 Q40 20 20 40 Q0 60 20 80" fill="none" stroke="rgba(16,185,129,0.5)" strokeWidth="0.5" />
              <path d="M60 0 Q40 20 60 40 Q80 60 60 80" fill="none" stroke="rgba(16,185,129,0.5)" strokeWidth="0.5" />
              <line x1="20" y1="10" x2="60" y2="10" stroke="rgba(16,185,129,0.3)" strokeWidth="0.5" />
              <line x1="20" y1="30" x2="60" y2="30" stroke="rgba(16,185,129,0.3)" strokeWidth="0.5" />
              <line x1="20" y1="50" x2="60" y2="50" stroke="rgba(16,185,129,0.3)" strokeWidth="0.5" />
              <line x1="20" y1="70" x2="60" y2="70" stroke="rgba(16,185,129,0.3)" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dna-pattern)" />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                to="/consultoria" 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-8 hover:bg-emerald-500/20 transition-colors"
              >
                <Microscope className="w-4 h-4" />
                Consultoria
                <ChevronRight className="w-4 h-4" />
                Bioestatística & Pesquisa Clínica
              </Link>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              <span className="text-white">Bio</span>
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                estatística
              </span>
              <span className="text-white"> Avançada</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            >
              Rigor científico e metodologia estatística de excelência para pesquisa clínica, 
              estudos epidemiológicos, submissões regulatórias e publicações de alto impacto.
              Da hipótese à publicação, com conformidade internacional.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 text-lg"
                asChild
              >
                <Link to="/contato">
                  Solicitar Proposta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-500/50 text-lg"
                asChild
              >
                <Link to="/portfolio">Ver Publicações</Link>
              </Button>
            </motion.div>

            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {credentials.map((item, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-muted/20 border border-border/30">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    {item.value}
                  </div>
                  <div className="text-sm font-medium text-foreground mt-1">{item.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{item.description}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Therapeutic Areas */}
      <section className="py-16 bg-muted/10">
        <div className="container-custom">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium">
              <Dna className="w-4 h-4" />
              Áreas Terapêuticas
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {therapeuticAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass-card p-4 text-center hover-lift"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-500/10 flex items-center justify-center mb-3">
                  <area.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h4 className="font-bold text-foreground text-sm">{area.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{area.studies}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Expertise"
            title="Áreas de"
            titleHighlight="Especialização"
            description="Suporte estatístico completo para todas as etapas da pesquisa científica e desenvolvimento clínico."
          />

          <div className="mt-16 space-y-8">
            {expertiseAreas.map((area, index) => (
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
                    <div className="p-4 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit mb-4">
                      <area.icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{area.title}</h3>
                    <p className="mt-3 text-muted-foreground">{area.description}</p>
                    <div className="mt-6">
                      <h5 className="text-xs font-semibold text-emerald-400 mb-2">PADRÕES SEGUIDOS</h5>
                      <div className="flex flex-wrap gap-2">
                        {area.standards.map((standard, idx) => (
                          <span key={idx} className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
                            {standard}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <div className="grid md:grid-cols-2 gap-3">
                      {area.capabilities.map((capability, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
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

      {/* Study Designs Section */}
      <section className="section-padding bg-muted/10">
        <div className="container-custom">
          <SectionHeader
            badge="Metodologia"
            title="Tipos de"
            titleHighlight="Estudos"
            description="Expertise em todos os desenhos de estudo reconhecidos pela comunidade científica."
          />

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {studyDesigns.map((design, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card card-shimmer p-8 hover-lift"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <design.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">{design.type}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{design.description}</p>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-xs font-semibold text-emerald-400 mb-3">DESENHOS</h5>
                    <div className="flex flex-wrap gap-2">
                      {design.designs.map((d, idx) => (
                        <span key={idx} className="px-2 py-1 rounded-md bg-muted/50 text-foreground text-xs">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-emerald-400 mb-3">ANÁLISES</h5>
                    <div className="flex flex-wrap gap-2">
                      {design.analysis.map((a, idx) => (
                        <span key={idx} className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Compliance Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Compliance"
            title="Conformidade"
            titleHighlight="Regulatória"
            description="Análises alinhadas com exigências de agências reguladoras globais."
          />

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {regulatoryCompliance.map((agency, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-emerald-500/10">
                    <Shield className="w-8 h-8 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{agency.agency}</h3>
                    <p className="text-sm text-muted-foreground">{agency.country}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-6">{agency.description}</p>
                <ul className="space-y-3">
                  {agency.services.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Timeline */}
      <section className="section-padding bg-muted/10">
        <div className="container-custom">
          <SectionHeader
            badge="Processo"
            title="Fluxo de"
            titleHighlight="Trabalho"
            description="Metodologia rigorosa seguindo padrões internacionais de pesquisa clínica."
          />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 relative"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center justify-center">
                    <span className="text-lg font-bold text-emerald-400">{phase.phase}</span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground">{phase.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{phase.description}</p>
                <ul className="space-y-2">
                  {phase.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Ferramentas"
            title="Software"
            titleHighlight="Estatístico"
            description="Domínio das principais ferramentas utilizadas na indústria farmacêutica e pesquisa acadêmica."
          />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {softwareExpertise.map((software, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card p-5 hover:border-emerald-500/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold text-foreground">{software.name}</span>
                  <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs">
                    {software.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{software.use}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="section-padding bg-muted/10">
        <div className="container-custom">
          <SectionHeader
            badge="Publicações"
            title="Contribuições"
            titleHighlight="Científicas"
            description="Publicações recentes em periódicos indexados de alto impacto."
          />

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-6 hover-lift"
              >
                <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                  {pub.type}
                </span>
                <h4 className="mt-4 font-bold text-foreground leading-tight">{pub.title}</h4>
                <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                  <span className="italic">{pub.journal}</span>
                  <span>{pub.year}</span>
                </div>
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
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-teal-500/10 to-emerald-500/5" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                Suporte Estatístico Especializado
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Da hipótese à{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  publicação
                </span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
                Seja para ensaios clínicos, publicações científicas ou submissões regulatórias, 
                nossa equipe de bioestatísticos está pronta para garantir rigor metodológico e sucesso.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8"
                  asChild
                >
                  <Link to="/contato">
                    Consultar Especialista
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-emerald-500/50"
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
