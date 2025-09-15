import { Button } from "@/components/ui/button";

export function DocumentUploadStep() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-6">
          Step 4: Document Upload
        </h2>

        <div className="space-y-4">
          <div className="border-2 border-dashed border-white/30 rounded-lg p-8 text-center">
            <div className="text-gray-500 mb-2">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-lg font-medium text-white mb-1">
              Upload Required Documents
            </div>
            <div className="text-sm text-text2 mb-4">
              Upload your CDL, insurance, and other required certificates
            </div>
            <Button variant="secondary" className="mx-auto">
              Choose Files
            </Button>
          </div>

          <div className="text-sm">
            <p className="font-medium text-text1 mb-2">Required Documents:</p>
            <ul className="list-disc list-inside space-y-1 text-text2">
              <li>Commercial Driver's License (CDL)</li>
              <li>Medical Certificate</li>
              <li>Insurance Certificate</li>
              <li>Vehicle Registration</li>
              <li>IRP Registration (if applicable)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
