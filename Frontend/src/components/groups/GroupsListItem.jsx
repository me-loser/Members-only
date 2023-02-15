import { postWithCredentials } from "../data/postWithCredentials";
const GroupsListItem = ({ group }) => {
  const requestToJoin = async () => {
    const url = `http://localhost:8080/groups/${group.id}/requests`;
    const response = await postWithCredentials(url);
    alert("Your request has been submitted!");
  };
  return (
    <div className="list-item">
      <div className="list-item-data">
        <h3>{group.name}</h3>
        <p>Owned by: {group.owner.fullName}</p>
        <p>{group.members.length} members</p>
      </div>
      <button onClick={requestToJoin}>Ask to Join</button>
    </div>
  );
};
export default GroupsListItem;
