import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Pages/Login"
import Home from "./pages/Home"

const App = () => {

	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App