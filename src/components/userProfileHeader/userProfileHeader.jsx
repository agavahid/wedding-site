import './userProfileHeader.css';
import { NavLink} from "react-router-dom";
import { useState } from "react";
import React from 'react';

export default function UserProfHeader(){
    const[isClassActive, setIsClassActive] = useState(0);

    return(
    
        <div className="profile-header-navBar">

            <ul className="profile-navbar-ul">
                <NavLink 
                    className={({ isActive }) => isActive ? 'profPageNavItem active' : 'profPageNavItem'}
                    to={'/profile/account'}
                >
                    Profil
                </NavLink>
                <NavLink  
                    className={({ isActive }) => isActive ? 'profPageNavItem active' : 'profPageNavItem'}
                    to={'/profile/settings'}>Tənzimləmələr</NavLink>
                <NavLink  
                    className={({ isActive }) => isActive ? 'profPageNavItem active' : 'profPageNavItem'}
                    to={'/profile/likedList'}>Seçdiklərim</NavLink>
                <NavLink  
                    className={({ isActive }) => isActive ? 'profPageNavItem active' : 'profPageNavItem'}
                    to={'/profile/messages'}>Mesajlar</NavLink>
            </ul>
            
        </div>
        
    )
}