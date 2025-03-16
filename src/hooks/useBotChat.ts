import axios from "axios";
import { useState } from "react";

interface Message {
  text: string;
  sender: "user" | "bot";
}

const useChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = async (message: string) => {
    const newMessages: Message[] = [
      ...messages,
      { text: message, sender: "user" },
    ];
    setMessages(newMessages);

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyC8BTEUYfNTFueVVioNUpLqLru85FvpD9Y",
        // "https://api.openai.com/v1/chat/completions",
        {
          contents: [{ parts: [{ text: message }] }],
        },
        // {
        //   model: "gpt-4o-mini",
        //   messages: [{ role: "user", content: message }],
        // },
        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer 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`,
          },
        }
      );

      //   const botMessage = response.data.choices[0].message.content;
      const botMessage = response.data.candidates[0].content.parts[0].text;
      setMessages([...newMessages, { text: botMessage, sender: "bot" }]);
    } catch (error) {
      console.error("Error fetch AI response", error);
    }
  };

  return { messages, sendMessage };
};

export default useChatbot;
