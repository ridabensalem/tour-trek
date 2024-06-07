"use client";

import React, { useState } from 'react';
import ProfileFrameElement from './profileFrame';
import ProfilePage from '@/app/profile/layout';

const Payments = () => {
  const [showForm, setShowForm] = useState(false);

  const handleAddCardClick = () => {
    setShowForm(true);
  };

  const handleCancelClick = () => {
    setShowForm(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Handle form submission here
    event.preventDefault();
    // Add your logic for form submission
    console.log("Form submitted!");
    // Reset form state
    setShowForm(false);
};

  return (
    <ProfilePage>
    <ProfileFrameElement text="Payments">
    <div>
      <div className="space-y-4 p-4 ">
        <div className="border rounded-lg p-4 flex flex-col ">
          <div className="flex items-center justify-between ">
              <div className="flex items-center space-x-2">
                  <span className="text-zinc-700 font-semibold">MasterCard</span>
              </div>
              <div className="flex items-center space-x-2">
                  <span className="text-zinc-500">****1714</span>
              </div>
          </div>
          <div className="flex justify-end"> {/* This div aligns the button to the right */}
              <button className="text-rose-500 mr-4 p-1 font-bold border-2 border-transparent hover:border-rose-500 rounded-lg">remove</button>
          </div>
        </div>

        {showForm ? (
          <div className=" mx-auto p-4 border rounded-lg">
            <label className="block text-zinc-700 font-semibold">billed to</label>
            <input type="text" placeholder="Mustapha" className="w-1/2 mb-3 p-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2" />
            <div className="relative mb-3">
              <input type="text" placeholder="Card Number" className="w-full mb-3 p-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2" />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <img src="https://placehold.co/20x20" alt="Visa" className="mr-1" />
                <img src="https://placehold.co/20x20" alt="Mastercard" />
              </div>
            </div>
            <div className="flex space-x-2 mb-3 justify-between">
              <input type="text" placeholder="MM / YY" className="w-1/3 p-2 border border-zinc-3000 rounded-md focus:outline-none focus:ring-2" />
              <input type="text" placeholder="CVV" className="w-1/3 p-2 border border-zinc-3000 rounded-md focus:outline-none focus:ring-2" />
            </div>
            <div className="flex justify-start">
              <button type="submit" className="w-20 bg-pink-500 text-white p-2 rounded-md mr-2 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500">Save</button>
              <button onClick={handleCancelClick} className="w-20 bg-gray-500 text-white p-2 rounded-md  hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">Cancel</button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center border rounded-lg p-4">
            <button onClick={handleAddCardClick} className="flex items-center space-x-2 text-zinc-700 ">
              <span className="text-xl">+</span>
              <span>add Card</span>
            </button>
          </div>
        )}
      </div>
    </div>
    </ProfileFrameElement>
    </ProfilePage>
  );
};

export default Payments;
