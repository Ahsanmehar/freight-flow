import { Building2 } from "lucide-react";

const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "80px",
  showIcon = false,
}) => {
  return (
    <div
      className={`w-full ${center ? "mx-auto text-center" : ""}`}
      style={{ maxWidth: width, marginBottom: mb }}
    >
      <div className="flex items-center justify-center gap-3 mb-4">
        {showIcon && <Building2 className="w-9 h-9 text-white" />}
        <h2 className="text-2xl font-bold leading-tight text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
      </div>
      <p className="text-base leading-relaxed text-text2 md:text-lg">
        {paragraph}
      </p>
    </div>
  );
};

export default SectionTitle;
