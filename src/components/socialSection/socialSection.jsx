import './socialSection.css';
import React from 'react';

export default function SocialSection(){
    return(
        <>
            <div className="social-section"> 
                <div className="social-item-container">
                    <div className="social-left-container">

                        <a className="left-item" href="">
                            <img className="left-item-img" src="	https://wed.az/static/media/Group%20148.fd7da5de.svg" alt=""/>Facebook
                        </a>

                        <a className="left-item" href="">
                            <img className="left-item-img" src="	https://wed.az/static/media/Group%20132.c23c8546.svg" alt=""/>Youtube
                        </a>

                        <a className="left-item" href="">
                            <img className="left-item-img" src="https://wed.az/static/media/Group%20145.37424069.svg" alt=""/>Instagram
                        </a>

                    </div>

                    <div className="social-right-section">
                        <a className="right-item" id="bussines" href="">Biznes Partnyor</a>
                        <a className="right-item" id="partner" href="">Partnyor Girisi</a>
                    </div>
                </div>
            </div>


            <div className="mobile-footer">
                <div className="mobile-icon-container">
                    <ul className="mobile-icon-container-ul">
                        <li>
                            <a href="">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAXCAYAAAARIY8tAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACsSURBVHgB7ZPBDQIhEEUHYgGWsHawR8JJO9FK3E5cmwG6kBLWOwEHgwk3/h40G8NLyDCEPwPMQNT5ewStRCl1ZDPkuXNubu3f0Qq01lc2U7U0tzRwAg4+VsE9qoMTxBhHKeU7uDHmgOokfRmoyPw8Dzb7MjI+peSttaeWFr3BUAX/+E9ECCXg97/wie/FXbIfQpgQLfwPuP/PXOQbba3I20kghFiodA91Oj/lBZKKMtNo9ewaAAAAAElFTkSuQmCC" alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAXCAYAAAARIY8tAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADjSURBVHgB7dIxDoIwFAbgh0DCJm6MHAEGEgKL3sD7MKgLJ+ACnoK1E7B5DEY7wAIBfDLiq2njZNJvKXmP8j+gAJr2K0PUiKIosCzLX5bFFW42DI593jQNUwpIkuSCyxUkYQir6/pE9XZAT3YGBXj/EbnSATiRv61lWQZhGILIMAx76QD0MY3neVAUxRr0vt4ax/GgEkDqug7atoW+76X3WII6h81blGUJeZ6vARTbtp9UnTxFaZo+8D8EoKCqKvJZ5Cea5/kOam6ihgFfxHHs4+JTvWmauGma3HEczhjjoGn/6wXwJEpc3XdOPQAAAABJRU5ErkJggg==" alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAXCAYAAAARIY8tAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFwSURBVHgB7VTBbYNAEDwQlvwLJZAK4jyQgBdUEKWCkAriDpwOLFcAdJASyAeQeMTpgHTAE4EEmYnOkmUdhiSPPOKVTrt33O7M7c0hxMX+2rSpDY7jWGPflstlnaZpLX4CYNv2yjCMraZpvjhvVdd192VZ7mcDkLWu628I62EYdhhKlgA3MZ4QmgAJVCCGKhHFN/R93wdFUVTijIHMC8ksFosQ0/UsADC24PbHxVEoBNs7soVPsiyLuc49ruuS+Y2qli5mmOd5G7CMUNiSSxGKbufkTgL4vm/CPWPEYH2b53mAeAewtfz2O4Cmab6KoG3vhzXEFX3btldT+cbUBtnjlGpBq2pcvJDKqXCij6n8WXcAxo8yjHgXDKiwObnKE4AhdW8d5lJN13x8nJ/qHaAmAJVvRR9h/Aq3onqO11n4tDj3YP+K0lXVGv1VoO8xkh4Q1nKojAIwAZBAXeG3AGh8XDg+2zKqFrQmQQtTcbH/a583upls9n4qsQAAAABJRU5ErkJggg==" alt=""/>
                            </a>
                        </li>
                    </ul>
                    
                </div>
                <div className="partner-info-container">                    
                    <a href="" >Biznes Partnyor</a>
                    <a href="" className="active">Partnyor Girisi</a>                    
                </div>
            </div>
        </>
    )
}