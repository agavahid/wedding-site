import LoadingInput from "../../loadingInput/loadingInput";
import { Photo } from '../../../configs/configs';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './mainSearch.css';

const Search = () => {
    const data = "https://api.wed.az/edu/search";

    const[searchUrl, setSearchUrl] = useState([]);
    const[sectionWiew, setSectionWiew] = useState(false);
    const [isLoading, setLoading] = useState(false);

    function getInputValue(e){
        loadBlogData(e.target.value)
    }
    
    function loadBlogData(searchText=''){
        
        let searchParam = "";
        if(searchText !== ""){
            setLoading(true);
            searchParam += '?q=' + searchText
            setSectionWiew(true);
        }else if(searchText.length === 0){
           setSectionWiew(false);
        }
        
        axios.get(data+searchParam)
        .then((response) => {
            setSearchUrl(response.data.data.data);
            setLoading(false);
        });
           
    }
    function resetSearchTest(){
        loadBlogData()
    }
    return(
        
        <>     
            <div className="searchSection">
                <input
                    onChange={getInputValue}
                    type='input'
                    className='mainSearch'
                    placeholder="Axtar..."
                ></input>
                <img src="https://wed.az/static/media/Frame%203.3.1f7007d0.svg" alt=""/>
            </div>
           

            {sectionWiew === false ? 
                null 
                :
                <div className="resultContent">
                    <div className="caret" id="searchListCaret"></div>
                     
                        {
                            isLoading ? <LoadingInput /> :       
                                searchUrl.length ?
                                    <ul className="resultList">{
                                        searchUrl.map((item,i)=>
                                        
                                            <li key={i} >
                                                <Link className="resultItem" to={'/' + item.urlTitle} onClick={()=> resetSearchTest()}>
                                                    <p className="resultItemTitle">{item.title}</p>
                                                    <img className="resultItemImg" src={Photo + item.images[0].url} />
                                                </Link>
                                            </li>
                                            
                                        )}
                                    </ul>
                                : <div className="no-content-founded">Nəticə tapilmadi</div>
                        }
                    
                </div>
            }
        </>
        
    )
}
export default Search