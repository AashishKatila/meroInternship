import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const JobDetail = () => {
    const {id} = useParams()
    const [jobDetails,setJobDetails] = useState(null)
  return (
    <div>JobDetail</div>
  )
}

export default JobDetail