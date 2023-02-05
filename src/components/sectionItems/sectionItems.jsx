import './sectionItems.css';
import LocationIcon from '../assets/icons/cardicons/location-icon.png';
import countIcon from '../assets/icons/cardicons/count-icon.svg';
import HearthIcon from '../assets/icons/cardicons/heart-icon.png';

import { Photo, MAINURL, APIS } from '../../configs/configs';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React from 'react';

export default function SectionItems({sectionItem}){

    const [click, setClick] = useState(false);
    const isLogged = useSelector((param) => param.login.isLoggedIn);
    const navigate = useNavigate();
    useEffect(()=>{
        
        if(sectionItem.wishlist === 1){
            setClick(true)
        }else{
            setClick(false)
        }
    },[])
     
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
                Authorization : `bearer ${localStorage.getItem('userToken')}`
            }
              
        })
        setClick(!click)
    }
    

    
    return(
        <>
            {
                
                <div className="center-right">
                    <div className="wedding-hall-img">
                        <img src={Photo+sectionItem.images[0].url}/>
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
                                src={click === false ? HearthIcon : `${MAINURL}${APIS.staticMedia}/Frame-heart.3c9e0c8b.svg`}
                            />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}