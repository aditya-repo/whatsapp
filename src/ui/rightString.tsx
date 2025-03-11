import React from "react";
import { IMessage } from "./chatWindow";

const RightChatString: React.FC<{ message: IMessage}> = ({ message }) => {
  return (
    <div className="mb-2 flex items-start justify-end">
      <span className="bg-light px-3 py-2 max-w-[750px] rounded-md text-white leading-[1.5] rounded-tr-none">
        {message.message}
      </span>
            <span className="bg-light h-3 w-3" style={{ clipPath: "polygon(0 0, 100% 0, 0% 100%)" }}></span>
    </div>
  );
};

const SimpleChatString: React.FC<{ message: IMessage}> = ({ message }) => {
  return (
    <div className="mb-2 flex items-start justify-end">
      <span className="bg-light px-3 py-2 max-w-[750px] rounded-md text-white leading-[1.5]">
        {message.message}
      </span>
      <span className="w-3"></span>
    </div>
  );
};

export { RightChatString, SimpleChatString };
