import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function PrivateRoute({ children }) {

	const user = localStorage.getItem('userSession');

	return user ? children : <div><Navigate to="/login" /><Outlet /></div>;
}

export default PrivateRoute
