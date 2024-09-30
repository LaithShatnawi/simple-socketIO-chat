import express from 'express';
import { createServer } from 'node:http';
import cors from 'cors';
import sequelize from './src/services/db.js';
import { chat } from './src/services/chat.js';

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

sequelize
  .sync()
  .then(() => {
    console.log('database connected successfully');
    server.listen(port, () => {
      console.log(`server is running at: http://localhost:${port}`);
    });
  })
  .catch((e) => {
    console.log('error connecting database');
  });
