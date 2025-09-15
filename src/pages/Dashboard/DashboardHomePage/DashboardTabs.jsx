export default function DashboardTabs({ activeTab, onTabChange }) {
  return (
    <div className="flex gap-8 border-b border-white/10 mb-6">
      <button 
        className={`pb-3 font-medium transition relative ${
          activeTab === "kanban" 
            ? "text-red-accent1 border-b-2 border-red-accent1" 
            : "text-text2 hover:text-text1"
        }`}
        onClick={() => onTabChange("kanban")}
      >
        Kanban
      </button>

      <button 
        className={`pb-3 font-medium transition relative ${
          activeTab === "calendar" 
            ? "text-red-accent1 border-b-2 border-red-accent1" 
            : "text-text2 hover:text-text1"
        }`}
        onClick={() => onTabChange("calendar")}
      >
        Calendar
      </button>
    </div>
  );
}