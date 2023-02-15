import { db } from "./db";
import { getUser } from "./getUser";
import dotenv from "dotenv";
dotenv.config();

export const getGroup = async (groupId) => {
  await db.connect(process.env.MONGODB_URL);
  const connection = db.getConnection();
  const group = await connection.collection("groups").findOne({ id: groupId });
  const owner = await getUser(group.ownerId);
  const populatedGroup = {
    ...group,
    owner,
  };
  return populatedGroup;
};
