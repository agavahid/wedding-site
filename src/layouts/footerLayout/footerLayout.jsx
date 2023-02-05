import './footerLayout.css';
import BottomLocation from '../../components/bottomLocation/bottomLocation';
import SocialSection from '../../components/socialSection/socialSection';
import Finish from '../../components/finish/finish';


export default function FooterLayout(){


    return(
        <>
            <BottomLocation/>
            <SocialSection/>
            <Finish/>
        </>
    )
}