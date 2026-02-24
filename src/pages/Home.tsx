import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Stats } from "@/components/sections/stats";
import { Integrations } from "@/components/sections/integrations";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <Integrations />
      <CTA />
    </>
  );
}
