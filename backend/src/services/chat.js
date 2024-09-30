import { Server } from 'socket.io';

export const chat = (server) => {
  const io = new Server(server, {
    cors: {
      origin: 'http://localhost:3000',
    },
    connectionStateRecovery: {},
  });

  io.on('connection', (socket) => {
    console.log(`💲 a user: ${socket.id} connected`);

    //join a room
    socket.on('join-room', (roomId) => {
      socket.join(roomId);
      console.log(`😍 user ${socket.id} joined room ${roomId}`);

      //send message in room
      socket.on('send-message-client', ({ message, id }) => {
        //send back the message to the client
        io.to(roomId).emit('send-message-server', { message, id });
        console.log('message received: ' + message + ' from ' + id);

        //save in database
        //........
      });
    });

    //disconnect
    socket.on('disconnect', () => {
      console.log(`🚫 user: ${socket.id} disconnected`);
    });
  });
};
