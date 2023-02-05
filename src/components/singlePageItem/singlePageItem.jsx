import './singlePageItem.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import heartIcon from '../assets//icons/pageIcons/heart-icon.png';
import okIcon from '../assets/icons/pageIcons/ok.png';
import facebookIcon from '../assets/icons/pageIcons/facebook.png';
import instagramIcon from '../assets/icons/pageIcons/instagram.png';
import PhoneImg from '../assets/images/listImages/Phone.png';
import WhatsuppIcon from '../assets/icons/pageIcons/wp.png';

import {SinglePageUrl, Photo, MAINURL, APIS} from '../../configs/configs.js';
import SinglePageContactForm from '../singlePageForm/singlePageForm';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Navigation, Keyboard, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';


export default function SinglePageItem(){
    const {slug} = useParams();
    const [showWorkHours, setWorkHours] = useState(false);
    const [showNumber, setShowNumber] = useState(false);
    const [click, setClick] = useState(false);
    const [post, setPost] = useState({});
    const[workHoursData, setWorkHoursData] = useState([]);
    const[id, setId] = useState('');

    const isLogged = useSelector((login)=> login.login.isLoggedIn);
    const navigate = useNavigate();

    const[aboutList, setAboutList] = useState([]);
    const[servicesList, setServicesList] = useState([]);
    const[featuresList, setFeaturesList] = useState([]);

    const chooseItem = (id) =>{

        isLogged === false ? 
        navigate('/login')
        :
        axios({
            method: 'post',
            url: 'https://api.wed.az/edu/wishlist/set',
            data: {
                service_id: id
            },
            headers: {
                Authorization : `bearer ${localStorage.getItem('userToken')}`
            }
              
        })
        setClick(!click)
    }
    
    useEffect(()=>{
        
        window.scrollTo(0, 0);
        axios({
            method: 'get',
            url: `${SinglePageUrl}${slug}`,
            headers: {
                Authorization : `bearer ${localStorage.getItem('userToken')}`
            }
        })
            .then((response)=>{

                setPost(response.data.data);
                setId(response.data.data.item.id)
                setWorkHoursData({
                    'Be' : JSON.parse(response.data.data.item.address.main[0].Monday),
                    'Ça' : JSON.parse(response.data.data.item.address.main[0].Tuesday),
                    'Ç' : JSON.parse(response.data.data.item.address.main[0].Wednesday),
                    'Ca' : JSON.parse(response.data.data.item.address.main[0].Thursday),
                    'C' : JSON.parse(response.data.data.item.address.main[0].Friday),
                    'Ş' : JSON.parse(response.data.data.item.address.main[0].Saturday),
                    'B' : JSON.parse(response.data.data.item.address.main[0].Sunday)
                }) 
                response.data.data.item.wishlist === 1 ?
                setClick(true) : setClick(false)
            })
            
    },[slug]); 


    return(
       
        <>  
            {
                post !== undefined && post.item ?
                    <div className='singlePage'>
                        <div className="page-top-search">
                            <div className="choosed">
                                <div className="choosed-container">
                                    <div className="choosed-item">
                                        <Link to={'/'}>Esas Sehife</Link>
                                    </div>
                                    <div className="choosed-item">
                                        <Link to={`/${post.breadcrumb[0].urlTitle}/${post.breadcrumb[0].stcUrlTitle}`}>{post.breadcrumb[0].name}</Link>
                                    </div>
                                    <div className="choosed-item-active">
                                        <Link to={""}>{post.item.title}</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="about-place">
                                
                                <div className="about-content">
                                    <div className="about-specifies">
                                        <h2>{post.item.title}</h2>
                                        <div  className="about-specifies-container">
                                            <div className='about-specifies-items'>{post.item.address.main[0].Address}</div>
                                            <div  className='about-specifies-items' id="bluemenuitem">Xeritede bax</div>
                                            <div onClick={()=>setWorkHours(!showWorkHours)} 
                                                className='about-specifies-items'>Is Saatlari
                                                {showWorkHours === true ?
                                                    <div className='work-hour-container'> 

                                                        <ul className='work-hours'>
                                                            <li className='work-hours-item'><span>B.e.</span><span>{workHoursData.Be.open} - {workHoursData.Be.closed}</span></li>
                                                            <li className='work-hours-item'><span>Ç.a.</span><span>{workHoursData.Ça.open} - {workHoursData.Ça.closed}</span></li>
                                                            <li className='work-hours-item'><span>Ç.</span><span>{workHoursData.Ç.open} - {workHoursData.Ç.closed}</span></li>
                                                            <li className='work-hours-item'><span>C.a</span><span>{workHoursData.Ca.open} - {workHoursData.Ca.closed}</span></li>
                                                            <li className='work-hours-item'><span>C.</span><span>{workHoursData.C.open} - {workHoursData.C.closed}</span></li>
                                                            <li className='work-hours-item'><span>Ş.</span><span>{workHoursData.Ş.open} - {workHoursData.Ş.closed}</span></li>
                                                            <li className='work-hours-item'><span>B.</span><span>{workHoursData.B.open} - {workHoursData.B.closed}</span></li>
                                                        </ul>
                                                    </div> 
                                                : null  
                                                }
                                            </div>
                                            <div className='about-specifies-items'>
                                                <div className='show-number-section-header'
                                                    onClick={() => setShowNumber(!showNumber)}
                                                >Nömreni Göster</div>
                                                {   showNumber  === true ?
                                                        <ul className='show-number-section-container'>
                                                            <span className='caret'></span>
                                                            <li className='show-number-section-item'>
                                                                <img src={PhoneImg} />
                                                                <span>{post.item.address.main[0].Phone2}</span>
                                                            </li>
                                                            
                                                        </ul>
                                                    :null
                                                }
                                            </div>
                                            <div className='about-specifies-items' id="green">Whatsapp</div>
                                        </div>
                                        
                                    </div>
                                    <div className="about-icons">
                                    <button className='chooseItem' type='button' onClick={()=> chooseItem(id)}>
                                        Seç 
                                        <img className='chooseIcon' 
                                            src={click  === false ? heartIcon : `${MAINURL}${APIS.staticMedia}/Frame-heart.3c9e0c8b.svg`}
                                        />
                                    </button>
                                    
                                </div>
                                </div>
                                
                            </div>      
                        </div>


                        <div className="middle">    
                            <div className="middle-top">
                                <div className="middle-center">
                                    <div className="photo-group">
                                        <div className="middle-photo-container">

                                            <Swiper
                                                slidesPerView={2}
                                                centeredSlides={false}
                                                slidesPerGroupSkip={2}
                                                grabCursor={false}
                                                keyboard={{
                                                enabled: false,
                                                }}
                                                breakpoints={{
                                                769: {
                                                    slidesPerView: 1,
                                                    slidesPerGroup: 2,
                                                },
                                                1000: {
                                                    slidesPerView: 2,
                                                    slidesPerGroup: 1,
                                                }
                                                }}
                                                onSlideChange={function (sw) {
                                                    var offer = document.querySelector('#numberSlides');
                                                    offer.innerHTML = (sw.activeIndex +  1) + '/' + sw.slides.length;
                                                }}
                                                spaceBetween={80}
                                                scrollbar={true}
                                                navigation={true}
                                                modules={[Keyboard, Scrollbar, Navigation]}
                                                className="mySwiper"
                                                
                                            >
                                            <div id="numberSlides">1/{post.item.files.imageCount}</div>
                                            {post.item.files.images.map((item, i)=>
                                                <SwiperSlide key={i} className="mySwiperSlider"><img  src={Photo+item.url}/></SwiperSlide>
                                                
                                            )}

                                            </Swiper>

                                            <div className="mobile-photo-container-icon">
                                                <img src="../images/Vector 9.24white.png" alt=""/>
                                            </div>
                                            <div className="mobile-photo-container-icon1">
                                                <img src="../images/Vector 8white.png" alt=""/>
                                            </div>
                                            <div className="mobile-photo-container-icon2">
                                                <img src="../images/1-25.png" alt=""/>
                                            </div>

                                        </div>

                                        

                                        
                                        
                                    </div>

                                    <div className="place-data-container">

                                        <div className="content">

                                            <div className="content-common-content-top">

                                            <Link className='section-link' to={"/venue/hall"}>{post.breadcrumb[0].name}</Link>
                                            </div>
                                            <div className="content-common-content-middle">
                                                <h2>{post.item.title}</h2>
                                                <p>{post.item.address.main[0].Address}</p>
                                            </div>
                                            <div className="content-common-content-bottom">
                                                <Link className='callButton'>Zeng Et</Link>
                                                <div className='share-message-container'>
                                                    <Link className='share-message-content' to={''}>
                                                        <img src={WhatsuppIcon} alt="" />
                                                    </Link>
                                                </div>
                                                <div className='content-bottom-link'>
                                                    <a href="#map">Xəritədə bax</a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="center-text-group" >
                                        
                                        <div className="about-us">
                                            <h3>Haqqinda</h3>
                                            <p>{post.item.description}</p>
                                        </div>
                                        {
                                            post.item.segment.length > 0 ?
                                                <div className='aboutItem-container'>
                                                    <h2>Segment</h2>
                                                    <div className="aboutItem-content">
                                                        {post.item.segment.map((segmenItem, i)=>
                                                            segmenItem.status === true ? 
                                                                <div className='aboutItem' key={i}>
                                                                    <img className='okImg' src={okIcon} />{segmenItem.name}
                                                                </div>
                                                            : null
                                                        )}
                                                    </div>
                                                </div>
                                            : null
                                        }
                                        
                                        {
                                            post.item.stcServices.length > 0 ?
                                            
                                                <div className="aboutItem-container">
                                                    <h2>Xidmətlər</h2>
                                                    <div className="aboutItem-content">
                                                        {
                                                            post.item.stcServices.map((servicesItem, i)=>
                                                                servicesItem.status === true ?
                                                                    <div className="aboutItem" key={i}>
                                                                        <img className='okImg' src={okIcon} />{servicesItem.name}
                                                                    </div>
                                                                : null
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            : null
                                        }
                                        
                                        {   
                                            post.item.features.length > 0 ?

                                            <div className="aboutItem-container">
                                                <h2>Xüsusiyyətlər</h2>
                                                <div className="aboutItem-content">
                                                    {
                                                        post.item.features.map((featuresItem, i)=>
                                                            featuresItem.status === true ? 
                                                                <div className="aboutItem" key={i}>
                                                                    <img className='okImg' src={okIcon}/> {featuresItem.name}
                                                                </div>
                                                            :
                                                            null
                                                        )
                                                    }
                                                </div>
                                            </div>
                                            : null

                                        }
                                        

                                        <div className="social-items">
                                            <h3>Sosial Sebekeler</h3>
                                            <div className="social-icons">
                                                <Link><img src={facebookIcon}/></Link>
                                                <Link><img src={instagramIcon}/></Link>
                                            </div>
                                        </div>
                                        
                                        <div className="map">
                                            <h3>Ünvan</h3>


                                            <div className="mapouter">
                                                <div className="gmap_canvas">
                                                    <iframe width="650" height="500" id="gmap_canvas" 
                                                        src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                                                    </iframe>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>




                                <SinglePageContactForm/>
                            </div>
                        </div>
                    </div>
              
                : null
            }

        </>
    )
}