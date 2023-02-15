import { db } from "./db";
import { getUser } from "./getUser";
import dotenv from "dotenv";
dotenv.config();

export const getRequestsForGroup = async (groupId) => {
  await db.connect(process.env.MONGODB_URL);
  const connection = db.getConnection();
  const requests = await connection
    .collection("requests")
    .find({ groupId })
    .toArray();
  const usersForRequests = await Promise.all(
    requests.map((request) => getUser(request.userId))
  );
  const populatedRequests = requests.map((request, i) => ({
    ...request,
    userName: usersForRequests[i].fullName,
  }));
  return populatedRequests;
};
