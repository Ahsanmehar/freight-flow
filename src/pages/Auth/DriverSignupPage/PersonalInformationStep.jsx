import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import ErrorMessage from "./ErrorMessage";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const states = ["California", "Texas", "Florida", "New York"];

// Validation functions (moved inside the component file)
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone) => {
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
};

const validateZipCode = (zipCode) => {
  return /^\d{5}(-\d{4})?$/.test(zipCode);
};

export function PersonalInformationStep({
  formData,
  setFormData,
  errors,
  setErrors,
}) {
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