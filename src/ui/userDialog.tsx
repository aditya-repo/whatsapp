import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface IFriends {
    name: string,
    email: string,
    username: string
}

const ChatBox: React.FC = () => {
    return (
        <div className="flex justify-between items-center py-4.5 border-b border-light">
            <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center"><FontAwesomeIcon icon={faUser} className="w-6" /></div>
                <div className="flex flex-col ml-3">
                    <span className="font-bold">John Doe</span>
                    <span className="text-sm text-gray-500">Okay</span>
                </div>
            </div>
            <div className="">5646</div>
        </div>
    )
}

export default ChatBox