import React, { useState, useEffect } from "react";
import { generateRandomData } from "@/utils/faker";
import CustomCard from "./ui/CustomCard";

const LazyData: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const generatedData = await generateRandomData();
      setData(generatedData);
    };

    fetchData();
  }, []);

  return (
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
    </div>
  );
};

export default LazyData;
