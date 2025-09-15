import { CompanyDetailsStep } from "./CompanyDetailsStep";
import { DocumentUploadStep } from "./DocumentUploadStep";
import { EquipmentInformationStep } from "./EquipmentInformationStep";
import { PersonalInformationStep } from "./PersonalInformationStep";



function FormSteps({ currentStep, formData, setFormData, errors, setErrors }) {
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
}

export default FormSteps;
