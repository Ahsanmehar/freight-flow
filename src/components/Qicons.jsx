import { MapPin } from "lucide-react";
import { Package } from "lucide-react";
import { Calendar } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { DollarSign } from "lucide-react";
import { Clock } from "lucide-react";
import { ChevronDown } from "lucide-react";

const TechIcon = ({ name, className = "" }) => {
  const icons = {
    "map-pin": <MapPin className={className} />,
    package: <Package className={className} />,
    calendar: <Calendar className={className} />,
    "trending-up": <TrendingUp className={className} />,
    "dollar-sign": <DollarSign className={className} />,
    clock: <Clock className={className} />,
    "chevron-down": <ChevronDown className={className} />,
  };

  return icons[name.toLowerCase()] || <span className={className}>{name}</span>;
};

export default TechIcon;


