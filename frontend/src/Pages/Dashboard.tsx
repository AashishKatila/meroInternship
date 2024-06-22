import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import { fetchAllJobs } from "@/redux/jobListSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchUserDetail } from "@/redux/userDetailSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const handleLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/login");
  };

  const { detailLoading, userDetail, detailError } = useSelector(
    (state: RootState) => state.user
  );
  // console.log(userDetail);

  const { loading, jobList, error } = useSelector(
    (state: RootState) => state.jobList
  );

  useEffect(() => {
    dispatch(fetchAllJobs());
    dispatch(fetchUserDetail());
  }, [dispatch]);

  return (
    <div>
      <Typography label="Dashboard" />

      {!detailLoading && userDetail ? (
        <div className="flex m-4 items-center gap-4">
          <div>{userDetail.user?.id}</div>
          <div>{userDetail.user?.name}</div>
          <div>{userDetail.user?.email}</div>
          <div>{userDetail.user?.skills}</div>
        </div>
      ) : (
        <div>User Detail loading</div>
      )}

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
