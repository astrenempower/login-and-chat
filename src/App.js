import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chat from "./Components/Chat";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App bg-black h-[100vh] grid place-items-center">
      {/* body */}
      <div className="app-body flex  bg-[#130028] h-[90vh] w-[90vw] shadow-2xl mt-[-50px]">
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/rooms/:roomId" element={<Chat />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
