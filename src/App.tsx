import React from "react";
import ChatComponent from "./components/ChatComponent/ChatComponent";

const App: React.FC = () => {
  return (
    <div className="max-w-2xl mt-20 mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
        <ChatComponent />
      </div>
    </div>
  );
};

export default App;
