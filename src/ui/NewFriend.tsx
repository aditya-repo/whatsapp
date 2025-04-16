"use client"

import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { INewUser } from "./leftPanel"
import axiosInstance from "@/lib/axios"
import URL from "@/lib/Urls"


const NewFriend: React.FC<{user: INewUser}>  = ({user}) => {
    const pairing = async () => {
        const temp = localStorage.getItem('userid')
        if (temp) {
        const response = await axiosInstance.post(URL.PAIR_NEW_USER(), { senderid: temp, receipentid: user._id })
        console.log(response.data);
        }
    }

    return (
        <div className="flex justify-between items-center py-4.5 border-b border-light">
            <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center"><FontAwesomeIcon icon={faUser} className="w-6" /></div>
                <div className="flex flex-col ml-3">
                    <span className="font-bold">{user.name}</span>
                    <span className="text-sm text-gray-500">{user.username}</span>
                </div>
            </div>
            <button className="rounded-full px-3 text-darker py-1.5 bg-white" onClick={() => pairing()}>
                Send Request
            </button>
        </div>
    )
}

export default NewFriend