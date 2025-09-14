import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardCalendarCards() {
  const days = [
    { date: "12", day: "Fri" },
    { date: "13", day: "Sat" },
    { date: "14", day: "Sun" },
    { date: "15", day: "Mon" },
    { date: "16", day: "Tue" },
    { date: "17", day: "Wed" },
    { date: "18", day: "Thu" },
  ];

  return (
    <div className="grid grid-cols-7 gap-2">
      {days.map((day, index) => (
        <Card 
          key={index} 
          className="bg-[#121212] shadow-two border border-white/10 text-center p-3 hover:shadow-three transition"
        >
          <CardContent className="p-0">
            <div className="text-[#9ca3af] text-sm mb-1">{day.day}</div>
            <div className="text-white text-lg font-semibold">{day.date}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}