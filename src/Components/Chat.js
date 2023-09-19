import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import AttachFileIcon from '@mui/icons-material/AttachFile';



function Chat() {
  const [image, setImage] = useState("");

  useEffect(() => {
    // set image using random number
    setImage(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="flex-[0.65]">
        {/* header */}
      <div className="chat-header p-8 flex items-center border-b-[1px] border-slate-200">
        <Avatar
          src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${image}`}
          alt="avatar"
        />
        <div className="chatheader-info flex-1 pl-5">
            <h3 className="mb-[3px] font-medium">Room name</h3>
            <p className="mb-[3px] font-light text-slate-400 text-xs"> Last seen at ...</p>
        </div>

        <div className="chatheader-right flex justify-between min-w-[100px]">
            <IconButton>
                <SearchOutlinedIcon />
            </IconButton>
            <IconButton>
                <AttachFileIcon />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>
        </div>
      </div>
      {/* body */}
      <div className="chat-body"></div>
      {/* footer */}
      <div className="chat-footer"></div>
    </div>
  );
}

export default Chat;
