import { Alert, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory()
    const {registerUser , isLoading , user , authError} = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
       
        setLoginData(newLoginData);
   
    }

    const handleLoginSubmit = e => {
       if(loginData.password !== loginData.password2){
           alert('your password did not match')
           return;
       }
       registerUser(loginData.email , loginData.password , loginData.name, history)
        e.preventDefault();
    }
    return (
        <div >
        <div className='f' >
         <div className="side">
    <img src="https://raw.githubusercontent.com/mariofornaroli/y-responsive-login-landing/730b7ed1c45b910a51ad85de8408f9ce55aee4aa/images/img.svg" alt=""/>
</div>

<div className="main">
   {!isLoading &&  <div className="login-container">
        <p className="title">Welcome back</p>
        <div className="separator"></div>
        <p className="welcome-message">Please, provide login credential to proceed and have access to all our services</p>

        <form className="login-form" type='submit' onSubmit={handleLoginSubmit}>
        <div className="form-control">
                <input name="name" type="text" placeholder="name" onBlur={handleOnChange}/>
                <i className="fas fa-user"></i>
            </div>
            <div className="form-control">
                <input name="email" type="email" placeholder="email" onBlur={handleOnChange}/>
                <i className="fas fa-user"></i>
            </div>
            <div className="form-control">
                <input name="password" type="password" placeholder="Password" onBlur={handleOnChange}/>
                <i className="fas fa-lock"></i>
            </div>
            <div className="form-control">
                <input name="password2" type="password" placeholder="Retype-Password" onBlur={handleOnChange}/>
                <i className="fas fa-lock"></i>
            </div>

            <button className="submit"  type="submit">Register</button>

         
        </form>
        <Link to='/login'>Already USer? Login</Link>
    </div>}
    {isLoading && <CircularProgress></CircularProgress>}
    {user?.email && <Alert severity="success">User Register successfully</Alert>}
    {authError && <Alert severity='error'>{authError}</Alert>}
</div> 

    </div>
  </div>
    );
};

export default Register;
