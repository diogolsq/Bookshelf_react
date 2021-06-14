import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import '../../assets/stylesheets/LoginSignInForm.scss';
import React, {useState} from "react";
import { withRouter } from 'react-router';
import axios from "axios";
import { useHistory } from "react-router-dom";

const Form = ({ option }) => {
	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')
	const [password_confirmation, setPasswordConfirmation] = React.useState('')

	const token = document.querySelector('meta[name="csrf-token"]').content;
	const headers = {
		'Content-Type': 'application/json',
   		'X-CSRF-Token': token
	  }

	function redirect() {
		window.location.href="/kanban"
	} 
	const handleSubmit = (event) => {
		event.preventDefault();
		

		if(option == 1 || option == 2) {
			axios
			.post(
			  "http://localhost:3000/users/sign_up",
			  {
				user: {
				  email: email,
				  password: password,
				  password_confirmation: password_confirmation,
				  option: option
				}
			  },
			  {headers: headers}
			)
			.then(response => {
			  if (response.data.status === 200 && response.data.current_user.length > 0) {
				console.log('ui mamae agora vai !!')
				console.log(response.data.current_user)
				redirect()
			  }else if (response.data.status === 200 && response.data.current_user.length == 0) {
				alert("Usuário ou senha errada")
			  }else if (response.data.status === 500) {
				alert("Usuário já cadastrado, caso não lembre sua senha, clickar na opção de resgatar a senha")
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
				<input id='email' name='email' type='email' placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} required />
				<input id='password' name='password' type='password' placeholder='Senha'value={password} onChange={e => setPassword(e.target.value)} required={option === 1 || option === 2 ? true : false} disabled={option === 3 ? true : false} />
				<input id='repeat-password' name='repeat-password' type='password' value={password_confirmation} onChange={e => setPasswordConfirmation(e.target.value)} placeholder='Repita a Senha' required={option === 2 ? true : false} disabled={option === 1 || option === 3 ? true : false} />
			</div>
			<button className='btn-submit-form' type='submit'>
				{ option === 1 ? 'Sign in' : (option === 2 ? 'Sign up' : 'Reset password') }
			</button>
		</form>
	)
}



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