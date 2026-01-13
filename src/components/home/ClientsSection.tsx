import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";

// Placeholder logos - replace with actual client logos
const clients = [
  { name: "TechCorp", logo: "TC" },
  { name: "DataFlow", logo: "DF" },
  { name: "InnovateTech", logo: "IT" },
  { name: "SmartSolutions", logo: "SS" },
  { name: "CloudPrime", logo: "CP" },
  { name: "DigiServe", logo: "DS" },
  { name: "ByteLogic", logo: "BL" },
  { name: "NetWave", logo: "NW" },
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
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export function ClientsSection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container-custom">
        <SectionHeader
          badge="Nossos Clientes"
          title="Empresas que confiam em nós"
          description="Temos orgulho de trabalhar com empresas inovadoras que buscam excelência em tecnologia."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group glass-card p-8 flex items-center justify-center cursor-default"
            >
              <div className="flex flex-col items-center gap-3">
                {/* Placeholder logo - replace with actual logos */}
                <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center text-2xl font-bold text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-all">
                  {client.logo}
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {client.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 max-w-3xl mx-auto text-center"
        >
          <blockquote className="glass-card p-8 md:p-12 relative">
            {/* Quote marks */}
            <div className="absolute top-4 left-6 text-6xl text-primary/20 font-serif">
              "
            </div>
            <p className="text-lg md:text-xl text-foreground italic relative z-10">
              A Vixio transformou completamente nossa análise de dados. Os dashboards 
              são intuitivos e as previsões de machine learning nos ajudaram a reduzir 
              custos em 35% no primeiro ano.
            </p>
            <footer className="mt-6">
              <div className="font-semibold text-foreground">Carlos Silva</div>
              <div className="text-sm text-muted-foreground">
                Diretor de Operações, TechCorp
              </div>
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
