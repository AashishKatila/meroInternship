import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const loginUser = createAsyncThunk('user/loginUser',async(userCredentials) =>{
    const res = await axios.post('http://127.0.0.1:8000/api/login',userCredentials)
    const userInfo = await res.data.data;
    localStorage.setItem('user',JSON.stringify(userInfo))
    return userInfo

}  )

const userSlice = createSlice({
    name: 'user',
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
        .addCase(loginUser.pending, (state) =>{
            state.loading = true;
            state.error = false;
        })
        .addCase(loginUser.fulfilled, (state,action) =>{
            state.loading = null;
            state.user = action.payload;
            state.token = action.payload.token;
            state.error = false;
        })
        .addCase(loginUser.rejected, (state,action) =>{
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

export const {setToken} = userSlice.actions;

export default userSlice.reducer