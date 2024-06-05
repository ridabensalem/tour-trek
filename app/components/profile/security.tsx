import React from 'react';
import ProfileFrameElement from './profileFrame';

const Security = () => {
  return (
    <ProfileFrameElement text="Security">
    <div className="mx-auto px-8 bg-white">
      <p className="text-black mb-4 pl-6">
        Manage your security settings, set up secure authentication, or delete your account.
      </p>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="text-gray-400 font-semibold">Password</label>
          <button className="bg-pink-500 text-white py-1 px-3 rounded">Reset</button>
        </div>
        <p className="text-zinc-500  text-sm mb-4 border-b-2 border-gray-300">Last updated on 1 day ago</p>
        <input type="password" placeholder="Current Password" className="w-full mb-2 p-2 border border-zinc-300 dark:border-zinc-700 rounded" />
        <input type="password" placeholder="New Password" className="w-full mb-2 p-2 border border-zinc-300 dark:border-zinc-700 rounded" />
        <input type="password" placeholder="Confirm New Password" className="w-full mb-2 p-2 border border-zinc-300 dark:border-zinc-700 rounded" />
      </div>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="text-zinc-900 font-semibold">Recovery Phone</label>
          <button className="bg-pink-500 text-white py-1 px-3 rounded">Add</button>
        </div>
        <p className="text-zinc-500 text-sm mb-4 border-b-2">example@gmail.com</p>
      </div>
      <div>
        <label className="text-zinc-900  font-semibold">Delete Account</label>
        <p className="text-zinc-500 text-sm mb-4 border-b-2 border-gray-300">Permanently delete your tourTrek.com account</p>
      </div>
    </div>
    </ProfileFrameElement>
  );
};

export default Security;
