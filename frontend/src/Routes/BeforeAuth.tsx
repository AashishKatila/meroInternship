import { Route, Routes } from "react-router-dom";
import Home from "@/Pages/Home";
import Login from "@/Pages/Login";
import Signup from "@/Pages/Signup";
import Jobs from "@/Pages/Jobs";

const BeforeAuth = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default BeforeAuth;
