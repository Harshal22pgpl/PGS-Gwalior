// components/ChatBot.js
"use client"
import React, { useState } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const intents = [
    {
      "tag": "greeting",
      "patterns": ["Hello", "Hi", "Hey", "Howdy", "Greetings", "Good day"],
      "responses": ["Hello! I am the bot of Prathiba Global Group of Schools. How can I assist you today?", "Hi there! What can I do for you today?"]
    },
    // ... (other intents)
  ];

  const handleMessageSubmit = () => {
    // Process the user's input message and generate a response based on the intents
    // For simplicity, let's just echo the user's input in this example
    const userMessage = { text: inputMessage, isUser: true };
    setMessages([...messages, userMessage]);
    setInputMessage('');

    // You can implement logic to generate a bot response based on the user's input
    // and the predefined intents. Update the state with the bot's response as needed.
    const botResponse = generateBotResponse(inputMessage);
    setMessages([...messages, { text: botResponse, isUser: false }]);
  };

  const generateBotResponse = (userInput) => {
    // Implement logic to generate a response based on the user's input and intents
    // For simplicity, let's just echo the user's input as a bot response in this example
    return `You said: ${userInput}`;
  };

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleMessageSubmit();
    }
  };

  return (
    <div>
      <div>
        {/* Render chat messages */}
        {messages.map((message, index) => (
          <div key={index} className={message.isUser ? 'user-message' : 'bot-message'}>
            {message.text}
          </div>
        ))}
      </div>
      <div>
        {/* Input form for sending messages */}
        <input
          type="text"
          value={inputMessage}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
        />
        <button onClick={handleMessageSubmit}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
