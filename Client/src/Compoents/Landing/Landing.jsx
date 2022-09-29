import React from "react";

import Navbar from "../Navbar/Navbar";
import Frontpage from "../Pages/Frontpage/Frontpage";
import Test from "../Pages/Section/Section";
import SplitScreen from "../Pages/Mproject/Mproject";
import Footer from "../Pages/Footer/Footer";
const Landing = () => {
	return (
		<div>
			<Navbar />
			<Frontpage />
			<Test />
			{/* <Section/> */}
			<SplitScreen />
			<Footer />
		</div>
	);
};

export default Landing;
