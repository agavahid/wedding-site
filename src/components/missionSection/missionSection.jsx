import './missionSection.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { CdnUrl, APIS } from '../../configs/configs';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import React from 'react';



export default function MissionSection(){   
    const[getUrl, setUrl] = useState([]);

    useEffect(()=>{
        axios.get("https://api.wed.az/edu/general/homeblogs") 
        .then((response)=>
            setUrl(response.data.data)
        )
    },[])
    const pagination = {
        clickable: true,
        renderBullet: function (className) {
          return '<span class="' + className + '">' + "</span>";
        },
      };
    return(


        <div className="mission">
            <div>
                <div id="red">
                    <img src="../images/Frame.png"  alt=""/>
                </div>
                <div id="blue">
                    <img src="../images/frame(2).png"  alt=""/>
                </div>
                <div id="orange">
                    <img src="../images/Frame (1).png"  alt=""/>
                </div>
                
            </div>

            <div className="mission-header">
                <h3>Azərbaycanın ən geniş evlilik planlama və toy hazırlığı platforması</h3>
                <p>Cütlükləri və bu sektorda fəaliyyət göstərən peşəkarları birləşdirdik</p>
            </div>

            <div className="mission-middle">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                      },
                    }}
                    modules={[Pagination]}
                    className="missionSection-mySwiper"
                >
                    <SwiperSlide className='mySwiperSliderItem'>
                        <div className="mission-middle-item">
                            <div className="mission-m-img-container">
                                <img src="data:image/png;base64,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" alt=""/>
                            </div>

                            <div className="mission-m-text-container">
                                <h3>Bütün Pesekarlar Bir Ünvanda</h3>
                                <p>Azerbaycanda toy sektorunda  fealiyyet gösteren bütün pesekarlari  bir ünvanda birlesdiririk</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div  className="mission-middle-item">
                            <div className="mission-m-img-container">
                                <img src="data:image/png;base64,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" alt=""/>
                            </div>

                            <div className="mission-m-text-container">
                                <h3>Rahat Istifade</h3>
                                <p>Istifadecileri düsünerek hazirlanan platformamizi bütün cihazlarini rahat istifade ede bilersiniz</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div  className="mission-middle-item">
                            <div className="mission-m-img-container">
                                <img src="data:image/png;base64,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" alt=""/>
                            </div>

                            <div className="mission-m-text-container">
                                <h3>Etrafli Melumat</h3>
                                <p>Pesekarlar haqqinda genis informasya bazasi secim etmeyini asanlasdiracaq</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            
            <div className="middle-active-className">
                <img className='customHeight' src="../images/Ellipse.png" alt=""/>
                <img src="../images/Ellipse (1).png" alt=""/>
                <img className='customHeight' src="../images/Ellipse.png" alt=""/>
            </div>


            <div className="middle-bottom-item">
                <div className="middle-bottom-item-header">
                    <div className="middle-bottom-header-left">
                        <h3>Kəşf et</h3>
                        <p>Evlilik planlama və toy hazırlığı üçün məsləhətlər</p>
                    </div>

                    <div className="cataloge-header-right">
                        <a href="https://wed.az/vendor/bridal-dress">
                            <img src="https://wed.az/static/media/Frame%202.10.1c362dbe.svg" alt=""/> Hamisina Bax
                        </a>
                    </div>
                </div>

                <div className="middle-bottom-items">
                    
                    {
                        getUrl.map((middleItem, i) =>
                            <div key={i} id={`item${i}`} className="middle-bottom-first">
                                <div className="middle-bottom-first-top">
                                    <img src={CdnUrl + APIS.blog +'/' + middleItem.id +'/' + middleItem.id +'.jpg'} alt=""/>
                                    <div className="middle-bottom-hover">
                                        <a href="#">Davamini Oxu</a>
                                    </div>
                                </div>


                                <div className="middle-bottom-text-section1">
                                    <h3>{middleItem.title}</h3>
                                    <div className="small-group">   
                                        <div className="middle-bottom-img-text">
                                            <img src="	https://wed.az/static/media/Frame%202.11.6b5508c9.svg" alt=""/>
                                            <span>{middleItem.author}</span>   
                                        </div>
                                        <div className="middle-bottom-img-text">
                                            <img src="	https://wed.az/static/media/Frame%202%20(2).58267e88.svg" alt=""/>
                                            <span>{middleItem.createdAt}</span>
                                        </div>
                                    </div>
                                    <p>Artıq hazırlıqlar başlayıb və gözlənilən gün yaxınlaşmaqdadır Bu qarışıqlıqlar içərisində isə gözünüzdən yayınacaq bəzi məqamlar ola bilər.</p>
                                </div>
                            </div>
                        )
                    }

                </div>                    
            </div>
        </div>
    )
}