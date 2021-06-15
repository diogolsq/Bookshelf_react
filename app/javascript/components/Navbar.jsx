import LoginHelper from '../helpers/LoginHelper';
import React from "react";
import {} from "../../assets/stylesheets/Navbar.scss"; 

const Navbar = () => {
    const user_logged_thumb = LoginHelper.getThumb()

    
	return (
		<div className='navbar'>
            <div className='image-navbar'>
                <img src={`${user_logged_thumb}`} />
            </div>
		</div>
	)
}


export default Navbar;
