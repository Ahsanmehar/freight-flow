import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TechIcon from "@/components/TechIcon";
import { Link } from 'react-router-dom';

export default function DashboardRightSidebar() {
  const stats = [
    { 
      label: "Loads Completed", 
      current: 8, 
      target: 10, 
      value: "8/10", 
      icon: "box",
      percentage: 80
    },
    { 
      label: "Revenue Target", 
      current: 24700, 
      target: 30000, 
      value: "$24.7k/$30k", 
      icon: "dollar-sign",
      percentage: 82.3
    },
    { 
      label: "Customer Satisfaction", 
      current: 4.9, 
      target: 5.0, 
      value: "4.9/5.0", 
      icon: "star",
      percentage: 98
    }
  ];

  const quickAction= [
            { 
              icon: "plus", 
              label: "Post New Load", 
              color: "text-text2",
              path: "/request-load"
            },
            { 
              icon: "credit-card", 
              label: "View Payments", 
              color: "text-text2",
              path: "/payments"
            },
            { 
              icon: "shield-check", 
              label: "Check Compliance", 
              color: "text-text2",
              path: "/compliance"
            },
            { 
              icon: "headphones", 
              label: "Contact Support", 
              color: "text-text2",
              path: "/support"
            }
          ];
  return (
    <div className="space-y-6">
      {/* Alerts & Notifications */}
      <Card className="bg-bg2 border border-white/10">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-white text-lg">Alerts & Notifications</CardTitle>
            <TechIcon name="bell" className="w-5 h-5 text-text2" />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Load Locked Alert */}
          <div className="p-3 bg-bg1 border border-white/10 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="flex items-center">
                  <TechIcon name="alert-triangle" className="w-4 h-4 text-red-accent1 mr-2" />
                  <span className="text-sm font-bold text-white">Load L10002 Locked</span>
                </div>
                <p className="text-xs text-text2 mt-1">Complex route requires review</p>
              </div>
              <span className="text-xs text-text2 whitespace-nowrap">15 min ago</span>
            </div>
          </div>

          {/* Payment Processed Alert */}
          <div className="p-3 bg-bg1 border border-white/10 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="flex items-center">
                  <TechIcon name="check-circle" className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-sm font-bold text-white">Payment Processed</span>
                </div>
                <p className="text-xs text-text2 mt-1">Load L10001 payment completed</p>
              </div>
              <span className="text-xs text-text2 whitespace-nowrap">1 hour ago</span>
            </div>
          </div>

          {/* New Load Alert */}
          <div className="p-3 bg-bg1 border border-white/10 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center">
                  <TechIcon name="plus" className="w-4 h-4 text-bright-blue1 mr-2" />
                  <span className="text-sm font-bold text-white">New Load M400</span>
                </div>
                <p className="text-xs text-text2 mt-1">Available for booking</p>
              </div>
              <span className="text-xs text-text2 whitespace-nowrap">2 hours ago</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="bg-bg2 border border-white/10">
        <CardHeader className="pb-3">
          <CardTitle className="text-white text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {quickAction.map((action, index) => (
            <Link
              key={index}
              to={action.path}
              className="flex items-center p-3 rounded-lg bg-bg1 border border-white/10 transition cursor-pointer no-underline hover:bg-bright-blue2"
            >
              <TechIcon name={action.icon} className={`w-4 h-4 mr-3 ${action.color}`} />
              <span className="text-sm text-white">{action.label}</span>
            </Link>
          ))}
        </CardContent>
      </Card>

      {/* This Week Stats with Blue Progress Bars */}
      <Card className="bg-bg2 border border-white/10">
        <CardHeader className="pb-3">
          <CardTitle className="text-white text-lg">This Week</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {stats.map((stat, index) => (
            <div key={index} className="p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <TechIcon name={stat.icon} className="w-4 h-4 text-text2 mr-3" />
                  <span className="text-sm text-text2">{stat.label}</span>
                </div>
                <span className="text-sm font-bold text-white">{stat.value}</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="h-2 rounded-full transition-all duration-500 bg-bright-blue1"
                  style={{ width: `${stat.percentage}%` }}
                ></div>
              </div>
              
              {/* Percentage Label */}
              <div className="flex justify-between items-center mt-1">
                <span className="text-xs text-text2">Progress</span>
                <span className="text-xs font-medium text-white">{stat.percentage}%</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

    </div>
  );
}