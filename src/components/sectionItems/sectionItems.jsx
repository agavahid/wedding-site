import './sectionItems.css';
import LocationIcon from '../assets/icons/cardicons/location-icon.png';
import countIcon from '../assets/icons/cardicons/count-icon.svg';
import HearthIcon from '../assets/icons/cardicons/heart-icon.png';

import { Photo, MAINURL, APIS } from '../../configs/configs';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import Cookies  from 'universal-cookie';

export default function SectionItems({sectionItem, isMock}){

    const [click, setClick] = useState(false);
    const isLogged = useSelector((param) => param.login.isLoggedIn);
    const navigate = useNavigate();
    const cookies = new Cookies();
    
    
    function setHearthIcon(wished, click){
        
        if(click === true){
            return MAINURL+APIS.staticMedia+'/Frame-heart.3c9e0c8b.svg'
        }else if(wished === 1){
            return MAINURL+APIS.staticMedia+'/Frame-heart.3c9e0c8b.svg'
        }else if(click === false){
            return HearthIcon
        }else if(wished === 0){
            return HearthIcon
        }
    }
    


    const getDatas = (id) =>{
        
        isLogged === false ? 
        navigate('/login')
        :
        axios({ 
            method: 'post',
            url: 'https://api.wed.az/edu/wishlist/set',
            data: {
                service_id: id
            },
            headers: {
                Authorization : `bearer ${cookies.get('userToken')}`
            }
              
        })
        setClick(true)
    }
    

    
    return(
        <>
            {
                
                <div className="center-right">
                    <div className="wedding-hall-img">
                        {isMock === false ? 
                            <img src={Photo+sectionItem.images[0].url}/>    
                            : <img src={sectionItem.images}/>
                        }
                    
                        <div className="wedding-hall-icon-section">
                            <div className="wedding-hall-first-icon">
                                <img src={countIcon}/>
                                <span className="count-span">
                                    {sectionItem.images.length}
                                </span>
                            </div>

                            <div className="wedding-hall-second-icon">
                                <img src=""/>
                                <span className="count-span">

                                </span>
                            </div>

                        </div>

                        <div className="wedding-hall-icon-mobile">
                            <img src={HearthIcon}/>
                        </div>
                    </div>


                    <div className="wedding-hall-text-section">
                        <Link to={`/${sectionItem.urlTitle}`}>
                            <h2 className="wedding-hall-text-section-title">{sectionItem.title}</h2>
                            <p className="wedding-hall-text-section-description">{sectionItem.description}</p>
                        </Link>
                        
                        <div className="wedding-text-icon">

                            <div id="wedding-a">
                                <img src={LocationIcon}/>
                                <span>{sectionItem.district},{sectionItem.city}</span>
                            </div>
                        </div>
                        <div className="wedding-hall-icon" onClick={()=> getDatas(sectionItem.id)}>
                            <img className='hearthIcon-normal' 
                                src = {setHearthIcon(sectionItem.wishlist, click)}
                            />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}