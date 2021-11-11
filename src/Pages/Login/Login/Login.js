import React, { useState } from 'react';
import { NavLink, useLocation, useHistory, Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import './Login.css'
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user , loginUser , isLoading , authError} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
   
    }

    const handleLoginSubmit = e => {
       loginUser(loginData.email , loginData.password , location , history)
        e.preventDefault();
    }
    return (
      <div >
            <div className='f' >
             <div className="side">
        <img src="https://raw.githubusercontent.com/mariofornaroli/y-responsive-login-landing/730b7ed1c45b910a51ad85de8408f9ce55aee4aa/images/img.svg" alt=""/>
    </div>

    <div className="main">
        <div className="login-container">
            <p className="title">Welcome back</p>
            <div className="separator"></div>
            <p className="welcome-message">Please, provide login credential to proceed and have access to all our services</p>

            <form className="login-form" type='submit' onSubmit={handleLoginSubmit}>
                <div className="form-control">
                    <input name="email" type="text" placeholder="email" onChange={handleOnChange}/>
                    <i className="fas fa-user"></i>
                </div>
                <div className="form-control">
                    <input name="password" type="password" placeholder="Password" onChange={handleOnChange}/>
                    <i className="fas fa-lock"></i>
                </div>

                <button className="submit"  type="submit">Login</button>

             
            </form>
            <Link to='/register'>New? Create an Account</Link>
        </div>
    </div>
        </div>
      </div>
    );
};

export default Login;