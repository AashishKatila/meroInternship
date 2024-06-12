import { Routes, Route } from "react-router-dom";
import Dashboard from "@/Pages/Dashboard";
import CompanyDashboard from "@/Pages/company/CompanyDashboard";

const AfterAuth = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/company/dashboard" element={<CompanyDashboard />} />
      <Route path="*" element={<Dashboard />} />
    </Routes>
  );
};

export default AfterAuth;
