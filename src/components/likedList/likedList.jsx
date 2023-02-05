import './likedList.css';
import LocationIcon from '../assets/icons/cardicons/location-icon.png';
import countIcon from '../assets/icons/cardicons/count-icon.svg';
import { APIS, MAINURL, CdnUrl } from '../../configs/configs';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React from 'react';

export default function LikedList(){

    const [post, setPost] = useState([]);
    const [defaultItem, setDefaultItem] = useState('Əvvəldən sona');
    const [showSubmenu, setShowSubmenu] = useState(false);
    const [render, setRender] = useState(false);
    
    useEffect(()=>{
        axios({
            method: 'get',
            url: 'https://api.wed.az/edu/wishlist/getall?sort=time_asc',
            headers: {
                Authorization : `bearer ${localStorage.getItem('userToken')}`
            }
        })
        .then((response)=>
        
            setPost(response.data.data)
        )
    },[render])

    const getDatas = (id) =>{
        console.log(id)
        
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
        .then((response)=>
           
            response.data.data === 'deleted' ? 
            setRender(!render)
            : null
        )
    }


    return(
        <>
            <div className="liked-list-header">
                <h2>Seçdiklərim</h2>

                <div className='choose-direction-container'>
                    <div className="choose-direction-container-header"
                        onClick={()=> setShowSubmenu(!showSubmenu)}                    
                    >
                        <span>{defaultItem}</span>
                        <img className='arrow-icon' src={`${MAINURL+APIS.staticMedia}/Frame%202.58.d4b47791.svg`}/>
                    </div>
                    {showSubmenu ? 
                        <div className="select-submenu">
                            <div className="select-submenu-caret"></div>
                            <ul className='select-list-items'>
                                <li onClick={()=> setDefaultItem('Əvvəldən sona')}>Əvvəldən sona</li>
                                <li onClick={()=> setDefaultItem('Sondan əvvələ')}>Sondan əvvələ</li>
                            </ul>
                        </div>
                    : null
                    }
                    
                </div>
            </div>
            <div className="liked-list-body">
                {console.log(post)}
                {
                    post !== undefined && post.length > 0 ?
                        post.map((choosedItem,i)=>
                            
                            
                            <div className='selected-item' key={i}>
                                <div className='selected-item-img-container'>
                                    <img
                                        className='selected-item-img'
                                        src={`${CdnUrl+APIS.services}/${choosedItem.service.item.files.images[0].url}`} 
                                    />
                                    <div
                                        className="hearth-icon-container"
                                        onClick={()=> getDatas(choosedItem.serviceId)}                    
                                    >
                                        <img src={`${MAINURL}${APIS.staticMedia}/Frame-heart.3c9e0c8b.svg`}/>
                                    </div>
                                    <div className="count-icon-container">
                                        <img src={countIcon}/>
                                        <span className='count-span'>{choosedItem.service.item.files.imageCount}</span>
                                    </div>
                                    
                                </div>
                                <div className="selected-item-text-container">
                                    <Link to={`/${choosedItem.service.item.urlTitle}`}>
                                        <h3>{choosedItem.service.item.title}</h3>
                                    </Link>
                                    
                                    <span><img src={LocationIcon} />{choosedItem.service.item.address.main[0].Address.slice(0,20)}</span>
                                </div>
                                <div className="item-description">
                                    {choosedItem.service.item.description.slice(0,72)}
                                    <Link 
                                        to={`/${choosedItem.service.item.urlTitle}`}
                                        className='choosedItem-link'
                                    >...ətraflı bax {console.log(choosedItem)}</Link>
                                </div>

                            </div>
                            
                        )
                    
                        :
                        <div className="no-choosed-item-container">
                            <div className='no-choosed-item'>
                                <span>Heç bir məlumat seçilməmişdi.</span>
                            </div>
                        </div>
                        
                }
            </div>
        </>
    )
}