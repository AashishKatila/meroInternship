import { CompanyLoginSchema,  } from "@/utils/zod";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { z } from "zod";

// type SignupFormInputs = z.infer<typeof SignupSchema>;
type CompanyLoginFormInputs = z.infer<typeof CompanyLoginSchema>;

export const authCompany = createAsyncThunk('auth/authCompany',async({ companyCredentials}: { companyCredentials: CompanyLoginFormInputs},thunkAPI) =>{
    try{const response = await axios.post("http://127.0.0.1:8000/api/company/login",companyCredentials)
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

// export const signupUser = createAsyncThunk('auth/signupCompany',async({ companyCredentials }: { companyCredentials: SignupFormInputs},thunkAPI) =>{
//     console.log(companyCredentials)
//     try{const response = await axios.post("http://127.0.0.1:8000/api/register",companyCredentials)
//     const userInformation = response.data.data;
//     return userInformation
// }catch(error:any) {
//     return thunkAPI.rejectWithValue(error.response.data);
// }
// })

const companyAuthSlice = createSlice({
    name: 'authCompany',
    initialState:{
        company: null,
        token: null,
        loading: false,
        error: '',
    },
    
    reducers:{
    },
    extraReducers: (builder) =>{
        builder
        .addCase(authCompany.pending,(state) =>{
            state.loading = true;
        })
        .addCase(authCompany.fulfilled,(state,action) =>{
            state.loading = false;
            state.company = action.payload;
            state.token = action.payload.token;
            sessionStorage.setItem("user",action.payload.user)
            sessionStorage.setItem("company_token",action.payload.token)
        })
        .addCase(authCompany.rejected,(state,action) =>{
            state.loading = false;
            state.error = action.payload.message;
        })
        // .addCase(signupUser.pending,(state) =>{
        //     state.loading = true;
        // })
        // .addCase(signupUser.fulfilled,(state) =>{
        //     state.loading = false;
        // })
        // .addCase(signupUser.rejected,(state,action) =>{
        //     state.loading = false;
        //     state.error = action.payload.message;
        // })
    }
})

export default companyAuthSlice.reducer;