import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCompanyDetail = createAsyncThunk(
  "company/detail",
  async (thunkAPI) => {
    try {
      const token = sessionStorage.getItem("company_token");
      // console.log(token);
      const response = await axios.get(
        "http://127.0.0.1:8000/api/company/details",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      // console.log(response.data.data.user);
      return response.data.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const companySlice = createSlice({
  name: "companyDetail",
  initialState: {
    loading: false,
    company: {},
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCompanyDetail.pending, (state) => {
      // console.log("Pending company details");
      state.loading = true;
    });
    builder.addCase(fetchCompanyDetail.fulfilled, (state, action) => {
      // console.log(" company details feteched");
      (state.loading = false), (state.company = action.payload);
    });
    builder.addCase(fetchCompanyDetail.rejected, (state, action) => {
      (state.loading = false), (state.error = action.payload.message);
      // console.log("Error fetching company details");
    });
  },
});

export default companySlice.reducer;
