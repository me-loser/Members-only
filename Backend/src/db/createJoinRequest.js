import { db } from "./db";
import dotenv from "dotenv";
import { v4 as uuid } from "uuid";
dotenv.config();

export const createJoinRequest = async (groupId, userId) => {
  await db.connect(process.env.MONGODB_URL);
  const connection = db.getConnection();
  await connection
    .collection("requests")
    .insertOne({ id: uuid(), groupId, userId });
};
