import './bottomLocation.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';

export default function BottomLocation(){

    const[getPost, setPost] = useState([]);
    const reverted = [...getPost].reverse();
    useEffect(()=> {
        axios.get("https://api.wed.az/edu/general/menu")
        .then((response)=>
            setPost(response.data.data)
        )
 
    },[])
    


    return(



        <div className="bottom-location">
            <ul className="bottom-location-main-ul">

                {
                    reverted.map((section, i)=>
                        section.name === 'venue' ? 
                        <ul className="first-row-drp" key={i}>
                        <h3>Toy Mekanlari</h3>
                        {section.categories.map((sectionItem,j)=>
                        
                            <li key={j}>
                                <Link className='sectionItem' to={section.name + '/' + sectionItem.urlTitle}> 
                                    {sectionItem.name}
                                </Link>
                            </li>
                        
                        )}
                        </ul>

                        : 
                        <ul className='second-row-menu' key={i}>
                            <h3>Toy Hazirligi</h3>
                            <ul className="second-row-drp" >
                                {section.categories.map((sectionItem,j)=>
                            
                                    <li key={j}>
                                        <Link className='sectionItem' to={section.name + '/' + sectionItem.urlTitle}> 
                                            {sectionItem.name}
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </ul>
                    )
                }
                <ul className="first-row-drp">
                    <h3>WED.AZ</h3>
                    <li>
                        <Link className='sectionItem' to ={"/about"}>Haqqımızda</Link>
                    </li>
                    <li>
                        <Link className='sectionItem' to ={"/contact"}>Əlaqə</Link>
                    </li>
                    <li>
                        <Link className='sectionItem' to ={"/explore"}>Kəşf et</Link>
                    </li>
                    <li>
                        <Link className='sectionItem' to ={"/coming-soon"}>Kampaniyalar</Link>
                    </li>
                </ul>

            </ul>
        </div>
    )
}