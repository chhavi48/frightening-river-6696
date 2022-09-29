import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../Compoents/Landing/Landing";
const Routing = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Landing />} />
			</Routes>
		</>
	);
};
export default Routing;
