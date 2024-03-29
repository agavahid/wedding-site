import './rightDropdownMobile.css';
import defaultUser from '../assets/icons/pageIcons/default-user-icon.jpg';

import { setActive } from '../../store/features/isHeaderActive/isRightDrpActive';
import { setLogOut } from '../../store/features/loginValue/loginValue';
import { useDispatch, useSelector } from 'react-redux';
import { MAINURL, APIS } from '../../configs/configs';
import { Link } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';

export default function RightDropdownMobile(){
    
    const dispatch = useDispatch();
    const isActive = useSelector((state) => state.isRightActive.activity);
    const isLogged = useSelector((state) => state.login.isLoggedIn);

    const openSideMenu = () => {
        document.body.style.overflow = 'hidden';
        dispatch(setActive()); 
    }
    useEffect(()=>{
        if(isActive === false){
            document.body.style.overflow = 'auto';
        }
    },[isActive])
    const secondTargetRef = useRef(null);
    
    /*
    useEffect(()=>{
        document.addEventListener('click', handleClickOutSide, true)

        return () => document.removeEventListener('click', handleClickOutSide, true)
    },[])

    const handleClickOutSide = (e) =>{
        if(!secondTargetRef.current.contains(e.target)){

            dispatch(setActive())
            
        }
    }
    */
   
    return(
        <div 
            onClick={()=> openSideMenu()}
            className="mobile-header-right"
            ref={secondTargetRef}
        >   
            <img 
                src={`${MAINURL}${APIS.staticMedia}/Frame%202.11.6b5508c9.svg`} 
                className="defaultPageUser"
                
            />
        
            <div 
            
                className={ isActive === true ? "mobile-header-right-contents active" : "mobile-header-right-contents" }
                >
                
                
                {
                    isLogged === false ?

                    <>
                        <div className="user-picture-container" >
                            <span>İstifadəçi adı</span>
                            <img src={defaultUser} className="user-picture"></img>
                        </div>
                        <div className="login-container">
                            <Link to='/login'>Giris</Link>
                            <Link to='/register'>Qeydiyyat</Link>    
                        </div> 
                    </>
                        
                    : 
                    <>
                        <div className="user-picture-container">
                            <img src={defaultUser} className="user-picture"></img>
                        </div>

                        <div className="login-container">
                            <Link to='/profile'>Profil</Link>
                            <Link to='/profile/settings'>Tənzimləmələr</Link>
                            <Link to='/profile/likedList'>Seçdiklərim</Link>
                            <Link to='/profile/messages'>Mesajlar</Link>
                            <Link to="#" onClick={()=> dispatch(setLogOut())}>Çıxış</Link>
                        </div>
                    </>
                        
                }
                          
            </div>
        </div>
    )
}