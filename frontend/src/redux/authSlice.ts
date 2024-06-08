import { LoginSchema, SignupSchema } from "@/utils/zod";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { z } from "zod";

type SignupFormInputs = z.infer<typeof SignupSchema>;
type LoginFormInputs = z.infer<typeof LoginSchema>;

export const authUser = createAsyncThunk('auth/authUser',async({ userCredentials}: { userCredentials: LoginFormInputs},thunkAPI) =>{
    try{const response = await axios.post("http://127.0.0.1:8000/api/login",userCredentials)
    const userInformation = response.data.data;
    console.log(userInformation)
    if(response.status === 200){
        return userInformation
    }else{
        return thunkAPI.rejectWithValue(response.data);
    }
}catch(error) {
    return thunkAPI.rejectWithValue(error.response.data);
}
})

export const signupUser = createAsyncThunk('auth/signupUser',async({ userCredentials }: { userCredentials: SignupFormInputs},thunkAPI) =>{
    console.log(userCredentials)
    try{const response = await axios.post("http://127.0.0.1:8000/api/register",userCredentials)
    const userInformation = response.data.data;
    return userInformation
}catch(error:any) {
    return thunkAPI.rejectWithValue(error.response.data);
}
})

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        user: null,
        token: null,
        loading: false,
        error: '',
    },
    
    reducers:{
    },
    extraReducers: (builder) =>{
        builder
        .addCase(authUser.pending,(state) =>{
            state.loading = true;
        })
        .addCase(authUser.fulfilled,(state,action) =>{
            state.loading = false;
            state.user = action.payload;
            state.token = action.payload.token;
            sessionStorage.setItem("user",action.payload.user)
            sessionStorage.setItem("token",action.payload.token)
        })
        .addCase(authUser.rejected,(state,action) =>{
            state.loading = false;
            state.error = action.payload.message;
        })
        .addCase(signupUser.pending,(state) =>{
            state.loading = true;
        })
        .addCase(signupUser.fulfilled,(state) =>{
            state.loading = false;
        })
        .addCase(signupUser.rejected,(state,action) =>{
            state.loading = false;
            state.error = action.payload.message;
        })
    }
})

export default authSlice.reducer;