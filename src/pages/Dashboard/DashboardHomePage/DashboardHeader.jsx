import TechIcon from "@/components/TechIcon";
export default function DashboardHeader() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-bg1  shadow-one">
      {/* Left side - Title and welcome message */}
      <div>
        <h1 className="text-xl font-bold text-white">Dashboard</h1>
        <p className="text-sm text-text2">Welcome back! Here's what's happening with your loads.</p>
      </div>

      {/* Right side - Actions */}
      <div className="flex items-center gap-4">
        
        {/*Button */}
        <button className="flex items-center justify-center gap-2 bg-bright-blue1 px-4 py-2 rounded-lg text-white font-medium hover:bg-bright-blue2 transition-colors shadow-btn hover:shadow-btn-hover">
  <TechIcon name="box" className="w-5 h-5" />
  New Load
</button>
      </div>
    </header>
  );
}