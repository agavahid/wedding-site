import './singlePageForm.css';
import defaultUser from '../assets/icons/cardicons/default-user.png';
import phoneIcon from '../assets/icons/cardicons/phoneIcon.png';
import clockIcon from '../assets/icons/cardicons/clock.png';
import atIcon from '../assets/icons/cardicons/@icon.png';
import formIcon from '../assets/icons/cardicons/letterIcon.svg';
import usersIcon from '../assets/icons/cardicons/users.svg';

import SinglePageFormInput from '../inputs/singlePageFormInput/singlePageFormInput';
import React from 'react';
import { Formik, Form, useFormik } from 'formik';
import axios from 'axios';




export default function SinglePageContactForm(){
    
    
    

    

    function sendToMessage(data){
        axios({
        method: 'post',
        url: 'https://api.wed.az/edu/service/24/sendsms',
        data: data,
        })
        .then((response)=>{
         console.log(response)
        })
    }

    const {handleSubmit, handleChange, values} = useFormik({

        initialValues: {
            fullName : '',
            email: '',
            phone: '',  
            weddingDate: '',
            guestCount: '',
            message: ''
        },
        onSubmit: values => {

            sendToMessage({
                fullName: values.fullName, 
                email: values.email, 
                phone: values.phone, 
                weddingDate: values.weddingDate,
                guestCount: values.guestCount,
                message: values.message
            });
        
        }
    })


   return(
      
    <Formik>
        <Form method='POST' onSubmit={handleSubmit}>
            <div className="middle-form">
                <div className="form-header">
                    <img className='formIcon' src={formIcon} />
                    <h2>Elaqe Saxlayin</h2>
                </div>

                <SinglePageFormInput
                    picture={defaultUser} 
                    type='text'
                    name='fullName'
                    onChangeFun={handleChange} 
                    title='Ad, Soyad'
                />
                <SinglePageFormInput
                    picture={atIcon} 
                    type='email'
                    name='email'
                    onChangeFun={handleChange} 
                    title='E-mail'
                />
                <SinglePageFormInput
                    picture={phoneIcon} 
                    type='number'
                    name='phone'
                    onChangeFun={handleChange} 
                    title='Mobil nömrə'
                />
                <SinglePageFormInput
                    picture={clockIcon} 
                    inputClass='calendar'
                    type='date'
                    name='weddingDate'
                    onChangeFun={handleChange} 
                    id='calendar'
                    title=''
                />
                <SinglePageFormInput
                    picture={usersIcon} 
                    type='number'
                    name='guestCount'
                    onChangeFun={handleChange} 
                    title='Qonaq sayı'
                />
                <textarea   
                    name="message" 
                    id="textarea" 
                    cols="50" rows="10" 
                    onChange={handleChange} 
                    placeholder="Salam, sizin toy xidmətlərinizlə maraqlanıram. Zəhmət olmasa, mənimlə əlaqə saxlayın.">
                </textarea>

                <button type="submit" className="submit-button">GÖNDER</button> 
            </div>
        </Form>
    </Formik>
  )
}