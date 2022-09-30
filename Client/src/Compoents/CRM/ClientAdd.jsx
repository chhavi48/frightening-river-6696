import React, { useEffect, useState } from "react";
import { Form, Button, Image } from "react-bootstrap";
import Sidebar from "./Sidebar";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import {
	getCreateClient,
	getCreateProject,
	getProjectRequest,
} from "../../Redux/App/app.actions";
import { useNavigate } from "react-router-dom";
const ClientAdd = () => {
	const { product } = useSelector((state) => state.App);
	console.log(product);
	const [client, setClient] = useState({});
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const onchangeHandler = (e) => {
		const { name, value } = e.target;
		setClient({
			...client,
			[name]: value,
		});
	};
	const onSubmitHandler = (e) => {
		e.preventDefault();
		dispatch(getCreateClient(client))
			.then((res) => navigate("/clients"))
			.catch((e) => {
				console.log(e);
			});
	};
	const getRequest = () => {
		dispatch(getProjectRequest());
	};
	useEffect(() => {
		getRequest();
	}, []);
	return (
		<>
			<Sidebar />
			<div id='content' style={{ textAlign: "center" }}>
				<h2 className='heading-1'>ADD NEW CLIENT</h2>
				<Form onSubmit={onSubmitHandler} className='form-field'>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Control
							name='name'
							placeholder='Enter Name'
							type='text'
							onChange={onchangeHandler}
						/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicMember'>
						<Form.Select name='project' onChange={onchangeHandler}>
							{product.map((item) => (
								<option key={item._id} defaultValue={item.name}>
									{item.name}
								</option>
							))}
						</Form.Select>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicMember'>
						<Form.Control
							name='email'
							placeholder='Enter Budget'
							type='text'
							onChange={onchangeHandler}
						/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicMember'>
						<Form.Control
							name='business'
							placeholder='Enter Billing'
							type='text'
							onChange={onchangeHandler}
						/>
					</Form.Group>
					<Form.Group
						className='mb-3'
						controlId='formBasicCheckbox'
					></Form.Group>
					<Form.Group className='flex-space-evenly'>
						<Button m='2' className='green' type='submit'>
							Add
						</Button>
					</Form.Group>
				</Form>
				<Image src='https://user-images.githubusercontent.com/91409265/193240470-cdb879dc-1f63-4d26-bd82-ef54c2bf35f9.jpeg' />
			</div>
		</>
	);
};

export default ClientAdd;
