import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import jobListReducer from './jobListSlice'
import companyAuthReducer from './companyAuthSlice'
import companyReducer from './companyDetailSlice'
import companyJobReducer from './companyJobSlice'
import companyPostJobReducer from './companyPostSlice'

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

const store = configureStore({
    reducer:{
        auth: authReducer,
        jobList : jobListReducer,
        companyAuth: companyAuthReducer,
        companyDetail: companyReducer,
        companyJob: companyJobReducer,
        postJob: companyPostJobReducer
    }
})

export default store;