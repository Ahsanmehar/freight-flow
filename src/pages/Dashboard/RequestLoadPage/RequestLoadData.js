// src/pages/dashboard/requestloadpage/requestLoadData.js

export const equipmentOptions = [
  { value: "", label: "Select equipment" },
  { value: "flatbed", label: "Flatbed - $2.80/mile" },
  { value: "dry-van", label: "Dry Van - $2.20/mile" },
  { value: "refrigerated", label: "Refrigerated - $3.20/mile" },
  { value: "step-deck", label: "Step Deck - $3.50/mile" },
  { value: "lowboy", label: "Lowboy - $4.20/mile" },
  { value: "power-only", label: "Power Only - $1.80/mile" },
];

export const formFields = {
  pickupLocation: {
    id: "pickup-location",
    label: "Pickup Location",
    required: true,
    placeholder: "City, State or ZIP",
    icon: "map-pin",
  },
  dropoffLocation: {
    id: "dropoff-location",
    label: "Dropoff Location",
    required: true,
    placeholder: "City, State or ZIP",
    icon: "map-pin",
  },
  pickupDate: {
    id: "pickup-date",
    label: "Pickup Date",
    type: "date",
    required: true,
    icon: "calendar",
  },
  deliveryDate: {
    id: "delivery-date",
    label: "Delivery Date",
    type: "date",
    required: false,
    icon: "calendar",
  },
  equipmentType: {
    id: "equipmentType",
    label: "Equipment Type",
    required: true,
  },
  weight: {
    id: "weight",
    label: "Weight (lbs)",
    type: "number",
    placeholder: "e.g. 30000",
  },
  dimensions: {
    id: "dimensions",
    label: "Dimensions (L × W × H)",
    placeholder: `e.g. 48" × 102" × 108"`,
  },
  cargoDescription: {
    id: "cargo-description",
    label: "Cargo Description",
    required: true,
    placeholder: "Describe the cargo, any special handling requirements...",
  },
  targetRate: {
    id: "target-rate",
    label: "Target Rate ($)",
    type: "number",
    placeholder: "Enter your target rate",
  },
  additionalNotes: {
    id: "additional-notes",
    label: "Additional Notes",
    placeholder: "Any additional requirements, appointment times, etc.",
  },
};
