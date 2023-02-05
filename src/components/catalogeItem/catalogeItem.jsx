import './catalogeItem.css';
import { Link } from 'react-router-dom';
import CategoryItem from '../categoryItem/categoryItem';
import React from 'react';

export default function CatalogeItem({catalogeSection}){

    
    return(

        <div className='cataloge-item-container'>
            <div className="item-container-header">
                <div className="item-header-left">
                    <h3>{catalogeSection.name}</h3>
                    <p>{catalogeSection.title}</p>
                </div>
                <div className="cataloge-header-right">
                    <Link to={'/'+catalogeSection.urlType+'/'+catalogeSection.urlTitle}>
                        <img src="https://wed.az/static/media/Frame%202.10.1c362dbe.svg" alt=""/> Hamisina Bax
                    </Link>
                </div>
            </div>



            <div className="cataloge-mobile-scroll-item">
                <div className="cataloge-container-bottom">
                    {
                        catalogeSection.items.map((catalogItem, j)=>

                            <CategoryItem categorySection = {catalogItem} key={j}></CategoryItem>
                            
                        )
                    }                                
                </div>
            </div>
        </div>

    )
}