"use client"

import { useState } from "react";
import { LeftChatString, SimpleChatStringLeft } from "./leftString"
import { RightChatString } from "./rightString";

export interface IMessage {
    sender: string;
    receipent: string;
    message: string;
    timestamp: Date;
}



const ChatWindow: React.FC<{ message: IMessage[] }> = ({ message }) => {
    
    const [user, setUser] = useState("user1")
    
    return (
        <div className="pt-3 px-3">
        {message.map((item, index)=>(
            user === item.sender ? (<LeftChatString key={index} message={item} />) : (<RightChatString key={index} message={item} />)
        ))}
        </div>
    )
}

export default ChatWindow