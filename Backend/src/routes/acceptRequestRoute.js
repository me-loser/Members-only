import { acceptRequest } from "../db/acceptRequest";
import { getRequestsForGroup } from "../db/getRequestsForGroup";
import { getGroup } from "../db/getGroup";
import * as admin from "firebase-admin";
export const acceptRequestRoute = {
  method: "post",
  path: "/groups/:groupId/requests/:requestId/accept",
  handler: async (req, res) => {
    const token = req.headers.authtoken;
    const { groupId, requestId } = req.params;

    const group = await getGroup(groupId);
    const user = await admin.auth().verifyIdToken(token);
    if (!user || group.ownerId !== user.user_id) {
      return res.status(401).json({ message: "User is not owner of group." });
    }
    await acceptRequest(requestId);
    const updatedRequests = getRequestsForGroup(groupId);
    res.status(200).json(updatedRequests);
  },
};
