import React, { useEffect, useState } from "react"

const FilterItem = ({submenuItem, submenuListItem, onChangeFunc, checkedItems}) => {

    const [isChecked, setCheck] = useState(false);
 
    useEffect(() => {

        const checkedItem = checkedItems.filter(item => item.input === `${submenuItem.key}-${submenuListItem.id}`)
        
        if(checkedItem.length) {
            setCheck(true);
        }else {
            setCheck(false);
        }

    }, [checkedItems.length])

    return( 
        <li className="center-left-drp-ul-item">
            <label htmlFor={submenuListItem.name} className="container">
                {submenuListItem.name}
                <input 
                    type="checkbox"
                    id={submenuListItem.name}
                    value={`${submenuItem.key}-${submenuListItem.id}`}
                    checked = {isChecked}
                    onChange={onChangeFunc} 
                />
                <span className="filter-checkmark"></span>
            </label>  
        </li>
    )
}

export default React.memo(FilterItem);