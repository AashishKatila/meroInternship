import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchJobs } from '../redux/jobListSlice'

const DisplayJobs = () => {

    const {loading,error,jobList} = useSelector((state) => state.jobList)
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchJobs())
    },[dispatch])

    return (
        <>
    <div className='text-green-900 my-8 font-bold text-xl'>Jobs: </div>
    { loading && !error && <p> Loading</p> }
    {error && <p>Error: {error}</p>}
      {jobList.job_list ? (
        <ul>
         {jobList.job_list.slice(1).map((job, index) => (
            <div className='grid grid-cols-4 my-2'>
            <li key={index}>{job.title}</li>
            <button className='px-4 py-2 bg-green-400 font-bold w-44'>Apply</button>
            </div>
         ))}
        </ul>
      ) : (
        <p>No jobs available</p>
      )}
    </>
  )
}

export default DisplayJobs