import React, { createContext } from 'react';
import { io } from 'socket.io-client';

export const ChatContext = createContext();

export const socket = io('http://localhost:3333', {
  autoConnect: false,
});

const ChatProvider = ({ children }) => {
  const connectUser = () => {
    socket.connect();
  };

  const disconnectUser = () => {
    if (socket.connected) socket.disconnect();
  };

  const state = {
    socket,
    connectUser,
    disconnectUser,
  };
  return <ChatContext.Provider value={state}>{children}</ChatContext.Provider>;
};

export default ChatProvider;
