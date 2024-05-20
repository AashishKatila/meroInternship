import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { applyForJob, fetchJobDetails } from '../redux/jobSlice'

const JobDetail = () => {
    const {id} = useParams()

    const [description,setDescription] = useState('')
    const [cv,setCV] = useState('')


    const {jobDetails,loading,error} = useSelector((state) => state.jobDetail)
    const {user} = useSelector((state) => state.auth)
    const userId = user.user.id
    console.log(userId)
    const dispatch = useDispatch()

    useEffect(() =>{
    dispatch(fetchJobDetails(id)) 
    },[dispatch,id])

    const handleCV = async (e) =>{
      console.log(e.target.files[0])
      setCV(e.target.files[0])
      console.log(cv)
    }

    const handleApplyJob = (e) =>{
      e.preventDefault()
      const formData = new FormData();
      formData.append('user_id',userId)
      formData.append('description',description)
      formData.append('job_id',id)
      formData.append('pdf',cv)
      console.log(formData)
      dispatch(applyForJob(formData)).then((result) =>{
        if(result.payload){
          alert(result.payload.status || result.payload.message)
        }
      })
    }

    return (
    <div className='m-4'>
      <h2>Job Details </h2>
       <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {jobDetails && (
                <div className=''>
                    <h1>Title : {jobDetails.title}</h1>
                    <p>Skill Required : {jobDetails.skills}</p>
                    <p>Description : {jobDetails.description}</p>
                    <p>Application ends on : {jobDetails.due_date} xth day mnth,year</p>
                    <textarea placeholder='Write coverletter' className='mt-2 border-2 w-[400px] focus:outline-none' value={description} onChange={(e) => setDescription(e.target.value)} />
                    <br />
                    <input placeholder='Upload your Cv' className='mt-2' type='file' accept='.pdf' onChange={handleCV} />
                    <br />
                    <button className='px-4 py-1 bg-green-400 mt-2 ' onClick={handleApplyJob}> Apply</button>
                </div>
            )}
        </div>
    </div>
  )
}

export default JobDetail