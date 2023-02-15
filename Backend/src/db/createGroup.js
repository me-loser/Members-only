import { db } from "./db";
import { v4 as uuid } from "uuid";
import dotenv from "dotenv";
dotenv.config();

export const createGroup = async (groupName, userId) => {
  await db.connect(process.env.MONGODB_URL);
  const connection = db.getConnection();
  const newGroupId = uuid();
  await connection.collection("groups").insertOne({
    id: newGroupId,
    name: groupName,
    ownerId: userId,
    members: [userId],
  });
  return newGroupId;
};
