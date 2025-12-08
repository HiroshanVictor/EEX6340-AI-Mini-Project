import React from 'react';
import { Message, Sender } from '../types';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.sender === Sender.BOT;

  return (
    <div className={`flex w-full ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div
        className={`max-w-[80%] rounded-2xl px-5 py-3 shadow-sm ${
          isBot
            ? 'bg-white text-gray-800 border border-gray-200 rounded-tl-none'
            : 'bg-blue-600 text-white rounded-tr-none'
        } ${message.isError ? 'bg-red-50 border-red-200 text-red-800' : ''}`}
      >
        <p className="whitespace-pre-wrap leading-relaxed text-sm md:text-base">
          {message.text}
        </p>
        <div
          className={`text-[10px] mt-2 ${
            isBot ? 'text-gray-400' : 'text-blue-200'
          } text-right`}
        >
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;