import React from 'react';
import { ChatList } from 'react-chat-elements';

const MembersList = ({ onClick }) => {
  return (
    <ChatList
      className='chat-list'
      onClick={(e) => onClick(e)}
      dataSource={[
        {
          avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
          alt: 'kursat_avatar',
          title: 'Kursat',
          subtitle: "Why don't we go to the No Way Home movie this weekend ?",
          date: new Date(),
          unread: 3,
        },
        {
          avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
          alt: 'kursat_avatar',
          title: 'Kursat',
          subtitle: "Why don't we go to the No Way Home movie this weekend ?",
          date: new Date(),
          unread: 3,
        },
        {
          avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
          alt: 'kursat_avatar',
          title: 'Kursat',
          subtitle: "Why don't we go to the No Way Home movie this weekend ?",
          date: new Date(),
          unread: 3,
        },
      ]}
    />
  );
};

export default MembersList;
