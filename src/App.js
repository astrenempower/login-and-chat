import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chat from "./Components/Chat";
import Login from "./Pages/Login"
import Signup from "./Pages/Signup";


function App() {


  return (
    <>
    <div className="App bg-black h-[100vh] grid place-items-center">
    <div className="app-body flex  bg-[#130028] h-[90vh] w-[90vw] shadow-2xl mt-[-50px]">
      <Router>
        <Routes>
          <Route path="/" element={<Signup/>} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/rooms/:roomId" element={<Chat />} />
        </Routes>
      </Router>
    </div>
    </div>
    </>
  );
}

export default App;
