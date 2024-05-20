import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchJobDetails = createAsyncThunk('/jobs/fetchJobDetails',async(jobId) =>{
    
    try{
        const token = localStorage.getItem("token")
        const res = await axios.get(`http://127.0.0.1:8000/api/job/${jobId}`,{
            headers:{
                Authorization: `Bearer ${token}`
            },
        })
        console.log(res.data.job)
        return res.data.job
    }catch(error){
        throw(error)
    }
})

export const applyForJob = createAsyncThunk('./jobs/applyForJob',async(applicantData) =>{
    try{
        const token = localStorage.getItem("token")
        const res = await axios.post('http://127.0.0.1:8000/api/user/form',applicantData,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        console.log(res.data)
        return res.data
    }catch(error){
        throw(error)
    }
})

const jobSlice = createSlice({
    name : 'job',
    initialState : {
        loading : null,
        jobDetails : null, 
        error : null,
        applyLoading : null,
        applyError : null,
        applySuccess : null,
    },
    extraReducers: (builder) =>{
        builder
        .addCase(fetchJobDetails.pending,(state) =>{
            state.loading = true;
            state.error = false;
        })
        .addCase(fetchJobDetails.fulfilled,(state,action) =>{
            state.loading = false;
            state.jobDetails = action.payload;
            state.error = false
        })
        .addCase(fetchJobDetails.rejected,(state,action) =>{
            state.pending = false;
            state.error = action.error.message
        })
        .addCase(applyForJob.pending,(state) =>{
            state.applyLoading = true
        })
        .addCase(applyForJob.fulfilled,(state,action) =>{
            state.applyLoading = false;
            state.applySuccess = action.payload;
        })
        .addCase(applyForJob.rejected,(state) =>{
            state.applyLoading = false;
            state.applyError = true;
        })
    }
})

export default jobSlice.reducer;