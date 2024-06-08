import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import jobListReducer from './jobListSlice'
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

const store = configureStore({
    reducer:{
        auth: authReducer,
        jobList : jobListReducer,
    }
})

export default store;