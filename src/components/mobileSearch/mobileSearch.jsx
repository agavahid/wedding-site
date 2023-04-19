import './mobileSearch.css';

import { Link, useNavigate, Outlet } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from "axios";


export default function MobileSearchSection(){

    const navigate = useNavigate();
    const[firstSubmenuWiev, setFirstSubmenuWiev] = useState(false);
    const[secondSubmenuWiev, setSecondSubmenuWiev] = useState(false);

    const[toLink, setToLink] = useState('vendor/bridal-dress');
    const[toLinkName, setToLinkName] = useState('Gəlinlik');

    const[url, setUrl] = useState([]);
    const[cityCategorie, setCityCategorie] = useState([]);

    let [reversedArr,reverse] = useState([]);
    const reverseFunc = () =>{
        reversedArr =[...url].reverse()
    }
    reverseFunc()
    useEffect(()=>{
        axios.get("https://api.wed.az/edu/general/menu") 
        .then((response)=>
        setUrl(response.data.data)
            )
    },[])
    useEffect(()=>{
        axios.get("https://api.wed.az/edu/general/getbasecities")
            .then((response)=>
                setCityCategorie(response.data.data)
            )
    },[])
    const getItem = (indexName, urlTitle, itemName) =>{
        if(indexName && urlTitle){
            setToLink(indexName+'/'+urlTitle)
        }
        
        setToLinkName(itemName)
        setFirstSubmenuWiev(false)
    }
    const getCityItem = () => {
        setSecondSubmenuWiev(false)
    }
    const goToLink = () => {
        return(navigate(toLink))
    }

    return(

        <div className='mobile-button-section'>
            <div className='mobile-button-section-item-container'>
                <div className="mobile-button-section-item">
                    <div className='mobile-search-category-header'>
                        <span>Kategoriya</span>
                    </div>
                    <div className="mobile-search-category">
                        <div className='mobile-search-category-head'
                        onClick={()=> setFirstSubmenuWiev(!firstSubmenuWiev)}
                        >
                            <span>{toLinkName}</span>
                            <img src="https://wed.az/static/media/Frame%202.58.d4b47791.svg" alt=""/>
                        </div>
                        {firstSubmenuWiev ?
                            <div className='mobile-search-category-bottom'>
                                <div className="mobile-caret"></div>

                                <div className="mobile-search-category-drp">


                                {
                                    reversedArr.map((index,i) =>
                                    
                                        index.name === "venue" ? 
                                        <div  className="mobile-search-category-drp-item-top" key={i}>
                                            <h3>Toy Mekanlari</h3>
                                            <ul className="mobile-first-drp-item" key={i}>
                                            {index.categories.map((item,g)=>
                                                <li 
                                                    key={g}
                                                    onClick={()=>getItem(index.name, item.urlTitle, item.name)}
                                                    className='mobile-itemLink'
                                                >
                                                    {item.name}
                                                </li>
                                            )}
                                            </ul>

                                        </div> 
                                        :
                                        <div  className="mobile-search-category-drp-item-bottom" key={i}>
                                            <h3>Toy Hazirligi</h3>
                                            <ul className="mobile-second-drp-item" key={i}>
                                                {index.categories.map((categoryItem, k)=>
                                                    <li 
                                                        key={k}
                                                        className='mobile-itemLink'
                                                        onClick={()=> getItem(index.name, categoryItem.urlTitle, categoryItem.name)}
                                                    >
                                                        {categoryItem.name}
                                                    </li>
                                                )}
                                            </ul>
                                        </div> 
                                    )
                                }
                                </div>
                            </div> : null
                        }
                    </div>
                </div>

                <div className="mobile-button-section-item">
                    <div className="mobile-search-category-header">
                        <span>Seher</span>
                        
                    </div>
                    <div className="mobile-search-category">
                        <div onClick={()=> setSecondSubmenuWiev(!secondSubmenuWiev)}
                            className="mobile-second-search-category-head"
                        >
                            <span>Baki</span>
                            <img src="https://wed.az/static/media/Frame%202.58.d4b47791.svg" alt=""/>
                        </div>
                            {secondSubmenuWiev === true ? 
                                <div className="mobile-second-search-category-bottom">
                                    <div className="mobile-second-caret"></div>
                                    <ul className="mobile-second-search-category-drp">
                                        {cityCategorie.map((index,i)=>
                                            <li key={i}>
                                                <Link to="#"
                                                    onClick={()=> getCityItem()}
                                                    type='button'
                                                    className='mobile-itemLink'
                                                >
                                                    {index.name}
                                                </Link>
                                            </li>
                                        )}
                                    </ul>
                                </div> 
                            : null
                            }
                    </div>
                </div>

                <div className='mobile-search-button-container'>
                    <button onClick={()=> goToLink()} className="mobile-search-button">Axtar</button>
                </div>
            </div>
        </div>
        
    )
}
