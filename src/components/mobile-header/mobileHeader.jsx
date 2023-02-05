import './mobileHeader.css';
import RightDropdownMobile from "../rightdropdown-mobile/rightDropdownMobile";
import LeftDropdownMobile from "../leftdropdown-mobile/leftDropdownMobile";
import MainLogo from '../assets/images/mainPage/mainLogo.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function MobileHeader(){
    
    const isRightActive = useSelector((state) => state.isRightActive.activity);
    const isLeftActive = useSelector((state) => state.isLeftActive.activity);
    
    return(
        <div className='mobile-header'>
            <div className={isRightActive === true ? "menu-shadow active" : null || isLeftActive === true ? "menu-shadow active" : "menu-shadow"}></div>
            <LeftDropdownMobile/>
            <div className="mobile-header-center">
                <Link to={'/'}>
                    <img src={MainLogo} alt="" />
                </Link>
            </div>
            <RightDropdownMobile/>
        </div>

    )
} 