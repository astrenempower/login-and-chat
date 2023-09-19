import Chat from './Components/Chat';
import Sidebar from './Components/Sidebar'

function App() {
  return (
    <div className="App bg-[#dadbd3] h-[100vh] grid place-items-center">
      
      {/* body */}
      <div className='app-body flex bg-[#ededed] h-[90vh] w-[90vw] shadow-2xl mt-[-50px]'>
        {/* sidebar */}
        <Sidebar />
        {/* chat */}
        <Chat/>

      </div>
    </div>
  );
}

export default App;
