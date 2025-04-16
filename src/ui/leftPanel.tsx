"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ChatBox from "./userDialog"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import axiosInstance from "@/lib/axios"
import URL from "@/lib/Urls"
import NewFriend from "./NewFriend"

export interface INewUser {
    username: string;
    name: string;
    email: string;
    _id: string;
}


const LeftPanel: React.FC = ()=>{

    const [searched, setSearched] = useState([])
    const [dashboard, setDashboard] = useState([])

    const searching = async (user:string) => {
        if (user.length > 4) {
          const response = await axiosInstance.post(URL.SEARCH_USER(user))
          setSearched(response.data.userarray)
        } else {
          setSearched([])
        }
      }

    useEffect(()=>{
        const fetchFriendList = async ()=>{
            const response = await axiosInstance.post(URL.DASHBOARD())
            setDashboard(response.data.userarray)
        }
    })

      console.log(searched);
      

    return(
        <div className="flex w-[500px] h-full bg-dark px-0.5">
        <div className="w-full">
            <div className="flex justify-between items-center p-3 mt-1 mb-2 px-4">
                <h2 className="text-2xl font-bold">Whatsapp</h2>
                <button className="px-4 py-1 rounded-full text-sm bg-gray-600">Logout</button>
            </div>
            <div className="py-1 pb-4 px-4">
                <div className="flex items-center bg-light rounded-lg">
                    <FontAwesomeIcon icon={faSearch} className="w-4 h-4 ml-4" />
                    <input type="text" placeholder="Search" onChange={e => searching(e.target.value)} className="px-4 py-2 w-full outline-none" />
                </div>
            </div>
            <div className="flex flex-col px-3 w-full  overflow-y-scroll  h-[calc(100vh-130px)]">
                {searched.length > 0 ? (
                    searched.map((user, index)=> (
                        <NewFriend key={index} user={user}  />
                    ))
                ) : (
                    dashboard.map((user, index)=> (
                        <ChatBox key={index} />
                    ))
                )}
                <ChatBox />
                <ChatBox />
            </div>
        </div>
    </div>
    )
}

export default LeftPanel