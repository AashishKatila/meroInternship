import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Pages/Login"
import Home from "./pages/Home"
import JobDetail from "./pages/JobDetail"

const App = () => {

	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/job/:id" element={<JobDetail />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App