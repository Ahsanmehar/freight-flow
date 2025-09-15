import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
