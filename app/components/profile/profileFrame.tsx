'use client';
import { PencilIcon } from '@heroicons/react/24/solid';
import { FiEdit } from "react-icons/fi";
interface ProfileProps {
  text: string;
  children: React.ReactNode;
}

const ProfileFrameElement: React.FC<ProfileProps> = ({ text, children }) => {
  return (
    <div className="max-w-xl mx-auto p-4 border rounded-lg px-0 py-0">
      <div className="text-center mb-4 bg-[#E0E0E0] pt-2">
        <h2 className="text-lg font-semibold text-blue-800 flex justify-center items-center">
          {text}
          <span className='ml-2'>
            <FiEdit className='w-5 h-5' />
          </span>
        </h2>
        <div className="border-b-2 border-blue-500 mt-2"></div>
      </div>
      {children}
    </div>
  );
}
export default ProfileFrameElement;