import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import $ from 'jquery';
import 'datatables.net';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import TableElements from './TableElements';

function Employees() {

	const [employees, setEmployees] = useState([]);
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [startDate, setStartDate] = useState(new Date());

	// First call to the API after rendering
	useEffect(() => {
		getEmployees();
	}, []);

	// getEmployees method to get the list of the employees and set the employees to the states.
	const getEmployees = () => {
		fetch(
			`https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/arturo_martinez`,
			{
				method: "GET"
			}
		)
			.then(res => res.json())
			.then(response => {
				setEmployees(response.data.employees);
			})
			.then(() => {
				$('#myTable').dataTable()
			})
			.catch(error => console.log(error));
	};

	//handleSubmit method to handle the submit button for the form.
	const handleSubmit = (e) => {

		if (name === '' || lastName === '' || startDate === '') {
			alert('Please, fill all the fields');
		} else {
			const getName = name;
			const getLastName = lastName;
			const getStartDate = moment(startDate);

			return fetch('https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/arturo_martinez', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: getName,
					last_name: getLastName,
					birthday: getStartDate
				})
			}).then(data => {
				alert('Saved employee');
				window.location.reload();
			});
		}
	};


	// Return method to load all the component
	return (
		<div>
			<h3 className='title'>
				Employees page.
			</h3>

			<Form onSubmit={(e) => handleSubmit(e)}>
				<Form.Group className="mb-3" type="text">
					<Form.Label>First Name:</Form.Label>
					<Form.Control
						type="name"
						placeholder="Your first name"
						maxLength="30"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className="mb-3" type="text">
					<Form.Label>Last Name:</Form.Label>
					<Form.Control
						type="lastName"
						placeholder="Your last name"
						maxLength="30"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className="mb-3" type="text">
					<Form.Label>Birthday:</Form.Label>
					<DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit Employee
				</Button>
				<hr className="separator" />
			</Form>

			{/* ------------------------------- EMPLOYEES TABLE ------------------------------- */}

			<Table striped bordered hover className='table table-striped table-bordered' id='myTable'>
				<thead>
					<tr>
						<th>ID</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Birthday</th>
					</tr>
				</thead>
				<tbody id='employeesTableBody'>
					<TableElements employees={employees} />
				</tbody>
			</Table>

			<hr className="separator" />

		</div>
	);
};

export default Employees;