import './loginForm.css';
import eyeIcon from '../assets/icons/cardicons/eyeIcon.png';
import dontLookIcon from '../assets/icons/cardicons/dontLook.png'
import arrowIcon from '../assets/icons/pageIcons/arrowToBottom.jpg'
import axios from 'axios';

import React, { useState }  from 'react';
import { Formik, Form, Field, useFormik } from 'formik';
import { prefixes } from '../../configs/prefixes';
import { useNavigate } from 'react-router-dom';
import Cookies  from 'universal-cookie';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../store/features/loginValue/loginValue';



export default function LoginSection ({isTypeOf}){
   
  const dispatch = useDispatch();

  const cookies = new Cookies();
  const[type, setType] = useState(false);
  const[defaultPrefix, setPrefix] = useState(prefixes[0].prefix);
  const[fullPrefix, setFullPrefix] = useState(prefixes[0].full);
  const[prefixList, setPrefixList] = useState(false);
  const navigate = useNavigate();

  function setPrefixItems(fullPref,newPref) {
    setFullPrefix(fullPref);
    setPrefix(newPref);
    setPrefixList(false);
    console.log(fullPref, newPref, prefixList);
  }
  /*function handleCookie() {
      setCookie("userToken", response.data.token , {
        path: "/"
      });
    }*/
  function logToAccount(data){
    axios({
      method: 'post',
      url: 'https://api.wed.az/edu/login',
      data: data,
    })
    .then((response)=>{
      cookies.set("userToken", response.data.token , 
        { path: "/", expires: new Date(Date.now()+1800000)}
      );
      if(response.data.status === 200){
        navigate('/');
        dispatch(setLogin());
      }else if(data.login.length < 6){
        alert("Nömrə düzgün daxil edilməyib.")
      }else if(data.password.length < 6){
        alert("Şifrə minimum 6 simvol olmalıdır.")
      }
      else{
        alert('İstifadəçi adı və ya parol səhvdir. Zəhmət olmasa yenidən cəht edin.')
      }
      
    })
  }

  const {handleSubmit, handleChange, values} = useFormik({

    initialValues: {
      login : '',
      email: '',
      password: '',  
      date: ''
    },
    onSubmit: values => {
      if(isTypeOf) {
        logToAccount({type: 'phone', login: values.login, password: values.password});
      } else {
        logToAccount({type: 'email', login: values.email, password: values.password});
      }
      
    }
  })


  return(
    <div>
      
      <Formik>
        <Form method='POST' onSubmit={handleSubmit}>
          {isTypeOf === true ?
            <div className='loginForm-field-container'>
              <div className='loginForm-prefix-container'  onClick={()=> setPrefixList(!prefixList)}>
                <span className='loginForm-defaultPrefix'>{defaultPrefix}</span>
                <img className='loginForm-arrowIcon' src={arrowIcon}/>
              </div>
              <ul className={prefixList === false ? 'loginForm-other-prefixes' : 'loginForm-other-prefixes-active'}>
                {
                    prefixes.map((item, i)=>
                        <li key={i} onClick={()=> setPrefixItems(item.full,item.prefix)}>{item.prefix}</li>
                    )
                }
              </ul>
              
              <Field 
                id="login" 
                name="login" 
                type="number"  
                className='loginForm-form-field'
                onChange={handleChange}/>
            </div>
            :

            <div className="loginForm-field-container">
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="E-mail"
                className='loginForm-form-field'
                onChange={handleChange}
              />
            </div>
          }
          <div className='loginForm-field-container'>
            <Field 
              id="password" 
              name="password" 
              placeholder="Password"
              type={type === true ? 'text' :'password'} 
              className='loginForm-form-field'
              onChange={handleChange}
            />
            <img 
              src={type === true ? eyeIcon : dontLookIcon} 
              className='loginForm-eyeIcon' 
              onClick={()=> setType(!type)}
              />
          </div>
          
          <button type="submit" className='loginForm-submit-button'>Giriş</button>
        </Form>
      </Formik>
    </div> 
  )
}
