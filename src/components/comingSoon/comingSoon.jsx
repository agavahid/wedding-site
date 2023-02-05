import './comingSoon.css'
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import ComingSoonImg from '../assets/images/slugItems/comingSoon.svg';

export default function ComingSoon(){
    
   
    return(
        
        
        <div className="coming-soon-container">
            <img src={ComingSoonImg} />
            <div className="coming-soon-content">
                <h1>Tezliklə</h1>
                <p>Bu səhifə hazırlanır. Tezliklə geri qayıdın</p>
                <Link className='link' to={'/'}>Əsas səhifə</Link>
            </div>
        </div>

    )
}