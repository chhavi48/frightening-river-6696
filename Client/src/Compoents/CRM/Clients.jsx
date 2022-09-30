import React, { useEffect } from "react";
import { Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getClientsRequest } from "../../Redux/App/app.actions";
import Sidebar from "./Sidebar";
const Clients = () => {
	const dispatch = useDispatch();
	const { clients } = useSelector((state) => state.App);
	const getRequest = () => {
		dispatch(getClientsRequest());
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
						<h1 className='heading-1'>Clients</h1>
						<Link to='/clients/create'>
							<Button className='green'>Create Clients</Button>
						</Link>
					</div>
				</div>
				<div style={{ marginTop: "20px" }}>
					<table>
						<tr>
							<th>NAME</th>
							<th>PROJECT</th>
							<th>EMAIL</th>
							<th>BUSINESS</th>
						</tr>
						<tbody>
							{clients.map((item) => (
								<tr key={item._id}>
									<td>{item.name.toUpperCase()}</td>
									<td>{item.project}</td>
									<td>{item.email}</td>
									<td>{item.business}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<Image src='https://user-images.githubusercontent.com/91409265/193240470-cdb879dc-1f63-4d26-bd82-ef54c2bf35f9.jpeg' />
			</div>
		</>
	);
};

export default Clients;
