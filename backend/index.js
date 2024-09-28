import express from 'express';
import { createServer } from 'node:http';
import cors from 'cors';
import { chat } from './src/chat.js';

const app = express();
const server = createServer(app);
const port = 3333;

//middlewares
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('hi chat');
});

//chat
chat(server);

server.listen(port, () => {
  console.log(`server is running at: http://localhost:${port}`);
});
