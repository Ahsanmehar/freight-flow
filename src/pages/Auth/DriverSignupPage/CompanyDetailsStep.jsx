// import { Input } from "@/components/ui/input";
// import { Label } from "@radix-ui/react-label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import ErrorMessage from "./ErrorMessage";


// export function CompanyDetailsStep({
//   formData,
//   setFormData,
//   errors,
//   setErrors,
// }) {
//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));

//     // Clear error when user starts typing
//     if (errors[field]) {
//       setErrors((prev) => ({
//         ...prev,
//         [field]: "",
//       }));
//     }
//   };

//   // ✅ Validation functions define karo
//   const validateMCNumber = (value) => /^\d{7}$/.test(value);
//   const validateDOTNumber = (value) => /^\d{7,8}$/.test(value);
//   const validateFederalId = (value) => /^\d{2}-\d{7}$/.test(value);

//   const validateField = (field, value) => {
//     let error = "";

//     switch (field) {
//       case "companyName":
//         if (!value.trim()) error = "Company name is required";
//         break;
//       case "mcNumber":
//         if (!value.trim()) {
//           error = "MC number is required";
//         } else if (!validateMCNumber(value)) {
//           error = "MC number must be 7 digits";
//         }
//         break;
//       case "dotNumber":
//         if (!value.trim()) {
//           error = "DOT number is required";
//         } else if (!validateDOTNumber(value)) {
//           error = "DOT number must be 7-8 digits";
//         }
//         break;
//       case "federalId":
//         if (value && !validateFederalId(value)) {
//           error = "Please enter a valid Tax ID (format: XX-XXXXXXX)";
//         }
//         break;
//       default:
//         break;
//     }

//     setErrors((prev) => ({
//       ...prev,
//       [field]: error,
//     }));

//     return !error;
//   };

//   const handleBlur = (field, value) => {
//     validateField(field, value);
//   };

//   return (
//     <div className="space-y-6">
//       <div>
//         <h2 className="text-xl font-semibold text-white mb-6">
//           Step 2: Company Details
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//           <div>
//             <Label
//               htmlFor="companyName"
//               className="text-sm font-medium text-text1"
//             >
//               Company Name *
//             </Label>
//             <Input
//               id="companyName"
//               value={formData.companyName || ""}
//               onChange={(e) => handleInputChange("companyName", e.target.value)}
//               onBlur={(e) => handleBlur("companyName", e.target.value)}
//               className="mt-2"
//               placeholder="Enter company name"
//             />
//             {errors.companyName && (
//               <ErrorMessage message={errors.companyName} />
//             )}
//           </div>
//           <div>
//             <Label
//               htmlFor="mcNumber"
//               className="text-sm font-medium text-text1"
//             >
//               MC Number *
//             </Label>
//             <Input
//               id="mcNumber"
//               value={formData.mcNumber || ""}
//               onChange={(e) => handleInputChange("mcNumber", e.target.value)}
//               onBlur={(e) => handleBlur("mcNumber", e.target.value)}
//               className="mt-2"
//               placeholder="Enter MC number"
//             />
//             {errors.mcNumber && <ErrorMessage message={errors.mcNumber} />}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//           <div>
//             <Label
//               htmlFor="dotNumber"
//               className="text-sm font-medium text-text1"
//             >
//               DOT Number *
//             </Label>
//             <Input
//               id="dotNumber"
//               value={formData.dotNumber || ""}
//               onChange={(e) => handleInputChange("dotNumber", e.target.value)}
//               onBlur={(e) => handleBlur("dotNumber", e.target.value)}
//               className="mt-2"
//               placeholder="Enter DOT number"
//             />
//             {errors.dotNumber && <ErrorMessage message={errors.dotNumber} />}
//           </div>
//           <div>
//             <Label
//               htmlFor="federalId"
//               className="text-sm font-medium text-text1"
//             >
//               Tax ID (EIN)
//             </Label>
//             <Input
//               id="federalId"
//               value={formData.federalId || ""}
//               onChange={(e) => handleInputChange("federalId", e.target.value)}
//               onBlur={(e) => handleBlur("federalId", e.target.value)}
//               className="mt-2"
//               placeholder="Enter Federal ID (XX-XXXXXXX)"
//             />
//             {errors.federalId && <ErrorMessage message={errors.federalId} />}
//           </div>
//         </div>

//         <div className="mb-4">
//           <Label
//             htmlFor="experience"
//             className="text-sm font-medium text-text1"
//           >
//             Years of Experience
//           </Label>
//           <Select
//             value={formData.experience || ""}
//             onValueChange={(value) => handleInputChange("experience", value)}
//           >
//             <SelectTrigger className="mt-2 w-full !h-14">
//               <SelectValue placeholder="Select years of experience" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="1">1 Year</SelectItem>
//               <SelectItem value="2">2 Years</SelectItem>
//               <SelectItem value="3">3 Years</SelectItem>
//               <SelectItem value="4">4 Years</SelectItem>
//               <SelectItem value="5">5 Years</SelectItem>
//               <SelectItem value="6">6+ Years</SelectItem>
//               <SelectItem value="10">10+ Years</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//       </div>
//     </div>
//   );
// }
