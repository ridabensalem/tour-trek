'use client';
import { BiBuildingHouse } from 'react-icons/bi';
import { SlMenu } from 'react-icons/sl';
import Avatar from '../Avatar';
import { useState } from 'react';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="user_menu relative ">
      <div className="flex flex-row items-center gap-7 ">
        <div
          onClick={() => {}}
          className="house_hub px-3 py-3 text-base font-medium transition cursor-pointer hover:bg-gray-200 rounded-full"
        >
          <div className="flex flex-row gap-2   ">
            <BiBuildingHouse className="text-gray-600" size={22} /> House Hub
          </div>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="menu border-[1px] px-3 py-3 text-sm font-medium transition cursor-pointer hover:bg-gray-200 rounded-full"
        >
          <div className="flex flex-row gap-6  ">
            <SlMenu className="text-gray-600" size={14} />
          </div>
          {isOpen && (
            <div>
              <div className="absolute top-16 right-0 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                >
                  Link #1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                >
                  Link #2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                >
                  Link #3
                </a>
              </div>
            </div>
          )}
        </div>
        <Avatar />
      </div>
    </div>
  );
};

export default UserMenu;
