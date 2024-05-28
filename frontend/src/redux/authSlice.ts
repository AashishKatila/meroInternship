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
    },
})

export const {setUserCredentials } = authSlice.actions
export default authSlice.reducer;