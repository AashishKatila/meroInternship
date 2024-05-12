import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DisplayJobs from '../components/DisplayJobs'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../redux/userSlice'

function getUser(){
    let user = localStorage.getItem("user")
    if(user){
        user = JSON.parse(user)
    }else{
        user = null
    }
    return user
} 

const handleLogout = () =>{
  localStorage.removeItem("user")
}


const Home = () => {
    
  const user = getUser()
  
  useEffect(() =>{
  },[user])
  
  return (
    <>
    {user ?(<>
    <div>{user.user.name}</div>
    <div>{user.user.email}</div>
    <div>{user.user.skills}</div>
    <button className='bg-red-400 px-4 py-2 my-4' onClick={handleLogout}>Logout</button>
    <div>
      <DisplayJobs />
    </div>
    </>) : (
    <Link to='/login' className=''>Login</Link>
    ) }
    </>
  )
}

export default Home