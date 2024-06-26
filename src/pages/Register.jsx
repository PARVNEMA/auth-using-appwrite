import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'

const Register = () => {
  const{user,registerUser}=useAuth();

   const reg=useRef(null);
 const handleSubmit=()=>{
  const name = reg.current.name.value
  const email = reg.current.email.value
  const password1 = reg.current.password1.value
  const password2 = reg.current.password2.value

   if(password1 !== password2){
    alert('passwords did not match')
    return;
   }
   const userInfo={name,email,password1,password2};
   registerUser(userInfo);
 }
  return (
    <div className="container">
      <div className="login-register-container">
        <form onSubmit={handleSubmit} ref={reg}>

          <div className="form-field-wrapper">
                <label>Name:</label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Enter name..."
                  />
            </div>

            <div className="form-field-wrapper">
                <label>Email:</label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Enter email..."
                  />
            </div>

            <div className="form-field-wrapper">
                <label>Password:</label>
                <input
                  type="password"
                  name="password1"
                  placeholder="Enter password..."
                  />
            </div>

            <div className="form-field-wrapper">
                <label>Confirm Password:</label>
                <input
                  type="password"
                  name="password2"
                  placeholder="Confirm password..."
                  />
            </div>


            <div className="form-field-wrapper">

                <input
                  type="submit"
                  value="Register"
                  className="btn"
                  />

            </div>

        </form>

        <p>Already have an account? <Link to="/login">Login</Link></p>

      </div>
  </div>
  )
}

export default Register
