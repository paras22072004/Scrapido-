// src/components/ChatBox.jsx
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './chat.css';

// Connect to our backend server
const socket = io.connect("http://localhost:5001");

function ChatBox({ userType, onChatClose }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const negotiationRoom = "scrap_deal_123"; // A static room for demo

  useEffect(() => {
    socket.emit("join_negotiation", { room: negotiationRoom });

    const messageHandler = (data) => {
      setMessageList((list) => [...list, data]);
    };
    socket.on("receive_message", messageHandler);

    // Cleanup on component unmount
    return () => socket.off("receive_message", messageHandler);
  }, []);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: negotiationRoom,
        author: userType,
        message: currentMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]); // Show my own message
      setCurrentMessage("");
    }
  };

  return (
    <div className="chat-overlay">
      <div className="chat-window">
        <div className="chat-header">
          <p>Negotiation Chat</p>
          <button onClick={onChatClose} className="close-btn">X</button>
        </div>
        <div className="chat-body">
          {messageList.map((msg, index) => (
            <div key={index} className={`message ${msg.author === userType ? "sent" : "received"}`}>
              <p>{msg.message}</p>
              <span>{msg.time}</span>
            </div>
          ))}
        </div>
        <div className="chat-footer">
          <input
            type="text"
            value={currentMessage}
            placeholder="Type your price..."
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>&#9658;</button>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;