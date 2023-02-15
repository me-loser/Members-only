import { db } from "./db";
import dotenv from "dotenv";
dotenv.config();

export const getUser = async (id) => {
  await db.connect(process.env.MONGODB_URL);
  const connection = await db.getConnection();
  const user = await connection.collection("users").findOne({ id });
  return user;
};
