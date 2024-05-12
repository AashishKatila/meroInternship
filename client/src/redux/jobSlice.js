import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchJobs = createAsyncThunk('/jobs/fetchJobs',async(_,fetchAPI) =>{
    try{
        const token = fetchAPI.getState().user.token
        console.log("Hello " ,token )
        const res = await axios.get("http://127.0.0.1:8000/api/user/job_list",{
            headers:{
                Authorization: `Bearer ${token}`
            },
        })
        return res.data
    }catch(error){
        throw(error)
    }
})

const jobSlice = createSlice({
    name: 'jobs',
    initialState:{
        loading: null,
        jobList: [],
        error: null,
    },
    extraReducers: (builder) =>{
        builder
        .addCase(fetchJobs.pending,(state) =>{
            state.loading = true;
            state.error = false;
        })
        .addCase(fetchJobs.fulfilled,(state,action) =>{
            state.loading = false;
            state.jobList = action.payload;
            state.error = false
        })
        .addCase(fetchJobs.rejected,(state,action) =>{
            state.pending = false;
            state.error = action.error.message
        })
    }
})

export default jobSlice.reducer;