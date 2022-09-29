//import useState hook to create menu collapse state
import React, { useState } from "react";
import { Link } from "react-router-dom";
//import react pro sidebar components
import {
	ProSidebar,
	Menu,
	MenuItem,
	SidebarHeader,
	SidebarFooter,
	SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import {
	FiHome,
	FiLogOut,
	FiArrowLeftCircle,
	FiArrowRightCircle,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";

const Header = () => {
	//create initial menuCollapse state using useState hook
	const [menuCollapse, setMenuCollapse] = useState(false);

	//create a custom function that will change menucollapse state from false to true and true to false
	const menuIconClick = () => {
		//condition checking to change state from true to false and vice versa
		menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
	};
	return (
		<div id='header'>
			{/* collapsed props to change menu size using menucollapse state */}
			<ProSidebar collapsed={menuCollapse}>
				<SidebarHeader>
					<div className='logotext'>
						{/* small and big change using menucollapse state */}
						<p>{menuCollapse ? "Logo" : "Everhour"}</p>
					</div>
					<div className='closemenu' onClick={menuIconClick}>
						{/* changing menu collapse icon on click */}
						{menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
					</div>
				</SidebarHeader>
				<SidebarContent>
					<Menu iconShape='square'>
						<MenuItem active={true} icon={<FiHome />}>
							<Link to='/home' className='Link-item'>
								Home
							</Link>
						</MenuItem>
						<MenuItem icon={<FaList />}>
							<Link to='/time' className='Link-item'>
								Time
							</Link>
						</MenuItem>
						<MenuItem icon={<FaRegHeart />}>
							<Link to='/projects' className='Link-item'>
								Projects
							</Link>
						</MenuItem>
						<MenuItem icon={<RiPencilLine />}>
							<Link to='/clients' className='Link-item'>
								Clients
							</Link>
						</MenuItem>
						<MenuItem icon={<BiCog />}>
							<Link to='/team' className='Link-item'>
								Team
							</Link>
						</MenuItem>
						<MenuItem icon={<BiCog />}>
							<Link to='/reports' className='Link-item'>
								Reports
							</Link>
						</MenuItem>
						<MenuItem icon={<BiCog />}>
							<Link to='/settings' className='Link-item'>
								Setting
							</Link>
						</MenuItem>
					</Menu>
				</SidebarContent>
				<SidebarFooter>
					<Menu iconShape='square'>
						<MenuItem icon={<FiLogOut />}>Logout</MenuItem>
					</Menu>
				</SidebarFooter>
			</ProSidebar>
		</div>
	);
};

export default Header;
