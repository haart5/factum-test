import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Outlet, Link } from "react-router-dom";

const Header = (props) => {

	const [session, setSession] = useState(null);

	useEffect(() => {
		const user = localStorage.getItem('userSession');
		setSession(user);
	}, []);

	const removeSession = () => {
		localStorage.removeItem('userSession');
		setSession(null);
	};

	return (
		<div>
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand href="#home">Factum Test</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						{session ?
							<Nav className="me-auto">
								<Link to='/' className='nav-link menuItems'>Home</Link>
								<Link to='/employees' className='nav-link menuItems'>Employees</Link>
								<Link to='/upload' className='nav-link menuItems'>Upload</Link>
								<Link to='/login' className='nav-link menuItems' onClick={removeSession}>Close Session</Link>
							</Nav>
							:
							<Nav className="me-auto">
								<Link to='/' className='nav-link menuItems'>Home</Link>
								<Link to='/login' className='nav-link menuItems'>Login</Link>
								<Link to='/employees' className='nav-link menuItems'>Employees</Link>
								<Link to='/upload' className='nav-link menuItems'>Upload</Link>
							</Nav>
						}
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Outlet />
		</div>
	)
};

export default Header;
