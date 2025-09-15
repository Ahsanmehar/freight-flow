import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TechIcon from "@/components/TechIcon";

const loads = [
  { 
    id: "LD001", 
    from: "Los Angeles, CA", 
    to: "Phoenix, AZ", 
    distance: "374 miles", 
    price: "$1,200", 
    icon: "truck"
  },
  { 
    id: "LD003", 
    from: "Dallas, TX", 
    to: "Houston, TX", 
    distance: "239 miles", 
    price: "$800", 
    icon: "clock"
  },
  { 
    id: "LD002", 
    from: "Chicago, IL", 
    to: "Detroit, MI", 
    distance: "283 miles", 
    price: "$950", 
    icon: "map-pin",
    progress: 65
  },
  { 
    id: "LD004", 
    from: "Miami, FL", 
    to: "Orlando, FL", 
    distance: "235 miles", 
    price: "$750", 
    icon: "check-circle"
  },
];

export default function DashboardLoadStatusCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {loads.map((load, idx) => (
        <Card
          key={idx}
          className="bg-bg2 border border-white/10 shadow-two hover:shadow-three transition-all duration-300"
        >
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-white text-sm font-medium">
                {load.id}
              </CardTitle>
              <TechIcon name={load.icon} className="w-4 h-4 text-text2" />
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-sm text-text2">
              <p className="truncate">{load.from}</p>
              <p className="truncate">{load.to}</p>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-xs text-text2">{load.distance}</span>
              <span className="text-red-accent1 font-bold">{load.price}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}