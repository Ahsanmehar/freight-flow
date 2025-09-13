import {
  Award,
  CheckCircle,
  Home,
  Search,
  Send,
  ShieldCheck,
  Star,
  Truck,
  DollarSign,
  Box,
  Calculator,
  UserPlus,
  Building2,
  LayoutDashboard,
  Wallet,
  Shield,
  CircleQuestionMark,
  Settings,
  X,
  MapPin,
  Clock,
  Phone,
  Menu,
  MoveRight,
} from "lucide-react";

const TechIcon = ({ name, className = "" }) => {
  const icons = {
    home: <Home className={className} />,
    send: <Send className={className} />,
    truck: <Truck className={className} />,
    "check-circle": <CheckCircle className={className} />,
    "shield-check": <ShieldCheck className={className} />,
    star: <Star className={className} />,
    award: <Award className={className} />,
    search: <Search className={className} />,
    dollar: <DollarSign className={className} />,
    box: <Box className={className} />,
    calculator: <Calculator className={className} />,
    "user-plus": <UserPlus className={className} />,
    "building-2": <Building2 className={className} />,
    "layout-dashboard": <LayoutDashboard className={className} />,
    "wallet": <Wallet className={className} />,
    shield: <Shield className={className} />,
    "circle-question-mark": <CircleQuestionMark className={className} />,
    settings: <Settings className={className} />,
    x: <X className={className} />,
    "map-pin": <MapPin className={className} />,
    clock: <Clock className={className} />,
    phone: <Phone className={className} />,
    menu: <Menu className={className} />,
    "move-right": <MoveRight className={className} />,

  };

  return icons[name.toLowerCase()] || <span className={className}>{name}</span>;
};

export default TechIcon;
