
import './categoryItem.css';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import hearthIcon from '../assets/icons/pageIcons/heart-icon.png';
import { MAINURL, APIS, CdnUrl } from '../../configs/configs';
import React from 'react';


export default function CategoryItem({categorySection}){
    const [click, setClick] = useState(false);

    const choosedItem = (id) => {
        
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

        <div  className="cataloge-item">
            <div className="cataloge-photo-item">
                <div className="cataloge-photo">
                    <img src={`${CdnUrl}${APIS.services}/${categorySection.images[0].url}`}/>
                    
                </div>
                <div className="cataloge-icon-section">
                    <div className="cataloge-hearth-icon"
                        onClick={()=> choosedItem(categorySection.id)}
                    >
                        <img src={click === false ? hearthIcon : `${MAINURL}${APIS.staticMedia}/Frame-heart.3c9e0c8b.svg`}/>
                    </div>
                    <div className="cataloge-count-icon">
                        <img src="https://wed.az/static/media/Frame%202.53.e7fee3a3.svg" alt=""/>
                        <span>{categorySection.imageCount}</span>
                    </div>
                </div>

            </div>

            <Link className='catalogeitemLink' to={categorySection.urlTitle}>
                <div className="cataloge-text">
                    <h3>{categorySection.title}</h3>
                    <div className="cataloge-bottom-text">
                        <img src="https://wed.az/static/media/Frame%202%20(1).11256f46.svg" alt=""/>
                        <span>{categorySection.district},{categorySection.city}</span>
                    </div>
                </div>   
            </Link>
        </div>
    )
}