import { Check } from "lucide-react";

function ProgressIndicator({ currentStep, steps }) {
  return (
    <div className="w-full mb-8">
      <div className="flex flex-col md:flex-row items-center justify-between relative gap-y-6">
        {/* Progress line */}
        <div className="absolute -top-6 left-0 right-0 h-2 bg-text2 rounded">
          <div
            className="h-full bg-orange transition-all duration-300 rounded"
            style={{
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>

        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col items-center relative bg-whi px-4"
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold mb-2 transition-all duration-200 ${
                step.id < currentStep
                  ? "bg-orange text-white"
                  : step.id === currentStep
                  ? "bg-orange text-white"
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

export default ProgressIndicator;