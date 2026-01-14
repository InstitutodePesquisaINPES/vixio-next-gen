import { motion } from "framer-motion";
import { 
  AlertTriangle, CheckCircle2, ArrowRight, 
  TrendingDown, Users, Database, Clock, Target, Brain,
  Lightbulb, BarChart3, Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

const problems = [
  {
    icon: TrendingDown,
    problem: "Decisões estratégicas baseadas em intuição",
    consequence: "Perda de receita, investimentos errados, oportunidades desperdiçadas",
    solution: "Dashboard executivo com indicadores em tempo real + treinamento para leitura de dados",
    approach: "Diagnóstico → Modelagem → Dashboard → Capacitação",
    category: "Ciência de Dados",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Database,
    problem: "Dados espalhados em planilhas, sistemas e papel",
    consequence: "Inconsistência de informações, retrabalho, impossibilidade de análise",
    solution: "Arquitetura de dados unificada + pipelines de integração automatizados",
    approach: "Mapeamento → Arquitetura → Integração → Validação",
    category: "Ciência de Dados",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Clock,
    problem: "Processos manuais que consomem tempo da equipe",
    consequence: "Custo operacional alto, erros humanos, baixa escalabilidade",
    solution: "Automação inteligente com RPA e IA + sistema de monitoramento",
    approach: "Diagnóstico → Priorização → Automação → Monitoramento",
    category: "Engenharia de Sistemas",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Users,
    problem: "Alta rotatividade e decisões de RH sem fundamento",
    consequence: "Custos de turnover, perda de talentos, clima organizacional ruim",
    solution: "People Analytics com modelos preditivos de retenção e performance",
    approach: "Assessment → Modelagem → Dashboard RH → Ações",
    category: "Ciência de Dados",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Target,
    problem: "Equipe despreparada para cultura data-driven",
    consequence: "Resistência à mudança, subutilização de ferramentas, retorno baixo",
    solution: "Programa de capacitação em camadas + assessment de maturidade contínuo",
    approach: "Diagnóstico → Programa → Execução → Mensuração",
    category: "Educação Corporativa",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    icon: AlertTriangle,
    problem: "Sistema legado travando crescimento do negócio",
    consequence: "Limitação operacional, risco de segurança, perda de competitividade",
    solution: "Sistema sob medida com arquitetura moderna e migração assistida",
    approach: "Diagnóstico → Desenho → Desenvolvimento → Migração",
    category: "Engenharia de Sistemas",
    gradient: "from-amber-500 to-orange-500",
  },
];

const stats = [
  { value: "+85%", label: "dos problemas resolvidos em <90 dias" },
  { value: "3x", label: "ROI médio em projetos de dados" },
  { value: "100%", label: "de entregas com documentação executiva" },
];

export function ProblemsSection() {
  return (
    <section className="section-padding bg-muted/10">
      <div className="container-custom">
        <SectionHeader
          badge="Problemas que Resolvemos"
          title="Não vendemos"
          titleHighlight="Projetos"
          description="Resolvemos problemas concretos do seu negócio. Cada entrega tem início, meio e fim — com resultado mensurável."
        />

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Problems Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 group hover-lift"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${item.gradient} bg-opacity-10 shrink-0`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground">
                  {item.category}
                </span>
              </div>

              {/* Problem */}
              <h3 className="text-lg font-bold text-foreground mb-3">
                {item.problem}
              </h3>

              {/* Consequence */}
              <div className="flex items-start gap-2 mb-4 p-3 rounded-lg bg-red-500/5 border border-red-500/10">
                <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                <p className="text-sm text-red-300/80">
                  {item.consequence}
                </p>
              </div>

              {/* Solution */}
              <div className="flex items-start gap-2 mb-4 p-3 rounded-lg bg-green-500/5 border border-green-500/10">
                <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                <p className="text-sm text-green-300/80">
                  {item.solution}
                </p>
              </div>

              {/* Approach */}
              <div className="pt-3 border-t border-border/50">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Lightbulb className="w-3 h-3" />
                  <span className="font-medium">Abordagem:</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{item.approach}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            <strong className="text-foreground">Não encontrou seu problema?</strong> Cada organização é única. 
            Agende uma conversa e apresente seu desafio — sem compromisso.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8"
            asChild
          >
            <Link to="/contato">
              Apresentar meu desafio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
