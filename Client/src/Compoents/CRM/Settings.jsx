import React from "react";
import { Image } from "react-bootstrap";
import Sidebar from "./Sidebar";
const Settings = () => {
	return (
		<>
			<Sidebar />
			<div id='content'>
				<Image src='https://user-images.githubusercontent.com/91409265/193398816-bc0ff52d-bc48-4f37-a8c3-3615f88f505e.png' />
			</div>
		</>
	);
};

export default Settings;
