import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllJobs = createAsyncThunk('intern/jobList',async(thunkAPI) =>{
    try {
        const token = sessionStorage.getItem("token")
        // console.log(token)
        const response = await axios.get('http://127.0.0.1:8000/api/jobs',
            {headers:
                {Authorization: `Bearer ${token}`},
            })
            // console.log(response.data.jobs.data)
            return response.data.jobs.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
}) 

const jobSlice = createSlice({
    name: 'jobList',
    initialState :{
        loading: false,
        jobList:[],
        error: null,
    },
    reducers:{

    },
   extraReducers: (builder) =>{
    builder
    .addCase(fetchAllJobs.pending,(state) =>{
        // console.log("Jobs Loading...")
        state.loading = true
    })
    .addCase(fetchAllJobs.fulfilled,(state,action) =>{
        state.loading = false;
        state.jobList = action.payload;
        // console.log("Jobs Loaded")

    })
    .addCase(fetchAllJobs.rejected,(state,action) =>{
        state.loading = false;
        state.error = action.payload.message;
        // console.log("Jobs Error")

    })
   }
})
export default jobSlice.reducer;