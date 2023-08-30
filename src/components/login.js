import React from "react";
import login1 from './login1.jpg'
import './home.css'
import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <div className="contentlogin">
                <img src={login1} alt='client' className='aboutimage' />
                <h3 className='about'>EMPLOYEE LOGIN</h3>
            </div>
            <div className="loginform">
                <h4 className="loginheading">Employee Login</h4>
                <div className="inputform">
                    <i class='fas fa-male'></i><input type="text" placeholder="Username" id="logininput" /><br />
                    <i class="fa fa-lock"></i><input type="password" placeholder="Password" id="logininput" /><br />
                    <button className="buttonlogin">Log in</button><br />
                    <Link to="/">Lost Password?</Link>
                </div>
            </div>
        </>
    )
}

export default Login;