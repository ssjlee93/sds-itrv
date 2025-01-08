import React from 'react';

const GenerateFileButton = () => {
  const handleGenerateFile = () => {
    const element = document.createElement('a');
    const file = new Blob(['Hello, this is a generated text file!'], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    let date = new Date().toISOString().split('.')[0].replace('T', '/').replace('-', '/').replace('_', '/')

    element.download = "file-"+date+".txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    document.body.removeChild(element);
  };

  return (
    <button
      className="p-2 bg-blue-500 text-white rounded"
      onClick={handleGenerateFile}
    >
      Generate File
    </button>
  );
};

export default GenerateFileButton;