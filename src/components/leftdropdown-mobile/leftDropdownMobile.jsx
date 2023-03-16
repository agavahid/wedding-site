import './leftDropdownMobile.css';
import SideBar from '../../components/assets/icons/headericons/header-sidebar-icon.png';
import closeButtonicon from '../assets/icons/headericons/closeButton.png';

import { setActive } from '../../store/features/isHeaderActive/isLeftDrpActive';
import { useDispatch, useSelector } from 'react-redux';
import { URL, APIS, MAINURL } from '../../configs/configs';
import React, {useState, useEffect } from 'react';
import { Link } from "react-router-dom"; 
import axios from 'axios';



export default function LeftDropdownMobile(){
    const dispatch = useDispatch();
    const isActive = useSelector((state) => state.isLeftActive.activity);
    
    const [post, setPost] = useState([]);
    const [showDrp, setDrp] = useState(false);
    const [showFirstDrpList, setFirstDrpList] = useState(false);
    const [showSecondDrpList, setSecondDrpList] = useState(false);


    useEffect(() => {
        axios.get(URL + APIS.menu)
        .then(function(response) {
            setPost(response.data.data);
        });
    }, []);

    
    const openSideMenu = () => {
        document.body.style.overflow = 'hidden';
        dispatch(setActive());
    }

    // eventPreventDefault
    // eventStopPropagation


    const closeSideMenu = (e) => {
        e.stopPropagation();
        document.body.style.overflow = '';
        dispatch(setActive());
    }
    
    function forstopPropagation(e){
        e.stopPropagation()
    }
    return(
        <>
            
            
        
            <div className="mobile-header-left" onClick={openSideMenu}>

                <img src={SideBar} />
                
                    <div className={isActive === false ? "mobile-header-left-drp" : "mobile-header-left-drp active"}>
                        <div className="close-item"  onClick={closeSideMenu}>
                            <img src={closeButtonicon}></img>
                        </div>
                        <div className="hover-item">
                            <ul className="mobile-header-left-ul">
                                <li className="mobile-header-left-ul-item"  onClick={e => forstopPropagation(e)}>
                                    <div 
                                        className='mobile-item-header'
                                        onClick={()=>{setFirstDrpList(!showFirstDrpList)}}
                                    > 
                                        <img
                                            className="mobile-item-header-img"
                                            src={MAINURL+APIS.staticMedia+"/Frame%202%20(1).11256f46.svg"}
                                        />
                                        <span>TOY MEKANLARI</span>
                                        <img 
                                            src={MAINURL+APIS.staticMedia+"/Frame%202.58.d4b47791.svg"} 
                                            className={showFirstDrpList ? "transform-img active" : "transform-img"} 
                                        />
                                    </div>
                                    
                                        <div className={showFirstDrpList ? "mobile-item-content active" : "mobile-item-content"}>
                                            <ul className="mobile-item-content-list">
                                                {
                                                    post.map((menu,j) =>
                                                        menu.name === 'vendor' ? null 
                                                        :
                                                        menu.categories.map((item,i) => 
                                                            <li key={i}>
                                                                <Link 
                                                                    to={menu.name + '/' + item.urlTitle}
                                                                    className='mobile-item-content-link' 
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                            </li> 
                                                        )
                                                    )
                                                }
                                            </ul>
                                        </div>
                                </li>
            
                                <li className="mobile-header-left-ul-item" onClick={e => forstopPropagation(e)}>
                                    <div 
                                        className='mobile-item-header'
                                        onClick={()=> setSecondDrpList(!showSecondDrpList)}
                                    > 
                                        <img 
                                            src={MAINURL+APIS.staticMedia+"/Frame%202.2.98a5cc5f.svg"}
                                            className="mobile-item-header-img"
                                        />
                                        <span>TOY HAZIRLIGI</span>
                                        <img 
                                            src={MAINURL+APIS.staticMedia+"/Frame%202.58.d4b47791.svg"} 
                                            className={showSecondDrpList ? "transform-img active" : "transform-img"}
                                        />
                                    </div>
                                    
                                        <div className={showSecondDrpList ? "mobile-item-content active" : "mobile-item-content"}>
                                            <ul className="mobile-item-content-list">
                                                {
                                                    post.map((menuItemm, i) => 

                                                        menuItemm.name === "venue" ? null :
                                                            menuItemm.categories.map((categoryItemm, t) =>
                                                                <li key={t}>
                                                                    <Link 
                                                                        className='mobile-item-content-link' 
                                                                        to={menuItemm.name + '/'+categoryItemm.urlTitle}
                                                                    >
                                                                        {categoryItemm.name}
                                                                    </Link>
                                                                </li>
                                                        )
                                                    )
                                                }
                                            </ul>
                                        </div>

                                </li>

                                <li className="mobile-header-left-ul-item" onClick={e => forstopPropagation(e)}>
                                    <Link className="mobile-item-header" to='/comingSoon'>
                                        <img className="mobile-item-header-img" src={MAINURL+APIS.staticMedia+"/Frame%202.5.24dfe8d2.svg"} alt=""/>
                                        <span>BALAYI</span>
                                    </Link>
                                </li>

                                <li className="mobile-header-left-ul-item" onClick={e => forstopPropagation(e)}>
                                    <Link className="mobile-item-header" to='/comingSoon'>
                                        <img className="mobile-item-header-img" src={MAINURL+APIS.staticMedia+"/Frame%202.6.f5c8166e.svg"} alt=""/>
                                        <span>SIYAHI</span>
                                    </Link>
                                </li>
                                <li className="mobile-header-left-ul-item" onClick={e => forstopPropagation(e)}>
                                    <Link className="mobile-item-header" to='/comingSoon'>
                                        <img className="mobile-item-header-img" src={MAINURL+APIS.staticMedia+"/Frame%203.c8f5cdaf.svg"} alt=""/>
                                        <span>KAMPANYALAR</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>                      
        </>
        
    )
}