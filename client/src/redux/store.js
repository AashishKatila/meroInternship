import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import jobListReducer from './jobListSlice'
import JobDetailReducer from './jobSlice'

const store = configureStore({
    reducer:{
        auth: authReducer,
        jobList: jobListReducer,
        jobDetail: JobDetailReducer,
    }
})

export default store;