import {
  Activity,
  CircleQuestionMark,
  DollarSign,
  Ellipsis,
  Eye,
  FileText,
  Filter,
  Home,
  Mail,
  Map,
  MessageCircle,
  Package,
  Phone,
  Search,
  Send,
  Settings,
  Shield,
  Truck,
  UserRoundCheck,
  Users,
} from "lucide-react";

const TechIcon = ({ name, className = "" }) => {
  const icons = {
    home: <Home className={className} />,
    send: <Send className={className} />,
    roundcheck: <UserRoundCheck className={className} />,
    elipsis: <Ellipsis className={className} />,
    eye: <Eye className={className} />,
    filter: <Filter className={className} />,
    map: <Map className={className} />,
    file: <FileText className={className} />,
    truck: <Truck className={className} />,
    dollar: <DollarSign className={className} />,
    settings: <Settings className={className} />,
    activity: <Activity className={className} />,
    search: <Search className={className} />,
    question: <CircleQuestionMark className={className} />,
    message: <MessageCircle className={className} />,
    mail: <Mail className={className} />,
    phone: <Phone className={className} />,
    shield: <Shield className={className} />,
    users: <Users className={className} />,
    package: <Package className={className} />,

  };

  return icons[name.toLowerCase()] || <span className={className}>{name}</span>;
};

export default TechIcon;
