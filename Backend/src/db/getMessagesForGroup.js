import { db } from "./db";
import { getUser } from "./getUser";
import dotenv from "dotenv";
dotenv.config();

export const getMessagesForGroup = async (groupId) => {
  await db.connect(process.env.MONGODB_URL);
  const connection = db.getConnection();
  const messages = await connection
    .collection("messages")
    .find({ groupId })
    .toArray();
  const usersForMessages = await Promise.all(
    messages.map((message) => getUser(message.userId))
  );
  const populatedMessages = messages.map((message, i) => ({
    ...message,
    userName: usersForMessages[i].fullName,
  }));
  return populatedMessages;
};
