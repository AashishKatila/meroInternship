import React, { lazy, Suspense } from "react";
import { Typography } from "@/components/ui/Typography";
import Loading from "@/components/Loading";

const Jobs: React.FC = () => {
  const LazyJobCard = lazy(() => import("../components/LazyData"));

  return (
    <div className="mx-10 my-10">
      <Typography
        label="Available Jobs"
        variant="h2"
        weight="semibold"
        className="mb-8 text-center text-teal_700"
      />
      <Suspense fallback={<Loading />}>
        <LazyJobCard />
      </Suspense>
    </div>
  );
};

export default Jobs;
