import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { WorldsSection } from "@/components/home/WorldsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ProblemsSection } from "@/components/home/ProblemsSection";
import { TechnologiesSection } from "@/components/home/TechnologiesSection";
import { ClientsSection } from "@/components/home/ClientsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <section id="worlds">
        <WorldsSection />
      </section>
      <AboutSection />
      <ProblemsSection />
      <TechnologiesSection />
      <ClientsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
