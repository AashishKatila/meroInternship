import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Typography } from "@/components/ui/Typography";
import { fetchCompanyDetail } from "@/redux/companyDetailSlice";
import { fetchCompanyJobs } from "@/redux/companyJobSlice";
import { Button } from "@/components/ui/Button";
import CustomDialog from "@/components/CustomDialog";

const CompanyDashboard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [jobModal, setJobModal] = useState(false);

  useEffect(() => {
    dispatch(fetchCompanyJobs());
    dispatch(fetchCompanyDetail());
  }, [dispatch]);

  const { loading, company, error } = useSelector(
    (state: RootState) => state.companyDetail
  );

  const company_id = company.id;

  const { isLoading, companyJobs, isError } = useSelector(
    (state: RootState) => state.companyJob
  );

  const handleModal = () => {
    setJobModal(true);
  };

  return (
    <div className=" h-screen flex flex-col items-center justify-center">
      <Typography label="Company Details" weight="semibold" variant="h4" />
      <div className="mb-10">
        <div className="flex gap-4">
          <Typography label="ID : " weight="medium" />
          <Typography
            label={company.id}
            weight="semibold"
            className="tracking-wider"
          />
        </div>
        <div className="flex gap-4">
          <Typography label="Name: " weight="medium" />
          <Typography
            label={company.name}
            weight="semibold"
            className="tracking-wider"
          />
        </div>
        <div className="flex gap-4">
          <Typography label="Email : " weight="medium" />
          <Typography
            label={company.email}
            weight="semibold"
            className="tracking-wider"
          />
        </div>
        <div className="flex gap-4">
          <Typography label="Registration Number : " weight="medium" />
          <Typography
            label={company.registration_number}
            weight="semibold"
            className="tracking-wider"
          />
        </div>
      </div>
      <div className="flex mb-4">
        {loading && <p>Loading...</p>}
        {!isLoading && (
          <div className="grid grid-cols-2 gap-4">
            {companyJobs.map((item, index) => {
              return (
                <div key={index} className="grid border-4 gap-2 grid-cols-2 ">
                  <Typography label={item.title} />
                  <Typography label={item.description} />
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Dialog as a separate component  */}
      {!jobModal && <Button onClick={handleModal}>Open Modal</Button>}
      {jobModal && (
        <CustomDialog
          openModal={jobModal}
          setJobModal={setJobModal}
          company_id={company_id}
        />
      )}
    </div>
  );
};

export default CompanyDashboard;
