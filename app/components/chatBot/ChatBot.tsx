'use client';
import { useState,useEffect } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,//The overall container for the chat.
  ChatContainer,
  ConversationHeader,
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
  const [showPopup, setShowPopup] = useState<boolean>(true)
  const predefinedQuestions = [
    "Must-try foods in India?",
    "Best places to visit in Bali?",
    "Is Brazil a safe country?",
  ];
  const [showPredefinedQuestions, setShowPredefinedQuestions] = useState<boolean>(true);


  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    setShowPopup(false); //Hide pop-up when chatbot is opened
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
      console.error('Error fetching response from ChatGPT:', error)
    } finally {
      setIsTyping(false);
    }
  }

  /* useEffect(() => {
    // Hide the pop-up when the chatbot is opened
    if (isOpen) {
      setShowPopup(false);
    } else {
      // If not opened, show pop-up for 5 seconds
      const timer = setTimeout(() => setShowPopup(false), 20000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);  */
  const handlePredefinedQuestionClick = (question: string) => {
    handleSend(question); // Send the selected predefined question as a message
    setShowPredefinedQuestions(false);// Hides questions after one is selected.
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
   {/* Conditional pop-up message */}
   {showPopup && (
  <div className="absolute bottom-16 right-0 animate-bounce ">
    <div className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg shadow-lg
                    text-sm min-w-[200px] max-w-[250px] text-center whitespace-nowrap relative">
      Hello 👋, Need help? Ask me!
      {/* Speech Bubble Tail */}
      <div className="absolute bottom-[-8px] right-3 transform -translate-x-1/2  
                    w-0 h-0 border-l-8 border-l-transparent
                    border-r-8 border-r-transparent border-t-8 border-t-blue-500"></div>
    </div>
  </div>
)}
      {/* Floating Chatbot Icon */}
      <div
        className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-rose-500"
        onClick={toggleChatbot}
      >
        <i className="fas fa-comment-dots text-xl"></i>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 z-50 right-5 w-[350px] bg-white shadow-lg rounded-lg">
          <div className="h-[400px] overflow-y-auto shadow-lg rounded-lg ">
            <MainContainer style={{
                    border:'none',
                  }
                  }>
              <ChatContainer>
              <ConversationHeader  style={{
                    backgroundColor:'#3B82F6',
                    boxShadow: `var(--shadow-lg)`,
                  }
                  } >
                <ConversationHeader.Content
                  userName="ChatBot"
                  style={{
                    padding:'4px',
                  }
                  } 
                />
                </ConversationHeader>
                <MessageList
                  style={{
                  marginTop:"6px",
                  }}
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
                  {showPredefinedQuestions && (
                  <div className='fixed bottom-4 absolute'>
                    <p className="text-xs text-gray-600 pb-2">Click a question to ask:</p>
                    <div className="grid grid-cols-3 gap-1 pr-3">
                    {predefinedQuestions.map((question, index) => (
                      <button
                        key={`predefined-${index}`}
                        onClick={() => handlePredefinedQuestionClick(question)}
                        className="bg-blue-200 text-blue-600 px-2 py-1 rounded-full text-xs hover:bg-gray-400 focus:outline-none border border-gray-400"
                      >
                        {question}
                      </button>
                    ))}
                    </div>
                  </div>
                )}
                </MessageList>               
                <MessageInput
                  placeholder="Type message here"
                  onSend={handleSend}
                  attachButton={false}
                  style={{
                    padding:'6px',
                  }}
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