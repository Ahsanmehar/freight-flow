import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TechIcon from "@/components/TechIcon";

const stats = [
  { 
    title: "Active Loads", 
    value: "12", 
    change: "+3",
    icon: "box",
    changeColor: "text-green-500"
  },
  { 
    title: "Total Revenue", 
    value: "$24,750", 
    change: "+12%",
    icon: "dollar-sign",
    changeColor: "text-green-500"
  },
  { 
    title: "On-Time Rate", 
    value: "98.5%", 
    change: "+2.1%",
    icon: "clock",
    changeColor: "text-green-500"
  },
  { 
    title: "Available Trucks", 
    value: "8", 
    change: "-1",
    icon: "truck",
    changeColor: "text-green-500" 
  },
];

export default function DashboardStatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((item, idx) => (
        <Card
          key={idx}
          className="bg-bg2 shadow-two border border-white/10 transition-all duration-300"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-sm font-medium text-text2">
              {item.title}
            </CardTitle>
            <div className="p-2 bg-bg1 rounded-lg">
              <TechIcon name={item.icon} className="w-4 h-4 text-text2" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <p className="text-2xl font-bold text-white">{item.value}</p>
              <p className={`text-xs font-medium ${item.changeColor} flex items-center bg-bg1 px-2 py-1 rounded-full`}>
                {item.change}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}