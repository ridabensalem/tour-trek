'use client'
import React, { useState, useEffect } from "react";
import Sidebar from "../components/profileComponents/Sidebar";
import Security from "../components/profile/security";
import Payments from "../components/profile/Payment";
import Preferences from "../components/profile/Preferences";
import PersonalInfo from "../components/profile/PersonalInfo";

const ProfilePage = () => {
  const [currentScreen, setCurrentScreen] = useState("PersonalInfo");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set the component to become visible when the screen changes
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50); // Delay to allow the component to mount before showing the animation

    // Cleanup function to reset visibility state
    return () => {
      setIsVisible(false);
    };
  }, [currentScreen]);

  return (
    <div className="container mx-auto max-w-screen-lg flex flex-col lg:flex-row">
      <Sidebar setCurretScreen={setCurrentScreen} />
      <main className={`flex-grow ${isVisible ? "slide-up visible" : "slide-up"}`}>
        {currentScreen === "Security" && <Security />}
        {currentScreen === "Payments" && <Payments />}
        {currentScreen === "Preferences" && <Preferences />}
        {currentScreen === "PersonalInfo" && <PersonalInfo />}
      </main>
    </div>
  );
};

export default ProfilePage;