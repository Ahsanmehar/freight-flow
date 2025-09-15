import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const states = ["California", "Texas", "Florida", "New York"];

export function CompanyDetails({
  formData = {},
  setFormData = () => {},
  errors = {},
  setErrors = () => {},
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

  const businessTypes = [
    "Corporation",
    "LLC",
    "Partnership",
    "Sole Proprietorship",
    "Other",
  ];

  

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-6">
          Company Information
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
              className="mt-2"
              placeholder="Enter company name"
            />
          </div>
          <div>
            <Label
              htmlFor="businessType"
              className="text-sm font-medium text-text1"
            >
              Business Type *
            </Label>
            <Select
              value={formData.businessType || ""}
              onValueChange={(value) =>
                handleInputChange("businessType", value)
              }
            >
              <SelectTrigger className="w-full mt-2 !h-14">
                <SelectValue placeholder="Select business type" />
              </SelectTrigger>
              <SelectContent>
                {businessTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mb-4">
          <Label
            htmlFor="federalTaxId"
            className="text-sm font-medium text-text1"
          >
            Federal Tax ID (EIN) *
          </Label>
          <Input
            id="federalTaxId"
            value={formData.federalTaxId || ""}
            onChange={(e) => handleInputChange("federalTaxId", e.target.value)}
            className="mt-2"
            placeholder="XX-XXXXXXX"
          />
        </div>

        <div className="mb-4">
          <Label
            htmlFor="businessAddress"
            className="text-sm font-medium text-text1"
          >
            Business Address *
          </Label>
          <Input
            id="businessAddress"
            value={formData.businessAddress || ""}
            onChange={(e) =>
              handleInputChange("businessAddress", e.target.value)
            }
            className="mt-2"
            placeholder="Enter business address"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <Label htmlFor="city" className="text-sm font-medium text-text1">
              City *
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
              State *
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
              ZIP Code *
            </Label>
            <Input
              id="zipCode"
              value={formData.zipCode || ""}
              onChange={(e) => handleInputChange("zipCode", e.target.value)}
              className="mt-2"
              placeholder="XXXXX"
            />
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            Primary Contact Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <Label
                htmlFor="contactName"
                className="text-sm font-medium text-text1"
              >
                Contact Name *
              </Label>
              <Input
                id="contactName"
                value={formData.contactName || ""}
                onChange={(e) =>
                  handleInputChange("contactName", e.target.value)
                }
                className="mt-2"
                placeholder="Enter contact name"
              />
            </div>
            <div>
              <Label
                htmlFor="contactPhone"
                className="text-sm font-medium text-text1"
              >
                Contact Phone *
              </Label>
              <Input
                id="contactPhone"
                type="tel"
                value={formData.contactPhone || ""}
                onChange={(e) =>
                  handleInputChange("contactPhone", e.target.value)
                }
                className="mt-2"
                placeholder="(XXX) XXX-XXXX"
              />
            </div>
          </div>
          <div>
            <Label
              htmlFor="contactEmail"
              className="text-sm font-medium text-text1"
            >
              Contact Email *
            </Label>
            <Input
              id="contactEmail"
              type="email"
              value={formData.contactEmail || ""}
              onChange={(e) =>
                handleInputChange("contactEmail", e.target.value)
              }
              className="mt-2"
              placeholder="Enter contact email"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
