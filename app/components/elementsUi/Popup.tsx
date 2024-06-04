import React, { useState, useRef } from 'react';

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string>('https://placehold.co/100x100');
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
    setImageSrc('https://placehold.co/100x100');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

//   const handleSave = async () => {
//     if (!selectedFile) return; // Handle case where no file is selected

//     // Placeholder function for saving to backend (replace with your actual logic)
//     const saveResponse = await saveImageToBackend(selectedFile);
//     console.log('Save Response:', saveResponse); // Simulate handling response

//     // Handle successful response (e.g., close popup, update UI)
//   };

//   const handleDelete = async () => {
//     if (!selectedFile) return; // Handle case where no file is selected

//     // Placeholder function for deleting from backend (replace with your actual logic)
//     const deleteResponse = await deleteImageFromBackend(selectedFile);
//     console.log('Delete Response:', deleteResponse); // Simulate handling response

//     // Clear selected file and image, potentially display confirmation
//   };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-3 rounded-lg shadow-lg w-auto relative">
        <button className="absolute top-2 right-2 text-black text-2xl" onClick={onClose}>x</button>

        <div className="flex flex-row">
          <div className="flex flex-col mx-8">
            <img src={imageSrc} alt="Profile Image" className="rounded-full w-24 h-24 object-cover" />
            <button className="hover:border-gray-300 hover:border-2 text-red-700 px-4 py-2 rounded-lg font-bold mt-2" 
            // onClick={handleDelete}
            >delete</button>
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
              />
              {selectedFile && (
                <p className="selected-file">{selectedFile.name}</p>
              )}
              <label htmlFor="fileInput" className="custom-file-button">
                Browse Files
              </label>
            </div>
            <div className="flex space-x-2 justify-end">
              <button
                className="border-pink-500 border-2 text-pink-500 hover:bg-pink-500 hover:text-white px-4 py-2 rounded-lg"
                onClick={handleCancel}
              >
                cancel
              </button>
              <button className="bg-pink-500 text-white px-4 py-2 rounded-lg" 
            //   onClick={handleSave}
              >save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
