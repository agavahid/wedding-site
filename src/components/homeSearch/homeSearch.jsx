import './homeSearch.css'
import MobileSearchSection from '../mobileSearch/mobileSearch';
import React, { useEffect, useState,useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";


export default function HomeSearch(){
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
        setSecondSubmenuWiev(false)
    }
    const goToLink = () => {
        return(navigate(toLink))
    }
    const getCityItem = () => {
        setSecondSubmenuWiev(false)
    }
    
    const targetRefOne = useRef(null);
    const targetRefTwo = useRef(null);
    
    useEffect(()=>{
        document.addEventListener('click', handleClickOutSide, true)

        return () => document.removeEventListener('click', handleClickOutSide, true)
    },[])

    const handleClickOutSide = (e) =>{
        if(!targetRefOne.current.contains(e.target)){

            setFirstSubmenuWiev(false);
            
        }else if(!targetRefTwo.current.contains(e.target)){
            setSecondSubmenuWiev(false);
        }
    }
    
    return(

        <div className="search-section"> 
            <div className="search-container">
                <div className='search-content'>
                    <div className="search-item">
                        <div className='search-item-header'>
                            <h1>Evlənən cütlüklər üçün toy hazırlığını asanlaşdırdıq</h1>
                            <p>Evlilik və toy hazırlığı üçün hər şey bir ünvanda</p> 
                        </div>
                    
                        <div className='button-section'>
                            <div className='button-section-item-container'>
                                <div className="button-section-item">
                                    <div className='search-category-header'>
                                        <span>Kategoriya</span>
                                    </div>
                                    <div className="search-category" ref={targetRefOne}>
                                        <div className='search-category-head'
                                            onClick={()=> setFirstSubmenuWiev(!firstSubmenuWiev)}
                                        >
                                            <span>{toLinkName}</span>
                                            <img src="https://wed.az/static/media/Frame%202.58.d4b47791.svg" alt=""/>
                                        </div>
                                        {firstSubmenuWiev ?
                                            <div className='search-category-bottom' >
                                                <div className="caret"></div>

                                                <div className="search-category-drp">


                                                {
                                                    reversedArr.map((index,i) =>
                                                    
                                                        index.name === "venue" ? 
                                                        <div  className="search-category-drp-item-top" key={i}>
                                                            <h3>Toy Mekanlari</h3>
                                                            <ul className="first-drp-item" key={i}>
                                                            {index.categories.map((item,g)=>
                                                                <li 
                                                                    key={g}
                                                                    onClick={()=>getItem(index.name, item.urlTitle, item.name)}
                                                                    className='itemLink'
                                                                >
                                                                    {item.name}
                                                                </li>
                                                            )}
                                                            </ul>

                                                        </div> 
                                                        :
                                                        <div  className="search-category-drp-item-bottom" key={i}>
                                                            <h3>Toy Hazirligi</h3>
                                                            <ul className="second-drp-item" key={i}>
                                                                {index.categories.map((categoryItem, k)=>
                                                                    <li 
                                                                        key={k}
                                                                        className='itemLink'
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

                                <div className="button-section-item" ref={targetRefTwo}>
                                    <div className="button-section-item1-header">
                                        <span>Seher</span>
                                        <div className="second-search-category">
                                            <div onClick={()=> setSecondSubmenuWiev(!secondSubmenuWiev)}
                                                className="second-search-category-head"
                                            >
                                                <span>Baki</span>
                                                <img src="https://wed.az/static/media/Frame%202.58.d4b47791.svg" alt=""/>
                                            </div>
                                                {secondSubmenuWiev === true ? 
                                                    <div className="second-search-category-bottom">
                                                        <div className="second-caret"></div>
                                                        <ul className="second-search-category-drp">
                                                            {cityCategorie.map((index,i)=>
                                                                <li key={i}>
                                                                    <Link to="#"
                                                                        onClick={()=> getCityItem()}
                                                                        type='button'
                                                                        className='itemLink'
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
                                </div>
                                <div className='search-button-content'>
                                    <button onClick={()=> goToLink()} className="search-button">Axtar</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>                        
            <MobileSearchSection/>
        </div>
    )
        
}