import React from 'react'
import { IMessage } from './chatWindow';

const LeftChatString: React.FC<{ message: IMessage }>  = ({message}) => {

    return (
        <div className="mb-2 flex items-start">
            <span
                className="bg-light h-3 w-3"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
            ></span>
            <span className="bg-light text-white px-2.5 py-2 max-w-[75%] rounded-md rounded-tl-none leading-[1.5]">
                {message.message}
            </span>
        </div>
    )
}


const SimpleChatStringLeft: React.FC<{ message: IMessage }>  = ({message}) => {

    return (
        <div className="flex flex-col justify-center relative mt-2">
        <div className="mb-3 flex items-start">
          <span className="w-3"></span>
          <span className="bg-light px-2.5 py-2 max-w-[750px] rounded-md text-white leading-[1.5] relative pb-2">
            {message.message}
    
            <div className="absolute bottom-[2px] right-2 text-xs text-gray-500 pt-1">
              {new Date(message.timestamp).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit"
                })}
            </div>
          </span>
        </div>
      </div>
    );
};

export { LeftChatString, SimpleChatStringLeft }