import React, { useEffect } from "react";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Typography } from "@/components/ui/Typography";
import { fetchCompanyDetail } from "@/redux/companyDetailSlice";
import { fetchCompanyJobs } from "@/redux/companyJobSlice";

const CompanyDashboard = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCompanyJobs());
    dispatch(fetchCompanyDetail());
  }, [dispatch]);

  const { loading, company, error } = useSelector(
    (state: RootState) => state.companyDetail
  );

  const { isLoading, companyJobs, isError } = useSelector(
    (state: RootState) => state.companyJob
  );

  console.log("Company = ", company);
  console.log("Jobs = ", companyJobs);
  return (
    <div>
      Company Details
      {/* <Typography label={company.id} /> */}
      <div>
        <Typography label={company.name} />
        <Typography label={company.email} />
        <Typography label={company.registration_number} />
      </div>
      <div className="flex">
        {loading && <p>Loading...</p>}
        {!isLoading &&
          companyJobs.map((item, index) => {
            return (
              <div key={index}>
                <Typography label={item.title} />
                <Typography label={item.description} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CompanyDashboard;
