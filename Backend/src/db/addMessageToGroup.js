import { db } from "./db";
import dotenv from "dotenv";
dotenv.config();

export const addMessageToGroup = async (groupId, userId, text) => {
  db.connect(process.env.MONGODB_URL);
  const connection = db.getConnection();
  await connection.collection("messages").insertOne({ groupId, userId, text });
};
