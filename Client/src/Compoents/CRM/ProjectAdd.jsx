import React, { useState } from "react";
import { Form, Button, Image } from "react-bootstrap";
import Sidebar from "./Sidebar";
import "./Header.css";
import { useDispatch } from "react-redux";
import { getCreateProject } from "../../Redux/App/app.actions";
import {useNavigate } from "react-router-dom";
const ProjectAdd = () => {
	const [project, setProject] = useState({});
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const onchangeHandler = (e) => {
		const { name, value } = e.target;
		setProject({
			...project,
			[name]: value,
		});
	};
	const onSubmitHandler = (e) => {
		e.preventDefault();
		dispatch(getCreateProject(project))
			.then((res) => {
				return navigate("/projects");
			})
			.catch((e) => {
				console.log(e);
			});
	};
	return (
		<>
			<Sidebar />
			<div id='content' style={{ textAlign: "center" }}>
				<h2 className='heading-1'>ADD NEW PROJECT</h2>
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
						<Form.Control
							name='member'
							placeholder='Enter Member'
							type='text'
							onChange={onchangeHandler}
						/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicMember'>
						<Form.Control
							name='budget'
							placeholder='Enter Budget'
							type='text'
							onChange={onchangeHandler}
						/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicMember'>
						<Form.Control
							name='billing'
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

export default ProjectAdd;
