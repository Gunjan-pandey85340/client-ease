import React, { useState } from "react";

import { Jumbotron } from "react-bootstrap";
import { LoginForm } from "../../components/login/login.comp";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";

import "./entry.style.css";

//Workflow

// [] Create password reset page
// [] Add request OTP form
// [] Add redux store with Redux-toolkit to handle the network status
// [] sent OTP to email from API (API Already created)
// [] Load form to input OTP and new password
// [] New password must match confirm password, form validation
// [] Connect to API Endpoint (API Already created)
// [] Add reducer through Redux-toolkit to handle the network status and provide the feedback to the user
// [] Send email, OTP and new password to update the password.

export const Entry = () => {
	const [frmLoad, setFrmLoad] = useState("login");

	const handleOnResetSubmit = e => {
		e.preventDefault();
	};

	const formSwitcher = frmType => {
		setFrmLoad(frmType);
	};

	return (
		<div className="entry-page bg-info">
			<Jumbotron className="form-box">
				{frmLoad === "login" && <LoginForm formSwitcher={formSwitcher} />}

				{frmLoad === "rest" && (
					<ResetPassword
						// handleOnChange={handleOnChange}
						handleOnResetSubmit={handleOnResetSubmit}
						formSwitcher={formSwitcher}
						// email={email}
					/>
				)}
			</Jumbotron>
		</div>
	);
};

// import React ,{useState} from "react";


// import {Jumbotron} from 'react-bootstrap';
// import { LoginForm } from "../../components/login/login.comp";

// import './entry.style.css';

// export const Entry = () => {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('');
//     const handleOnChange = (e) =>{
//         const {name,value} = e.target
//         console.log(name,value);
        
//     }

//     return (

//         <div className="entry-page bg-info">
//             <Jumbotron className="form-box">
//                 <LoginForm 
//                     handleOnChange={handleOnChange} 
//                     email={email}
//                     pass={password}
//                 />
//             </Jumbotron>
//         </div>
//     )
// };