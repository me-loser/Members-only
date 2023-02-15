import { db } from "./db";
import dotenv from "dotenv";
dotenv.config();
import { getUser } from "./getUser";

export const getAllGroups = async () => {
  await db.connect(process.env.MONGODB_URL);
  const connection = await db.getConnection();
  const groups = await connection.collection("groups").find({}).toArray();
  const groupOwners = await Promise.all(
    groups.map((group) => getUser(group.ownerId))
  );
  const populatedGroups = groups.map((group, i) => ({
    ...group,
    owner: groupOwners[i],
  }));

  return populatedGroups;
};
