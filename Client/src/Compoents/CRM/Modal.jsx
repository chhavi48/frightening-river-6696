import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import "./Header.css";
const Modals = ({ name,member }) => {
	console.log(name,member, "item");
	const [smShow, setSmShow] = useState(false);
	// form data
	const [formData, setData] = useState({});
	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		setData({ ...formData, [name]: value });
	};
	const onSubmitHandler = (e) => {
		e.preventDefault();
		console.log(formData);
	};
	return (
		<div className='button-div'>
			<button onClick={() => setSmShow(true)} className='title-button'>
				...
			</button>
			<Modal
				size='sm'
				show={smShow}
				onHide={() => setSmShow(false)}
				aria-labelledby='example-modal-sizes-title-sm'
			>
				<Modal.Header closeButton>
					<Modal.Title id='example-modal-sizes-title-sm'>
						Project Details
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={onSubmitHandler}>
						<Form.Group className='mb-3' controlId='formBasicEmail'>
							<Form.Label>Project Name</Form.Label>
							<Form.Control
								type='text'
								name='name'
								defaultValue={name}
								onChange={onChangeHandler}
							/>
						</Form.Group>
						<Form.Group className='mb-3' controlId='formBasicMember'>
							<Form.Label>Member</Form.Label>
							<Form.Control
								name='member'
								type='text'
								defaultValue={member}
								onChange={onChangeHandler}
							/>
						</Form.Group>
						<Form.Group
							className='mb-3'
							controlId='formBasicCheckbox'
						></Form.Group>
						<Form.Group className='flex-space-evenly'>
							<Button m='2' variant='primary' type='submit'>
								Edit
							</Button>
							<Button m='2' variant='primary'>
								Delete
							</Button>
						</Form.Group>
					</Form>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default Modals;
