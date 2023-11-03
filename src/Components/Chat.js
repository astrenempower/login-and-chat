import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

function Chat() {
  const [image, setImage] = useState("");
  // submit button
  const [input, setInput] = useState("")
  // get room id
  const {roomId} = useParams()
  // keep track of room name
  const [roomName, setRoomName] = useState("")

  useEffect(()=> {
    // get new messages every time room name changes

   if(roomId){
     const roomDocRef = doc(db, 'rooms', roomId)
     const fetchRoomData = async () => {
      try {
        const roomSnapshot = await getDoc(roomDocRef);
        if (roomSnapshot.exists()) {
          setRoomName(roomSnapshot.data().name);
        } else {
          console.error("Room does not exist.");
        }
      } catch (error) {
        console.error("Error fetching room:", error);
      }
    };

    fetchRoomData();
  }
}, [roomId]);



  useEffect(() => {
    // set image using random number
    setImage(Math.floor(Math.random() * 5000));
  }, [roomId]);


  const sendMessage = (e) => {
    e.preventDefault();
    // console.log("You typed >>>", input)

    // clean input after message
    setInput("")
  }

  return (
    <div className="flex-[0.65] flex flex-col">
      {/* header */}
      <div className="chat-header p-[20px] flex items-center bg-[#1d003a]">
        <Avatar
          src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${image}`}
          alt="avatar"
        />
        <div className="chatheader-info flex-1 pl-5">
          <h3 className="mb-[3px] font-medium text-white">{roomName}</h3>
          <p className="mb-[3px] font-light text-slate-400 text-xs">
            {" "}
            Last seen at ...
          </p>
        </div>

        <div className="chatheader-right flex justify-between min-w-[100px] text-white">
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
      <div className="chat-body bg-cover bg-[#14012a] height: 400px flex-1 bg-repeat bg-center p-[30px]">

        {/* chat message */}
        <p className={`chat-message ${true && 'chat-receiver'} relative text-xs p-[10px] bg-[#6B4EFF] rounded-xl w-fit mb-[30px] text-white`}>
          <span className="chat-name absolute top-[-14px] font-extrabold text-[10px]" > Ciku W</span>
          Hi Guys
          <span className="time-stamp ml-[10px] text-[8px]" > 16:40pm</span>
        </p>

      </div>

      {/* footer */}
      <div className="chat-footer flex justify-between items-center h-[62px] border-t-[1px] border-black bg-[#14012a]">
        <InsertEmoticonIcon/>
        <form className="flex flex-1">
          <input value={input} onChange={e => setInput(e.target.value)} className='flex-1 rounded-[30px] p-[10px] border-black bg-[#302642]' placeholder="Type a message" type="text" />
          <button onClick={sendMessage} className="hidden" type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
