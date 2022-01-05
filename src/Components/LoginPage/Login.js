import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { login } from '../../Features/userSlice';

const Login = () => {

	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	let navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (user === 'arturo' && password === '1234') {
			dispatch(login({
				user: user,
				password: password,
			})
			);
			navigate("/employees", { replace: true });
		} else {
			alert('El usuario no existe');
		}
	};

	return (
		<div>
			<Form onSubmit={(e) => handleSubmit(e)}>
				<h3 className='title'>Login page.</h3>

				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Username:</Form.Label>
					<Form.Control
						type="user"
						placeholder="Your username"
						value={user}
						onChange={(e) => setUser(e.target.value)}
						onPaste={(e) => {
							e.preventDefault();
							return false;
						}}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password:</Form.Label>
					<Form.Control
						type="password"
						placeholder="Your password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						onPaste={(e) => {
							e.preventDefault();
							return false;
						}}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>

			</Form>

		</div>
	);
}

export default Login;