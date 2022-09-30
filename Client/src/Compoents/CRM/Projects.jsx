import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { getProjectRequest } from "../../Redux/App/app.actions";
import Sidebar from "./Sidebar";
import Modals from "./Modal";
const Projects = () => {
	const dispatch = useDispatch();
	const { product } = useSelector((state) => state.App);
	const getRequest = () => {
		dispatch(getProjectRequest());
	};

	useEffect(() => {
		getRequest();
	}, []);
	return (
		<>
			<Sidebar />
			<div id='content'>
				<div className='main'>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<h1 className='heading-1'>Projects</h1>
						<Button>Create Projects</Button>
					</div>
				</div>
				<div style={{ marginTop: "20px" }}>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							fontWeight: "500",
						}}
					>
						<p>NAME</p>
						<p>MEMBER</p>
						<p>BUDGET</p>
						<p>BILLING</p>
					</div>
					{product.map((item) => (
						<div className='flex-space-between' key={item._id}>
							<div>
								{item.name}
								<span><Modals name={item.name} member={item.member} /></span>
							</div>
							<div>{item.member}</div>
							<div>{item.budget}</div>
							<div>{item.billing}</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Projects;
