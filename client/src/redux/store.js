import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import jobListReducer from './jobSlice'

const store = configureStore({
    reducer:{
        user: userReducer,
        jobList: jobListReducer
    }
})

export default store;