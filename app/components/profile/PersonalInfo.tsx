import { useState, useEffect } from "react";
import ProfileFrameElement from "./profileFrame";
import { toast } from "react-hot-toast";

interface UserProfile {
  username: string;
  name: string;
  surname: string;
  email: string;
  tel: string;
  dateOfBirth: string;
  gender: string;
}

const PersonalInfo = () => {
  const [userData, setUserData] = useState<UserProfile>({
    username: "",
    name: "",
    surname: "",
    email: "",
    tel: "",
    dateOfBirth: "",
    gender: ""
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch('../api/profile');
      const data = await response.json();
      setUserData(data);
    };

    fetchUserData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('../api/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const updatedUser = await response.json();
      setUserData(updatedUser);
      toast.success('Profile updated successfully');
    } else {
      toast.error('Failed to update profile');
    }
  };

  return (
    <ProfileFrameElement text="Personal information">
      <form className="space-y-4 m-4 px-8" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Username</label>
          <input 
            type="text" 
            name="username"
            value={userData.username || ''} 
            onChange={handleChange} 
            className="p-2 border rounded focus:border-pink-500 focus:outline-none" 
          />
        </div>

        <div className="grid grid-cols-2">
          <div className="flex flex-col mr-2">
            <label className="mb-1 font-medium">Name</label>
            <input 
              type="text" 
              name="name"
              value={userData.name || ''} 
              onChange={handleChange} 
              className="p-2 border rounded focus:border-pink-500 focus:outline-none" 
            />
          </div>
          <div className="flex flex-col ml-2">
            <label className="mb-1 font-medium">Surname</label>
            <input 
              type="text" 
              name="surname"
              value={userData.surname || ''} 
              onChange={handleChange} 
              className="p-2 border rounded focus:border-pink-500 focus:outline-none" 
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Email</label>
          <input 
            type="email" 
            name="email"
            value={userData.email || ''} 
            onChange={handleChange} 
            className="p-2 border rounded focus:border-pink-500 focus:outline-none" 
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Contact Number</label>
          <input 
            type="number" 
            name="tel"
            value={userData.tel || ''} 
            onChange={handleChange} 
            className="p-2 border rounded focus:border-pink-500 focus:outline-none" 
          />
        </div>

        <div className="grid grid-cols-2 mr-2">
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Date of Birth</label>
            <input 
              type="date" 
              name="dateOfBirth"
              value={userData.dateOfBirth || ''} 
              onChange={handleChange} 
              className="p-2 border rounded focus:border-pink-500 focus:outline-none" 
            />
          </div>
          <div className="flex flex-col ml-2">
            <label className="mb-1 font-medium">Gender</label>
            <select 
              name="gender"
              value={userData.gender || ''} 
              onChange={handleChange} 
              className="p-2 border rounded focus:border-pink-500 focus:outline-none"
            >
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end mt-8 space-x-2">
          <button 
            type="reset" 
            className="border border-pink-500 text-pink-500 px-4 py-1 rounded"
            onClick={() => setUserData({
              username: "",
              name: "",
              surname: "",
              email: "",
              tel: "",
              dateOfBirth: "",
              gender: ""
            })}
          >
            Cancel
          </button>
          <button 
            type="submit" 
            className="bg-pink-500 text-white px-5 py-1 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </ProfileFrameElement>
  );
};

export default PersonalInfo;