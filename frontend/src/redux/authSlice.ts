import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        user: null,
        token: null,
        status: 'idle',
        error: null
    },
    reducers:{
        setUserCredentials: (state,action) =>{
            console.log("HEY" ,action.payload)
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setAuthError: (state,action) =>{
            console.log("Error : " ,action.payload)
            state.error = action.payload
        },
        clearAuthError: (state) =>{
            state.error = null
        },
    },
})

export const {setUserCredentials,setAuthError,clearAuthError } = authSlice.actions
export default authSlice.reducer;