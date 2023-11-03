import React, {useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Sidebarchat from "./Sidebarchat";
import { db } from "../firebase";
import {doc, collection, getDocs} from 'firebase/firestore'

function Sidebar() {

  const [rooms, setRooms] = useState([])

  useEffect(() => {
    // add unsubscribe 2.14.44
    const fetchRooms = async () => {
      try {
        const roomCollection = collection(db, 'rooms');
        const roomSnapshot = await getDocs(roomCollection);
        const roomData = roomSnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setRooms(roomData);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div className="sidebar flex flex-col flex-[0.35]">
      {/* side bar header */}
      <div className="sidebar-header flex justify-between p-[15px] border-r-[1px] border-r-black bg-[#1D003A]">
        <IconButton>
          <Avatar />
        </IconButton>
        <div className="sidebarheader-right flex items-center justify-between min-w-[10vw]">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      {/* side bar search */}
      <div className="sidebar-search flex items-center bg-[#14012a] h-[50px] p-[10px]">
        <div className="search-container flex items-center bg-[#302642] w-full h-9 rounded-[20px] text-white">
          <SearchOutlinedIcon />
          <input
            className="border-none ml-[10px] text-xs bg-[#302642]"
            placeholder="Search or start new chat"
            type="text"
          />
        </div>
      </div>
      {/* side bar chat */}
      <div className="sidebar-chat bg-[#130028] flex-1">
        <Sidebarchat addNewChat />
        {rooms.map(room => (
          <Sidebarchat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
