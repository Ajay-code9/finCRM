import { Hero } from "@/components/sections/hero";
import { SolutionShowcase } from "@/components/sections/solution-showcase";
import { Stats } from "@/components/sections/stats";
import { HomeProductShowcase } from "@/components/sections/home-product-showcase";
import { HomeLoyaltySecurity } from "@/components/sections/home-loyalty-security";
import { Features } from "@/components/sections/features";
import { Integrations } from "@/components/sections/integrations";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <SolutionShowcase />
      <Stats />
      <HomeProductShowcase />
      <HomeLoyaltySecurity />
      <Features />
      <Integrations />
      <CTA />
    </>
  );
}
