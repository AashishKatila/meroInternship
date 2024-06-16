import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postJob = createAsyncThunk(
  "/company/postJob",
  async (companyRequirements) => {
    try {
      const token = sessionStorage.getItem("company_token");
      const res = await axios.post(
        "http://127.0.0.1:8000/api/company/forms_submit",
        companyRequirements,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

const companyPostSlice = createSlice({
  name: "companyJob",
  initialState: {
    postJobLoading: false,
    postJobSuccess: "",
    postJobError: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postJob.pending, (state) => {
      state.postJobLoading = true;
    });
    builder.addCase(postJob.fulfilled, (state, action) => {
      (state.postJobLoading = false), (state.postJobSuccess = action.payload);
    });
    builder.addCase(postJob.rejected, (state, action) => {
      (state.postJobLoading = false), (state.postJobError = action.payload);
    });
  },
});

export default companyPostSlice.reducer;
