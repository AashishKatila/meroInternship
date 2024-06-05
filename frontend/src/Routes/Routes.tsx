import React from "react";
import { useSelector } from "react-redux";
import AfterAuth from "./AfterAuth";
import BeforeAuth from "./BeforeAuth";

const Routes: React.FC = () => {
  const user = useSelector((state) => state.auth.user);
  return <>{user ? <AfterAuth /> : <BeforeAuth />}</>;
};

export default Routes;
