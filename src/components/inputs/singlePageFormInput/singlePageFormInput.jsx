import './singlePageFormInput.css';
import { useState } from 'react';
export default function SinglePageFormInput(
    {
        picture, 
        type, 
        name, 
        onChangeFun, 
        id,
        title
    }){
    const [isLength, setLength] = useState(0);

    const valueCheck = (e) =>{
        setLength(e)
        console.log(isLength)
    }
    return(
        <label className="form-item"> 
            <img src={picture} className='contactForm-field-icon'/>
            <input 
                className={isLength > 0 ? 'form-input active' : 'form-input'}
                type={type} 
                name={name} 
                onChange={onChangeFun} 
                onKeyUp={(e)=> valueCheck(e.target.value.length)}
                id={id}
            />
            <span className='formType'>{title}</span>
        </label>
    )
}