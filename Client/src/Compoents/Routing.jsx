import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../Compoents/Landing/Landing";
import Clients from "./CRM/Clients";
import Home from "./CRM/Home";
import ProjectAdd from "./CRM/ProjectAdd";
import Projects from "./CRM/Projects";
import Reports from "./CRM/Reports";
import Settings from "./CRM/Settings";
import Team from "./CRM/Team";
import Time from "./CRM/Time";
import Demo from "./Pages/Demo/DemoPage";
import PricesPage from "./Pages/PricesPage";
import Login from "./Pages/signupLogin/Login";
import Signup from "./Pages/signupLogin/Signup";
const Routing = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/demo' element={<Demo />} />
				<Route path='/pricing' element={<PricesPage />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/login' element={<Login />} />
				<Route path='/pricing' element={<PricesPage />} />
				{/* this is crm Routing pls make sure you does not add your rout between them */}
				<Route path='/home' element={<Home />} />
				<Route path='/time' element={<Time />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/projects/create' element={<ProjectAdd />} />
				<Route path='/reports' element={<Reports />} />
				<Route path='/team' element={<Team />} />
				<Route path='/settings' element={<Settings />} />
				<Route path='/clients' element={<Clients />} />
			</Routes>
		</>
	);
};
export default Routing;
