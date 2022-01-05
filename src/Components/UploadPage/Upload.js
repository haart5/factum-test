import React, { useEffect, useState } from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Upload() {

	const [file, setFile] = useState();
	const [preview, setPreview] = useState();
 
	useEffect(() => {
		if (file) {
			const reader = new FileReader();

			reader.onloadend = () => {
				setPreview(reader.result);
			}

			reader.readAsDataURL(file);

		} else {
			setPreview(null);
		}
	}, [file]);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(file);
		console.log(preview);
	}

	return (
		<div>
			<h3 className='title'>
				Upload page.
			</h3>
			<img src={preview} alt="" style={{objectFit: 'cover', width: '200px', height: '200px'}}/>
			<hr />
			<Form onSubmit={(e) => handleSubmit(e)}>
				<Form.Group className="mb-3" type="text">
					<Form.Label>Drag and drop your image:</Form.Label>
					<Form.Control
						id="myFileInput"
						type="file"
						accept="image/*"
						onChange={(e) => {
							const image = e.target.files[0];
							if (image) {
								setFile(image);
								console.log('Image loaded successfully');
							} else {
								setFile(null);
								console.log('Please upload an image');
							}

						}}
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit Employee
				</Button>
			</Form>
		</div>
	);
}

export default Upload;