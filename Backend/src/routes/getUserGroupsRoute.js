import * as admin from "firebase-admin";
import { getUserGroups } from "../db/getUserGroups";
export const getUserGroupsRoute = {
  method: "get",
  path: "/users/:id/groups",
  handler: async (req, res) => {
    const token = req.headers.authtoken;
    const userId = req.params.id;

    const user = await admin.auth().verifyIdToken(token);
    if (user.user_id !== userId) {
      return res.status(401).json({ message: "Not Authorized!" });
    }

    const response = await getUserGroups(userId);
    res.status(200).json(response);
  },
};
