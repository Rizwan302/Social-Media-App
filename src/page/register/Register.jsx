import React from 'react'
import './Register.css'

function Register() {
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
                <input placeholder='Username' className="loginInput" />
                <input placeholder='Email' className="loginInput" />
                <input placeholder='password' className="loginInput" />
                <input placeholder='password Again' className="loginInput" />
                <button className="loginButton">Login</button>
                <button className="loginRegisterButton">
                    Log in Account
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Register
