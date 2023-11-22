import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import Sidebar from "./Sidebar";
import { getAuth } from "firebase/auth";
// // timestamp
// import firebase from "firebase";
import { serverTimestamp } from "firebase/firestore";

function Chat() {
  const [image, setImage] = useState("");
  // submit button
  const [input, setInput] = useState("");
  // get room id
  const { roomId } = useParams();
  // keep track of room name
  const [roomName, setRoomName] = useState("");
  // keep track of messages
  const [messages, setMessages] = useState([]);
  // get user from email
  const auth = getAuth();
  const user = auth.currentUser;
  // if(user !== null) {
  //   const displayName = user.displayName
  //   const photoURL = user.photoURL
  //   const uid = user.uid
  // }

  // get new messages every time room name changes
  useEffect(() => {
    if (roomId) {
      // get room
      const roomDocRef = doc(db, "rooms", roomId);
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

  // get messages
  useEffect(() => {
    const roomDocRef = doc(db, "rooms", roomId);
    const messageDocRef = collection(roomDocRef, "messages");
    const q = query(messageDocRef, orderBy("timestamp", "asc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesData = [];
      querySnapshot.forEach((doc) => {
        messagesData.push(doc.data());
      });
      setMessages(messagesData);
    });
    // Cleanup function to unsubscribe when the component unmounts
    return () => unsubscribe();
  }, [roomId]);

  // set image using random number
  useEffect(() => {
    setImage(Math.floor(Math.random() * 5000));
  }, [roomId]);

  // send message
  const sendMessage = async (e) => {
    e.preventDefault();
    // console.log("You typed >>>", input)

    const messageDocRef = collection(db, "rooms", roomId, "messages");
    console.log("userdisplayname: ", input);
    try {
      await addDoc(messageDocRef, {
        message: input,
        name: user.displayName,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error sending message:", error);
    }

    // clean input after message
    setInput("");
  };

  return (
    <>
      <Sidebar />
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
             last seen {" "}
              {messages.length > 0 ? 
              new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()
            :
            "not available"}
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
          {messages.map((message) => (
            <p
              className={`chat-message relative text-xs p-[10px] bg-[#7a7a7c] rounded-xl w-fit mb-[30px] text-white 
              ${message.name === user.displayName && "chat-receiver"}`}
            >
              <span className="chat-name absolute top-[-14px] font-extrabold text-[10px]">
                {" "}
                {message.name}
              </span>
              {message.message}
              {/* timestamp */}
              <span className="time-stamp ml-[10px] text-[8px]">
                {new Date(message.timestamp?.toDate()).toUTCString()}
              </span>
            </p>
          ))}
        </div>

        {/* footer */}
        <div className="chat-footer flex justify-between items-center h-[62px] border-t-[1px] border-black bg-[#14012a]">
          <InsertEmoticonIcon />
          <form className="flex flex-1">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 rounded-[30px] p-[10px] border-black bg-[#302642] text-white"
              placeholder="Type a message"
              type="text"
            />
            <button onClick={sendMessage} className="hidden" type="submit">
              Send a message
            </button>
          </form>
          <MicIcon />
        </div>
      </div>
    </>
  );
}

export default Chat;
