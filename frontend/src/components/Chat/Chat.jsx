import React, { useContext, useEffect, useState } from 'react';
import { ChatContext } from '../../context/ChatContext';
import MembersList from '../ChatList/MembersList';
import { MessageList } from 'react-chat-elements';
import { Input } from 'react-chat-elements';
import { Button } from 'react-chat-elements';
import '../components.css';

const Chat = () => {
  const { socket, connectUser } = useContext(ChatContext);
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [message, setMessage] = useState('');
  const [messagesList, setMessagesList] = useState([]);

  console.log(messagesList);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('send-message-client', {
      message,
      id: socket.id,
    });

    //reset input
    e.target[0].value = '';
  };

  socket.on('send-message-server', ({ message, id }) => {
    setMessagesList([
      ...messagesList,
      {
        position: socket.id === id ? 'right' : 'left',
        type: 'text',
        title: id,
        text: message,
      },
    ]);
  });

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    connectUser();
    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []);

  return (
    <>
      <h1>Chat</h1>
      <form onSubmit={handleSubmit}>
        {/* members list */}
        <div className='membersContainer'>
          <MembersList />
        </div>

        <div className='chatContainer'>
          {/* messages list */}
          <div className='messagesList'>
            <MessageList
              className='message-list'
              lockable={true}
              toBottomHeight={'100%'}
              dataSource={messagesList}
            />
          </div>

          {/* message input */}
          <div className='textInputContainer'>
            <Input
              placeholder='Type here...'
              multiline={true}
              type='text'
              onChange={handleChange}
              rightButtons={
                <Button
                  text={'Send'}
                  className='chatBtn'
                  type='submit'
                  disabled={message ? '' : 'disabled'}
                  title='Send'
                />
              }
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Chat;
