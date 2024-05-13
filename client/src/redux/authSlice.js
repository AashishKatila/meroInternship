import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const authUser = createAsyncThunk('auth/authUser',async(userCredentials) =>{
    const res = await axios.post('http://127.0.0.1:8000/api/login',userCredentials)
    const userInfo = await res.data.data;
    localStorage.setItem('user',JSON.stringify(userInfo))
    localStorage.setItem('token',JSON.parse(JSON.stringify(userInfo.token)))
    return userInfo
})

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        loading: null,
        user: null,
        token: null,
        error: null,
    },
    reducers:{
        setToken: (state,action) =>{
            state.token = action.payload
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(authUser.pending, (state) =>{
            state.loading = true;
            state.error = false;
        })
        .addCase(authUser.fulfilled, (state,action) =>{
            state.loading = null;
            state.user = action.payload;
            state.token = action.payload.token;
            state.error = false;
        })
        .addCase(authUser.rejected, (state,action) =>{
            state.loading = false;
            state.error = true;
            if(action.error.message === "Request failed with status code 401"){
                state.error = "Access Denied! Invalid Credentials"
            }else{
                state.error = action.error.message
            }
        })
    }
})

export const {setToken} = authSlice.actions;

export default authSlice.reducer