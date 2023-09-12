import React from "react";
import Avatar from "@mui/material/Avatar";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Sidebarchat from "./Sidebarchat";

function Sidebar() {
  return (
    <div className="sidebar flex flex-col flex-[0.35]">
      {/* side bar header */}
      <div className="sidebar-header flex justify-between p-[20px] border-r-2 border-r-slate-200">
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
      <div className="sidebar-search flex items-center bg-[#f6f6f6] h-[50px] p-[10px]">
        <div className="search-container flex items-center bg-white w-full h-9 rounded-[20px]">
          <SearchOutlinedIcon />
          <input
            className="border-none ml-[10px] text-xs "
            placeholder="Search or start new chat"
            type="text"
          />
        </div>
      </div>
      {/* side bar chat */}
      <div className="sidebar-chat bg-white flex-1 overflow-scroll ">
        <Sidebarchat addNewChat />
        <Sidebarchat />
        <Sidebarchat />
        <Sidebarchat />
      </div>
    </div>
  );
}

export default Sidebar;
