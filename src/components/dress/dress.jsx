import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import LocationIcon from '../../components/assets/icons/cardicons/location-icon.png';
import listicon from "../../components/assets/icons/pageIcons/listIcon.png"
import leftArrowIcon from "../assets/icons/listIcons/arrow to left.png";
import rightArrowIcon from "../assets/icons/listIcons/arrow to right.png";
import filterIcon from "../assets/icons/pageIcons/filter.png";
import closeIcon from "../assets/icons/listIcons/close button.png"
import notFoundImg from "../assets/images/mainPage/noResult.jpg"

import "./dress.css";
import React from 'react';
import Loading from "../loading/loading";
import FilterList from "../filters/filters";
import Search from "../inputs/mainSearch/mainSearch";
import { MAINURL, APIS } from "../../configs/configs"
import { useSelector, useDispatch } from "react-redux";
import { setPage, resetPage } from "../../store/features/sectionPageUrl/sectionPageUrl";

const SectionItems = React.lazy(() => import('../sectionItems/sectionItems'));
const checkedItems = [];

export default function Dress(){

    const dispatch = useDispatch();
    const { slug ,urlid } = useParams();
    const [filters, setFilters] = useState([]);
    const [sectionItems, setSectionItems] = useState([]);
    const [pageItems, setPageItems] = useState([]);
    const [result, setResult] = useState(0);
    const [disabled, setDisabled] = useState(true);
    const [showBody, setShowBody] = useState(true);
    const [isLoading, setLoading] = useState(false);
    const [filterClass, setFilterClass] = useState(false);
    const [val, setval] = useState(false);
    const [pageName, setPageName] = useState('');
    const [pageTitle, setPageTitle] = useState('');
    const[isClassActive, setIsClassActive] = useState(1);
    const pageLink = useSelector((item) => item.pageUrl.pageUrl);
    
    useEffect(()=>{
        dispatch(resetPage())
    },[urlid])

    useEffect(()=>{
        if(disabled === false){
            setShowBody(false)
        }else{
            setShowBody(true)
        }
    },[disabled])

    useEffect(()=>{
        window.scrollTo(0, 0);
        getitem(pageLink);
        getMenuItems();
        getFilters();
    },[urlid, pageLink])

    
    function getFilters(){
        axios.get(`https://api.wed.az/edu/filters/${urlid}`)
        .then((response)=>{
            const resAsArray = [];
            for(let i in response.data.data){
                if(response.data.data[i] !== null && response.data.data[i].name && Array.isArray(response.data.data[i].data) && response.data.data[i].data.length ){
                    resAsArray.push({key: i, name: response.data.data[i].name, data: response.data.data[i].data})
                }
            }
            setFilters(resAsArray)
        })
    }
    function getMenuItems(){
        axios.get("https://api.wed.az/edu/general/menu")
            .then((response)=>{
                for(let i in response.data.data){
                    if(response.data.data[i].name === slug){
                        for(let j in response.data.data[i].categories){
                            if(response.data.data[i].categories[j].urlTitle === urlid){    
                                setPageName(response.data.data[i].categories[j].name)
                                setPageTitle(response.data.data[i].categories[j].title)
                            }
                        }
                    }
                }
            })
    }

    function getitem(pageLink, endOfUrl = '' ) {
        setLoading(true);
        axios({
            method: 'get',
            url: `${pageLink}${APIS.stc}${urlid}${endOfUrl}`,
            headers: {
                Authorization : `bearer ${localStorage.getItem('userToken')}`
            }

        })
        .then((response)=> {
            setSectionItems(response.data.data.data);
            setResult(response.data.data.total);
            setLoading(false)
            setPageItems(response.data.data)
           
        })
        
    }


    function getUrlItem(checkedItems){
        const urlitem = [];
        checkedItems.map(item => {

            const itemAsArray = item.input.split('-');
            
            if(itemAsArray[0] === 'metros'){
                urlitem.push(`metro[]=${itemAsArray[1]}`);
            }
            else if(itemAsArray[0] === 'cities'){
                urlitem.push(`city[]=${itemAsArray[1]}`)
            }else{
                urlitem.push(`${itemAsArray[0]}[]=${itemAsArray[1]}`);      
            }
            
        })
        const endOfUrl = '&' + urlitem.join('&');
        getitem(pageLink, endOfUrl)
    }

    function getValue(input, value, id){
        if(value === true){
            checkedItems.push({input, id});
            getUrlItem(checkedItems);
            
        }
        else if(value === false){
            removeChecked(checkedItems, input);
            getUrlItem(checkedItems);
        }
    }


    function removeChecked(obj, target){
        let ind = obj.map(item => item.input).indexOf(target); 
        if(ind > -1){
            obj.splice(ind, 1)
            getUrlItem(obj);
        }
        
    } 
    function setValidity(obj,index){
        setval(false)
        removeChecked(obj,index)
    }   

    return (

        
        <>   
            
            <div className="top-select">
                <div className="select-opasity"></div>
                <div className='select-container'>
                    <div className="select-button-container">
                        <Link to={'/'} className="button1">Esas Sehife</Link>
                        <Link to={'/dress'} className="button2" id="active">{pageName}</Link>
                    </div>
                    <div className="select-text">
                        <h1>{pageName}</h1>
                        <p>{pageTitle}</p>
                    </div>
                </div>
            </div>
            <div className="center-main"> 
            
                <div id="filter-container" className="filter-container">
                    <div className="filter-contents">
                        <div className="filter-content-menu">
                            <div className="filter-section-top">
                                <Search/>
                            </div>
                            <div id="filter-left" className="filter-left">
                                <h3>Seçilmiş filtrlər</h3>
                                <ul id="filters" className="filters">
                                    {
                                        checkedItems.map((item, i)=>
                                            
                                            <li className="choosed-filter" key={i}>
                                                {item.id}
                                                <img 
                                                    src={MAINURL+'/'+ APIS.staticMedia+'/' + 'Frame%202.53%20(1).ca0a1805.svg'}
                                                    className='closeIcon'
                                                    onClick={()=> setValidity(checkedItems,item.input)}
                                                />
                                            </li> 
                                            
                                        )
                                    }
                                </ul>
                            </div>


                            <div className="mobile-filter-section-bottom">

                                <div className="mobile-filter-left">
                                    <h4>{pageName}</h4>
                                    <p>{pageTitle}</p>
                                </div>
                                <div className="page-type">
                                    <div onClick={()=> setDisabled(true)}
                                        className={disabled === true ? 'listType' : 'listType-disabled'}>
                                        <img className="listType-img" src={listicon} />
                                        <span>List</span>
                                        
                                    </div>
                                    <div onClick={()=> setDisabled(false) && setShowBody(false) }
                                        className={disabled === false ? 'mapType' : 'mapType-disabled'}>
                                        <img className="listType-img" src={LocationIcon} />
                                        <span>Xəritə</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="wedding-places-top">
                    <div className="wedding-places-top-main">
                        <h3>
                            <span id="special-text"> {result} nəticə</span>
                        </h3>
                        <button 
                            className="filterButton"
                            type="button"
                            onClick={()=> setFilterClass(!filterClass)}
                        >
                            <img src={filterIcon}/> Filtrlər
                        </button>

                        <div className="filter-section-bottom">

                            <div className="mobile-filter-left">
                                <h4>{pageName}</h4>
                                <p>{pageTitle}</p>
                            </div>
                            <div className="page-type">
                                <div onClick={()=> setDisabled(true)}
                                    className={disabled === true ? 'listType' : 'listType-disabled'}>
                                    <img className="listType-img" src={listicon} />
                                    <span>List</span>
                                    
                                </div>
                                <div onClick={()=> setDisabled(false) && setShowBody(false) }
                                    className={disabled === false ? 'mapType' : 'mapType-disabled'}>
                                    <img className="listType-img" src={LocationIcon} />
                                    <span>Xəritə</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="center-container">
                    <div className={filterClass === true ? 'shadow' : 'shadowOff'}></div>
                    <div className={filterClass === false  ? "center-left" : "center-left-active" } id="center-left">
                        <div className="center-left-header">
                            <div className="center-left-header-top">
                                <img src={filterIcon} />
                                <span>Filter</span>
                            </div>
                            

                            <button
                                onClick={()=> setFilterClass(!filterClass)}
                                className="closeButton" 
                                type="button"
                            >
                                <img src={closeIcon} />
                            </button>
                        </div>
                        <ul className="center-left-ul">
                             
                            {
                                filters.map((item,id) =>
                                    <FilterList 
                                        submenuItem = {item} 
                                        i={id}
                                        getValue={getValue} 
                                        checkedItems = {checkedItems}
                                        key={id}
                                    />
                                )
                            }
                        </ul>
                        <div className="center-left-search">
                            <button 
                                className="searchButton"
                                type="button"
                            >
                                <Link className="searchLink">Axtar</Link>
                            </button>
                        </div>
                    </div>

            
                    <div className="center-right-main" id="center-right-main">
                        
                        { showBody === true ?
                                sectionItems.length === 0 ? 
                                
                                    <div className="notFoundDiv">
                                        <img className="notFoundImg" src={notFoundImg}/>
                                    </div>
                                    
                                    :
                                    isLoading ? <Loading /> : 
                                    sectionItems.map((item, idx)=>
                                        
                                        <SectionItems sectionItem = {item} key={idx}/>
                                        
                                    )
                            :
                            
                            <div>
                                <div className="map-container">
                                    <div className="wp-map-main">
                                        
                                    </div>
                                </div>
                            </div>
                        }
                        
                            
                        {
                            pageItems !== undefined && pageItems.last_page !== 1 ?
                                <nav className="pageNav">

                                    <ul className="pagination-ul">
                                        <li className="pag-item">
                                            <Link className="page-link" id="previous" aria-label="Previous">
                                            <img src={leftArrowIcon}/></Link>
                                        </li> 
                                        {
                                            pageItems.first_page_url !== null &&  pageItems.first_page_url !== pageItems.last_page_url ?
                                                <li className="pag-item"  onClick={()=> setIsClassActive(1)}>
                                                    <Link 
                                                        className={isClassActive === 1 ? "page-link active" : "page-link"} 
                                                        onClick={()=>dispatch(setPage(pageItems.first_page_url))}
                                                    >1</Link>
                                                </li>
                                            : null
                                        }
                                        {
                                            pageItems.last_page >= 2 && pageItems.next_page_url !== null ?
                                                <li className="pag-item"  onClick={()=> setIsClassActive(2)}>
                                                    <Link 
                                                        className={isClassActive === 2 ? "page-link active" : "page-link"}
                                                        onClick={()=>dispatch(setPage(pageItems.next_page_url))}
                                                    >2</Link>
                                                </li>
                                            : 
                                            <li className="pag-item"  onClick={()=> setIsClassActive(2)}>
                                                    <Link 
                                                        className={isClassActive === 2 ? "page-link active" : "page-link"}
                                                        onClick={()=>dispatch(setPage(pageItems.prev_page_url))}
                                                    >2</Link>
                                                </li>
                                        }
                                        {
                                            pageItems.last_page === 3 ?
                                                <li className="pag-item"  onClick={()=> setIsClassActive(3)}>
                                                    <Link 
                                                        className={isClassActive === 3 ? "page-link active" : "page-link"} 
                                                        onClick={()=>dispatch(setPage(pageItems.last_page_url))}
                                                    >3</Link>
                                                </li>
                                            :null
                                        }
                                        <li className="pag-item">
                                            <Link className="page-link" id="next" aria-label="Next">
                                            <img src={rightArrowIcon}/></Link>
                                        </li>
                                    </ul>

                                </nav>
                                
                            : null
                        }
                    </div>
                </div> 
            </div>
        </> 
    )
}