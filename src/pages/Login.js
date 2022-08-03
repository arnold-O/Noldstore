import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Login({setUser}) {

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()

    if(!email || !password) return ;
    setUser({email, password})
    navigate('/')
    console.log('handle submit')
  }





  return (
    <>
    <div className="main-container-wrapper">

       

        <div className='login-form-wrapper'>

  <div className='form-input-wrapper'>
    <h1 style={{textAlign:"center"}}>Login</h1>
    <form  onSubmit={handleSubmit}>
         
  <div className='login-form-email'>
        <input type="text"  id='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='input-form-email' placeholder='Enter your mail'/>
        <label htmlFor="email" className='form-label-email'></label>
    </div>
         
    <div className='login-form-pass'>
        <input type="password"  id='password' value={password} onChange={(e)=> setPassword(e.target.value)} className='input-form-pass' placeholder='Enter your password'/>
        <label htmlFor="password" className='form-label-pass'></label>
    </div>
    <button type='submit' className='login-button'>Login</button>
  </form>
  </div>

    <div className='login-image-placeholder'>
        <img src="login.svg" alt="" />
        
    </div>

    </div>
    </div> 
    <Footer/>
    
    </>
    
  )
}
