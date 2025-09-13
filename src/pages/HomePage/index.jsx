import Hero from "./hero";
import WhyChoose from "./whychoose";
import CounterSection from "./counter";
import TrustSection from "./trust";

export default function HomePage() {

  return (
    <>
      <main className="text-secondary text-2xl font-bold">
        <Hero />
        <WhyChoose />
        <CounterSection />
        <TrustSection />
      </main>
    </>
  );
}