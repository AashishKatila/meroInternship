import { Route, Routes } from "react-router-dom";
import Home from "@/Pages/Home";
import Login from "@/Pages/Login";
import Signup from "@/Pages/Signup";
import Jobs from "@/Pages/Jobs";
import CompanyLogin from "@/Pages/company/CompanyLogin";
import CompanySignup from "@/Pages/company/CompanySignup";

const BeforeAuth = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/company/login" element={<CompanyLogin />} />
      <Route path="/company/signup" element={<CompanySignup />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default BeforeAuth;
