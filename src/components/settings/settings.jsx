import './settings.css';
import notePadIcon from '../assets/icons/cardicons/notePad.png';
import defultUserPic from '../assets/icons/cardicons/default-user.png';
import phoneIcon from '../assets/icons/cardicons/phoneIcon.png';
import lockIcon from '../assets/icons/cardicons/lock.png';
import emailIcon from '../assets/icons/cardicons/@icon.png';

import { MAINURL, APIS } from '../../configs/configs';
import React, { useState }  from 'react';
import { Formik, Form, Field } from 'formik';


export default function Settings(){
    
    const[checkActive, setCheckActive] = useState(false);
    
    
    return(
         
    
      
        <div className="settingsdiv">  
            <div className="user-informations">
                <div className="user-information-container">
                    <h2>Şəxsi məlumatlar</h2>
                    <div className="user-informations-contents">
                        <div className="user-informations-left-content">

                            <Formik
                                initialValues={{
                                fullName: '',
                                password: '',
                                email: '',
                                }}
                                onSubmit={async (values) => {
                                await new Promise((r) => setTimeout(r, 500));
                                alert(JSON.stringify(values, null, 2));
                                }}
                            >
                                <Form className="settings-form">
                                    <h4>Ad, Soyad</h4>
                                    <div className='settings-field-container'>
                                        <img className="defultUserPic" src={defultUserPic}/>    
                                        <Field id="text" name="fullName" type="text"  className='settings-form-field'/>
                                        <img className="notePadIcon" src={notePadIcon}/>
                                    </div>
                                    
                                    <h4>E-mail ünvanı</h4>
                                    <div className="settings-field-container">
                                        <img className="emailIcon" src={emailIcon}/>
                                        <Field
                                            id="email"
                                            name="email"
                                            type="email"
                                            className='settings-form-field'
                                        />
                                    </div>

                                    <h4>Mobil nömrə</h4>
                                    <div className='settings-field-container'>
                                        <img src={phoneIcon} className='phoneIcon' />
                                        <Field id="password" name="password" type='password' className='settings-form-field'/>
                                    </div>
                                
                                </Form>
                            </Formik>
                        </div>
                        <div className="user-informations-right-content">
                            <Formik>
                                <Form className="settings-form">
                                    <h4>Şəkil yüklə</h4>
                                    <div className='settings-field-container'>
                                        <label htmlFor="file" className='fileLabel'>
                                            <img src={`${MAINURL}${APIS.staticMedia}/camera.60683d79.svg`}/>
                                            <span>Şəkili yüklə</span>
                                            <input name="file" id="file" type="file" />
                                        </label>
                                        
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
                
            </div>
            
            <div className="adjustments">
                <div className="adjusments-container">
                    <h2>Tənzimləmələr</h2>
                    <div className="adjusments-contents">
                        <div className="adjusments-left-content">
                        <Formik
                                initialValues={{
                                number: '',
                                password: '',
                                email: '',
                                }}
                                onSubmit={async (values) => {
                                await new Promise((r) => setTimeout(r, 500));
                                alert(JSON.stringify(values, null, 2));
                                }}
                            >
                                <Form  className="adjusments-form">

                                    <div className="adjusments-field-container">
                                        <h4>Hazırki şifrə</h4>
                                        <div className='adjusments-field-content'>
                                            <img className="lockIcon" src={lockIcon}/>
                                            <Field id="number" name="number" type="number"  className='settings-form-field'/>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="adjusments-field-container">
                                        <h4>Yeni şifrə</h4>
                                        <div className="adjusments-field-content">
                                            <img className="lockIcon" src={lockIcon}/>
                                            <Field
                                                id="email"
                                                name="email"
                                                type="email"
                                                className='settings-form-field'
                                            />
                                        </div>
                                    </div>
                                    

                                    <div className="adjusments-field-container">
                                        <h4>Təkrar şifrə</h4>
                                        <div className='adjusments-field-content'>
                                            <img className="lockIcon" src={lockIcon}/>
                                            <Field id="password" name="password" type='password' className='settings-form-field'/>
                                        </div>

                                    </div>
                                    

                                    <button type="submit" className='save-button'>Yadda Saxla</button>
                                </Form>
                            </Formik>
                        </div>
                        <div className="adjusments-right-content">
                            <Formik>
                                <Form>
                                    <div className="wedding-date">
                                        <h4>Toy Tarixi</h4>
                                        <div className="adjusments-field-container">
                                            <Field type="date" className='settings-form-field'></Field>
                                        </div>
                                        
                                    </div>

                                    
                                    <div className="sexOf-user">
                                        <h4>Cinsi</h4>
                                        <div className="adjusments-sex-field-container">
                                            <div 
                                                className= {checkActive === true ? "sex-check" : "sex-check-active"} 
                                                onClick={()=> setCheckActive(!checkActive)}
                                                >K
                                            </div>
                                            <div 
                                                className= {checkActive === false ? "sex-check" : "sex-check-active"}
                                                onClick={()=> setCheckActive(!checkActive)}
                                            >Q
                                            </div>
                                        </div>
                                    </div>
                                    
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
