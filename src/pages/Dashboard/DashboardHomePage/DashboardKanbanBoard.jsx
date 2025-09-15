import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const kanbanData = [
  {
    status: "AVAILABLE",
    count: 1,
    loads: [
      { 
        id: "LD001", 
        from: "Los Angeles, CA", 
        to: "Phoenix, AZ", 
        distance: "374 miles", 
        price: "$1,200" 
      }
    ],
    color: "border-t-bright-blue1" 
  },
  {
    status: "PENDING",
    count: 1,
    loads: [
      { 
        id: "LD003", 
        from: "Dallas, TX", 
        to: "Houston, TX", 
        distance: "239 miles", 
        price: "$800" 
      }
    ],
    color: "border-t-orange" 
  },
  {
    status: "IN TRANSIT",
    count: 1,
    loads: [
      { 
        id: "LD002", 
        from: "Chicago, IL", 
        to: "Detroit, MI", 
        distance: "283 miles", 
        price: "$950" 
      }
    ],
    color: "border-t-green-500"
  },
  {
    status: "DELIVERED",
    count: 1,
    loads: [
      { 
        id: "LD004", 
        from: "Miami, FL", 
        to: "Orlando, FL", 
        distance: "235 miles", 
        price: "$750" 
      }
    ],
    color: "border-t-text2" 
  }
];

export default function DashboardKanbanBoard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {kanbanData.map((column, columnIdx) => (
        <div key={columnIdx} className="flex flex-col gap-4">
          {/* Column Header */}
          <div className="flex justify-between items-center">
            <h3 className="text-white font-semibold">{column.status}</h3>
            <span className="bg-bg2 text-text2 text-sm px-2 py-1 rounded">
              {column.count}
            </span>
          </div>

          {/* Divider */}
          <hr className="border-white/10" />

          {/* Load Cards */}
          {column.loads.map((load, loadIdx) => (
            <Card
              key={loadIdx}
              className={`bg-bg2 border-t-4 ${column.color} shadow-two hover:shadow-three transition`}
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-sm font-medium">
                  {load.id}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm text-text2">
                  <p>• {load.from}</p>
                  <p>• {load.to}</p>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-xs text-text2">{load.distance}</span>
                  <span className="text-red-accent1 font-bold">{load.price}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ))}

    </div>
  );
}