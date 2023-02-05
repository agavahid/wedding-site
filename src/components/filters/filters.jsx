import './filters.css'
import { useState } from "react";
import listIcon from '../../components/assets/icons/listIcons/Vector 8.svg';
import FilterItem from "../filter-item/filterItem";
import React from 'react';

export default function FilterList({submenuItem, getValue, i, checkedItems}){
    
    const [isActive, setisActive] = useState(false);
    const handle = () =>{
        setisActive(prevState => !prevState)
    }
   

    const onChangeFunc = (e) => {
        getValue(e.target.value, e.target.checked, e.target.id);
    };
    
    return(
        
     
        <>
            <li key={i} className="list-item">
                <div className="list-item-header"
                    onClick= {()=> handle()}>
                    <span>{submenuItem.name}</span>
                    <img  className={isActive === true ? "item-header-img" : "item-header-img-active"}  src={listIcon}/>
                </div>
            
                <ul id={submenuItem.name} className={isActive === true ? "center-left-drp-ul-visible" : "center-left-drp-ul"}>
                    {submenuItem.data.map((submenuListItem,j)=>

                        <FilterItem 
                            submenuItem={submenuItem} 
                            submenuListItem={submenuListItem} 
                            key={j}
                            onChangeFunc={onChangeFunc}
                            checkedItems={checkedItems}
                        />
                    )} 
                </ul>
            </li>
        </>
        
        
    )
}