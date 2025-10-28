import React, {useState, useEffect} from 'react'
import './LoginPopup.css'

const LoginPopup = ({setShowLogin}) => {
    
    const [currState, setCurrState] = useState("Sign Up")

  useEffect(() => {
     // add a class to <body> to prevent background scrolling while modal is open
     document.body.classList.add('login-open')
     return () => document.body.classList.remove('login-open')
  }, [])

  return (
    <div className='login-popup'>
        <form className='container'>
            <h2>{currState}</h2>
            <p onClick={() => setShowLogin(false)} className='remove'>x</p>
            <div>
            {currState==="Login"?<></>:<input type="text" name="name" placeholder='Your name' required/>}
            <input type="email" name="email" placeholder='Your email' required/>
            <input type="password" name="password" placeholder='Password' required/>
            <button type='submit'>{currState==="Sign Up"?"Create account":"Login"}</button>
            </div>
            <div className='checkbox'>
            <input type="checkbox" required/><p>By continuing, i agree to the terms of use & privacy policy</p> 
            </div>
            <div className='switch'>
            {currState==="Login"
            ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
            :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
            }
            </div>
        </form>
      </div>
   )
}

export default LoginPopup