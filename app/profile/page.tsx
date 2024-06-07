"use client";
import React, { useState } from "react";
import Sidebar from "../components/profileComponents/Sidebar";
import Security from "../components/profile/security";
import ProfileFrameElement from "../components/profile/profileFrame";
import Payments from "../components/profile/Payment";
import Preferences from "../components/profile/Preferences";
import getUserProfile from "../actions/getUserProfile";
// import PersonalInfo from "../components/profile/PersonalInfo"

const ProfilePage = () => {
  const [currentScreen, setCurrentScreen] = useState("PersonalInfo");

  return (
    <div className="container mx-auto max-w-screen-lg flex">
      <Sidebar setCurretScreen={setCurrentScreen} />
      <main className="flex-grow">
        {currentScreen === "Security" && <Security />}
        {currentScreen === "Payments" && <Payments />}
        {currentScreen === "Preferences" && <Preferences />}
        {/* {currentScreen === "PersonalInfo" && <PersonalInfo user={getUserProfile}/>} */}
      </main>
    </div>
  );
};

export default ProfilePage;