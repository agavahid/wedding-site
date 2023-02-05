import './bottomItems.css'
import FirstContentImg from '../assets/images/mainPage/button-content-img.png';
import SecondContentImg from '../assets/images/mainPage/button-content-img1.png';
import {Link} from 'react-router-dom';
import React from 'react';

export default function BottomItems(){
    return(
 

        <div className="buttons">
                <div className="buttons-main-content">
                    <div className="button-content">
                        <div className="button-content-img"> 
                            <img src={FirstContentImg} alt=""/>
                        </div>
        
                        <div className="button-content-text">
                            <h3>Toya Hazirlasan Cütlüksünüz?</h3>
                            <p>Platformamıza qoşularaq toy hazırlığınızı daha asan, praktik və sürətli edin</p>
                            <Link className='regstration-item' to={"/"}>Qeydiyyat</Link>
                        </div>
                    </div>
        
        
                    <div className="button-content">
                        <div className="button-content-img">
                            <img src={SecondContentImg} alt="" />
                        </div>
        
                        <div id='second-button-item' className="button-content-text">
                            <h3>Biznes Sahibisiniz?</h3>
                            <p>Toy biznesinizi  bizimlə böyüdün</p>
                            <Link className='regstration-item'  id="button-second-regstration" to={"/"}>Qeydiyyat</Link>
                        </div>
                    </div>
                </div>
        
            </div>
    )
}