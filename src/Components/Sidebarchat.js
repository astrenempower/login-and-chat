import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";

function Sidebarchat({ addNewChat }) {
  const [image, setImage] = useState("");

  useEffect(() => {
    // set image using random number
    setImage(Math.floor(Math.random() * 5000));
  }, []);

  // new chat
  const createChat = () => {
    const roomName = prompt ("Please enter name of chat")

    if (roomName) {
      
    }

  }

  return !addNewChat ? (
    <div className="sidebar-chat flex p-5 cursor-pointer border-b border-solid border-[#f6f6f6] hover:bg-[#ebebeb]">
      <Avatar
        src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${image}`}
        alt="avatar"
      />
      <div className="sidebarchat-info ml-4">
        <h2 className="mb-[8px] text-sm font-semibold">Room name</h2>
        <p className="font-extralight text-xs">Last message...</p>
      </div>
    </div>
  ) : (
    <div
      onClick={createChat}
      className="sidebar-chat flex p-5 cursor-pointer border-b border-solid border-[#f6f6f6] hover:bg-[#ebebeb]"
    >
      <h2 className="mb-[8px] text-xl font-bold">Add New Chat</h2>
    </div>
  );
}

export default Sidebarchat;
