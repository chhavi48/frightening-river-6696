import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../Compoents/Landing/Landing";
import Clients from "./CRM/Clients";
import Home from "./CRM/Home";
import Projects from "./CRM/Projects";
import Reports from "./CRM/Reports";
import Settings from "./CRM/Settings";
import Team from "./CRM/Team";
import Time from "./CRM/Time";
import Signup from './Pages/signupLogin/Signup';
import Login from './Pages/signupLogin/Login';
const Routing = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Landing />} />
				{/* this is crm Routing pls make sure you does not add your rout between them */}
				<Route path='/home' element={<Home />} />
				<Route path='/time' element={<Time />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/reports' element={<Reports />} />
				<Route path='/team' element={<Team />} />
				<Route path='/settings' element={<Settings />} />
				<Route path='/clients' element={<Clients />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</>
	);
};
export default Routing;
