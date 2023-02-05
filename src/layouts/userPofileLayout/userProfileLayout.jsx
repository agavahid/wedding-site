import { useState } from "react";
import { Outlet } from "react-router-dom";
import UserProfHeader from "../../components/userProfileHeader/userProfileHeader";
import UserProfileSideBar from "../../components/userProfileSideBar/userProfileSideBar";
import './userProfileLayout.css';

export default function UserProfileLayout(){

   


    return(
        <div className="user-profile-container">
            <div className="user-profile-layout">
                <div className="user-profile-leftSide">
                    <UserProfileSideBar/>
                </div>
                <div className="user-profile-rightSide">
                    <UserProfHeader className='useProfileHeader'/>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}