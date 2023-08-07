import './comingSoon.css';
import { Link } from "react-router-dom"
import ComingSoonImg from '../assets/images/slugItems/comingSoon.svg';
import React from 'react';

export default function ComingSoon(){
    
   
    return(
        
        
        <div className="coming-soon-container">
            <img src={ComingSoonImg} alt=''/>
            <div className="coming-soon-content">
                <h1>Tezliklə</h1>
                <p>Bu səhifə hazırlanır. Tezliklə geri qayıdın</p>
                <Link className='link' to={'/'}>Əsas səhifə</Link>
            </div>
        </div>

    )
}