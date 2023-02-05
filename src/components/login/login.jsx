import './login.css';
import facebookIcon from '../assets/icons/pageIcons/facebook.png';
import googleIcon from '../assets/icons/pageIcons/google.jpg'
import LoginSection from '../loginForm/loginForm';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';


export default function Login(){
    const [activity, setActivity] = useState(true)
 
 
 
    return(
        <div className='main-login'>
            <div className='login-page'>
                <div className="login-page-container">
                    <div className='login-header'>
                        <h3>Giriş</h3>
                        <p>Hesabınız yoxdur?
                            <Link className='register-link' to={'/register'}> Buradan </Link> 
                            qeydiyyat olun.
                        </p>
                    </div> 
                    <div className='login-type-select'>
                        <label 
                            className={activity === true ? 'login-type-active' : 'login-type'} 
                            htmlFor='phone' 
                            onClick={()=> setActivity(true)}
                        >
                            <input type="radio" value='phone' className='login-type-box'/>
                            <span>Mobil nömrə</span>
                            <div className='login-border'></div>
                        </label>
                        <label 
                            className={activity === false ? 'login-type-active' : 'login-type'}  
                            htmlFor='email' 
                            onClick={()=> setActivity(false)}
                        >
                            <input type="radio" value='email' className='login-type-box'/>
                            <span>E-Mail</span>
                            <div className='login-border'></div>
                        </label>
                    </div>
                    <div className='login-body'>
                        <LoginSection isTypeOf={activity}/>
                    </div>
                    
                    <Link className='ifForget-password' to='/'>Şifrəni unutmusan?</Link>
                    <p className='enterWith-socialMedia'>Sosial şəbəkələrlə daxil ol</p>
                    <div className="login-with-social-container">
                        <div className='continue-with-social' id='facebook'>
                            <img src={facebookIcon} className="login-withFacebook"/>
                        </div>
                        <div className='continue-with-social' id="google">
                            <img src={googleIcon} className="login-withGoogle"/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}