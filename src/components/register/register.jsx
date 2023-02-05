import './register.css';
import facebookIcon from '../assets/icons/pageIcons/facebook.png';
import googleIcon from '../assets/icons/pageIcons/google.jpg';

import RegisterForm from '../registerForm/registerForm';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Register(){
    const [activity, setActivity] = useState(true);
    
    return(
        <div className='main-register'>
            <div className='register-page'>
                <div className="register-page-container">
                    <div className='register-header'>
                        <h3>Qeydiyyat</h3>
                        <p>Hesabınız var?
                            <Link className='register-link' to={'/login'}> Buradan </Link> 
                            daxil olun.
                        </p>
                    </div> 
                    <div className='register-type-select'>
                        <label 
                            className={activity === true ? 'register-type-active' : 'register-type'} 
                            htmlFor='phone' 
                            onClick={()=> setActivity(true)}
                        >
                            <input type="radio" value='phone' className='register-type-box'/>
                            <span>Mobil nömrə</span>
                            <div className='register-border'></div>
                        </label>
                        <label 
                            className={activity === false ? 'register-type-active' : 'register-type'}  
                            htmlFor='email' 
                            onClick={()=> setActivity(false)}
                        >
                            <input type="radio" value='email' className='register-type-box'/>
                            <span>E-Mail</span>
                            <div className='register-border'></div>
                        </label>
                    </div> 
                    <div className='register-body'>
                        <RegisterForm isTypeOf={activity} />
                    </div>
                    
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