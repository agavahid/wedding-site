import './homeCategory.css'

import { homeCategoryMenu } from '../homeCategoryMenu/homeCategoryMenuDB';
import { MAINURL, APIS } from '../../configs/configs';
import React, { useState } from "react";
import {Link} from "react-router-dom";
// redux

export default function HomeCategory() {
    const[visibility, setVisibility] = useState(false);
    const[showbutton, setShowButton] = useState(true);
    const handle = () => {
        setVisibility(true);
        setShowButton(false);
    }
    return(


        <div className="bottom-first-container">
            <div className="bottom-top">
                <div className='bottom-top-header'>
                    <h2 >Kategoriyalar</h2>
                </div>
            {   
                homeCategoryMenu.map((index, i) =>
                    
                    index.name === 'venue' ? 
                    <div className="bottom-top-first" key={i}>
                        <div className="img-section-first">
                            <img src="	https://wed.az/static/media/evlenirik.az-toy-mekanlari-fotoqraf-sadliq-saraylari.1882f91a.jpg" alt="" />
                        </div>
                        <div className="bottom-button-section">
                            <Link to={index.name +'/'+ APIS.hall}>
                                Toy Mekanlari
                            </Link>
                        </div>
                        
                    </div>
                    :
                    index.categories.map((item,i)=>
                    i  <= 6 ?
                    <div key={i} className="bottom-top-second">
                       
                        <div className="img-section">
                            <img src={MAINURL+ APIS.staticMedia+'/'+item.image} alt=""/>
                        </div>
                        <div className="bottom-button-section">
                            <Link to={index.name + "/" + item.urlTitle}>
                            {item.name}
                            </Link>
                        </div>
                    </div>
                    :
                    <div key={i} className={visibility ? "bottom-top-second" : "bottom-top-second-hidden" }>
                    
                        <div className="img-section">
                            <img src={MAINURL+ APIS.staticMedia+'/'+item.image} alt=""/>
                        </div>
                        <div className="bottom-button-section">
                            <Link to={index.name + "/" + item.urlTitle}>
                            {item.name}
                            </Link>
                        </div>
                    </div> 
                    )
                    
                )
                
            }
            <div className='button-container'>

                <button 
                type='button' 
                onClick={()=> handle()}
                className={showbutton ? 'showAllbutton' : 'showAllbutton-noVisible'}
                >
                    <img className='plusIcon' src={MAINURL+ APIS.staticMedia+'/'+'Frame%202.9.cd16bc7d.svg'}/>
                    <span>Hamısına bax</span>    
                </button>

            </div>
            
            </div>
        </div>
    )
}