<<<<<<< HEAD
import { Phone } from "lucide-react";
import Pricing from "./pricing";
import { Faqs } from "./Faqs.jsx";
import { Button } from "@/components/ui/button";

export default function PricingPage() {
  return (
    <main>
      <Pricing />

      <section className="container">
        <div className="rounded-xl px-2 bg-gradient-to-r from-[#121212] via-[#1d4 to-[#2C2B35] py-12 text-center text-white shadow-one">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            Need a Custom Solution?
          </h2>
          <p className="mb-6 text-base sm:text-lg text-text2">
            For fleets with 50+ trucks or custom integration needs, we offer
            tailored solutions with dedicated support.
          </p>
          <Button size="sm" className="!px-5">
            <Phone size={18} />
            Contact Sales
          </Button>
        </div>
      </section>

      <Faqs />
    </main>
  );
=======
import React from 'react'

function index() {
  return (
    <div>index</div>
  )
>>>>>>> d42b9b534a9c7ddb7bcf89fa0ab7ef2c5836392f
}

export default index