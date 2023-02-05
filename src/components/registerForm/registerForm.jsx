import './registerForm.css';
import eyeIcon from '../assets/icons/cardicons/eyeIcon.png';
import dontLookIcon from '../assets/icons/cardicons/dontLook.png';
import arrowIcon from '../assets/icons/pageIcons/arrowToBottom.jpg';


import { setLogin } from '../../store/features/loginValue/loginValue';
import { Formik, Form, Field, useFormik } from 'formik';
import { prefixes } from '../../configs/prefixes';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
 

export default function RegisterForm ({isTypeOf}){

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const cookies = new Cookies();

  const[type, setType] = useState(false);
  const[defaultPrefix, setPrefix] = useState(prefixes[0].prefix);
  const[fullPrefix, setFullPrefix] = useState(prefixes[0].full);
  const[prefixList, setPrefixList] = useState(false);
  
  function setPrefixItems(fullPref,newPref){
    setFullPrefix(fullPref);
    setPrefix(newPref);
    setPrefixList(false);
    console.log(fullPref, newPref, prefixList);
  }

  const registration = (data) => {
    axios({
      method: 'post',
      url: 'https://api.wed.az/edu/register',
      data: data,
      headers: {"authorization" : `bearer ${cookies.get('userToken')}`}
    })
    .then((response)=>{
      cookies.set('userToken', response.data.token, 
      { path: "/", expires: new Date(Date.now()+1800000)});
      dispatch(setLogin());
      navigate('/');
      console.log(response)
      //getUserInfo()
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
        registration({type: 'phone', login: values.login, password: values.password, date: values.date});
      } else {
        registration({type: 'email', login: values.email, password: values.password, date: values.date});
      }
      
    }
  })

  
  return(
    <div>
      <Formik>
        <Form method='POST' onSubmit={handleSubmit} >
          {isTypeOf === true ?
            <div className='registerForm-field-container'>
              <div className='registerForm-prefix-container'  onClick={()=> setPrefixList(!prefixList)}>
                <span className='registerForm-defaultPrefix'>{defaultPrefix}</span>
                <img className='registerForm-arrowIcon' src={arrowIcon}/>
              </div>
              <ul className={prefixList === false ? 'registerForm-other-prefixes' : 'registerForm-other-prefixes-active'}>
                {
                    prefixes.map((item, i)=>
                        <li key={i} onClick={()=> setPrefixItems(item.full,item.prefix)}>{item.prefix}</li>
                    )
                }
              </ul>
              
              <Field 
                id="login" 
                name= "login"
                type="number" 
                className='registerForm-form-field'
                value={values.login}
                onChange={handleChange}
              />
            </div>
            :

            <div className="registerForm-field-container">
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="E-Mail"
                className='registerForm-form-field'
                value={values.email}
                onChange={handleChange}
              />
            </div>
          }
          <div className='registerForm-field-container'>
            <Field 
              id="password" 
              placeholder= "Password"
              name="password" 
              type={type === true ? 'text' :'password'} 
              className='registerForm-form-field'
              value={values.password}
              onChange={handleChange}
            />
            <img 
              src={type === true ? eyeIcon : dontLookIcon} 
              className='registerForm-eyeIcon' 
              onClick={()=> setType(!type)}
            />
          </div>
          <div className='registerForm-field-container'>
            <Field 
              id='date' 
              name='date' 
              type='date' 
              className='registerForm-date-field'
              value={values.date} 
              onChange={handleChange}
              >
            </Field>
          </div>
          <button type="submit" className='registerForm-submit-button'>Giriş</button>
        </Form>
      </Formik>
    </div>
  )
}
