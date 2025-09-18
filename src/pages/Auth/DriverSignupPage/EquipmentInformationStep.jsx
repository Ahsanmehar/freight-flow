// import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ErrorMessage from "./ErrorMessage";
import { Input } from "@/components/ui/input";

export function EquipmentInformationStep({
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

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-6">
          Step 2: Equipment Information
        </h2>

        <div className="mb-6">
          <Label htmlFor="truckType" className="text-sm font-medium text-text1">
            Truck Type *
          </Label>
          <Input
            id="truckType"
            value={formData.truckType || ""}
            onChange={(e) => handleInputChange("truckType", e.target.value)}
            className="mt-2"
            placeholder="Enter truck name"
          />
          {errors.truckType && <ErrorMessage message={errors.truckType} />}
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
