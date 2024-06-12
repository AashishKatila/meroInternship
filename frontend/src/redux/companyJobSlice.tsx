import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCompanyJobs = createAsyncThunk(
  "company/jobsPosted",
  async () => {
    try {
      const token = sessionStorage.getItem("company_token");
      const response = await axios.get(
        "http://127.0.0.1:8000/api/company/job_list",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Jobs fetched = ", response.data.data.job_post);
      return response.data.data.job_post;
    } catch (error) {
      return error;
    }
  }
);

const companyJobSlice = createSlice({
  name: "companyJob",
  initialState: {
    isLoading: false,
    companyJobs: [],
    isError: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCompanyJobs.pending, (state) => {
      console.log("Pending company jobs");
      state.isLoading = true;
    });
    builder.addCase(fetchCompanyJobs.fulfilled, (state, action) => {
      (state.isLoading = false), (state.companyJobs = action.payload);
      console.log(" company jobs feteched");
    });
    builder.addCase(fetchCompanyJobs.rejected, (state, action) => {
      console.log("Error fetching company jobs");
      (state.isLoading = false), (state.isError = action.payload.message);
    });
  },
});

export default companyJobSlice.reducer;
