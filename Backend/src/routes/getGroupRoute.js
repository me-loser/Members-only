import admin from "firebase-admin";
import { getGroup } from "../db/getGroup";
import { getMemberPopulatedGroup } from "../db/getMemberPopulatedGroup";
import { getOwnerPopulatedGroup } from "../db/getOwnerPopulatedGroup";
export const getGroupRoute = {
  method: "get",
  path: "/groups/:id",
  handler: async (req, res) => {
    const token = req.headers.authtoken;
    const { id } = req.params;

    const user = await admin.auth().verifyIdToken(token);

    if (!user || !token) {
      return res
        .status(401)
        .json({ message: "Must be logged in to see Group Info!z" });
    }

    const group = await getGroup(id);

    if (group.ownerId === user.user_id) {
      const ownerPopulatedGroup = await getOwnerPopulatedGroup(id);
      return res.status(200).json(ownerPopulatedGroup);
    }

    if (group.members.includes(user.user_id)) {
      const memberPopulatedGroup = await getMemberPopulatedGroup(id);
      return res.status(200).json(memberPopulatedGroup);
    }

    res.status(200).json(group);
  },
};
