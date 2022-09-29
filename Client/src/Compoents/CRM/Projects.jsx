import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProjectRequest } from "../../Redux/App/app.actions";
import Sidebar from "./Sidebar";
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
					<div style={{ display: "flex", justifyContent: "space-between",fontWeight:"400"}}>
						<p>NAME</p>
						<p>MEMBER</p>
						<p>BUDGET</p>
						<p>BILLING</p>
					</div>
					{product.map((item) => (
						<div
							key={item._id}
							style={{ display: "flex", justifyContent: "space-between" }}
						>
							<p>{item.name}</p>
							<p>member</p>
							<p>buget</p>
							<p>billing</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Projects;
