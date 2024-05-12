import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchJobs } from '../redux/jobSlice'

const DisplayJobs = () => {

    const {loading,error,jobList} = useSelector((state) => state.jobList)
    
    // function load(jobList){
    //   // console.log(jobList);
    //   // console.log(jobList.job_list);
    //   jobList.job_list.slice(1).map((job) => {
    //     // console.log(`Job ${index + 1}:`);
    //     console.log(job.title); // Log each job list
    //   });
    // }

    const dispatch = useDispatch()

    // if(jobList){
    //   load(jobList)
    // }

    useEffect(()=>{
        dispatch(fetchJobs())
    },[dispatch])

    return (
        <>
    <div className='text-green-900 mt-8 font-bold'>Jobs: </div>
    { loading && !error && <p> Loading</p> }
    {error && <p>Error: {error}</p>}
      {jobList.job_list ? (
        <ul>
         {jobList.job_list.slice(1).map((job, index) => (
            <li key={index}>{job.title}</li>
         ))}
        </ul>
      ) : (
        <p>No jobs available</p>
      )}
    </>
  )
}

export default DisplayJobs