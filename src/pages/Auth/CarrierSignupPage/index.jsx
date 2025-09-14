import SectionTitle from "@/components/SectionTitle";
import ToggleGroup from "@/components/ToggleGroup";
import StepperForm from "./components/steperform";

export default function CarrierSignupPage() {
  return <main>
    <section className="carrier-signup">
     <div className="min-h-screen py-8 px-2.5">
      <div className="max-w-4xl mx-auto">
        {/* Header */}

        <SectionTitle
          title="Carrier Onboarding"
          paragraph="Join our network of trusted shippers and carriers"
          center
          width="665px"
          showIcon={true}
        />

        {/* toggle group */}
        <div className="flex justify-center w-full mb-8">
          <ToggleGroup onOptionChange={(option) => console.log(option)} />
        </div>


      {/* for section form */}
        <div className="flex justify-center w-full mb-8">
           <StepperForm /> 
        </div>
   
     
      </div>
     </div>
    </section>
  </main>;
}
