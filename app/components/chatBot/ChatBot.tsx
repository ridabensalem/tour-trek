'use client';
import { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,//The overall container for the chat.
  ChatContainer,
  MessageList,//This displays all the messages in the conversation.
  Message,
  MessageInput,//The input field where the user can type a message and send it
  TypingIndicator,//This shows a typing indicator when ChatGPT is processing the request.
} from '@chatscope/chat-ui-kit-react';



// Define the system message type
interface SystemMessage {
  role: string;
  content: string;
}

// Define the message type
interface ChatMessage {
  message: string;
  sentTime?: string;
  sender: string;
  direction: 'incoming' | 'outgoing'; 
  position: 'single' | 'first' | 'normal' | 'last';
}

// System message to define ChatGPT's behavior
const systemMessage: SystemMessage = {
  role: 'system',
  content: "You are a helpful assistant for a travel planning app. Provide recommendations, tips, and guidance on planning trips, booking accommodations, and suggesting activities. Keep responses concise, friendly, and informative, as if you're talking to someone who enjoys exploring new destinations.",
};

const ChatBot =()=> {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      message: "Hello, I'm Your Travel Assistant! Ask me anything!",
      sentTime: 'just now',
      sender: 'ChatGPT',
      direction: 'incoming', // Set a valid direction
      position: 'single',
    },
  ]);

  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async (message: string) => {
    const newMessage: ChatMessage = {
      message,
      direction: 'outgoing', // Set a valid direction
      sender: 'user',
      position: 'single',
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages: ChatMessage[]) {
    // Format messages for ChatGPT API
    const apiMessages = chatMessages.map((messageObject) => {
      const role = messageObject.sender === 'ChatGPT' ? 'assistant' : 'user';
      return { role, content: messageObject.message };
    });

    // API request body
    const apiRequestBody = {
      model: 'gpt-4o-mini',
      messages: [
        systemMessage, // System message to define behavior
        ...apiMessages, // User and assistant messages
      ],
    };

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiRequestBody),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      setMessages([
        ...chatMessages,
        {
          message: data.choices[0].message.content,
          sender: 'ChatGPT',
          direction: 'incoming', // Set a valid direction
          position: 'single',
        },
      ]);
    } catch (error) {
      console.error('Error fetching response from ChatGPT:', error);
    } finally {
      setIsTyping(false);
    }
  }

  return (
    <div>
      {/* Floating Chatbot Icon */}
      <div
        className="fixed bottom-5 right-5 z-50 bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-rose-500"
        onClick={toggleChatbot}
      >
        <i className="fas fa-comment-dots text-xl"></i>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 z-50 right-5 w-80 bg-white shadow-lg rounded-lg border border-gray-200">
          <div className="p-4 h-80 overflow-y-auto">
            <MainContainer>
              <ChatContainer>
                <MessageList
                  scrollBehavior="smooth"
                  typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
                >
                  {messages.map((message, i) => (
                    <Message
                      key={i}
                      model={{
                        message: message.message,
                        sender: message.sender,
                        direction: message.direction, // Ensure this is valid
                        position: message.position,
                      }}
                    />
                  ))}
                </MessageList>
                <MessageInput
                  placeholder="Type message here"
                  onSend={handleSend}
                  attachButton={false}
                />
              </ChatContainer>
            </MainContainer>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBot;