import {Users,Package, Activity, DollarSign, } from "lucide-react"
import { TriangleAlert, Map, Shield, Eye,  Filter, Ellipsis,  Phone, Mail, MessageCircle, CircleQuestionMark, Search,  FileText, Truck, Settings, Send } from "lucide-react"

export const data = [
    {
        id: 0,
        icon: <Package size={30} color="blue"/>,
        title: "Total Loads",
        text: "1,247",
        label: "+12% this week"
    },
    {
        id: 1,
        icon: <Users size={30} color="green"/>,
        title: "342",
        text: "Call us at 1-800 FREIGHT",
       label: "+8% this month"
    },
    {
        id: 2,
        icon: <DollarSign size={30} color="orange"/>,
        title: "Revenue",
        text: "$2.4M",
        label: "+15% this month"
    },
      {
        id: 3,
        icon: <Activity size={30} color="purple"/>,
        title: "Success Rate",
        text: "98.5%",
        label: "On-time delivery"
    }
];

export const tabs = [
  {
    id: 0,
    name: "Load Board",
    icon: <Package />
  },
  {
    id: 1,
    name: "User Management",
    icon: <Users />
  },
  {
    id: 2,
    name: "Roles and Permissions",
    icon: <Shield />
  }
]