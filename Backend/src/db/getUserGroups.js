import { db } from "./db";
import { getUser } from "./getUser";
import dotenv from "dotenv";
dotenv.config();

export const getUserGroups = async (userId) => {
  await db.connect(process.env.MONGODB_URL);
  const connection = db.getConnection();
  const groups = await connection
    .collection("groups")
    .find({ members: userId })
    .toArray();
  const groupOwners = await Promise.all(
    groups.map((group) => getUser(group.ownerId))
  );
  const populatedGroups = groups.map((group, i) => ({
    ...group,
    owner: groupOwners[i],
  }));
  return populatedGroups;
};
