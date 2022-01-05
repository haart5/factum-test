import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Outlet, Link, useNavigate } from "react-router-dom";
import { checkUser, logout, login } from '../../Features/userSlice';

const Header = () => {

	let navigate = useNavigate();

	const dispatch = useDispatch();
	const session = useSelector(checkUser);

	const userSession = localStorage.getItem('userSession');
	const passwordSession = localStorage.getItem('passwordSession');

	useEffect(() => {
		if (userSession) {
			dispatch(login({
				user: userSession,
				password: passwordSession,
			}))
		}
	}, [])

	const handleLogout = (e) => {
		e.preventDefault();
		dispatch(logout());
		navigate("/login", { replace: true });
	};

	return (
		<div>
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand href="#home">Factum Test</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						{session.user !== null ?
							<Nav className="me-auto">
								<Link to='/' className='nav-link menuItems'>Home</Link>
								<Link to='/employees' className='nav-link menuItems'>Employees</Link>
								<Link to='/upload' className='nav-link menuItems'>Upload</Link>
								<Link to='/login' className='nav-link menuItems' onClick={(e) => handleLogout(e)}>Close Session</Link>
							</Nav>
							:
							<Nav className="me-auto">
								<Link to='/' className='nav-link menuItems'>Home</Link>
								<Link to='/login' className='nav-link menuItems'>Login</Link>
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
