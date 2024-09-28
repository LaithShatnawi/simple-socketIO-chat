import './App.css';
import Chat from './components/Chat/Chat';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ChatProvider from './context/ChatContext';
import "react-chat-elements/dist/main.css"

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <ChatProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/chat' element={<Chat />} />
          </Routes>
        </ChatProvider>
      </div>
    </div>
  );
}

export default App;
