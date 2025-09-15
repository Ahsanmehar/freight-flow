import { AlertCircle } from "lucide-react";

function ErrorMessage({ message }) {
  return (
    <div className="flex items-center mt-1 text-red-400 text-sm">
      <AlertCircle className="w-4 h-4 mr-1" />
      {message}
    </div>
  );
}

export default ErrorMessage;