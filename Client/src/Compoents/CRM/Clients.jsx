import React, { useEffect } from "react";
import { Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
const Clients = () => {
	const dispatch = useDispatch();
	const { clients } = useSelector((state) => state.App);
	// const getRequest = () => {
	// 	dispatch();
	// };

	// useEffect(() => {
	// 	getRequest();
	// }, [clients]);
	return (
		<>
			<Sidebar />
			<div id='content'>
				<div className='main'>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<h1 className='heading-1'>Clients</h1>
						<Link to='/client/create'>
							<Button className='green'>Create Clients</Button>
						</Link>
					</div>
				</div>
				<div style={{ marginTop: "20px" }}>
					<table>
						<thead>
							<td>NAME</td>
							<td>MEMBER</td>
							<td>BUDGET</td>
							<td>BILLING</td>
						</thead>
						<tbody></tbody>
					</table>
				</div>
				<Image src='https://user-images.githubusercontent.com/91409265/193240470-cdb879dc-1f63-4d26-bd82-ef54c2bf35f9.jpeg' />
			</div>
		</>
	);
};

export default Clients;
