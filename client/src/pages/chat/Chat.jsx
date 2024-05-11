import React from "react";
import Message from "./components/Message";
import SupportMessage from "./components/SupportMessage";
import MessageGenerator from "./components/MessageGenerator";

function Chat() {
  const userData = { id: 1 };

  const messages = [
    { user_id: 1, created_at: "2023-2-2", body: "سلام", path: null },
    { user_id: 2, created_at: "2023-2-2", body: "سلاااام", path: null },
    { user_id: 2, created_at: "2023-2-2", body: "خوبی", path: null },
    { user_id: 1, created_at: "2023-2-2", body: "مرسی", path: null },
    { user_id: 2, created_at: "2023-2-2", body: "چحبر", path: null },
  ];
  return (
    <div className=" w-full flex justify-center">
      <div className=" relative w-3/4 h-full flex flex-col justify-between p-4">
        {/* messages */}
        <div className=" sc h-[66vh] bg-white flex flex-col-reverse rounded-2xl overflow-auto p-4 max-lg:px-0">
          {messages
            .reverse()
            .map((msg, index) =>
              msg.user_id === userData.id ? (
                <Message key={index} {...msg} />
              ) : (
                <SupportMessage key={index} {...msg} />
              )
            )}
        </div>
        <MessageGenerator />
      </div>
    </div>
  );
}

export default Chat;
