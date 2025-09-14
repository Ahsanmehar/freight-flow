import {
  Home,
  Send,
  Box,
  DollarSign,
  Clock,
  Truck,
   Bell,
  AlertTriangle,
  CheckCircle,
  Plus,
  CreditCard,
  ShieldCheck,
  Headphones,
  Star
} from "lucide-react";

const TechIcon = ({ name, className = "" }) => {
  const icons = {
    home: <Home className={className} />,
    send: <Send className={className} />,
    box: <Box className={className} />,
     "dollar-sign": <DollarSign className={className} />,
    clock: <Clock className={className} />,
    truck: <Truck className={className} />,
    bell: <Bell className={className} />,
    "alert-triangle": <AlertTriangle className={className} />,
    "check-circle": <CheckCircle className={className} />,
    plus: <Plus className={className} />,
    "credit-card": <CreditCard className={className} />,
    "shield-check": <ShieldCheck className={className} />,
    headphones: <Headphones className={className} />,
    star: <Star className={className} />
  };

  return icons[name.toLowerCase()] || <span className={className}>{name}</span>;
};

export default TechIcon;
