import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";
import NotFound from "./components/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import ScrollUp from "./components/ScrollUp";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import PricingPage from "./pages/PricingPage";
import DriverSignupPage from "./pages/Auth/DriverSignupPage";
import CarrierSignupPage from "./pages/Auth/CarrierSignupPage";
import DashboardHomePage from "./pages/Dashboard/DashboardHomePage";
import RequestLoadPage from "./pages/Dashboard/RequestLoadPage";
import PaymentsPage from "./pages/Dashboard/PaymentsPage";
import CompliancePage from "./pages/Dashboard/CompliancePage";
import SupportPage from "./pages/Dashboard/SupportPage";
import AdminPage from "./pages/Dashboard/AdminPage";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouterRoutes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/driver-signup" element={<DriverSignupPage />} />
        <Route path="/carrier-signup" element={<CarrierSignupPage />} />
        <Route path="/dashboard" element={<DashboardHomePage />} />
        <Route path="/request-load" element={<RequestLoadPage />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="/compliance" element={<CompliancePage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      <ScrollUp />
    </BrowserRouter>
  );
};

export default App;
