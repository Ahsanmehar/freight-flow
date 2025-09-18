import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionTitle from "@/components/SectionTitle";
import ProgressIndicator from "./ProgressIndicator";
import FormSteps from "./FormSteps";

const steps = [
  {
    id: 1,
    title: "Personal Information",
    subtitle: "Basic contact details",
  },
  {
    id: 2,
    title: "Equipment Information",
    subtitle: "Truck and trailer details",
  },
  {
    id: 3,
    title: "Document Upload",
    subtitle: "Required certificates and licenses",
  },
];

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone) => {
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return phoneRegex.test(phone.replace(/\D/g, ""));
};

const validateZipCode = (zipCode) => {
  return /^\d{5}(-\d{4})?$/.test(zipCode);
};

function DriverSignupPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const validateStep = () => {
    const newErrors = {};

    switch (currentStep) {
      case 1:
        if (!formData.firstName?.trim())
          newErrors.firstName = "First name is required";
        if (!formData.lastName?.trim())
          newErrors.lastName = "Last name is required";
        if (!formData.email?.trim()) {
          newErrors.email = "Email is required";
        } else if (!validateEmail(formData.email)) {
          newErrors.email = "Please enter a valid email address";
        }
        if (!formData.phone?.trim()) {
          newErrors.phone = "Phone number is required";
        } else if (!validatePhone(formData.phone)) {
          newErrors.phone = "Please enter a valid phone number";
        }
        if (formData.zipCode && !validateZipCode(formData.zipCode)) {
          newErrors.zipCode = "Please enter a valid ZIP code";
        }
        break;
      case 2:
        if (!formData.truckType) newErrors.truckType = "Truck type is required";
        break;
      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen py-8 px-2.5">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <SectionTitle
          title="Driver Registration"
          paragraph="Complete all steps to join our network of professional drivers"
          center
          width="665px"
          showIcon={true}
        />

        {/* Progress Indicator */}
        <ProgressIndicator currentStep={currentStep} steps={steps} />

        {/* Form */}
        <Card className="bg-bg2 shadow-sm">
          <CardContent className="p-4 md:p-8">
            <FormSteps
              currentStep={currentStep}
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              setErrors={setErrors}
            />

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8 mt-8 border-t border-white/30">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="px-6"
              >
                Previous
              </Button>
              <Button variant="secondary" onClick={nextStep} className="px-6">
                {currentStep === 3 ? "Submit" : "Next Step"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default DriverSignupPage;
