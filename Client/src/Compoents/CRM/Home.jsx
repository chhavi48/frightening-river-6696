import React from "react";
import { Button, Col, Image, Nav, Row, Tab } from "react-bootstrap";
import Sidebar from "./Sidebar";
const Home = () => {
	return (
		<>
			<Sidebar />
			<div id='content'>
				<div className='main'>
					<p>Getting started with Everhour (hide forever)</p>
					<Tab.Container id='left-tabs-example' defaultActiveKey='first'>
						<Row className='p-4 m-5'>
							<Col sm={3}>
								<Nav variant='pills' className='flex-column'>
									<Nav.Item>
										<Nav.Link eventKey='first'>Add integration</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey='second'>Install extension</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey='third'>First time entry</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey='four'>Invite your team</Nav.Link>
									</Nav.Item>
								</Nav>
							</Col>
							<Col sm={9}>
								<Tab.Content classname='p-2 bg-light text-left'>
									<Tab.Pane eventKey='first'>
										<p>
											Connect Everhour with your apps
											<br />
											Everhour controls will natively appear inside the most
											popular project management tools. As the result, better
											accuracy & less employee teaching.
										</p>
										<Button variant='success'>Connect</Button>
									</Tab.Pane>
									<Tab.Pane eventKey='second'>
										<p>
											Everhour browser extension
											<br />
											Everhour controls will natively appear inside the most
											popular project management tools. As the result, better
											accuracy & less employee teaching.
										</p>
										<Button variant='success'>Install</Button>
									</Tab.Pane>
									<Tab.Pane eventKey='third'>
										<p>
											Start tracking time
											<br />
											Everhour controls will natively appear inside the most
											popular project management tools. As the result, better
											accuracy & less employee teaching.
										</p>
										<Button variant='success'>Add Time</Button>
									</Tab.Pane>
									<Tab.Pane eventKey='four'>
										<p>
											Invite your teammates
											<br />
											Everhour controls will natively appear inside the most
											popular project management tools. As the result, better
											accuracy & less employee teaching.
										</p>
										<Button variant='success'>Invite</Button>
									</Tab.Pane>
								</Tab.Content>
							</Col>
						</Row>
						<Image src='https://user-images.githubusercontent.com/91409265/192548058-79cd5e06-e9d1-4fab-8954-aeb30ee3a7f5.png' />
					</Tab.Container>
				</div>
			</div>
		</>
	);
};

export default Home;
