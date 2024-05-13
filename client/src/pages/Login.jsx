import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { authUser } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const {loading,error} = useSelector((state) => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = (e) =>{
        e.preventDefault();
        let userCredentials = {email,password}
        dispatch(authUser(userCredentials)).then((result) =>{
            if(result.payload){
                setEmail('')
                setPassword('')
                navigate('/')
            }
        })
    }
  return (
    <form>
        <label>Enter your email </label>
        <input type='email' required placeholder='xyz@domain.com' onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Enter your password </label>
        <input type='password'  required placeholder='xyz@domain.com' onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button onClick={handleLogin}>{loading ? 'Loading...' : 'Login'}</button>
        {error && (
            <div className='text-red-900'>{error}</div>
        )}
    </form>
  )
}

export default Login