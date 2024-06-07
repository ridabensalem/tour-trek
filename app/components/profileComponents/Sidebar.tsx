"use client";

import React, { useState } from 'react';
import Popup from '../elementsUi/Popup';
import Link from 'next/link';

interface SidebarProps {
  setCurretScreen: (screen: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setCurretScreen }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null); // New state for selected item

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleMouseEnter = (item: string) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleItemClick = (item: string, screen: string) => { // New handleItemClick function
    setSelectedItem(item);
    setCurretScreen(screen);
  };

  const profile = [
    {
      username : '@MJ',
      joinDate : '8-05-2024',
      imageUrl : 'https://via.placeholder.com/100'
    }
  ];
  const navItems = [
    {
      name: 'Personal information',
      screen: 'PersonalInfo',
      href: '/PersonalInfo',
      icon: (
        <svg className="w-5 h-5 mr-2" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 19.1124C1 15.3369 4.15429 12.2762 10.6 12.2762C17.0457 12.2762 20.2 15.3369 20.2 19.1124C20.2 19.7131 19.7618 20.2 19.2212 20.2H1.97882C1.43823 20.2 1 19.7131 1 19.1124Z" stroke={hoveredItem === 'Personal information' || selectedItem === 'Personal information' ? "#000" : "#808080"} strokeWidth="2" />
          <path d="M14.2 4.6C14.2 6.58822 12.5882 8.2 10.6 8.2C8.61177 8.2 7 6.58822 7 4.6C7 2.61177 8.61177 1 10.6 1C12.5882 1 14.2 2.61177 14.2 4.6Z" stroke={hoveredItem === 'Personal information' || selectedItem === 'Personal information' ? "#000" : "#808080"} strokeWidth="2" />
        </svg>
      ),
    },
    {
      name: 'Security',
      screen: 'Security',
      href: '/Security',
      icon: (
        <svg className="w-5 h-5 mr-2" width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.54164 1.67082C8.69706 1.24853 7.70294 1.24853 6.85836 1.67082L1 4.6V12.628C1 14.8 3.5624 17.2712 8.2 20.2C12.8376 17.2712 15.4 15.4 15.4 12.628C15.4 9.856 15.4 4.6 15.4 4.6L9.54164 1.67082Z" stroke={hoveredItem === 'Security' || selectedItem === 'Security' ? "#000" : "#808080"} strokeWidth="2" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: 'Preferences',
      screen: 'Preferences',
      href: '/Preferences',
      icon: (
        <svg className="w-5 h-5 mr-2" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C10.7322 0 9.55 0.832014 9.1811 2.00201L1 2C0.4477 2 0 2.448 0 3C0 3.552 0.4477 4 1 4L9.1811 3.99902C9.6292 5.22402 10.7322 6 12 6C13.2678 6 14.3821 5.22203 14.838 3.99103L17 4C17.5523 4 18 3.552 18 3C18 2.448 17.5523 2 17 2H14.8295C14.348 0.781 13.2678 0 12 0ZM12 2C12.5523 2 13 2.448 13 3C13 3.552 12.5523 4 12 4C11.4477 4 11 3.552 11 3C11 2.448 11.4477 2 12 2ZM6 6C4.682 6 3.5788 6.82001 3.176 8.00201C3.0354 8.01101 1 8 1 8C0.4477 8 0 8.448 0 9C0 9.552 0.4477 10 1 10C1 10 3.0524 9.979 3.1803 9.992C3.5831 11.174 4.682 12 6 12C7.2678 12 8.3542 11.223 8.8294 10.003L17 10C17.5523 10 18 9.552 18 9C18 8.448 17.5523 8 17 8L8.8242 7.99103C8.3859 6.79803 7.2678 6 6 6ZM6 8C6.5523 8 7 8.448 7 9C7 9.552 6.5523 10 6 10C5.4477 10 5 9.552 5 9C5 8.448 5.4477 8 6 8ZM12 12C10.7322 12 9.5725 12.835 9.1804 13.99L1 14C0.4477 14 0 14.448 0 15C0 15.552 0.4477 16 1 16L9.1656 16.001C9.5805 17.186 10.7322 18 12 18C13.2678 18 14.3609 17.207 14.8425 16.001L17 16C17.5523 16 18 15.552 18 15C18 14.448 17.5523 14 17 14L14.8334 13.994C14.4017 12.811 13.2678 12 12 12ZM12 14C12.5523 14 13 14.448 13 15C13 15.552 12.5523 16 12 16C11.4477 16 11 15.552 11 15C11 14.448 11.4477 14 12 14Z" fill={hoveredItem === 'Preferences' || selectedItem === 'Preferences' ? "#000" : "#808080"} />
        </svg>
      ),
    },
    {
      name: 'Payments',
      screen: 'Payments',
      href: '/Payments',
      icon: (
        <svg className="w-5 h-5 mr-2" width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.59954 5.19985H19.5995M5.19954 9.39985H8.19954M3.4 1H17.7996C19.1251 1 20.1996 2.07368 20.1996 3.39913L20.1999 12.401C20.1999 13.7265 19.1254 14.8 17.7999 14.8L3.40023 14.7998C2.07479 14.7998 1.00029 13.7253 1.00026 12.3999L1 3.40007C0.999962 2.07456 2.07449 1 3.4 1Z" stroke={hoveredItem === 'Payments' || selectedItem === 'Payments' ? "#000" : "#808080"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <aside className="w-64 bg-white border-r-2 border-gray-300">
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold">My Profile</h1>
      </div>
      <div className="text-center mb-4">
        <img
          src={profile[0].imageUrl}
          alt="Profile"
          className="mx-auto rounded-full"
          onClick={togglePopup}
        />
        <h2 className="mt-2 text-lg font-semibold">{profile[0].username}</h2>
        <p className="text-sm text-gray-900">Joined on: {profile[0].joinDate}</p>
      </div>
      {showPopup && <Popup onClose={togglePopup} />}
      <nav>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
                className={`flex items-center p-2 ${selectedItem === item.name ? 'text-black bg-gray-300' : 'text-gray-400'} hover:text-black hover:bg-gray-300 font-bold text-lg w-full text-left`}
                onClick={() => handleItemClick(item.name, item.screen)}
              >
                {item.icon}
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
