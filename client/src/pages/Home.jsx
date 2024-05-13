import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DisplayJobs from '../components/DisplayJobs'
import { useSelector } from 'react-redux'


function getUser(){
    let {user} = useSelector((state) => state.auth)

    if(user){
      console.log(user)
      return user;
    }

  const userFromStorage = JSON.parse(localStorage.getItem("user"));
  if (userFromStorage) {
    return userFromStorage;
  }
    return null
} 

const handleLogout = () =>{
  localStorage.removeItem("user")
  localStorage.removeItem("token")
}

const Home = () => {
    
  const user = getUser()
  
  return (
    <>
    {user ?(<>
    <div className='font-bold text-xl'>User Details</div>
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