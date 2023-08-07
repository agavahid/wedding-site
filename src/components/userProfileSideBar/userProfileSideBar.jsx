import './userProfileSideBar.css';
import React from 'react';
import userPic from '../assets/images/profilePage/defaultPP.png';

import Cookies from 'universal-cookie';
import { useState } from 'react';
import axios from 'axios';

export default function UserProfileSideBar(){

    const[registerName, setRegisterName] = useState('');
    const[registerDate, setRegisterDate] = useState('');
    const cookies = new Cookies();
 
    const getUserInfo = () => {
        axios({
          method: 'get',
          url: 'https://api.wed.az/edu/user',
          headers: {"authorization" : `bearer ${cookies.get('userToken')}`}
        })
        .then((userInfo)=>{
            setRegisterDate(userInfo.data.user.created_at.slice(0, 10));
            getRegisterType(userInfo.data.user.email, userInfo.data.user.phone);
        })  
    }
    function getRegisterType(email, number){
        if(email !== undefined && number !== undefined){
            if(email !== null, number === null){
                setRegisterName(email);
            }else{
                setRegisterName(number);
            }
        }
    }
    
    getUserInfo()
    return(

        <div className="user-profile-sideBar">
            <div className="userProfile-header">
                <div className="userProfile-image-container">
                    <img className='defaultProfilePic' src={userPic}/>
                </div>

                <div className='register-date'>
                    <p className='userName'>{registerName}</p>
                    <div className="registerDateContainer">
                        <p className='userRegisterDate'>Üzv olduğun tarix 
                            <span className='specialDateSpan'> {registerDate}</span>
                        </p>
                    </div> 
                </div>
            </div>
            <div className="userProfile-bottom">
                <h4>Toya Qalan Müddet</h4>
                <div className="date-items">
                    <div className="item">
                        <div className="amount">20</div>
                        <div className="name">gün</div>
                    </div>
                    <div className="item">
                        <div className="amount">8</div>
                        <div className="name">saat</div>
                    </div>
                    <div className="item">
                        <div className="amount">58</div>
                        <div className="name">dəqiqə</div>
                    </div>
                    <div className="item">
                        <div className="amount">23</div>
                        <div className="name">saniyə</div>
                    </div>
                </div>
            </div>
        </div>
    )
}