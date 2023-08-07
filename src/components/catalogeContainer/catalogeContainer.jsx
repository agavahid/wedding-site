import './catalogeContainer.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import CatalogeItem from '../catalogeItem/catalogeItem';
import { catalogeContainerItems } from '../catalogeContainerItems/catalogeContainerItems';
import React from 'react';


export default function CatalogeContainer(){

    const[getPost, setPost] = useState([]);
    const [isMock, setMock] = useState(false);
    
    
    
    useEffect(()=> {
        axios({
            method: 'get',
            url: "https://api.wed.az/edu/service/homeservices"
        })
        .then((response)=>{
            if(response.data.data !== undefined && response.data.data !== null && response.data.data !== []){
                setPost(response.data.data);
            }else{
                setPost(catalogeContainerItems)
                setMock(true)
            }
        })
    },[])
    
    
    return(

        <div className="cataloge-container">

            {
                getPost.map((categoryItem, i)=>

                    <CatalogeItem catalogeSection = {categoryItem} key={i} isMock={isMock}></CatalogeItem>
                )
            }

                
        </div>



    )
}