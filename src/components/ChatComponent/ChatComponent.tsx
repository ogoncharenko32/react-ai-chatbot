import React from "react";
import { LuBot, LuSendHorizontal } from "react-icons/lu";
import useChatbot from "../../hooks/useBotChat";

interface ChatComponentProps {}

const ChatComponent: React.FC = (props: Props) => {
  const [input, setInput] = React.useState<string>("");
  const { messages, sendMessage } = useChatbot();

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-[80vh] bg-white">
      <h2 className="p-4 font-semibold text-center text-lg bg-blue-100 flex text-blue-800 justify-center items-center gap-2">
        React + OpenAI Chatbot <LuBot size={20} />
      </h2>
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg max-w-md ${
              message.sender === "user"
                ? "bg-blue-500 text-wihite ml-auto"
                : "bg-gray-300 text-gray-800"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="flex items-center p-4 bg-gray-50">
        <input
          type="text"
          className="flex-1 p-2 border rounded-lg focus:outline-none"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSendMessage} className="cursor-pointer p-2">
          <LuSendHorizontal size={25} />
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
