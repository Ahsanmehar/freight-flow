import React, { useState } from "react";
import { Truck, Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SectionTitle from "@/components/SectionTitle";

const steps = [
  {
    id: 1,
    title: "Personal Information",
    subtitle: "Basic contact details",
  },
  {
    id: 2,
    title: "Company Details",
    subtitle: "MC/DOT and business info",
  },
  {
    id: 3,
    title: "Equipment Information",
    subtitle: "Truck and trailer details",
  },
  {
    id: 4,
    title: "Document Upload",
    subtitle: "Required certificates and licenses",
  },
];

const states = ["California", "Texas", "Florida", "New York"];

// Validation functions
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone) => {
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
};

const validateMCNumber = (mcNumber) => {
  return /^\d{7}$/.test(mcNumber.replace(/\D/g, ''));
};

const validateDOTNumber = (dotNumber) => {
  return /^\d{7,8}$/.test(dotNumber.replace(/\D/g, ''));
};

const validateZipCode = (zipCode) => {
  return /^\d{5}(-\d{4})?$/.test(zipCode);
};

const validateFederalId = (federalId) => {
  return /^\d{2}-\d{7}$/.test(federalId);
};

function ProgressIndicator({ currentStep, steps }) {
  return (
    <div className="w-full mb-8">
      <div className="flex flex-col md:flex-row items-center justify-between relative gap-y-6">
        {/* Progress line */}
        <div className="absolute -top-6 left-0 right-0 h-2 bg-text2 rounded">
          <div
            className="h-full bg-bright-blue2 transition-all duration-300 rounded"
            style={{
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>

        {steps.map((step, index) => (
          <div
            key={step.id}
            className="flex flex-col items-center relative bg-whi px-4"
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold mb-2 transition-all duration-200 ${
                step.id < currentStep
                  ? "bg-bright-blue1 text-white"
                  : step.id === currentStep
                  ? "bg-bright-blue1 text-white"
                  : "bg-white/80 text-black/90"
              }`}
            >
              {step.id < currentStep ? <Check className="w-5 h-5" /> : step.id}
            </div>
            <div className="text-center">
              <div
                className={`text-sm font-medium ${
                  step.id <= currentStep ? "text-bright-blue1" : "text-text1"
                }`}
              >
                {step.title}
              </div>
              <div className="text-xs text-text2">{step.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ErrorMessage({ message }) {
  return (
    <div className="flex items-center mt-1 text-red-400 text-sm">
      <AlertCircle className="w-4 h-4 mr-1" />
      {message}
    </div>
  );
}

function PersonalInformationStep({ formData, setFormData, errors, setErrors }) {
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const validateField = (field, value) => {
    let error = "";
    
    switch (field) {
      case "firstName":
        if (!value.trim()) error = "First name is required";
        break;
      case "lastName":
        if (!value.trim()) error = "Last name is required";
        break;
      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!validateEmail(value)) {
          error = "Please enter a valid email address";
        }
        break;
      case "phone":
        if (!value.trim()) {
          error = "Phone number is required";
        } else if (!validatePhone(value)) {
          error = "Please enter a valid phone number";
        }
        break;
      case "zipCode":
        if (value && !validateZipCode(value)) {
          error = "Please enter a valid ZIP code";
        }
        break;
      default:
        break;
    }
    
    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }));
    
    return !error;
  };

  const handleBlur = (field, value) => {
    validateField(field, value);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-6">
          Step 1: Personal Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <Label
              htmlFor="firstName"
              className="text-sm font-medium text-text1"
            >
              First Name *
            </Label>
            <Input
              id="firstName"
              value={formData.firstName || ""}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              onBlur={(e) => handleBlur("firstName", e.target.value)}
              className="mt-2"
              placeholder="Enter first name"
            />
            {errors.firstName && <ErrorMessage message={errors.firstName} />}
          </div>
          <div>
            <Label
              htmlFor="lastName"
              className="text-sm font-medium text-text1"
            >
              Last Name *
            </Label>
            <Input
              id="lastName"
              value={formData.lastName || ""}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              onBlur={(e) => handleBlur("lastName", e.target.value)}
              className="mt-2"
              placeholder="Enter last name"
            />
            {errors.lastName && <ErrorMessage message={errors.lastName} />}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <Label htmlFor="email" className="text-sm font-medium text-text1">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email || ""}
              onChange={(e) => handleInputChange("email", e.target.value)}
              onBlur={(e) => handleBlur("email", e.target.value)}
              className="mt-2"
              placeholder="Enter email address"
            />
            {errors.email && <ErrorMessage message={errors.email} />}
          </div>
          <div>
            <Label htmlFor="phone" className="text-sm font-medium text-text1">
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone || ""}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              onBlur={(e) => handleBlur("phone", e.target.value)}
              className="mt-2"
              placeholder="Enter phone number"
            />
            {errors.phone && <ErrorMessage message={errors.phone} />}
          </div>
        </div>

        <div className="mb-4">
          <Label
            htmlFor="streetAddress"
            className="text-sm font-medium text-text1"
          >
            Street Address
          </Label>
          <Input
            id="streetAddress"
            value={formData.streetAddress || ""}
            onChange={(e) => handleInputChange("streetAddress", e.target.value)}
            className="mt-2"
            placeholder="Enter street address"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="city" className="text-sm font-medium text-text1">
              City
            </Label>
            <Input
              id="city"
              value={formData.city || ""}
              onChange={(e) => handleInputChange("city", e.target.value)}
              className="mt-2"
              placeholder="Enter city"
            />
          </div>
          <div>
            <Label htmlFor="state" className="text-sm font-medium text-text1">
              State
            </Label>
            <Select
              value={formData.state || ""}
              onValueChange={(value) => handleInputChange("state", value)}
            >
              <SelectTrigger className="w-full mt-2 !h-14">
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                {states.map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="zipCode" className="text-sm font-medium text-text1">
              ZIP Code
            </Label>
            <Input
              id="zipCode"
              value={formData.zipCode || ""}
              onChange={(e) => handleInputChange("zipCode", e.target.value)}
              onBlur={(e) => handleBlur("zipCode", e.target.value)}
              className="mt-2"
              placeholder="Enter ZIP code"
            />
            {errors.zipCode && <ErrorMessage message={errors.zipCode} />}
          </div>
        </div>
      </div>
    </div>
  );
}

function CompanyDetailsStep({ formData, setFormData, errors, setErrors }) {
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const validateField = (field, value) => {
    let error = "";
    
    switch (field) {
      case "companyName":
        if (!value.trim()) error = "Company name is required";
        break;
      case "mcNumber":
        if (!value.trim()) {
          error = "MC number is required";
        } else if (!validateMCNumber(value)) {
          error = "MC number must be 7 digits";
        }
        break;
      case "dotNumber":
        if (!value.trim()) {
          error = "DOT number is required";
        } else if (!validateDOTNumber(value)) {
          error = "DOT number must be 7-8 digits";
        }
        break;
      case "federalId":
        if (value && !validateFederalId(value)) {
          error = "Please enter a valid Tax ID (format: XX-XXXXXXX)";
        }
        break;
      default:
        break;
    }
    
    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }));
    
    return !error;
  };

  const handleBlur = (field, value) => {
    validateField(field, value);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-6">
          Step 2: Company Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <Label
              htmlFor="companyName"
              className="text-sm font-medium text-text1"
            >
              Company Name *
            </Label>
            <Input
              id="companyName"
              value={formData.companyName || ""}
              onChange={(e) => handleInputChange("companyName", e.target.value)}
              onBlur={(e) => handleBlur("companyName", e.target.value)}
              className="mt-2"
              placeholder="Enter company name"
            />
            {errors.companyName && <ErrorMessage message={errors.companyName} />}
          </div>
          <div>
            <Label
              htmlFor="mcNumber"
              className="text-sm font-medium text-text1"
            >
              MC Number *
            </Label>
            <Input
              id="mcNumber"
              value={formData.mcNumber || ""}
              onChange={(e) => handleInputChange("mcNumber", e.target.value)}
              onBlur={(e) => handleBlur("mcNumber", e.target.value)}
              className="mt-2"
              placeholder="Enter MC number"
            />
            {errors.mcNumber && <ErrorMessage message={errors.mcNumber} />}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <Label
              htmlFor="dotNumber"
              className="text-sm font-medium text-text1"
            >
              DOT Number *
            </Label>
            <Input
              id="dotNumber"
              value={formData.dotNumber || ""}
              onChange={(e) => handleInputChange("dotNumber", e.target.value)}
              onBlur={(e) => handleBlur("dotNumber", e.target.value)}
              className="mt-2"
              placeholder="Enter DOT number"
            />
            {errors.dotNumber && <ErrorMessage message={errors.dotNumber} />}
          </div>
          <div>
            <Label
              htmlFor="federalId"
              className="text-sm font-medium text-text1"
            >
              Tax ID (EIN)
            </Label>
            <Input
              id="federalId"
              value={formData.federalId || ""}
              onChange={(e) => handleInputChange("federalId", e.target.value)}
              onBlur={(e) => handleBlur("federalId", e.target.value)}
              className="mt-2"
              placeholder="Enter Federal ID (XX-XXXXXXX)"
            />
            {errors.federalId && <ErrorMessage message={errors.federalId} />}
          </div>
        </div>

        <div className="mb-4">
          <Label
            htmlFor="experience"
            className="text-sm font-medium text-text1"
          >
            Years of Experience
          </Label>
          <Select
            value={formData.experience || ""}
            onValueChange={(value) => handleInputChange("experience", value)}
          >
            <SelectTrigger className="mt-2 w-full !h-14">
              <SelectValue placeholder="Select years of experience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Year</SelectItem>
              <SelectItem value="2">2 Years</SelectItem>
              <SelectItem value="3">3 Years</SelectItem>
              <SelectItem value="4">4 Years</SelectItem>
              <SelectItem value="5">5 Years</SelectItem>
              <SelectItem value="6">6+ Years</SelectItem>
              <SelectItem value="10">10+ Years</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

function EquipmentInformationStep({ formData, setFormData, errors, setErrors }) {
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user selects an option
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const validateField = (field, value) => {
    let error = "";
    
    if (field === "truckYear" && !value) {
      error = "Tractor year is required";
    } else if (field === "trailerYear" && !value) {
      error = "Trailer year is required";
    } else if (field === "trailerType" && !value) {
      error = "Trailer type is required";
    }
    
    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }));
    
    return !error;
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-6">
          Step 3: Equipment Information
        </h2>

        {/* Tractor Year Buttons */}
        <div className="mb-6">
          <Label className="text-sm font-medium text-text1 mb-3 block">
            Tractor Year *
          </Label>
          <div className="flex flex-wrap gap-2">
            {years.map((year) => (
              <Button
                key={year}
                type="button"
                variant={formData.truckYear === year ? "secondary" : "outline"}
                className={`px-3 py-1 h-8 text-sm ${
                  formData.truckYear === year
                    ? "bg-bright-blue1 text-white"
                    : "bg-white/80 text-black/90 hover:bg-white/80"
                }`}
                onClick={() => {
                  handleInputChange("truckYear", year);
                  validateField("truckYear", year);
                }}
              >
                {year}
              </Button>
            ))}
          </div>
          {errors.truckYear && <ErrorMessage message={errors.truckYear} />}
        </div>

        {/* Trailer Year Buttons */}
        <div className="mb-6">
          <Label className="text-sm font-medium text-text1 mb-3 block">
            Trailer Year *
          </Label>
          <div className="flex flex-wrap gap-2">
            {years.map((year) => (
              <Button
                key={year}
                type="button"
                variant={
                  formData.trailerYear === year ? "secondary" : "outline"
                }
                className={`px-3 py-1 h-8 text-sm ${
                  formData.trailerYear === year
                    ? "bg-bright-blue1 text-white"
                    : "bg-white/80 text-black/90 hover:bg-white/80"
                }`}
                onClick={() => {
                  handleInputChange("trailerYear", year);
                  validateField("trailerYear", year);
                }}
              >
                {year}
              </Button>
            ))}
          </div>
          {errors.trailerYear && <ErrorMessage message={errors.trailerYear} />}
        </div>

        <div className="mb-6">
          <Label
            htmlFor="trailerType"
            className="text-sm font-medium text-text1"
          >
            Trailer Type *
          </Label>
          <Select
            value={formData.trailerType || ""}
            onValueChange={(value) => {
              handleInputChange("trailerType", value);
              validateField("trailerType", value);
            }}
          >
            <SelectTrigger className="w-full mt-2 !h-14">
              <SelectValue placeholder="Select trailer type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dry_van">Dry Van</SelectItem>
              <SelectItem value="refrigerated">Refrigerated</SelectItem>
              <SelectItem value="flatbed">Flatbed</SelectItem>
              <SelectItem value="step_deck">Step Deck</SelectItem>
              <SelectItem value="lowboy">Lowboy</SelectItem>
              <SelectItem value="tanker">Tanker</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.trailerType && <ErrorMessage message={errors.trailerType} />}
        </div>

        {/* Additional Equipment Notes Textarea */}
        <div className="mb-4">
          <Label
            htmlFor="additionalNotes"
            className="text-sm font-medium text-text1"
          >
            Additional Equipment Notes
          </Label>
          <Textarea
            id="additionalNotes"
            value={formData.additionalNotes || ""}
            onChange={(e) =>
              handleInputChange("additionalNotes", e.target.value)
            }
            className="mt-2"
            placeholder="Add any additional equipment notes or details..."
            rows={3}
          />
        </div>
      </div>
    </div>
  );
}

function DocumentUploadStep({ formData, setFormData }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-6">
          Step 4: Document Upload
        </h2>

        <div className="space-y-4">
          <div className="border-2 border-dashed border-white/30 rounded-lg p-8 text-center">
            <div className="text-gray-500 mb-2">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-lg font-medium text-white mb-1">
              Upload Required Documents
            </div>
            <div className="text-sm text-text2 mb-4">
              Upload your CDL, insurance, and other required certificates
            </div>
            <Button variant="secondary" className="mx-auto">
              Choose Files
            </Button>
          </div>

          <div className="text-sm">
            <p className="font-medium text-text1 mb-2">Required Documents:</p>
            <ul className="list-disc list-inside space-y-1 text-text2">
              <li>Commercial Driver's License (CDL)</li>
              <li>Medical Certificate</li>
              <li>Insurance Certificate</li>
              <li>Vehicle Registration</li>
              <li>IRP Registration (if applicable)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function DriverSignupPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const validateStep = () => {
    const newErrors = {};
    
    switch (currentStep) {
      case 1:
        if (!formData.firstName?.trim()) newErrors.firstName = "First name is required";
        if (!formData.lastName?.trim()) newErrors.lastName = "Last name is required";
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
        if (!formData.companyName?.trim()) newErrors.companyName = "Company name is required";
        if (!formData.mcNumber?.trim()) {
          newErrors.mcNumber = "MC number is required";
        } else if (!validateMCNumber(formData.mcNumber)) {
          newErrors.mcNumber = "MC number must be 7 digits";
        }
        if (!formData.dotNumber?.trim()) {
          newErrors.dotNumber = "DOT number is required";
        } else if (!validateDOTNumber(formData.dotNumber)) {
          newErrors.dotNumber = "DOT number must be 7-8 digits";
        }
        if (formData.federalId && !validateFederalId(formData.federalId)) {
          newErrors.federalId = "Please enter a valid Tax ID (format: XX-XXXXXXX)";
        }
        break;
      case 3:
        if (!formData.truckYear) newErrors.truckYear = "Tractor year is required";
        if (!formData.trailerYear) newErrors.trailerYear = "Trailer year is required";
        if (!formData.trailerType) newErrors.trailerType = "Trailer type is required";
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

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInformationStep
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            setErrors={setErrors}
          />
        );
      case 2:
        return (
          <CompanyDetailsStep 
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            setErrors={setErrors}
          />
        );
      case 3:
        return (
          <EquipmentInformationStep
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            setErrors={setErrors}
          />
        );
      case 4:
        return (
          <DocumentUploadStep formData={formData} setFormData={setFormData} />
        );
      default:
        return (
          <PersonalInformationStep
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            setErrors={setErrors}
          />
        );
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
        />

        {/* Progress Indicator */}
        <ProgressIndicator currentStep={currentStep} steps={steps} />

        {/* Form */}
        <Card className="bg-bg2 shadow-sm">
          <CardContent className="p-4 md:p-8">
            {renderStep()}

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
              <Button
                variant="secondary"
                onClick={nextStep}
                className="px-6"
              >
                {currentStep === 4 ? "Submit" : "Next Step"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default DriverSignupPage;