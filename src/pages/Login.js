import React from 'react'

export default function Login() {
  return (
    <>
    <div className="main-container-wrapper">
       

        <div className='login-form-wrapper'>

  <div className='form-input-wrapper'>
         
  <div className='login-form'>
        <input type="text"  id='email' className='input-form' placeholder='Enter your mail'/>
        <label htmlFor="email" className='form-label-email'></label>
    </div>
         
    <div className='login-form-pass'>
        <input type="password"  id='password' className='input-form' placeholder='Enter your password'/>
        <label htmlFor="password" className='form-label-pass'></label>
    </div>
    <button>Login</button>
  </div>

    <div className='login-image-placeholder'>
        <img src="login.svg" alt="" />
        
    </div>

    </div>
    </div> 
    
    </>
    
  )
}
