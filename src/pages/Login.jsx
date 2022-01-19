import React, { useRef } from 'react';
import '../styles/Login.scss';

const Login = () => {
const form = useRef(null);
const handleSubmit = (event) => {
	event.preventDefault();
	const formData = new FormData (form.current);
	const data = {
		username: formData.get('email'),
		password: formData.get('password')	
	}
	console.log(data)
};
	return (
		<div className="Login">
			<div className="Login-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<form action="/" className="form" ref= {form} >
					<label htmlFor="email" className="label">Email address</label>
					<input name="email" type="text"  placeholder="platzi@example.cm" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input name="password" type="password"  placeholder="*********" className="input input-password" />
					<a href="/">Forgot my password</a>
					<button 
					className="primary-button login-button"
					onClick={handleSubmit}>Log In</button>
				</form>
				
				<button className="secondary-button signup-button">Sign up</button>
			</div>
		</div>
	);
}

export default Login;
