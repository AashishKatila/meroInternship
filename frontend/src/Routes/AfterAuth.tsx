import { Routes, Route } from "react-router-dom";
import Dashboard from "@/Pages/Dashboard";

const AfterAuth = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Dashboard />} />
    </Routes>
  );
};

export default AfterAuth;
