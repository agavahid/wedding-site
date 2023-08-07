import RedHearth from '../../components/assets/icons/headericons/red-hearth-header.png';
import MainLogo from '../../components/assets/icons/headericons/main-logo.png';
import Search from '../inputs/mainSearch/mainSearch'
import MobileHeader from '../mobile-header/mobileHeader';

import './headerNavBar.css';
import { setLogOut, setLogin } from '../../store/features/loginValue/loginValue';
import { URL, APIS, MAINURL } from '../../configs/configs';
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom"; 
import Cookies from 'universal-cookie';
import axios from 'axios';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { headerNavBarMockDatas } from '../headerNavBarMockDatas/headerNavBarMockDatas';


export default function HeaderNavBar(){
    
    const refOne = useRef(null);
    
    const cookies = new Cookies();
    const dispatch = useDispatch();
    const logValue = useSelector((state) => state.login.isLoggedIn);

    const [post, setPost] = useState([]);
    const [showDrp, setDrp] = useState(false);
    const [langItem, showLangItem] = useState(false);

   
    const closeDropdown = () => {
        setDrp(false);
    }

    const ref = useDetectClickOutside({ onTriggered: closeDropdown });

    useEffect(()=>{
        axios({
            method: 'get',
            url: URL + APIS.menu,
            headers: {"authorization" : `bearer ${cookies.get('userToken')}`}
        }).then(function(response) {
            if(cookies.get('userToken') !== undefined){
                dispatch(setLogin(true))
                
            }else if(cookies.get('userToken') === undefined ){
                
                dispatch(setLogOut(false));
            }
            setPost(headerNavBarMockDatas);
                
            
        });
    },[]);
    
    
    function logOut(e){
        e.stopPropagation();
        cookies.remove('userToken')
        dispatch(setLogOut());
    }
    function drpp(e){
        e.stopPropagation()
        setDrp(!showDrp)
    }
    return(

        <div className='top'>
            
            <MobileHeader/>
            
            <div className="header-top">
                    
                <div className="header-top-left">
                    <div className="header-top-left1">
                        <Link to={'/'}> 
                            <img src={MainLogo} alt=""/>
                        </Link>
                        
                    </div>

                    <div className="header-top-left2"
                        onClick={()=> showLangItem(!langItem)}
                    >
                        <div className="header-dropdown-container" ref={refOne}>
                            <div className="header-dropdown-content">
                                <span>AZ</span>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACKSURBVHgB7ZExDoAgDEURw+7I6BFcSBi5gif1CMaFhUGP4ECIozMspoMJMQo4sfQtlP70/yYlBEGQ+iilui9NStmTDDQlgoH3fhVCDE8NepTSObUA0KZEa+3JOV8YYxO8zrnjNodeCGHUWu8pj4YUEBvC/66NMVtutiggDoG61Pw3EPJ2DwRBKnMBc3Iw/fk099IAAAAASUVORK5CYII=" alt=""/>
                            </div>
                            {langItem === false ? null :
                                <ul className="header-dropdown-items">
                                    <li onClick={()=> showLangItem(!langItem)}>EN</li>
                                    <li onClick={()=> showLangItem(!langItem)}>RU</li>
                                </ul>
                            }
                           
                        </div>
                    </div>
                </div>
    
                <div className="header-top-middle">
                    <Search/>
                </div>
    
                <div className="header-top-right">
                    <div className="header-top-right1">
                        {
                            logValue ? 
                                <Link className='red-hearth-section' to='/profile/likedlist'>
                                    <img src={RedHearth} alt=''/>
                                </Link>
                            :   
                               
                                <Link className="red-hearth-section" to='/register'>
                                    <img src={RedHearth} alt=''/>
                                </Link>
                    
                        }
                        
                    </div>
                    <div className="header-top-right2">
                        <div className="header-top-right2-container" ref={ref}>
                            <span onClick={(e) => {e.stopPropagation(); setDrp(!showDrp)}}>Hesabim</span>
                            {showDrp === false ? null :

                                <div className='header-top-right-drpMenu'>
                                    <div className="kristal"></div>
                                    {logValue === false ? 
                                        <div className="header-top-right2-drp">
                                            <div className="header-top-right2-drp-contents">
                                                <Link onClick={()=>drpp()} to="login">Giris</Link>
                                                <Link onClick={()=>drpp()} to="register">Qeydiyyat</Link>
                                            </div>
                                            
                                        </div>
                                        :
                                        <div className="header-top-right2-drp">

                                            <div className="header-top-right2-drp-contents">
                                                <h4>İstifadəçi adı</h4>
                                                <Link to='/profile/settings'>Tənzimləmələr</Link>
                                                <Link to='/' onClick={(e)=> logOut(e)}>Çıxış</Link>
                                            </div>
                                            
                                        </div>
                                    }
                                    
                                </div>
                            }
                        </div>
                    </div>
                </div>
    
    
            </div>

            <div className='unbekannt'></div>
    
    
            <div className="header-bottom">
                <ul className="main-ul">
                    <li className="menu1">
                        <div className="li-header">
                            <img className="nav-img2" id="z" src={MAINURL+APIS.staticMedia+"/Frame%202%20(1).11256f46.svg"} alt=""/> 
                            <span className="nav-span2" >TOY MEKANLARI</span>
                        </div>
                        <ul className="drp1">
                            {
                                post.map((menu,i) =>
                                    <div key={i}>
                                        
                                        { menu.name === 'venue' ?
                                            menu.categories.map((item,i) => 
                                                <li className='li' key={i}>
                                                    <Link to={menu.name + '/' + item.urlTitle} className='a'>{item.name}</Link>
                                                </li> 
                                            ) : null
                                        }
                                    </div>
                                )
                            }
                        </ul>
                    </li>
        
        
                    <li className="menu1">
                        <div className="li-header">
                            <img className="nav-img2" src={MAINURL+APIS.staticMedia+"/Frame%202.2.98a5cc5f.svg"} alt=""/>
                            <span className="nav-span2" >TOY HAZIRLIGI</span>
                        </div>
                        <ul className = "drp2">
                            {
                                post.map((menuItemm, i) => {
                                    return(
                                        menuItemm.name === "vendor" ?
                                            menuItemm.categories.map((categoryItemm, t) =>
                                            <li className='vendorLi' key={t}>
                                                <Link to={menuItemm.name + '/'+categoryItemm.urlTitle} className='a'>{categoryItemm.name}</Link>
                                            </li>
                                    )
                                    : null)
                                })
                               
                            }
                        </ul>
                    </li>
        
        
                    <li className="menu">
                        <Link className="nav-span" to='/comingSoon'>
                            <img className="nav-img" src={MAINURL+APIS.staticMedia+"/Frame%202.5.24dfe8d2.svg"} alt=""/>
                            <span>BALAYI</span>
                        </Link>
                    </li>
        
        
                    <li className="menu">
                        <Link className="nav-span" to='/comingSoon'>
                            <img className="nav-img" src={MAINURL+APIS.staticMedia+"/Frame%202.6.f5c8166e.svg"} alt=""/>
                            <span>SIYAHI</span>
                        </Link>
                    </li>
        
        
                    <li className="menu1">
                        <div className="spesific-menu-item">
                            <Link className="nav-span" to='/comingSoon'>
                                <img className="nav-img" src={MAINURL+APIS.staticMedia+"/Frame%203.c8f5cdaf.svg"} alt=""/>
                                <span>KAMPANIYALAR</span>
                            </Link>
                        </div>
                    </li>
        
        
                    <li className="menu">
                        <Link className="nav-span" to='/comingSoon'>
                            <img className="nav-img" src={MAINURL+APIS.staticMedia+"/Frame%202.7.33b5c2cf.svg"} alt=""/>
                            <span>JURNAL</span>
                        </Link>
                    </li>
                </ul>
            </div>                                                                                                                                          

        </div>

    )
}

