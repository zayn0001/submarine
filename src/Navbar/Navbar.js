import React from 'react';
import "./Navbar.css";
import logo from './Placeholder.png'
import { Link } from 'react-router-dom';

function Navbar(){
	
    return (
        <>
        <nav id='header-nav' className="navbar navbar-light navbar-expand-lg">
		<div className='container-fluid'>
			<img src={logo} className="navbar-logo rounded-circle" alt="logo"></img>
			<Link to='/dashboard' className='navbar-brand p-2'>Site Name</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    			<span className="navbar-toggler-icon"></span>
  			</button>

			<div className='collapse navbar-collapse'  id = 'navbarSupportedContent'>
				<div className="navbar-nav" id="navlist">
					<Link to="/dashboard" data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link" replace>Dashboard</Link>
					<Link to="/profile" data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link" replace>Profile</Link>
				</div>
			</div>
		</div>
	    </nav>
        </>
    )
}

export default Navbar;