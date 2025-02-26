import React, { useState, useRef } from 'react';
import axios from 'axios';

interface PopupProps {
  onClose: () => void;
  profileImage: string;
}

const Popup: React.FC<PopupProps> = ({ onClose, profileImage }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string>(profileImage ? profileImage : 'https://placehold.co/100x100');
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
    }
  };

  const handleCancel = () => {
    setSelectedFile(null);
    setImageSrc(profileImage ? profileImage : 'https://placehold.co/100x100');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSave = async () => {
    if (!selectedFile) return;

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('upload_preset', 'ml_default'); // Replace with your upload preset

      const cloudinaryResponse = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData
      );
      const imageUrl = cloudinaryResponse.data.secure_url;

      // Send the Cloudinary URL to your backend
      const response = await axios.put('/api/profile', { image: imageUrl });

      console.log('Save Response:', response.data);

      // Show success message
      setSuccessMessage('Profile image updated successfully!');

      // Optionally refresh the image or trigger any other updates
      setImageSrc(imageUrl);

      // Refresh the page after a short delay
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error('Error updating profile image:', error);
    }
  };

  const handleDelete = () => {
    setShowConfirmation(true);
  };

  const confirmDelete = async () => {
    try {
      // Send a DELETE request to your backend API to delete the profile image
      const response = await axios.delete('/api/profile');

      // Check if the deletion was successful
      if (response.status === 200) {
        setSuccessMessage('Profile image deleted successfully!');
        setImageSrc('https://placehold.co/100x100'); // Reset image to placeholder
        setShowConfirmation(false);

        // Refresh the page after deletion
        window.location.reload();
      } else {
        console.error('Error deleting profile image:', response.data);
      }
    } catch (error) {
      console.error('Error deleting profile image:', error);
    }
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-3 rounded-lg shadow-lg w-auto relative">
        <button className="absolute top-2 right-2 text-black text-2xl" onClick={onClose}>x</button>

        <div className="flex flex-row">
          <div className="flex flex-col mx-8 mt-4">
            <img src={imageSrc || '/images/placeholder.jpg'} alt="Profile Image" className="rounded-full w-24 h-24 object-cover" />
            <button className="hover:border-gray-300 hover:border-2 text-red-700 px-4 py-2 rounded-lg font-bold mt-2" onClick={handleDelete}>delete</button>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-zinc-700 mt-4">Select an image to upload</p>
            <div className="custom-file-upload">
              <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={handleFileChange}
                ref={fileInputRef}
                accept=".jpg, .jpeg, .jfif, .gif"
              />
              {selectedFile && (
                <p className="selected-file">{selectedFile.name}</p>
              )}
              <label htmlFor="fileInput" className="custom-file-button">
                Browse Files
              </label>
            </div>
            {successMessage && (
              <div className="mt-4 text-green-500 text-center">
                {successMessage}
              </div>
            )}
            <div className="flex space-x-2 justify-end">
              <button
                className="border-pink-500 border-2 text-pink-500 hover:bg-pink-500 hover:text-white px-4 py-2 rounded-lg"
                onClick={handleCancel}
              >
                cancel
              </button>
              <button
                className="bg-pink-500 text-white px-4 py-2 rounded-lg"
                onClick={handleSave}
              >
                save
              </button>
            </div>
          </div>
        </div>

        {showConfirmation && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-3 rounded-lg shadow-lg w-auto relative">
              <p className="text-center mb-4">Are you sure you want to delete this image?</p>
              <div className="flex justify-center space-x-4">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  onClick={confirmDelete}
                >
                  Confirm
                </button>
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                  onClick={cancelDelete}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
