import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import $ from 'jquery';
import 'datatables.net';

function Employees() {

	const [employees, setEmployees] = useState([]);

	useEffect(() => {
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
	}, []);

	return (
		<div>
			<h3 className='title'>
				Employees page.
			</h3>
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
					{
						employees.map((e, index) => {
							return (
								<tr key={index}>
									<td>{e.id}</td>
									<td>{e.name}</td>
									<td>{e.last_name}</td>
									<td>{e.birthday}</td>
								</tr>
							);
						})
					}
				</tbody>
			</Table>
		</div>
	);
}

export default Employees;