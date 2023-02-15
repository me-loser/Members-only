import { db } from "./db";
import dotenv from "dotenv";
dotenv.config();

export const acceptRequest = async (requestId) => {
  await db.connect(process.env.MONGODB_URL);
  const connection = db.getConnection();
  const request = await connection
    .collection("requests")
    .findOne({ id: requestId });
  await connection.collection("requests").deleteOne({ id: requestId });
  await connection.collection("groups").updateOne(
    { id: request.groupId },
    {
      $push: { members: request.userId },
    }
  );
};
