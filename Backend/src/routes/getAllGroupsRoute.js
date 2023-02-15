import { getAllGroups } from "../db/getAllGroups";
export const getAllGroupsRoute = {
  method: "get",
  path: "/groups",
  handler: async (req, res) => {
    const groups = await getAllGroups();

    res.status(200).json(groups);
  },
};
