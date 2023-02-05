import './homeContainer.css';
import DefaultSvg from '../assets/images/mainPage/default-home-container-icon.png';

export default function HomeContainer(){
    return(


        <div className="home-container">
            <div className="home-header-container">
                <h2>Wed.az platforması cütlüklər üçün nə edir?</h2>
                <p>Artıq cütlüklər toy, nişan, xına hazırlığı üçün lazımi xidmətləri tapır, müqayisə aparır, zövq və büdcəyə uyğun peşəkarlarla rahat əlaqə saxlaya bilir.</p>
            </div>

            <div className="home-content-container">
                <div className="home-content">
                    <div className="home-content-items">
                        <img src={DefaultSvg} alt=""/>
                        <h3>Toy Ehtiyaclarini Burda Axtarin</h3>
                    </div>
                    
                </div>
                <div className="home-content1">
                    <div className="home-content-items">
                        <img src={DefaultSvg} alt=""/>
                        <h3>Size En Uygun Olanini Secin</h3>
                    </div>
                </div>
                <div className="home-content2">
                    <div className="home-content-items">
                        <img src={DefaultSvg} alt=""/>
                        <h3>Elaqe Saxlayin ve Razilasin</h3>
                    </div>
                </div>
            </div>
        </div>

    )
}