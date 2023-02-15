import { db } from "./db";
import dotenv from "dotenv";
dotenv.config();

export const rejectRequest = async (requestId) => {
  await db.connect(process.env.MONGODB_URL);
  const connection = db.getConnection();
  await connection.collection("requests").deleteOne({ id: requestId });
};
