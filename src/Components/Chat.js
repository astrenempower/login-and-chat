import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

function Chat() {
  const [image, setImage] = useState("");
  // submit button
  const [input, setInput] = useState("")

  useEffect(() => {
    // set image using random number
    setImage(Math.floor(Math.random() * 5000));
  }, []);


  const sendMessage = (e) => {
    e.preventDefault();
    // console.log("You typed >>>", input)

    // clean input after message
    setInput("")
  }

  return (
    <div className="flex-[0.65] flex flex-col">
      {/* header */}
      <div className="chat-header p-8 flex items-center border-b-[1px] border-slate-200">
        <Avatar
          src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${image}`}
          alt="avatar"
        />
        <div className="chatheader-info flex-1 pl-5">
          <h3 className="mb-[3px] font-medium">Room name</h3>
          <p className="mb-[3px] font-light text-slate-400 text-xs">
            {" "}
            Last seen at ...
          </p>
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
      <div className="chat-body bg-cover bg-[url('https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80')] height: 400px flex-1 bg-repeat bg-center p-[30px] overflow-y-scroll">

        {/* chat message */}
        <p className={`chat-message ${true && 'chat-receiver'} relative text-xs p-[10px] bg-white rounded-xl w-fit mb-[30px]`}>
          <span className="chat-name absolute top-[-14px] font-extrabold text-[10px]" > Ann W</span>
          Hi Guys
          <span className="time-stamp ml-[10px] text-[8px]" > 16:40pm</span>
        </p>

      </div>

      {/* footer */}
      <div className="chat-footer flex justify-between items-center h-[62px] border-t-[1px] border-slate-200">
        <InsertEmoticonIcon/>
        <form className="flex flex-1">
          <input value={input} onChange={e => setInput(e.target.value)} className='flex-1 rounded-[30px] p-[10px] border-none' placeholder="Type a message" type="text" />
          <button onClick={sendMessage} className="hidden" type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
