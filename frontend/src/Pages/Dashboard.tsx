import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import { fetchAllJobs } from "@/redux/jobListSlice";
import { AppDispatch, RootState } from "@/redux/store";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  const { loading, jobList, error } = useSelector(
    (state: RootState) => state.jobList
  );

  useEffect(() => {
    dispatch(fetchAllJobs());
  }, [dispatch]);

  return (
    <div>
      <Typography label="Dashboard" />

      <div>
        {!loading && jobList ? (
          <ul>
            {jobList.map((job) => (
              <div key={job.job_id} className="flex items-center my-2">
                <Typography label={job.title} />
                <Button
                  variant="default"
                  className="bg-teal_700 ml-4 rounded-full"
                >
                  <Typography
                    label="Apply Now"
                    variant="smallText"
                    weight="medium"
                    className="text-white"
                  />
                </Button>
              </div>
            ))}
          </ul>
        ) : (
          <p> Loading...</p>
        )}
        {!loading && error && (
          <Typography
            label={error}
            variant="smallText"
            className="text-red-500"
          />
        )}
      </div>
      <Button
        variant="default"
        className="bg-teal_700 m-8 rounded-full"
        onClick={handleLogout}
      >
        <Typography
          label="Logout"
          variant="smallText"
          weight="medium"
          className="text-white "
        />
      </Button>
    </div>
  );
};

export default Dashboard;
