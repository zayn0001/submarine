import React from 'react';
import "./Navbar.css";
import logo from './logo192.png'
import {useRoutes, A, navigate} from 'hookrouter';
import Routes from './../router'

function Navbar(){
	const routeResult = useRoutes(Routes)
    return (
        <>
        <nav id='header-nav' className="navbar navbar-light navbar-expand-lg">
		<div className='container-fluid'>
			<img src={logo} className="navbar-logo" alt="logo"></img>
			<A href='/dashboard' className='navbar-brand p-2'>Site Name</A>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    			<span className="navbar-toggler-icon"></span>
  			</button>

			<div className='collapse navbar-collapse'  id = 'navbarSupportedContent'>
				<div className="navbar-nav" id="navlist">
					<A href="/dashboard" className="nav-link">Dashboard</A>
					<A href="/profile" className="nav-link">Profile</A>
				</div>
			</div>
		</div>
	    </nav>
		{routeResult}
        </>
    )
}

export default Navbar;