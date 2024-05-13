import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import jobListReducer from './jobSlice'

const store = configureStore({
    reducer:{
        auth: authReducer,
        jobList: jobListReducer
    }
})

export default store;