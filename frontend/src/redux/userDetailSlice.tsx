import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserDetail = createAsyncThunk(
  "user/detail",
  async (thunkAPI) => {
    try {
      const token = sessionStorage.getItem("token");
      console.log(token);
      const response = await axios.get("http://127.0.0.1:8000/api/details", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

const userDetailSlice = createSlice({
  name: "userDetail",
  initialState: {
    detailLoading: false,
    userDetail: {},
    detailError: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserDetail.pending, (state) => {
      // console.log("Pending company details");
      state.detailLoading = true;
    });
    builder.addCase(fetchUserDetail.fulfilled, (state, action) => {
      // console.log(" company details feteched");
      (state.detailLoading = false), (state.userDetail = action.payload);
    });
    builder.addCase(fetchUserDetail.rejected, (state, action) => {
      (state.detailLoading = false),
        (state.detailError = action.payload.message);
      // console.log("Error fetching company details");
    });
  },
});

export default userDetailSlice.reducer;
