import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets'
import { signup,login } from '../../config/firebase'
const Login = () => {

    const [currState, setCurrState] = useState('Sign up')
    const [userNama, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmitHandler = (event) =>{
        event.preventDefault();
        if (currState === "Sign up") {
            signup(userNama , email , password);
        }
        else{
            login(email,password);
        }
    }


  return (
    <div className='login'>
        <img src={assets.logo_big} alt="" />
        <form onSubmit={onSubmitHandler} className='login-form'>
            <h2>{currState}</h2>
           {currState == "Sign up" ? <input onChange={(e)=> setUserName(e.target.value)} value={userNama} type="text" placeholder='username' className='form-input' required /> : null} 
            <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" placeholder=' Email address' className='form-input' required />
            <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" placeholder='Password' className='form-input' required/>
            <button type=' submit'>{currState == "Sign up" ? "Create account" : "Login"}</button>
            <div className="login-term">
                <input type="checkbox"  />
                <p>Agree to the terms of use & privacy policy.</p>
            </div>
            <div className="login-forget">
                {
                    currState == "Sign up"
                    ?                <p className="login-toggle">Already have a accont <span onClick={()=> setCurrState("Login")} >Login here</span></p>
                    :                <p className="login-toggle">Create an account <span onClick={()=> setCurrState("Sign up")} >click here</span></p>
                }


            </div>
        </form>
    </div>
  )
}

export default Login