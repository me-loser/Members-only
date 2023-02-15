import { getRequestsForGroup } from "./getRequestsForGroup";
import { getMemberPopulatedGroup } from "./getMemberPopulatedGroup";

export const getOwnerPopulatedGroup = async (groupId) => {
  const group = await getMemberPopulatedGroup(groupId);
  const requests = await getRequestsForGroup(groupId);
  const populatedGroup = {
    ...group,
    requests,
  };
  return populatedGroup;
};
