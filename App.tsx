import React, { useState, useEffect, useRef } from 'react';
import { Sender, Message } from './types';
import { sendMessageToGemini } from './services/geminiService';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import { v4 as uuidv4 } from 'uuid'; // Since we can't use real npm, we will mock simple ID generation

// Helper for simple unique IDs without external lib
const generateId = () => Math.random().toString(36).substr(2, 9);

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial greeting
  useEffect(() => {
    const initialMessage: Message = {
      id: generateId(),
      text: "Hello! I'm the Tech Gear Shop Assistant. How can I help you today? I can assist with order status, product recommendations, or our return policy.",
      sender: Sender.BOT,
      timestamp: new Date(),
    };
    setMessages([initialMessage]);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    // 1. Add User Message
    const userMsg: Message = {
      id: generateId(),
      text: text,
      sender: Sender.USER,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    // 2. Call Gemini
    try {
      const responseText = await sendMessageToGemini(text);
      
      const botMsg: Message = {
        id: generateId(),
        text: responseText,
        sender: Sender.BOT,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      const errorMsg: Message = {
        id: generateId(),
        text: "Sorry, I encountered an error. Please try again.",
        sender: Sender.BOT,
        timestamp: new Date(),
        isError: true,
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto bg-white shadow-2xl md:my-8 md:rounded-xl overflow-hidden md:h-[90vh]">
      {/* Header */}
      <header className="bg-slate-900 text-white p-4 flex items-center shadow-md z-10">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3 font-bold text-lg shadow-inner">
          TG
        </div>
        <div>
          <h1 className="font-semibold text-lg">Tech Gear Support</h1>
          <div className="flex items-center text-xs text-blue-200">
            <span className="w-2 h-2 rounded-full bg-green-400 mr-1.5 animate-pulse"></span>
            Online
          </div>
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto p-4 bg-gray-50 scrollbar-thin scrollbar-thumb-gray-300">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        <div ref={messagesEndRef} />
      </main>

      {/* Input Area */}
      <ChatInput onSend={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};

export default App;