import React, { useEffect } from "react";
import { Button, Image } from "react-bootstrap";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { getProjectRequest } from "../../Redux/App/app.actions";
import Sidebar from "./Sidebar";
import Modals from "./Modal";
import { Link } from "react-router-dom";
const Projects = () => {
	const dispatch = useDispatch();
	const { product } = useSelector((state) => state.App);
	const getRequest = () => {
		dispatch(getProjectRequest());
	};

	useEffect(() => {
		getRequest();
	}, [product]);
	return (
		<>
			<Sidebar />
			<div id='content'>
				<div className='main'>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<h1 className='heading-1'>Projects</h1>
						<Link to='/projects/create'>
							<Button className="green">Create Projects</Button>
						</Link>
					</div>
				</div>
				<div style={{ marginTop: "20px" }}>
					<table>
						<tr>
							<th>NAME</th>
							<th>MEMBER</th>
							<th>BUDGET</th>
							<th>BILLING</th>
						</tr>
						{product.map((item) => (
							<tr>
								<td>
									{item.name}{" "}
									<span>
										<Modals
											name={item.name}
											member={item.member}
											id={item._id}
										/>
									</span>
								</td>
								<td>{item.member}</td>
								<td>{item.budget}</td>
								<td>{item.billing}</td>
							</tr>
						))}
					</table>
				</div>
				<Image src='https://user-images.githubusercontent.com/91409265/193240470-cdb879dc-1f63-4d26-bd82-ef54c2bf35f9.jpeg' />
			</div>
		</>
	);
};

export default Projects;
