import React from "react";
import Lottie from "lottie-react";
import Loader from "@/assets/Loading/loader.json";

// To make Skeleton loader
const Loading: React.FC = () => {
  return <Lottie animationData={Loader} />;
};

export default Loading;
