import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">My App</h3>
            <span className="loginDecs">
                Connect with friend and the world around you on My App 
            </span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input placeholder='Email' className="loginInput" />
                <input placeholder='password' className="loginInput" />
                <button className="loginButton">Login</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginRegisterButton">
                    Create a New Account
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
