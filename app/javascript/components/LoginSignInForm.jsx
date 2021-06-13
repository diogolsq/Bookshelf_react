import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import '../../assets/stylesheets/Login2.scss';
import React, {useState} from "react";


const Form = ({ option }) => {
	const [teste] = React.useState(1)
	return (
		<form className='account-form' onSubmit={(evt) => evt.preventDefault()}>
			<div className={'account-form-fields ' + (option === 1 ? 'sign-in' : (option === 2 ? 'sign-up' : 'forgot')) }>
				<input id='email' name='email' type='email' placeholder='E-mail' required />
				<input id='password' name='password' type='password' placeholder='Senha' required={option === 1 || option === 2 ? true : false} disabled={option === 3 ? true : false} />
				<input id='repeat-password' name='repeat-password' type='password' placeholder='Repita a Senha' required={option === 2 ? true : false} disabled={option === 1 || option === 3 ? true : false} />
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