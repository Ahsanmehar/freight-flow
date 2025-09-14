import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardStatsCards from "./DashboardStatsCards";
import DashboardTabs from "./DashboardTabs";
import DashboardKanbanBoard from "./DashboardKanbanBoard";
import DashboardLoadStatusCards from "./DashboardLoadStatusCards";
import DashboardCalendarCards from "./DashboardCalendarCards";
import DashboardRightSidebar from "./DashboardRightSidebar";

export default function DashboardHomePage() {
  const [activeTab, setActiveTab] = useState("kanban");
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white font-sans">
      {/* Navbar */}
      <DashboardHeader />

      {/* Content */}
      <main className="max-w-[1400px] mx-auto w-full px-[10px] sm:px-[20px] py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-9 space-y-6">
          <DashboardStatsCards />

          <div>
            <DashboardTabs
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />

            {activeTab === "kanban" && <DashboardKanbanBoard />}
            {activeTab === "calendar" && <DashboardCalendarCards />}
          </div>
          {/* <DashboardLoadStatusCards /> */}
          {/* <DashboardCalendarCards /> */}
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-3">
          <DashboardRightSidebar />
        </div>
      </main>
    </div>
  );
}