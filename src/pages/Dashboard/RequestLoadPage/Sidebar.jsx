import React from "react";

import { Badge } from "@/components/ui/badge";
import Qicons from "@/components/Qicons";

export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 w-full max-w-xs">
      {/* Right Sidebar */}
      <section className="border border-text2 rounded-xl p-6 h-auto">
        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
          <Qicons name="Clock" className="w-5 h-5 text-white" />
          Available Dates
        </h3>
        <ul className="space-y-3">
          {[
            "Sun Dec 08 2024",
            "Mon Dec 09 2024",
            "Tue Dec 10 2024",
            "Thu Dec 12 2024",
            "Sun Dec 15 2024",
          ].map((date, idx) => (
            <li key={idx}>
              <button
                type="button"
                className="border border-text2 text-white text-sm px-3 py-3 rounded-md w-full flex justify-between items-center transition-all duration-200 ease-in-out hover:bg-bright-blue1"
                disabled
              >
                {date}
                <Badge variant="outline" className="border-text2 text-white">
                  Available
                </Badge>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Market Insights */}
      <section className="border border-text2 rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-6">Market Insights</h3>
        <ul className="space-y-4 text-sm text-text2">
          <li className="flex items-start gap-3">
            <span className="h-4 w-4 rounded-full bg-green-600 mt-1"></span>
            <div>
              <p className="font-semibold text-white">High Demand</p>
              <p className="text-text2">This route is popular this week</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="h-4 w-4 rounded-full bg-yellow-600 mt-1"></span>
            <div>
              <p className="font-semibold text-white">Average Response</p>
              <p className="text-text2">Expect responses within 2 hours</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="h-4 w-4 rounded-full bg-bright-blue1 mt-1"></span>
            <div>
              <p className="font-semibold text-white">45 Active Carriers</p>
              <p className="text-text2">In your preferred routes</p>
            </div>
          </li>
        </ul>
      </section>
    </aside>
  );
}
