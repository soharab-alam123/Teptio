import React from 'react';
import { SEO } from '../components/common/SEO';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { Hero } from '../components/home/Hero';
import { ServiceSelector } from '../components/home/ServiceSelector';
import { AsymmetricServices } from '../components/home/AsymmetricServices';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { HowItWorks } from '../components/home/HowItWorks';
import { SignatureEcosystem } from '../components/home/SignatureEcosystem';
import { TestimonialsSlider } from '../components/home/TestimonialsSlider';
import { FAQSection } from '../components/home/FAQSection';

export const Home = () => {
  return (
    <>
      <SEO
        title="Everything You Need. Right When You Need It."
        description="One trusted platform for rides, deliveries, beauty, home services and everyday essentials across Lucknow. Fixed rates, verified specialists."
      />
      <main className="w-full overflow-x-hidden">
        <Hero />
        
        <ScrollReveal variant="fade-up" amount={0.1} duration={0.7}>
          <ServiceSelector />
        </ScrollReveal>

        <ScrollReveal variant="fade-up" amount={0.12} duration={0.75}>
          <AsymmetricServices />
        </ScrollReveal>

        <ScrollReveal variant="scale-up" amount={0.12} duration={0.75}>
          <WhyChooseUs />
        </ScrollReveal>

        <ScrollReveal variant="fade-up" amount={0.12} duration={0.75}>
          <HowItWorks />
        </ScrollReveal>

        <ScrollReveal variant="fade-up" amount={0.12} duration={0.75}>
          <SignatureEcosystem />
        </ScrollReveal>

        <ScrollReveal variant="fade-up" amount={0.12} duration={0.75}>
          <TestimonialsSlider />
        </ScrollReveal>

        <ScrollReveal variant="fade-up" amount={0.12} duration={0.75}>
          <FAQSection />
        </ScrollReveal>
      </main>
    </>
  );
};
