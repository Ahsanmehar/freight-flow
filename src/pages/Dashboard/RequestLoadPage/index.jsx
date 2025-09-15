import React from "react";
import { animate } from "motion";
import SectionTitle from "@/Components/SectionTitle";
import LoadForm from "./LoadForm";
import Sidebar from "./Sidebar";

export default function RequestLoadPage() {
  React.useEffect(() => {
    animate("main", { opacity: [0, 1], y: [-30, 0] }, { duration: 0.8 });
  }, []);

  return (
    <div className="min-h-screen w-full px-6 py-8 sm:px-10 lg:px-20 font-sans text-white">
      <SectionTitle
        title="Request a Load"
        paragraph="Fill out the details below and we'll match you with available carriers"
        mb="40px"
      />
      <main className="flex flex-col lg:flex-row gap-8">
        <LoadForm />
        <Sidebar />
      </main>
    </div>
  );
}
