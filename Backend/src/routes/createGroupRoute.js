import * as admin from "firebase-admin";
import { createGroup } from "../db/createGroup";
export const createGroupRoute = {
  method: "post",
  path: "/groups",
  handler: async (req, res) => {
    const token = req.headers.authtoken;
    const name = req.body.name;

    if (!token) {
      res
        .status(401)
        .json({ message: "Must be authenticated to Create a Group!" });
    }

    const user = await admin.auth().verifyIdToken(token);
    const newGroupId = await createGroup(name, user.user_id);
    res.status(200).json({ newGroupId });
  },
};
