import './footerLayout.css';
import BottomLocation from '../../components/bottomLocation/bottomLocation';
import SocialSection from '../../components/socialSection/socialSection';
import Finish from '../../components/finish/finish';
import React from 'react';


export default function FooterLayout(){


    return(
        <>
            <BottomLocation/>
            <SocialSection/>
            <Finish/>
        </>
    )
}