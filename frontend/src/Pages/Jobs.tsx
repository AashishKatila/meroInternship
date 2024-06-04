import React, { useEffect, useState } from "react";
import { generateRandomData } from "@/utils/faker";
import CustomCard from "@/components/ui/CustomCard";
import Lottie from "lottie-react";
import Loading from "@/assets/Loading/loader.json";
import { Typography } from "@/components/ui/Typography";

const Jobs: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const fakerData = generateRandomData(40);
      setTimeout(() => {
        setData((prevData) => [...prevData, ...fakerData]);
        setLoading(false);
      }, 5000);
    };

    fetchPosts();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mx-10 my-10">
      <Typography
        label="Available Jobs"
        variant="h2"
        weight="semibold"
        className="mb-8 text-center text-teal_700"
      />
      <div className="grid grid-cols-3 gap-8">
        {data.map((item) => (
          <div key={item.id}>
            <CustomCard
              imgsrc={item.image}
              alt={item.job}
              job={item.job}
              company={item.company}
              jobType={item.job}
              companyLocation={item.location}
              salary={item.salary}
              deadline={item.deadline}
            />
          </div>
        ))}
        {loading && (
          <div className="w-[300px] ">
            <Lottie animationData={Loading} loop={true} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
