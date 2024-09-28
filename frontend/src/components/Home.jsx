import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChatContext } from '../context/ChatContext';

const Home = () => {
  const { connectUser, disconnectUser } = useContext(ChatContext);
  useEffect(() => {
    disconnectUser();
  }, []);

  return (
    <div>
      <Link to='/chat'>
        <button className='chatBtn' onClick={connectUser}>
          <span className='btnInnerText'>Join Chat</span>
        </button>
      </Link>
    </div>
  );
};

export default Home;
