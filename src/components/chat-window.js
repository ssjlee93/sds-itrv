import React, { useState } from 'react';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col h-full p-4 bg-gray-100">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div key={index} className="p-2 my-2 bg-white rounded shadow">
            {message}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="flex-1 p-2 border rounded text-black"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="ml-2 p-2 bg-blue-500 text-white rounded"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;