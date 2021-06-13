import React from "react";
import { Link } from "react-router-dom";
import '../../assets/stylesheets/Login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons'

export default class Login extends React.Component {
    state = {
        loginError: null,
        passwordError: null,
        loginValue: 'null',
        showProgress: false,
        progressMessage: "Aguarde..."
    }
 
    

    render(){
        return(
            <div className="container">
            <div className="form-box">
            <div className="header-form">
                <h4 className="text-primary text-center"><FontAwesomeIcon icon={faUserCircle} style={{fontSize:"110px"}} /></h4>
                <div className="image">
                </div>
            </div>
            <div className="body-form">
                <form>
                <div className="input-group mb-3">
        <div className="input-group-prepend">
        <span className="input-group-text"><FontAwesomeIcon icon={faUser} style={{fontSize:"25px"}}/></span>
    </div>
    <input type="text" className="form-control" placeholder="Username" />
    </div>
    <div className="input-group mb-3">
        <div className="input-group-prepend">
        <span className="input-group-text"><FontAwesomeIcon icon={faLock} style={{fontSize:"25px"}} /></span>
    </div>
    <input type="text" className="form-control" placeholder="Password" />
    </div>
    <button type="button" className="btn btn-secondary btn-block">LOGIN</button>
    <div className="message">
    <div><input type="checkbox" /> Remember ME</div>
    <div><a href="#">Forgot your password</a></div>
    </div>
        </form>
                <div className="social">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter-square"></i></a>
                <a href="#"><i className="fab fa-google"></i></a>
                </div>
            </div>
            </div>
            </div>   
        )
    }
}
