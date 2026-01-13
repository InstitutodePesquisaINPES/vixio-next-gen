import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import founderImage from "@/assets/founder.png";

const highlights = [
  "Mais de 8 anos de experiência em tecnologia",
  "Especialistas em Python, PHP e inteligência artificial",
  "Metodologias ágeis e entregas dentro do prazo",
  "Suporte técnico dedicado e personalizado",
  "Parceria de longo prazo com nossos clientes",
];

export function AboutSection() {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative z-10 rounded-2xl overflow-hidden glow-accent">
                <img
                  src={founderImage}
                  alt="Fundador Vixio"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 md:right-8 z-20 glass-card p-6 max-w-xs"
              >
                <div className="text-4xl font-bold gradient-text mb-1">8+</div>
                <div className="text-sm text-muted-foreground">
                  Anos transformando empresas com tecnologia
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full border border-primary/30 animate-pulse-glow" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeader
              badge="Sobre Nós"
              title="Tecnologia que impulsiona resultados"
              description="A Vixio nasceu da paixão por transformar dados em soluções que geram valor real. Combinamos expertise técnica com visão estratégica para entregar sistemas inteligentes que fazem a diferença."
              align="left"
            />

            <ul className="mt-8 space-y-4">
              {highlights.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="gradient-primary text-primary-foreground glow-primary"
                asChild
              >
                <Link to="/sobre">
                  Conheça Nossa História
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <Link to="/contato">
                  Entre em Contato
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
