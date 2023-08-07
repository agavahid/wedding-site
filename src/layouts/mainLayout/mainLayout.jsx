import './mainLayout.css';
import HeaderNavBar from '../../components/headerNavBar/headerNavBar';
import FooterLayout from '../footerLayout/footerLayout';
import { useSelector } from 'react-redux';
import React from 'react';

export default function MainLayout({children}) {

    
    const isActive = useSelector((state) => state.isLeftActive.activity);
    
    
    return(
        <div className={isActive ? 'hidden' : ''} >
            <HeaderNavBar/>
            {children} 
            <FooterLayout/>
        </div>

    )
}