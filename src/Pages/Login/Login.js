import React from 'react';
import './Login.css'
const Login = () => {
    return (
      <div >
            <div className='f' >
             <div class="side">
        <img src="https://raw.githubusercontent.com/mariofornaroli/y-responsive-login-landing/730b7ed1c45b910a51ad85de8408f9ce55aee4aa/images/img.svg" alt=""/>
    </div>

    <div class="main">
        <div class="login-container">
            <p class="title">Welcome back</p>
            <div class="separator"></div>
            <p class="welcome-message">Please, provide login credential to proceed and have access to all our services</p>

            <form class="login-form">
                <div class="form-control">
                    <input type="text" placeholder="Username"/>
                    <i class="fas fa-user"></i>
                </div>
                <div class="form-control">
                    <input type="password" placeholder="Password"/>
                    <i class="fas fa-lock"></i>
                </div>

                <button class="submit">Login</button>
            </form>
        </div>
    </div>
        </div>
      </div>
    );
};

export default Login;