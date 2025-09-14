import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Qicons from "@/Components/Qicons";

import { equipmentOptions, formFields } from "./RequestLoadData.js";

export default function LoadForm() {
  return (
    <section className="flex-1 w-full border border-text2 rounded-xl p-6">
      {/* Left Form */}
      <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
        <Qicons name="package" className="w-5 h-5 text-white" />
        Load Details
      </h2>

      <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
          {/* Pickup Location */}
          <div className="flex flex-col gap-2">
            <Label
              htmlFor={formFields.pickupLocation.id}
              className="text-sm font-medium text-white"
            >
              {formFields.pickupLocation.label}
              <span className="text-red-accent1">*</span>
            </Label>
            <div className="relative">
              <Input
                id={formFields.pickupLocation.id}
                placeholder={formFields.pickupLocation.placeholder}
                required={formFields.pickupLocation.required}
                className="pl-10 py-2 text-sm bg-transparent"
              />
              <Qicons
                name="map-pin"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-text2 w-5 h-5 pointer-events-none"
              />
            </div>
          </div>
          {/* Dropoff Location */}
          <div className="flex flex-col gap-2">
            <Label
              htmlFor={formFields.dropoffLocation.id}
              className="text-sm font-medium text-white"
            >
              {formFields.dropoffLocation.label}
              <span className="text-red-accent1">*</span>
            </Label>
            <div className="relative">
              <Input
                id={formFields.dropoffLocation.id}
                placeholder={formFields.dropoffLocation.placeholder}
                required={formFields.dropoffLocation.required}
                className="pl-10 py-2 text-sm bg-transparent"
              />
              <Qicons
                name="map-pin"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-text2 w-5 h-5 pointer-events-none"
              />
            </div>
          </div>
          {/* Pickup Date */}
          <div className="flex flex-col gap-2">
            <Label
              htmlFor={formFields.pickupDate.id}
              className="text-sm font-medium text-white"
            >
              {formFields.pickupDate.label}
              <span className="text-red-accent1">*</span>
            </Label>
            <div className="relative">
              <Input
                type={formFields.pickupDate.type}
                id={formFields.pickupDate.id}
                required={formFields.pickupDate.required}
                className="pl-10 py-2 bg-transparent text-sm [color-scheme:dark]"
              />
              <Qicons
                name="calendar"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-text2 w-5 h-5 pointer-events-none"
              />
            </div>
          </div>
          {/* Delivery Date */}
          <div className="flex flex-col gap-2">
            <Label
              htmlFor={formFields.deliveryDate.id}
              className="text-sm font-medium text-white"
            >
              {formFields.deliveryDate.label}
            </Label>
            <div className="relative">
              <Input
                type={formFields.deliveryDate.type}
                id={formFields.deliveryDate.id}
                className="pl-10 py-2 text-sm bg-transparent [color-scheme:dark]"
              />
              <Qicons
                name="calendar"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-text2 w-5 h-5 pointer-events-none"
              />
            </div>
          </div>
          {/* Equipment Type */}
          <div className="flex flex-col gap-2">
            <Label
              htmlFor={formFields.equipmentType.id}
              className="text-sm font-medium text-white"
            >
              {formFields.equipmentType.label}
              <span className="text-red-accent1">*</span>
            </Label>

            <div className="relative">
              <select
                id={formFields.equipmentType.id}
                required={formFields.equipmentType.required}
                className="w-full h-14 appearance-none rounded-md px-4 pr-10 py-2 text-sm bg-bg1 border border-white text-white"
              >
                {equipmentOptions.map((opt, idx) => (
                  <option key={idx} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <Qicons
                name="chevron-down"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white pointer-events-none"
              />
            </div>
          </div>

          {/* Weight */}
          <div className="flex flex-col gap-2">
            <Label
              htmlFor={formFields.weight.id}
              className="text-sm font-medium text-white"
            >
              {formFields.weight.label}
            </Label>
            <Input
              id={formFields.weight.id}
              type={formFields.weight.type}
              min="1"
              placeholder={formFields.weight.placeholder}
              className="py-2 text-sm bg-transparent"
            />
          </div>
          {/* Dimensions */}
          <div className="sm:col-span-2 flex flex-col gap-2">
            <Label
              htmlFor={formFields.dimensions.id}
              className="text-sm font-medium text-white"
            >
              {formFields.dimensions.label}
            </Label>
            <div className="relative">
              <Input
                id={formFields.dimensions.id}
                placeholder={formFields.dimensions.placeholder}
                className="py-2 text-sm bg-transparent"
              />
            </div>
          </div>
          {/* Cargo Description */}
          <div className="sm:col-span-2 flex flex-col gap-2">
            <Label
              htmlFor={formFields.cargoDescription.id}
              className="text-sm font-medium text-white"
            >
              {formFields.cargoDescription.label}
              <span className="text-red-accent1">*</span>
            </Label>
            <div className="relative">
              <Textarea
                id={formFields.cargoDescription.id}
                rows={4}
                placeholder={formFields.cargoDescription.placeholder}
                required={formFields.cargoDescription.required}
                className="py-2 text-sm bg-transparent resize-none"
              />
            </div>
          </div>
          {/* Target Rate */}
          <div className="sm:col-span-2 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <Label
                htmlFor={formFields.targetRate.id}
                className="text-sm font-medium text-white flex items-center gap-1"
              >
                {formFields.targetRate.label}
              </Label>

              <span className="flex items-center gap-2 text-text2 text-sm font-medium cursor-help">
                <Qicons name="trending-up" className="w-4 h-4" />
                Rate Helper
              </span>
            </div>
            <div className="relative max-w-sm">
              <Qicons
                name="dollar-sign"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-text2 w-5 h-5 pointer-events-none"
              />
              <Input
                id={formFields.targetRate.id}
                type={formFields.targetRate.type}
                min="0"
                step="0.01"
                placeholder={formFields.targetRate.placeholder}
                className="pl-10 py-2 text-sm bg-transparent"
              />
            </div>
          </div>
          {/* Additional Notes */}
          <div className="sm:col-span-2 flex flex-col gap-2">
            <Label
              htmlFor={formFields.additionalNotes.id}
              className="text-sm font-medium text-white"
            >
              {formFields.additionalNotes.label}
            </Label>
            <Textarea
              id={formFields.additionalNotes.id}
              rows={4}
              placeholder={formFields.additionalNotes.placeholder}
              className="py-2 text-sm bg-transparent resize-none"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-between mt-6">
          <Button
            type="submit"
            variant="secondary"
            className="grow max-w-full sm:max-w-xs"
          >
            Post Load
          </Button>
          <Button
            type="button"
            variant="outline"
            className="bg-transparent text-white "
          >
            Save Draft
          </Button>
        </div>
      </form>
    </section>
  );
}
