
// import { Phone, Mail, MessageCircle } from "react-feather";

import { Activity, } from "lucide-react"
import {Phone, Mail, MessageCircle, CircleQuestionMark, Search,} from "lucide-react"

export const data = [
  {
    id: 0,
    icon: <Phone className="text-blue-400 " size={40} />,
    title: "Live Chat",
    text: "get instant help from our support team",
    label: "Average Response:2 min"
  },
  {
    id: 1,
    icon: <Mail className="text-green-400 w-8 h-7"size={40} />,
    title: "Phone Support",
    text: "Call us at 1-800 FREIGHT",
    label: "24/7 Available"
  },
  {
    id: 2,
    icon: <MessageCircle className="text-purple-400 w-8 h-7"size={40} />,
    title: "Email Support",
    text: "Email Support",
    label: "Response within 4 hours"
  }
]


export const tabs = [
  {
    id:0,
    name:"Live Chat",
    icon:<MessageCircle/>
  },
  {
    id:1,
    name:"Support Tickets",
    icon:<CircleQuestionMark/>
  },
  {
    id:2,
    name:"Faqs",
    icon:<Search/>
  },
  {
    id:3,
    name:"System Status",
    icon:<Activity/>
  }
]