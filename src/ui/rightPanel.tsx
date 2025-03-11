import { faShare, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ChatWindow from "./chatWindow";

const chatMessages = [
    { sender: "user1", receipent: "user2", message: "Hey! How's it going?", timestamp: new Date("2025-03-10T10:00:00Z") },
    { sender: "user2", receipent: "user1", message: "I'm good, just working on a project. What about you?", timestamp: new Date("2025-03-10T10:05:00Z") },
    { sender: "user1", receipent: "user2", message: "Nice! Just taking a break, thought I'd check in.", timestamp: new Date("2025-03-10T10:10:00Z") },
    { sender: "user2", receipent: "user1", message: "That’s great! Let's catch up later?", timestamp: new Date("2025-03-10T10:15:00Z") },
    { sender: "user1", receipent: "user2", message: "Sure, sounds good!", timestamp: new Date("2025-03-10T10:20:00Z") },
    { sender: "user2", receipent: "user1", message: "By the way, did you see the latest update?", timestamp: new Date("2025-03-10T10:25:00Z") },
    { sender: "user1", receipent: "user2", message: "Yeah! Looks really cool.", timestamp: new Date("2025-03-10T10:30:00Z") },
    { sender: "user2", receipent: "user1", message: "I might try it out later.", timestamp: new Date("2025-03-10T10:35:00Z") },
    { sender: "user1", receipent: "user2", message: "Let me know what you think!", timestamp: new Date("2025-03-10T10:40:00Z") },
    { sender: "user2", receipent: "user1", message: "Will do! Also, are you free tomorrow?", timestamp: new Date("2025-03-10T10:45:00Z") },
    { sender: "user1", receipent: "user2", message: "I should be! What's up?", timestamp: new Date("2025-03-10T10:50:00Z") },
    { sender: "user2", receipent: "user1", message: "Thinking of grabbing lunch.", timestamp: new Date("2025-03-10T10:55:00Z") },
    { sender: "user1", receipent: "user2", message: "Sounds good! Where?", timestamp: new Date("2025-03-10T11:00:00Z") },
    { sender: "user2", receipent: "user1", message: "Maybe that new café downtown?", timestamp: new Date("2025-03-10T11:05:00Z") },
    { sender: "user1", receipent: "user2", message: "Perfect. Let’s meet at noon?", timestamp: new Date("2025-03-10T11:10:00Z") },
    { sender: "user2", receipent: "user1", message: "Sure! See you then.", timestamp: new Date("2025-03-10T11:15:00Z") },
    { sender: "user1", receipent: "user2", message: "Great! Looking forward to it.", timestamp: new Date("2025-03-10T11:20:00Z") },
    { sender: "user2", receipent: "user1", message: "Me too! Got to get back to work now.", timestamp: new Date("2025-03-10T11:25:00Z") },
    { sender: "user1", receipent: "user2", message: "Alright, talk later!", timestamp: new Date("2025-03-10T11:30:00Z") },
    { sender: "user2", receipent: "user1", message: "Take care!", timestamp: new Date("2025-03-10T11:35:00Z") },
    { sender: "user1", receipent: "user2", message: "Hey, are we still on for lunch?", timestamp: new Date("2025-03-11T09:00:00Z") },
    { sender: "user2", receipent: "user1", message: "Yes! Looking forward to it.", timestamp: new Date("2025-03-11T09:05:00Z") },
    { sender: "user1", receipent: "user2", message: "Awesome, see you at noon!", timestamp: new Date("2025-03-11T09:10:00Z") },
    { sender: "user2", receipent: "user1", message: "See you then!", timestamp: new Date("2025-03-11T09:15:00Z") },
    { sender: "user1", receipent: "user2", message: "Hey, I’m running a bit late.", timestamp: new Date("2025-03-11T11:50:00Z") },
    { sender: "user2", receipent: "user1", message: "No worries! I just got here.", timestamp: new Date("2025-03-11T11:55:00Z") },
    { sender: "user1", receipent: "user2", message: "Great! Be there in 5 minutes.", timestamp: new Date("2025-03-11T12:00:00Z") },
    { sender: "user2", receipent: "user1", message: "Take your time!", timestamp: new Date("2025-03-11T12:05:00Z") },
    { sender: "user1", receipent: "user2", message: "Just arrived!", timestamp: new Date("2025-03-11T12:10:00Z") },
    { sender: "user2", receipent: "user1", message: "Great! Let’s order.", timestamp: new Date("2025-03-11T12:15:00Z") }
];


const RightPanel: React.FC = () => {

    return (
        <div className="w-full h-screen relative">
            <div className="flex justify-between bg-light w-full py-3 px-5">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-dark border flex justify-center items-center gap-4"><FontAwesomeIcon icon={faUser} className="w-6" /></div>
                    <h3 className="text-xl font-bold">Sweta Suman</h3>
                </div>
                <div className="flex items-center gap-4">
                    <button className="font-bold rounded-full px-5 py-1.5 hover:bg-white hover:text-darker border">Exit chat</button>
                </div>
            </div>
            <div className="bg-darker overflow-y-scroll  h-[calc(100vh-150px)]">
                <ChatWindow message={chatMessages} />
            </div>

            <div className="">
                <div className="w-full absolute bottom-0 bg-[#202c33] p-4 py-3 border-t border-gray-600">
                    <div className="flex items-center justify-between">
                        <input
                            type="text"
                            className="w-full p-4 py-3 bg-[#2a3942] text-white text-lg rounded-md outline-none"
                            placeholder="Type a message..."
                        />
                        <button
                            className="ml-2 flex items-center justify-center w-12 h-12 bg-white rounded-lg"
                        >
                            <FontAwesomeIcon icon={faShare} className="text-2xl" />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RightPanel