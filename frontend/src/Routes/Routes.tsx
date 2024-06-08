import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import AfterAuth from "./AfterAuth";
import BeforeAuth from "./BeforeAuth";
// import { useSelector } from "react-redux";
// import { RootState } from "@/redux/store";

const Routes: React.FC = () => {
  const user = sessionStorage.getItem("user");

  return <>{user ? <AfterAuth /> : <BeforeAuth />}</>;
};

export default Routes;
