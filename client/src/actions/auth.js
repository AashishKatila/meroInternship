import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const signup = createAsyncThunk(
	"auth/register",
	async (user, { dispatch }) => {
		console.log("User", user)
		const response = await axios
			.post("/api/register", user)
			.then(response => {
				console.log(response)
				// handle success response
			})
			.catch(error => {
				console.log(error)
				// handle error response
			})
		if (!response) return { success: false }
	}
)
