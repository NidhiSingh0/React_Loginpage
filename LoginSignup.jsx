import React,{useState} from 'react'
import './LoginSignup.css'
import email_icon from '../Asset/email.jpg'
import password_icon from '../Asset/password.jpg'
import person_icon from '../Asset/person.jpg'

const LoginSignup = () => {
   const [action, setAction]=useState("Sign Up")

  return (
    <div>
        <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
            <img src={person_icon} alt="" />
            <input type="text" placeholder='Name'/>
        </div>}
        
        <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email Id'/>
        </div>
        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='password'/>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forget-password">Forget password? <span>Click here</span></div>}
      </div>
      
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
      </div>
      </div>
    </div>
  )
}

export default LoginSignup
