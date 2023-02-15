import { Link } from "react-router-dom";
import GroupsList from "./GroupsList";
import MyGroupsListItem from "./MyGroupsListItem";
import GroupsListItem from "./GroupsListItem";
import { useGroups } from "./useGroups";
import { useUserGroups } from "./useUserGroups";
const GroupsListPage = () => {
  const { isLoading: isLoadingAllGroups, groups: allGroups } = useGroups();
  const { isLoading: isLoadingUserGroups, userGroups } = useUserGroups();
  const notUserGroups = allGroups.filter((groups) =>
    userGroups.every((userGroup) => userGroup.id !== groups.id)
  );
  const isLoading = isLoadingAllGroups || isLoadingUserGroups;

  return (
    <div className="centered-container">
      <h1 className="section-heading">My Groups</h1>
      <GroupsList
        isLoading={isLoading}
        groups={userGroups}
        ListItemComponent={MyGroupsListItem}
      />
      <h1 className="section-heading">Other Groups</h1>
      <GroupsList
        isLoading={isLoading}
        groups={notUserGroups}
        ListItemComponent={GroupsListItem}
      />
      <Link to="/create-group">
        <button>Create New Group</button>
      </Link>
    </div>
  );
};

export default GroupsListPage;
