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

  const validateField = (field, value) => {
    let error = "";

    if (field === "truckType" && !value) {
      error = "Truck type is required";
    }

    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }));

    return !error;
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
          <Select
            value={formData.truckType || ""}
            onValueChange={(value) => {
              handleInputChange("truckType", value);
              validateField("truckType", value);
            }}
          >
            <SelectTrigger className="w-full mt-2 !h-14">
              <SelectValue placeholder="Select truck type" />
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
