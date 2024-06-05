interface UserProfileCardProps {
  user: {
    name: string | null;
    email: string | null;
  }
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ user }) => {
  return (
        <form className="space-y-4 m-4">
        <div className="flex flex-col">
            <label className="mb-1 font-medium">Username</label>
            <input type="text" placeholder="" className="p-2 border rounded focus:border-pink-500 focus:outline-none" />
        </div>

        <div className="grid grid-cols-2">
            <div className="flex flex-col mr-2">
                <label className="mb-1 font-medium">Name</label>
                <input type="text" value={user.name || "Not Available"} className="p-2 border rounded focus:border-pink-500 focus:outline-none" />
            </div>
            <div className="flex flex-col ml-2">
                <label className="mb-1 font-medium">Surname</label>
                <input type="text" placeholder="" className="p-2 border rounded focus:border-pink-500 focus:outline-none" />
            </div>
        </div>

        <div className="flex flex-col">
            <label className="mb-1 font-medium">Email</label>
            <input type="email" value={user.email || "Not Available"} className="p-2 border rounded focus:border-pink-500 focus:outline-none" />
        </div>
        <div className="flex flex-col">
            <label className="mb-1 font-medium">Contact Number</label>
            <input type="text" placeholder="+212 123456789" className="p-2 border rounded focus:border-pink-500 focus:outline-none" />
        </div>
        <div className="grid grid-cols-2 mr-2">
            <div className="flex flex-col">
                <label className="mb-1 font-medium">Date of Birth</label>
                <input type="date" className="p-2 border rounded focus:border-pink-500 focus:outline-none" />
            </div>
            <div className="flex flex-col ml-2">
                <label className="mb-1 font-medium">Gender</label>
                <select className="p-2 border rounded focus:border-pink-500 focus:outline-none">
                <option>Female</option>
                <option>Male</option>
                </select>
            </div>
        </div>
        <div className="flex justify-end mt-8 space-x-2 ">
            <button type="reset" className="border border-pink-500 text-pink-500 px-4 py-1 rounded">
                cancel
            </button>
            <button type="submit" className="bg-pink-500 text-white px-5 py-1 rounded">save</button>
        </div>
        </form>
  );
}

export default UserProfileCard;
