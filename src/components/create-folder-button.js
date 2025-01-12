import React, { useState } from 'react';

const CreateFolderButton = () => {
  const [folderName, setFolderName] = useState('');

  const handleCreateFolder = async () => {
    const date = new Date().toISOString().split('.')[0]
    const folderPath = `/Users/ssjlee93/Desktop/${date}`; // Adjust this path as needed
    const result = await window.electron.createFolder(folderPath);
    const fileResult = await window.electron.createFile(`${folderPath}/file-${date}.txt`, 'Hello, this is a generated text file!');
    if (result.success) {
      alert('Folder created successfully');
    } else {
      alert(`Failed to create folder: ${result.message}`);
    }
    if (fileResult.success) {
      alert('File created successfully');
    } else {
        alert(`Failed to create file: ${fileResult.message}`);
    }
    
  };

  return (
    <div>
      <input
        type="text"
        value={folderName}
        onChange={(e) => setFolderName(e.target.value)}
        placeholder="Enter folder name"
        className="p-2 border rounded"
      />
      <button
        className="ml-2 p-2 bg-blue-500 text-white rounded"
        onClick={handleCreateFolder}
      >
        Create Folder
      </button>
    </div>
  );
};

export default CreateFolderButton;