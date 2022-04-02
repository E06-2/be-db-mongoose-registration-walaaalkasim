import React, { useState } from 'react';

const UserData = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [dateOfBirth, setDateOfBirth] = useState('');
	const [email, setEmail] = useState('');
	const [telephone, setTelephone] = useState('');
	const [gender, setGender] = useState('');

	console.log(email);

	const inputHandler = (e) => {
		switch (e.target.name) {
			case 'username':
				setUsername(e.target.value);
				break;
			case 'password':
				setPassword(e.target.value);
				break;
			case 'firstName':
				setFirstName(e.target.value);
				break;
			case 'lastName':
				setLastName(e.target.value);
				break;
			case 'dateOfBirth':
				setDateOfBirth(e.target.value);
				break;
			case 'email':
				setEmail(e.target.value);
				break;
			case 'telephone':
				setTelephone(e.target.value);
				break;
			case 'gender':
				setGender(e.target.value);
				break;

			default:
				console.log('there is an error');
				break;
		}
	};
	const submitHandler = () => {
		const url = 'http://localhost:8082/user/register';
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username,
				password,
				firstName,
				lastName,
				dateOfBirth,
				email,
				telephone,
				gender
			})
		};
		fetch(url, options)
			.then((response) => response.text())
			.then((result) => {
				alert(result);
			});
	};

	return (
		<form className="form">
			<input
				type="text"
				placeholder="username"
				name="username"
				value={username}
				onChange={inputHandler}
			/>
			<input
				type="password"
				placeholder="password"
				name="password"
				value={password}
				onChange={inputHandler}
			/>
			<input
				type="text"
				placeholder="firstName"
				name="firstName"
				value={firstName}
				onChange={inputHandler}
			/>
			<input
				type="text"
				placeholder="lastName"
				name="lastName"
				value={lastName}
				onChange={inputHandler}
			/>
			<input
				type="date"
				placeholder="dateOfBirth"
				name="dateOfBirth"
				value={dateOfBirth}
				onChange={inputHandler}
			/>
			<input
				type="email"
				placeholder="email"
				name="email"
				value={email}
				onChange={inputHandler}
			/>
			<input
				type="tel"
				placeholder="telephone"
				name="telephone"
				value={telephone}
				onChange={inputHandler}
			/>
			<label>gender</label>
			<div className="gender-sec" onChange={inputHandler}>
				<input type="radio" value="Male" name="gender" /> Male
				<input type="radio" value="Female" name="gender" /> Female
				<input type="radio" value="Other" name="gender" /> Other
				<input type="radio" value="N/A" name="gender" />
				N/A
			</div>
			<button onClick={submitHandler}>submit</button>
		</form>
	);
};

export default UserData;
