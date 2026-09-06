import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ProblemSolution from "@/components/sections/ProblemSolution";
import HowItWorks from "@/components/sections/HowItWorks";
import ServiceRoutes from "@/components/sections/ServiceRoutes";
import PricingTable from "@/components/sections/PricingTable";
import ServiceCommitments from "@/components/sections/ServiceCommitments";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";

export default function Page() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <ProblemSolution />
      <HowItWorks />
      <ServiceRoutes />
      <PricingTable />
      <ServiceCommitments />
      <Testimonials />
      <Faq />
      <FinalCta />
    </main>
  );
}
