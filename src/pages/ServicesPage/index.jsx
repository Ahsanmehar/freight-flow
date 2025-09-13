import ServicesSection from "./services";
import HowItWorks from "./howworks";
import CompareSection from "./table";

export default function ServicesPage() {
  return <main className="overflow-hidden bg-bg1">
    <ServicesSection />
    <CompareSection />
    <HowItWorks />
  </main>;
}