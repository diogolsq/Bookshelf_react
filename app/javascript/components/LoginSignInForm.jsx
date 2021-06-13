import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import '../../assets/stylesheets/LoginSignInForm.scss';
import React, {useState} from "react";
import axios from "axios";



const Form = ({ option }) => {
	const [email, setEmail] = React.useState()
	const [password, setPassword] = React.useState()
	const [password_confirmation, setPasswordConfirmation] = React.useState()

	const token = document.querySelector('meta[name="csrf-token"]').content;
	const headers = {
		'Content-Type': 'application/json',
   		'X-CSRF-Token': token
	  }

	const handleSubmit = (event) => {
		event.preventDefault();
		
		if(option == 1) {

		}else if (option == 2) {
			axios
			.post(
			  "http://localhost:3000/users/sign_up",
			  {
				user: {
				  email: email,
				  password: password,
				  password_confirmation: password_confirmation
				}
			  },
			  {headers: headers}
			)
			.then(response => {
			  if (response.data.status === "created") {
				this.props.handleSuccessfulAuth(response.data);
			  }
			})
			.catch(error => {
			  console.log("aconteceu algum error", error);
			});
		  event.preventDefault();

		}else if (option ==3) {
		 alert("TODO implementar refresh de senha e enviar email")
		}
	}

	return (
		<form className='account-form' onSubmit={(event, opt) => handleSubmit(event )}>
			<div className={'account-form-fields ' + (option === 1 ? 'sign-in' : (option === 2 ? 'sign-up' : 'forgot')) }>
				<input id='email' name='email' type='email' placeholder='E-mail' value={email} required />
				<input id='password' name='password' type='password' placeholder='Senha'value={password} required={option === 1 || option === 2 ? true : false} disabled={option === 3 ? true : false} />
				<input id='repeat-password' name='repeat-password' type='password' value={password_confirmation} placeholder='Repita a Senha' required={option === 2 ? true : false} disabled={option === 1 || option === 3 ? true : false} />
			</div>
			<button className='btn-submit-form' type='submit'>
				{ option === 1 ? 'Sign in' : (option === 2 ? 'Sign up' : 'Reset password') }
			</button>
		</form>
	)
}


// const Form = () => {
// 	return (
// 		<div>teste</div>
// 	)
// }

const LoginSignInForm = () => {
	const [option, setOption] = React.useState(1)


	return (
		<div className='centralizando'>
			<div className='containerx'>
				<header>
					<div className={'header-headings ' + (option === 1 ? 'sign-in' : (option === 2 ? 'sign-up' : 'forgot')) }>
						<span>Login</span>
						<span>Crie sua conta</span>
						<span>Resete seu password</span>
					</div>
				</header>
				<ul className='options'>
					<li className={option === 1 ? 'active' : ''} onClick={() => setOption(1)}>Login</li>
					<li className={option === 2 ? 'active' : ''} onClick={() => setOption(2)}>Cadastrar</li>
					<li className={option === 3 ? 'active' : ''} onClick={() => setOption(3)}>Esqueci a senha</li>
				</ul>
				<Form option={option} />
			</div>
		</div>
	)
}

export default LoginSignInForm;