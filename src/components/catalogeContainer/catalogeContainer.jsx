import './catalogeContainer.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import CatalogeItem from '../catalogeItem/catalogeItem';


export default function CatalogeContainer(){

    const[getPost, setPost] = useState([]);

    useEffect(()=> {
        axios({
            method: 'get',
            url: "https://api.wed.az/edu/service/homeservices"
        })
        .then((response)=>
            setPost(response.data.data)
            
        )
    },[])

    return(

        <div className="cataloge-container">

            {
                getPost.map((categoryItem, i)=>

                    <CatalogeItem catalogeSection = {categoryItem} key={i}></CatalogeItem>
                )
            }

                
        </div>



    )
}