import {
  Home,
  Send,

} from "lucide-react";

const TechIcon = ({ name, className = "" }) => {
  const icons = {
    home: <Home className={className} />,
    send: <Send className={className} />,
  };

  return icons[name.toLowerCase()] || <span className={className}>{name}</span>;
};

export default TechIcon;
