import React, {useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chat from "./Components/Chat";
import OAuth from "./Components/OAuth";
import Login from "./Pages/Login"


function App() {


  return (
    <>
    <div className="App bg-black h-[100vh] grid place-items-center">
    <div className="app-body flex  bg-[#130028] h-[90vh] w-[90vw] shadow-2xl mt-[-50px]">
      <Router>
        <Routes>
          <Route path="/" element={<OAuth/>} />
          <Route path="/rooms/:roomId" element={<Chat />} />
        </Routes>
      </Router>
    </div>
    </div>
    </>
  );
}

export default App;
