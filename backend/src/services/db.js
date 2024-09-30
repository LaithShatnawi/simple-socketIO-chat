import dotenv from 'dotenv';
import { Sequelize, DataTypes } from 'sequelize';
import { users } from '../models/User.js';
import { messages } from '../models/Message.js';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
    logging: false,
  }
);

//models
const userModel = users(sequelize, DataTypes);
const messageModel = messages(sequelize, DataTypes);

//relationships
userModel.hasMany(messageModel, {
  foreignKey: 'userId',
});
messageModel.belongsTo(userModel);

export default sequelize;
