import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchJobs } from '../redux/jobListSlice'
import { Link, useNavigate } from 'react-router-dom'

const DisplayJobs = () => {

    const {loading,error,jobList} = useSelector((state) => state.jobList)
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        dispatch(fetchJobs())
    },[dispatch])

    return (
        <>
    <div className='text-green-900 my-8 font-bold text-xl'>Jobs: </div>
    { loading && !error ? <p> Loading</p> : null }
    {!loading && error && <p>Error: {error}</p>}
      {!loading && jobList.job_list ? (
        <ul>
         {jobList.job_list.slice(1).map((job, index) => (
            <div className='grid grid-cols-4 my-2'>
            <li key={index}>{job.title}</li>
          {console.log(job)}
            <button className='px-4 py-2 bg-green-400 font-bold w-44' onClick={()=>navigate(`/job/${job.job_id}`)}>Apply</button>
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