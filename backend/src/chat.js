import { Server } from 'socket.io';

export const chat = (server) => {
  const io = new Server(server, {
    cors: {
      origin: 'http://localhost:3000',
    },
  });

  io.on('connection', (socket) => {
    console.log(`💲 a user: ${socket.id} connected`);

    //notifications
    socket.on('send-message-client', ({ message, id }) => {
      console.log('message received: ' + message + ' from ' + id);
      //save in database
      //........

      //send back the message to the client
      io.emit('send-message-server', { message, id });
    });

    //disconnect
    socket.on('disconnect', () => {
      console.log(`🚫 user: ${socket.id} disconnected`);
    });
  });
};
