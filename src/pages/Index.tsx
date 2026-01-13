import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AboutSection } from "@/components/home/AboutSection";
import { TechnologiesSection } from "@/components/home/TechnologiesSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { ClientsSection } from "@/components/home/ClientsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TechnologiesSection />
      <PortfolioSection />
      <ClientsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
