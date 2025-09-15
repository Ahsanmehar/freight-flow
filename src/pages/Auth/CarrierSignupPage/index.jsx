import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import ToggleGroup from "@/components/ToggleGroup";
import StepperForm from "./components/steperform";
import { CompanyDetails } from "./components/CompanyDetails";

const ComplianceForm = () => (
  <div className="text-center text-white">
    <h2>Compliance Information</h2>
    {/* Add your compliance form fields here */}
  </div>
);

const BankingForm = () => (
  <div className="text-center text-white">
    <h2>Banking Details</h2>
    {/* Add your banking form fields here */}
  </div>
);

export default function CarrierSignupPage() {
  const [activeSection, setActiveSection] = useState('company');
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const renderFormSection = () => {
    switch (activeSection) {
      case 'company':
        return (
          <CompanyDetails
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            setErrors={setErrors}
          />
        );
      case 'compliance':
        return <ComplianceForm />;
      case 'banking':
        return <BankingForm />;
      default:
        return null;
    }
  };

  return (
    <main>
      <section className="carrier-signup">
        <div className="min-h-screen py-8 px-2.5">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              title="Carrier Onboarding"
              paragraph="Join our network of trusted shippers and carriers"
              center
              width="665px"
              showIcon={true}
            />

            <div className="flex justify-center w-full mb-8">
              <ToggleGroup onOptionChange={setActiveSection} />
            </div>

            <div className="flex justify-center w-full mb-8">
              {renderFormSection()}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
